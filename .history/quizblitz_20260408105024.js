@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Exo+2:wght@300;400;500;600;700&display=swap');

:root {
  --bg: #0a0a0a;
  --bg2: #1a1a1a;
  --bg3: #2a2a2a;
  --accent: #7c3aed;
  --accent2: #a855f7;
  --accent3: #c084fc;
  --text: #ffffff;
  --text2: #cccccc;
  --text3: #888888;
  --red: #ef4444;
  --green: #10b981;
  --blue: #06b6d4;
  --yellow: #f59e0b;
  --purple: #8b5cf6;
  --pink: #ec4899;
  --orange: #f97316;
  --cyan: #06b6d4;
  --lime: #84cc16;
  --indigo: #6366f1;
  --teal: #14b8a6;
  --emerald: #10b981;
  --violet: #8b5cf6;
  --fuchsia: #d946ef;
  --rose: #f43f5e;
  --sky: #0ea5e9;
  --amber: #f59e0b;
  --slate: #64748b;
  --gray: #6b7280;
  --zinc: #71717a;
  --neutral: #737373;
  --stone: #78716c;
  --border: rgba(255,255,255,0.1);
  --border2: rgba(255,255,255,0.05);
  --shadow: rgba(0,0,0,0.5);
  --glow: rgba(124,58,237,0.3);
  --glow2: rgba(6,182,212,0.3);
  --glow3: rgba(245,158,11,0.3);
  --glow4: rgba(236,72,153,0.3);
  --glow5: rgba(16,185,129,0.3);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Exo 2', sans-serif;
  background: var(--bg);
  color: var(--text);
  overflow-x: hidden;
  min-height: 100vh;
  position: relative;
}

.screen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
  padding: 20px;
  overflow-y: auto;
}

.screen.active {
  opacity: 1;
  transform: translateY(0);
}

.screen::-webkit-scrollbar {
  width: 8px;
}

.screen::-webkit-scrollbar-track {
  background: var(--bg2);
}

.screen::-webkit-scrollbar-thumb {
  background: var(--accent);
  border-radius: 4px;
}

.screen::-webkit-scrollbar-thumb:hover {
  background: var(--accent2);
}

.title {
  font-family: 'Orbitron', monospace;
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, var(--accent), var(--accent3));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px var(--glow);
  animation: titleGlow 2s ease-in-out infinite alternate;
}

@keyframes titleGlow {
  from { filter: brightness(1); }
  to { filter: brightness(1.2); }
}

.subtitle {
  font-size: 1.2rem;
  color: var(--text2);
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
}

.btn {
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px var(--glow);
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

.btn:hover::before {
  left: 100%;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px var(--glow);
}

.btn:active {
  transform: translateY(0);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
}

.btn.secondary {
  background: var(--bg3);
  border: 2px solid var(--accent);
  color: var(--accent);
  box-shadow: none;
}

.btn.secondary:hover {
  background: var(--accent);
  color: white;
}

.btn.danger {
  background: linear-gradient(135deg, var(--red), #dc2626);
  box-shadow: 0 4px 15px rgba(239,68,68,0.3);
}

.btn.danger:hover {
  box-shadow: 0 8px 25px rgba(239,68,68,0.3);
}

.btn.success {
  background: linear-gradient(135deg, var(--green), #059669);
  box-shadow: 0 4px 15px rgba(16,185,129,0.3);
}

.btn.success:hover {
  box-shadow: 0 8px 25px rgba(16,185,129,0.3);
}

.btn.large {
  padding: 1.2rem 3rem;
  font-size: 1.3rem;
  border-radius: 16px;
}

.btn.small {
  padding: 0.8rem 1.5rem;
  font-size: 0.9rem;
  border-radius: 8px;
}

.btn.wide {
  min-width: 200px;
}

.btn.full {
  width: 100%;
  max-width: 400px;
}

.input {
  background: var(--bg2);
  border: 2px solid var(--border);
  border-radius: 12px;
  padding: 1rem;
  font-size: 1.1rem;
  color: var(--text);
  width: 100%;
  max-width: 400px;
  transition: all 0.3s ease;
  font-family: 'Exo 2', sans-serif;
}

.input:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 20px var(--glow);
}

.input::placeholder {
  color: var(--text3);
}

.card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 32px var(--shadow);
  backdrop-filter: blur(10px);
  max-width: 600px;
  width: 100%;
}

.card-title {
  font-family: 'Orbitron', monospace;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--accent);
  text-align: center;
}

.grid {
  display: grid;
  gap: 1rem;
  width: 100%;
}

.grid-2 {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.grid-3 {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.grid-4 {
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}

.flex {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.flex-col {
  flex-direction: column;
}

.flex-center {
  justify-content: center;
  align-items: center;
}

.flex-between {
  justify-content: space-between;
}

.flex-wrap {
  flex-wrap: wrap;
}

.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

.mb-1 { margin-bottom: 0.5rem; }
.mb-2 { margin-bottom: 1rem; }
.mb-3 { margin-bottom: 1.5rem; }
.mb-4 { margin-bottom: 2rem; }

.mt-1 { margin-top: 0.5rem; }
.mt-2 { margin-top: 1rem; }
.mt-3 { margin-top: 1.5rem; }
.mt-4 { margin-top: 2rem; }

.p-1 { padding: 0.5rem; }
.p-2 { padding: 1rem; }
.p-3 { padding: 1.5rem; }
.p-4 { padding: 2rem; }

.hidden {
  display: none !important;
}

.fade-in {
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.slide-up {
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}

.pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.bounce {
  animation: bounce 0.6s ease;
}

@keyframes bounce {
  0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
  40%, 43% { transform: translateY(-10px); }
  70% { transform: translateY(-5px); }
  90% { transform: translateY(-2px); }
}

.shake {
  animation: shake 0.5s ease;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
}

.glow {
  animation: glow 1.5s ease-in-out infinite alternate;
}

@keyframes glow {
  from { box-shadow: 0 0 20px var(--glow); }
  to { box-shadow: 0 0 30px var(--glow), 0 0 40px var(--glow); }
}

.rotate {
  animation: rotate 2s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.scale {
  animation: scale 0.3s ease;
}

@keyframes scale {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.cPulse {
  animation: cPulse 1s ease;
}

@keyframes cPulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
}

.float {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.wave {
  animation: wave 2s ease-in-out infinite;
}

@keyframes wave {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  75% { transform: rotate(-5deg); }
}

.rainbow {
  background: linear-gradient(45deg, var(--red), var(--orange), var(--yellow), var(--green), var(--blue), var(--indigo), var(--violet));
  background-size: 400% 400%;
  animation: rainbow 3s ease infinite;
}

@keyframes rainbow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.typing {
  border-right: 2px solid var(--accent);
  animation: typing 1s steps(40, end), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: var(--accent); }
}

.confetti {
  position: absolute;
  width: 10px;
  height: 10px;
  background: var(--accent);
  animation: confetti 3s ease-in-out infinite;
}

@keyframes confetti {
  0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
  100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
}

.particle {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  pointer-events: none;
  animation: particle 1s ease-out forwards;
}

@keyframes particle {
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(var(--dx), var(--dy)) scale(0);
    opacity: 0;
  }
}

.feedback-toast {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--bg2);
  color: var(--text);
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  box-shadow: 0 4px 20px var(--shadow);
  z-index: 1000;
  opacity: 0;
  transform: translateX(-50%) translateY(-20px);
  transition: all 0.3s ease;
}

.feedback-toast.show {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

.feedback-toast.correct {
  background: linear-gradient(135deg, var(--green), #059669);
  color: white;
}

.feedback-toast.wrong {
  background: linear-gradient(135deg, var(--red), #dc2626);
  color: white;
}

.countdown-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
}

.countdown-num {
  font-family: 'Orbitron', monospace;
  font-size: 8rem;
  font-weight: 900;
  color: var(--accent);
  text-shadow: 0 0 50px var(--glow);
}

#startScreen .title {
  font-size: 4rem;
  margin-bottom: 1rem;
}

#startScreen .subtitle {
  font-size: 1.4rem;
  margin-bottom: 2rem;
}

#startScreen .card {
  max-width: 800px;
}

#startScreen .grid {
  margin-bottom: 2rem;
}

.topic-btn {
  background: var(--bg3);
  border: 2px solid var(--border);
  color: var(--text);
  padding: 1rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.topic-btn:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px var(--glow);
}

.topic-btn.selected {
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  border-color: var(--accent);
  color: white;
  box-shadow: 0 4px 15px var(--glow);
}

.difficulty-row {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
}

.diff-btn {
  background: var(--bg3);
  border: 2px solid var(--border);
  color: var(--text);
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 120px;
}

.diff-btn:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
}

.diff-btn.selected {
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  border-color: var(--accent);
  color: white;
}

#questionScreen {
  padding: 20px;
}

.hud {
  position: fixed;
  top: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--bg2);
  padding: 1rem 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px var(--shadow);
  z-index: 100;
  backdrop-filter: blur(10px);
}

.hud-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.hud-item i {
  font-size: 1.3rem;
}

.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--bg3);
  z-index: 101;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent), var(--accent3));
  transition: width 0.3s ease;
  box-shadow: 0 0 10px var(--glow);
}

.question-container {
  margin-top: 120px;
  max-width: 800px;
  width: 100%;
}

.question-num {
  font-family: 'Orbitron', monospace;
  font-size: 1.5rem;
  color: var(--accent);
  margin-bottom: 1rem;
  text-align: center;
}

.question-text {
  font-size: 1.8rem;
  line-height: 1.4;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 500;
}

.answers-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
}

.answer-btn {
  background: var(--bg3);
  border: 2px solid var(--border);
  color: var(--text);
  padding: 1.5rem;
  border-radius: 16px;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.answer-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.answer-btn:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px var(--glow);
}

.answer-btn:hover::before {
  opacity: 0.1;
}

.answer-btn.correct {
  background: linear-gradient(135deg, var(--green), #059669);
  border-color: var(--green);
  color: white;
  box-shadow: 0 0 20px rgba(16,185,129,0.3);
  animation: correctPulse 0.6s ease;
}

@keyframes correctPulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.answer-btn.wrong {
  background: linear-gradient(135deg, var(--red), #dc2626);
  border-color: var(--red);
  color: white;
  box-shadow: 0 0 20px rgba(239,68,68,0.3);
  animation: shake 0.5s ease;
}

.answer-btn.dim {
  opacity: 0.3;
  transform: none;
  box-shadow: none;
}

.timer-container {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 80px;
  height: 80px;
}

.timer-circle-bg {
  width: 100%;
  height: 100%;
  fill: none;
  stroke: var(--bg3);
  stroke-width: 4;
}

.timer-circle {
  width: 100%;
  height: 100%;
  fill: none;
  stroke: var(--accent);
  stroke-width: 4;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: center;
  transition: stroke-dashoffset 1s linear;
}

.timer-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Orbitron', monospace;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text);
}

.score-pop {
  animation: scorePop 0.6s ease;
}

@keyframes scorePop {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); color: var(--accent); }
  100% { transform: scale(1); }
}

#endScreen .card {
  max-width: 700px;
}

.end-header {
  text-align: center;
  margin-bottom: 2rem;
}

.end-emoji {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.end-title {
  font-family: 'Orbitron', monospace;
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--accent);
  margin-bottom: 0.5rem;
}

.end-subtitle {
  font-size: 1.2rem;
  color: var(--text2);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.stat-item {
  background: var(--bg3);
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  border: 1px solid var(--border);
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text2);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.stat-value {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--accent);
}

.leaderboard {
  background: var(--bg3);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border);
}

.lb-header {
  background: var(--accent);
  color: white;
  padding: 1rem;
  font-weight: 600;
  text-align: center;
}

.lb-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--border);
  transition: all 0.3s ease;
}

.lb-item:last-child {
  border-bottom: none;
}

.lb-item.you {
  background: rgba(124,58,237,0.1);
  border-left: 4px solid var(--accent);
}

.lb-item:hover {
  background: var(--bg2);
}

.lb-rank {
  width: 50px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
}

.lb-rank.r1 { color: #ffd700; }
.lb-rank.r2 { color: #c0c0c0; }
.lb-rank.r3 { color: #cd7f32; }

.lb-name {
  flex: 1;
  font-weight: 500;
}

.lb-name span {
  background: var(--accent);
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  margin-left: 0.5rem;
}

.lb-score {
  font-weight: 700;
  color: var(--accent);
  font-family: 'Orbitron', monospace;
}

.mode-selection {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 3rem;
}

.mode-btn {
  background: var(--bg3);
  border: 2px solid var(--border);
  color: var(--text);
  padding: 2rem;
  border-radius: 16px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.mode-btn:hover {
  border-color: var(--accent);
  transform: translateY(-4px);
  box-shadow: 0 8px 25px var(--glow);
}

.mode-btn.selected {
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  border-color: var(--accent);
  color: white;
  box-shadow: 0 4px 15px var(--glow);
}

.mode-icon {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.player-join-card {
  max-width: 500px;
}

.join-inputs {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.waiting-screen {
  text-align: center;
}

.waiting-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  animation: pulse 2s infinite;
}

.waiting-title {
  font-family: 'Orbitron', monospace;
  font-size: 2rem;
  color: var(--accent);
  margin-bottom: 1rem;
}

.waiting-subtitle {
  font-size: 1.1rem;
  color: var(--text2);
}

.host-setup-card {
  max-width: 600px;
}

.setup-info {
  background: var(--bg3);
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  border: 1px solid var(--border);
}

.setup-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.setup-row:last-child {
  margin-bottom: 0;
}

.setup-label {
  color: var(--text2);
  font-weight: 500;
}

.setup-value {
  color: var(--accent);
  font-weight: 600;
}

.players-list {
  background: var(--bg3);
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 2rem;
  border: 1px solid var(--border);
  max-height: 300px;
  overflow-y: auto;
}

.players-list::-webkit-scrollbar {
  width: 6px;
}

.players-list::-webkit-scrollbar-track {
  background: var(--bg2);
}

.players-list::-webkit-scrollbar-thumb {
  background: var(--accent);
  border-radius: 3px;
}

.player-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--border);
  transition: all 0.3s ease;
}

.player-item:last-child {
  border-bottom: none;
}

.player-item:hover {
  background: var(--bg2);
}

.player-item.host {
  background: rgba(124,58,237,0.1);
  border-left: 4px solid var(--accent);
}

.player-item.ready {
  background: rgba(16,185,129,0.1);
  border-left: 4px solid var(--green);
}

.player-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  margin-right: 1rem;
  font-weight: 600;
}

.player-name {
  flex: 1;
  font-weight: 500;
}

.player-status {
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.player-status.host {
  background: var(--accent);
  color: white;
}

.player-status.ready {
  background: var(--green);
  color: white;
}

.player-count {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: var(--text2);
}

.quiz-mode-selection {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
}

.quiz-mode-btn {
  background: var(--bg3);
  border: 2px solid var(--border);
  color: var(--text);
  padding: 1.5rem 2rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  min-width: 150px;
}

.quiz-mode-btn:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px var(--glow);
}

.quiz-mode-btn.selected {
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  border-color: var(--accent);
  color: white;
  box-shadow: 0 4px 15px var(--glow);
}

.custom-quiz-builder {
  max-width: 800px;
  width: 100%;
}

.quiz-title-input {
  margin-bottom: 2rem;
}

.quiz-title-input input {
  width: 100%;
  background: var(--bg2);
  border: 2px solid var(--border);
  border-radius: 12px;
  padding: 1rem;
  font-size: 1.2rem;
  color: var(--text);
  font-family: 'Exo 2', sans-serif;
}

.quiz-title-input input:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 20px var(--glow);
}

.quiz-title-input input::placeholder {
  color: var(--text3);
}

.difficulty-selector {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
}

.questions-container {
  max-height: 400px;
  overflow-y: auto;
  margin-bottom: 2rem;
}

.questions-container::-webkit-scrollbar {
  width: 8px;
}

.questions-container::-webkit-scrollbar-track {
  background: var(--bg2);
}

.questions-container::-webkit-scrollbar-thumb {
  background: var(--accent);
  border-radius: 4px;
}

.questions-container::-webkit-scrollbar-thumb:hover {
  background: var(--accent2);
}

.question-editor {
  background: var(--bg3);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.question-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.question-num {
  font-family: 'Orbitron', monospace;
  font-size: 1.2rem;
  color: var(--accent);
  font-weight: 700;
}

.delete-btn {
  background: var(--red);
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 700;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.delete-btn:hover {
  background: #dc2626;
  transform: scale(1.1);
}

.question-input {
  width: 100%;
  background: var(--bg2);
  border: 2px solid var(--border);
  border-radius: 8px;
  padding: 1rem;
  font-size: 1rem;
  color: var(--text);
  margin-bottom: 1rem;
  font-family: 'Exo 2', sans-serif;
  resize: vertical;
  min-height: 60px;
}

.question-input:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 15px var(--glow);
}

.question-input::placeholder {
  color: var(--text3);
}

.answer-inputs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.answer-input {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.answer-radio {
  width: 20px;
  height: 20px;
  accent-color: var(--accent);
}

.answer-text {
  flex: 1;
  background: var(--bg2);
  border: 2px solid var(--border);
  border-radius: 8px;
  padding: 0.8rem;
  font-size: 0.9rem;
  color: var(--text);
  font-family: 'Exo 2', sans-serif;
}

.answer-text:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 10px var(--glow);
}

.answer-text::placeholder {
  color: var(--text3);
}

.add-question-btn {
  background: linear-gradient(135deg, var(--green), #059669);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(16,185,129,0.3);
  margin-bottom: 2rem;
}

.add-question-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(16,185,129,0.3);
}

.host-question-screen {
  padding: 20px;
}

.host-hud {
  position: fixed;
  top: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--bg2);
  padding: 1rem 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px var(--shadow);
  z-index: 100;
  backdrop-filter: blur(10px);
}

.host-question-container {
  margin-top: 120px;
  max-width: 800px;
  width: 100%;
}

.host-question-num {
  font-family: 'Orbitron', monospace;
  font-size: 1.5rem;
  color: var(--accent);
  margin-bottom: 1rem;
  text-align: center;
}

.host-question-text {
  font-size: 1.8rem;
  line-height: 1.4;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 500;
}

.host-answers-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
}

.host-timer-container {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 80px;
  height: 80px;
}

.host-timer-circle-bg {
  width: 100%;
  height: 100%;
  fill: none;
  stroke: var(--bg3);
  stroke-width: 4;
}

.host-timer-circle {
  width: 100%;
  height: 100%;
  fill: none;
  stroke: var(--accent);
  stroke-width: 4;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: center;
  transition: stroke-dashoffset 1s linear;
}

.host-timer-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Orbitron', monospace;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text);
}

.player-answer-screen {
  padding: 20px;
}

.player-hud {
  position: fixed;
  top: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--bg2);
  padding: 1rem 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px var(--shadow);
  z-index: 100;
  backdrop-filter: blur(10px);
}

.player-question-container {
  margin-top: 120px;
  max-width: 800px;
  width: 100%;
}

.player-question-num {
  font-family: 'Orbitron', monospace;
  font-size: 1.5rem;
  color: var(--accent);
  margin-bottom: 1rem;
  text-align: center;
}

.player-question-text {
  font-size: 1.8rem;
  line-height: 1.4;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 500;
}

.player-answers-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
}

.player-timer-container {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
}

.player-timer-circle-bg {
  width: 100%;
  height: 100%;
  fill: none;
  stroke: var(--bg3);
  stroke-width: 3;
}

.player-timer-circle {
  width: 100%;
  height: 100%;
  fill: none;
  stroke: var(--accent);
  stroke-width: 3;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: center;
  transition: stroke-dashoffset 1s linear;
}

.player-timer-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Orbitron', monospace;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text);
}

.live-leaderboard {
  position: fixed;
  top: 120px;
  right: 20px;
  width: 300px;
  background: var(--bg2);
  border-radius: 12px;
  box-shadow: 0 4px 20px var(--shadow);
  z-index: 99;
  backdrop-filter: blur(10px);
  border: 1px solid var(--border);
  max-height: calc(100vh - 160px);
  overflow: hidden;
  transform: translateX(320px);
  transition: transform 0.3s ease;
}

.live-leaderboard.show {
  transform: translateX(0);
}

.live-lb-header {
  background: var(--accent);
  color: white;
  padding: 1rem;
  font-weight: 600;
  text-align: center;
  border-bottom: 1px solid var(--border);
}

.live-lb-content {
  max-height: calc(100vh - 220px);
  overflow-y: auto;
}

.live-lb-content::-webkit-scrollbar {
  width: 6px;
}

.live-lb-content::-webkit-scrollbar-track {
  background: var(--bg2);
}

.live-lb-content::-webkit-scrollbar-thumb {
  background: var(--accent);
  border-radius: 3px;
}

.live-lb-item {
  display: flex;
  align-items: center;
  padding: 0.8rem 1rem;
  border-bottom: 1px solid var(--border);
  transition: all 0.3s ease;
}

.live-lb-item:last-child {
  border-bottom: none;
}

.live-lb-item:hover {
  background: var(--bg3);
}

.live-lb-item.updating {
  animation: updating 1s ease-in-out infinite;
}

@keyframes updating {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.live-lb-rank {
  width: 40px;
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
}

.live-lb-rank.r1 { color: #ffd700; }
.live-lb-rank.r2 { color: #c0c0c0; }
.live-lb-rank.r3 { color: #cd7f32; }

.live-lb-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  margin-right: 0.8rem;
  font-weight: 600;
}

.live-lb-name {
  flex: 1;
  font-weight: 500;
  font-size: 0.9rem;
}

.live-lb-score {
  font-weight: 700;
  color: var(--accent);
  font-family: 'Orbitron', monospace;
  font-size: 0.9rem;
}

.live-lb-status {
  width: 30px;
  text-align: center;
  font-size: 0.8rem;
}

.live-lb-status.answered {
  color: var(--green);
}

.live-lb-status:not(.answered) {
  color: var(--text3);
}

.show-lb-btn {
  position: fixed;
  top: 140px;
  right: 20px;
  background: var(--accent);
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 15px var(--glow);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.show-lb-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px var(--glow);
}

@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .mode-selection {
    flex-direction: column;
    gap: 1rem;
  }

  .mode-btn {
    min-width: auto;
    padding: 1.5rem;
  }

  .answers-grid,
  .host-answers-grid,
  .player-answers-grid {
    grid-template-columns: 1fr;
  }

  .hud,
  .host-hud,
  .player-hud {
    padding: 0.8rem 1rem;
    font-size: 0.9rem;
  }

  .question-text,
  .host-question-text,
  .player-question-text {
    font-size: 1.4rem;
  }

  .answer-btn {
    padding: 1.2rem;
    font-size: 1rem;
    min-height: 60px;
  }

  .live-leaderboard {
    width: 280px;
    transform: translateX(300px);
  }

  .show-lb-btn {
    top: 130px;
  }

  .timer-container,
  .host-timer-container {
    width: 60px;
    height: 60px;
  }

  .timer-text,
  .host-timer-text {
    font-size: 1rem;
  }

  .player-timer-container {
    width: 50px;
    height: 50px;
  }

  .player-timer-text {
    font-size: 0.8rem;
  }

  .question-container,
  .host-question-container,
  .player-question-container {
    margin-top: 100px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .lb-item {
    padding: 0.8rem;
  }

  .lb-rank {
    width: 40px;
  }

  .lb-name {
    font-size: 0.9rem;
  }

  .lb-score {
    font-size: 0.9rem;
  }

  .difficulty-row {
    flex-direction: column;
    align-items: center;
  }

  .diff-btn {
    min-width: 200px;
  }

  .answer-inputs {
    grid-template-columns: 1fr;
  }

  .question-header {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }

  .delete-btn {
    align-self: flex-end;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 2rem;
  }

  .card {
    padding: 1.5rem;
  }

  .btn {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }

  .input {
    padding: 0.8rem;
    font-size: 1rem;
  }

  .question-text,
  .host-question-text,
  .player-question-text {
    font-size: 1.2rem;
  }

  .answer-btn {
    padding: 1rem;
    font-size: 0.9rem;
  }

  .live-leaderboard {
    width: 260px;
    transform: translateX(280px);
  }

  .show-lb-btn {
    width: 45px;
    height: 45px;
    font-size: 1rem;
  }

  .timer-container,
  .host-timer-container {
    width: 50px;
    height: 50px;
  }

  .timer-text,
  .host-timer-text {
    font-size: 0.9rem;
  }

  .player-timer-container {
    width: 45px;
    height: 45px;
  }

  .player-timer-text {
    font-size: 0.7rem;
  }

  .question-container,
  .host-question-container,
  .player-question-container {
    margin-top: 90px;
  }

  .hud,
  .host-hud,
  .player-hud {
    padding: 0.6rem 0.8rem;
    font-size: 0.8rem;
  }

  .hud-item {
    gap: 0.3rem;
    font-size: 1rem;
  }

  .hud-item i {
    font-size: 1.1rem;
  }
}</content>
<parameter name="filePath">c:\Users\Jason Habac\OneDrive\Desktop\Games\quizblitz.css