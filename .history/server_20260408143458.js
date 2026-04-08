const WebSocket = require('ws');
const express = require('express');
const path = require('path');

// Create Express server to serve static files
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from current directory
app.use(express.static(path.join(__dirname)));

// Create WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

// Game state management
const games = new Map(); // pin -> game state
const clients = new Map(); // ws -> client info

// Game state structure
function createGame(pin, hostId) {
  return {
    pin,
    host: hostId,
    players: new Map(), // id -> player data
    questions: [],
    currentQuestion: -1,
    gameStarted: false,
    answers: new Map(), // questionIndex -> Map of playerId -> answer
    created: Date.now()
  };
}

function createPlayer(id, name, ws) {
  return {
    id,
    name,
    ws,
    score: 0,
    connected: true
  };
}

// WebSocket connection handler
wss.on('connection', (ws) => {
  console.log('New client connected');

  ws.on('message', (data) => {
    try {
      const message = JSON.parse(data.toString());
      handleMessage(ws, message);
    } catch (error) {
      console.error('Error parsing message:', error);
    }
  });

  ws.on('close', () => {
    handleDisconnect(ws);
  });

  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
    handleDisconnect(ws);
  });
});

function handleMessage(ws, message) {
  console.log('Received message:', message.type);

  switch (message.type) {
    case 'join':
      handleJoin(ws, message);
      break;
    case 'gameStart':
      handleGameStart(ws, message);
      break;
    case 'question':
      handleQuestion(ws, message);
      break;
    case 'answer':
      handleAnswer(ws, message);
      break;
    case 'nextQuestion':
      handleNextQuestion(ws, message);
      break;
    case 'gameEnd':
      handleGameEnd(ws, message);
      break;
    default:
      console.log('Unknown message type:', message.type);
  }
}

function handleJoin(ws, message) {
  const { name } = message;
  const pin = message.pin || generatePin();

  // Find or create game
  let game = games.get(pin);
  if (!game) {
    // Create new game if it doesn't exist
    game = createGame(pin, null);
    games.set(pin, game);
  }

  // Create player
  const playerId = generatePlayerId();
  const player = createPlayer(playerId, name, ws);
  game.players.set(playerId, player);
  clients.set(ws, { playerId, pin });

  // Set as host if this is the first player
  if (!game.host) {
    game.host = playerId;
  }

  // Send confirmation to player first so client knows its playerId
  ws.send(JSON.stringify({
    type: 'joined',
    playerId,
    pin
  }));

  // Notify host if exists
  if (game.host) {
    const hostPlayer = game.players.get(game.host);
    if (hostPlayer && hostPlayer.ws.readyState === WebSocket.OPEN) {
      hostPlayer.ws.send(JSON.stringify({
        type: 'playerJoined',
        players: Array.from(game.players.values()).map(p => ({
          id: p.id,
          name: p.name,
          score: p.score
        }))
      }));
    }
  }

  console.log(`Player ${name} joined game ${pin}`);

  console.log(`Player ${name} joined game ${pin}`);
}

function handleGameStart(ws, message) {
  const client = clients.get(ws);
  if (!client) return;

  const game = games.get(client.pin);
  if (!game || game.host !== client.playerId) return;

  game.questions = message.questions;
  game.gameStarted = true;
  game.currentQuestion = -1;

  // Notify all players
  broadcastToGame(game, {
    type: 'gameStart',
    questions: game.questions,
    topic: message.topic,
    difficulty: message.difficulty
  });

  console.log(`Game ${client.pin} started`);
}

function handleQuestion(ws, message) {
  const client = clients.get(ws);
  if (!client) return;

  const game = games.get(client.pin);
  if (!game || game.host !== client.playerId) return;

  game.currentQuestion = message.questionIndex;
  game.answers.clear();

  // Send question to all players
  broadcastToGame(game, {
    type: 'question',
    question: message.question,
    questionIndex: message.questionIndex
  });

  console.log(`Question ${message.questionIndex} sent to game ${client.pin}`);
}

function handleAnswer(ws, message) {
  const client = clients.get(ws);
  if (!client) return;

  const game = games.get(client.pin);
  if (!game) return;

  // Store answer
  if (!game.answers.has(game.currentQuestion)) {
    game.answers.set(game.currentQuestion, new Map());
  }
  game.answers.get(game.currentQuestion).set(client.playerId, {
    answer: message.answer,
    time: message.time
  });

  // Update player score if correct
  const question = game.questions[game.currentQuestion];
  if (message.answer === question.c) {
    const player = game.players.get(client.playerId);
    const points = Math.round((message.time / 15) * 900) + 100; // Assuming 15 second timer
    player.score += points;
  }

  // Notify host of answer
  const hostPlayer = game.players.get(game.host);
  if (hostPlayer && hostPlayer.ws.readyState === WebSocket.OPEN) {
    hostPlayer.ws.send(JSON.stringify({
      type: 'answer',
      answer: message.answer,
      time: message.time,
      playerId: client.playerId
    }));
  }

  console.log(`Player ${client.playerId} answered question ${game.currentQuestion}`);
}

function handleNextQuestion(ws, message) {
  const client = clients.get(ws);
  if (!client) return;

  const game = games.get(client.pin);
  if (!game || game.host !== client.playerId) return;

  // Send results to all players
  broadcastToGame(game, {
    type: 'nextQuestion'
  });

  console.log(`Next question triggered for game ${client.pin}`);
}

function handleGameEnd(ws, message) {
  const client = clients.get(ws);
  if (!client) return;

  const game = games.get(client.pin);
  if (!game || game.host !== client.playerId) return;

  // Calculate final leaderboard
  const leaderboard = Array.from(game.players.values())
    .map(p => ({ name: p.name, score: p.score }))
    .sort((a, b) => b.score - a.score);

  // Send final results
  broadcastToGame(game, {
    type: 'gameEnd',
    finalLeaderboard: leaderboard
  });

  // Clean up game after a delay
  setTimeout(() => {
    games.delete(client.pin);
    console.log(`Game ${client.pin} ended and cleaned up`);
  }, 30000);

  console.log(`Game ${client.pin} ended`);
}

function handleDisconnect(ws) {
  const client = clients.get(ws);
  if (!client) return;

  const game = games.get(client.pin);
  if (game) {
    const player = game.players.get(client.playerId);
    if (player) {
      player.connected = false;
      console.log(`Player ${player.name} disconnected from game ${client.pin}`);
    }
  }

  clients.delete(ws);
}

function broadcastToGame(game, message) {
  game.players.forEach(player => {
    if (player.ws.readyState === WebSocket.OPEN) {
      player.ws.send(JSON.stringify(message));
    }
  });
}

function generatePin() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function generatePlayerId() {
  return Date.now().toString() + Math.random().toString(36).substr(2, 9);
}

// Clean up old games periodically
setInterval(() => {
  const now = Date.now();
  for (const [pin, game] of games.entries()) {
    if (now - game.created > 3600000) { // 1 hour
      games.delete(pin);
      console.log(`Cleaned up old game ${pin}`);
    }
  }
}, 300000); // Check every 5 minutes

// Start servers
app.listen(PORT, () => {
  console.log(`HTTP server running on port ${PORT}`);
});

console.log(`WebSocket server running on port 8080`);
console.log(`Open http://localhost:${PORT} in your browser`);