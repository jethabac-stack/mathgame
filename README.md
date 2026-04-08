# QuizBlitz - Multiplayer Quiz Game

A real-time multiplayer quiz game built with HTML5, CSS3, and JavaScript, featuring WebSocket communication for seamless multiplayer experiences.

## Features

- **Host & Join Games**: Create games with unique 6-digit PINs or join existing games
- **Multiple Topics**: Choose from General Knowledge, Science, Geography, History, and Sports
- **Difficulty Levels**: Easy, Medium, and Hard questions with appropriate timers
- **Real-time Communication**: WebSocket-based multiplayer with live leaderboards
- **Speed-based Scoring**: Points awarded based on correctness and response time
- **Custom Quizzes**: Create your own quiz questions and topics
- **Cross-device Play**: Works on any device with a modern web browser
- **Responsive Design**: Optimized for desktop, tablet, and mobile

## Quick Start

### Prerequisites

- Node.js 16.0.0 or higher
- npm (comes with Node.js)

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Running the Game

Start the server:

```bash
npm start
```

Or for development:

```bash
npm run dev
```

Open your browser and go to `http://localhost:3000`

## How to Play

### As a Host
1. Click "Host a Game" on the main screen
2. Choose between Public Quiz (pre-made questions) or Custom Quiz (create your own)
3. Select a topic and difficulty level
4. Share the 6-digit PIN with players
5. Wait for players to join, then start the game
6. Control the game flow and view live results

### As a Player
1. Click "Join a Game" on the main screen
2. Enter the 6-digit PIN provided by the host
3. Enter your name
4. Answer questions as they appear
5. View your ranking on the live leaderboard

### Custom Quiz Creation
1. Select "Custom Quiz" when hosting
2. Add questions with multiple choice answers (A, B, C, D)
3. Mark the correct answer for each question
4. Set the difficulty level for the entire quiz
5. Start the game when ready

## Project Structure

```
quizblitz/
├── quizblitz.html      # Main HTML file
├── css/
│   └── style.css       # Game styling
├── js/
│   └── script.js       # Game logic and WebSocket client
├── server.js           # WebSocket server
├── package.json        # Node.js dependencies and scripts
└── README.md          # This file
```

## Technical Details

### Frontend
- **HTML5**: Semantic markup and accessibility
- **CSS3**: Custom properties, animations, and responsive design
- **JavaScript (ES6+)**: Game logic, state management, and WebSocket communication
- **Web Audio API**: Sound effects for feedback

### Backend
- **Node.js**: Server runtime
- **Express.js**: Static file serving
- **WebSocket (ws library)**: Real-time communication
- **In-memory game state**: No database required for basic functionality

### Communication Protocol

The WebSocket server handles these message types:

- `join`: Player joining a game
- `gameStart`: Host starting the game
- `question`: Host sending a question
- `answer`: Player submitting an answer
- `nextQuestion`: Host advancing to next question
- `gameEnd`: Host ending the game

## Deployment

### Local Development
```bash
npm install
npm start
# Server runs on http://localhost:3000
```

### Production Deployment

1. **Environment Variables**:
   - `PORT`: HTTP server port (default: 3000)

2. **WebSocket Port**: The WebSocket server runs on port 8080 by default

3. **Scaling Considerations**:
   - For high traffic, consider using Redis for game state storage
   - Implement proper session management
   - Add rate limiting and security measures

### Example Deployment Commands

```bash
# Using PM2 for production
npm install -g pm2
pm2 start server.js --name quizblitz

# Or using Docker
docker build -t quizblitz .
docker run -p 3000:3000 -p 8080:8080 quizblitz
```

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Troubleshooting

### Connection Issues
- Ensure both HTTP (port 3000) and WebSocket (port 8080) ports are available
- Check firewall settings
- Verify Node.js version compatibility

### Game Not Starting
- Check browser console for JavaScript errors
- Ensure WebSocket connection is established
- Verify all players are connected before starting

### Performance Issues
- Close unnecessary browser tabs
- Ensure stable internet connection
- For large games, consider server optimization

## Future Enhancements

- User accounts and persistent statistics
- More question categories and languages
- Power-ups and special abilities
- Tournament mode with brackets
- Mobile app versions
- Voice chat integration</content>
<parameter name="filePath">c:\Users\Jason Habac\OneDrive\Desktop\Games\README.md