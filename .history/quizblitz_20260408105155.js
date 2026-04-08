const QUESTIONS = {
  "General Knowledge": {
    easy: [
      {q:"What color is the sky on a clear day?", a:["Blue","Green","Red","Yellow"], c:0},
      {q:"How many days are in a week?", a:["5","6","7","8"], c:2},
      {q:"What is 2 + 2?", a:["3","4","5","6"], c:1},
      {q:"Which animal says 'moo'?", a:["Dog","Cat","Cow","Pig"], c:2},
      {q:"How many months are in a year?", a:["10","11","12","13"], c:2},
      {q:"What is the first letter of the alphabet?", a:["B","A","C","D"], c:1},
      {q:"How many legs does a spider have?", a:["6","8","10","4"], c:1},
      {q:"What season comes after summer?", a:["Spring","Winter","Autumn","Summer"], c:2},
      {q:"What shape has 4 equal sides?", a:["Triangle","Rectangle","Circle","Square"], c:3},
      {q:"What do bees make?", a:["Milk","Honey","Butter","Jam"], c:1},
    ],
    medium: [
      {q:"What is the capital of France?", a:["London","Berlin","Paris","Madrid"], c:2},
      {q:"How many sides does a hexagon have?", a:["5","6","7","8"], c:1},
      {q:"Which planet is known as the Red Planet?", a:["Venus","Jupiter","Mars","Saturn"], c:2},
      {q:"Who wrote Romeo and Juliet?", a:["Dickens","Shakespeare","Twain","Austen"], c:1},
      {q:"What is the chemical symbol for gold?", a:["Gd","Go","Au","Ag"], c:2},
      {q:"Which animal is the fastest on land?", a:["Lion","Cheetah","Horse","Greyhound"], c:1},
      {q:"What is the largest ocean?", a:["Atlantic","Indian","Arctic","Pacific"], c:3},
      {q:"How many continents are on Earth?", a:["5","6","7","8"], c:2},
      {q:"What is the boiling point of water?", a:["90°C","95°C","100°C","110°C"], c:2},
      {q:"Which country has the largest population?", a:["USA","India","Russia","China"], c:3},
    ],
    hard: [
      {q:"What is the square root of 144?", a:["10","11","12","13"], c:2},
      {q:"In what year did the French Revolution begin?", a:["1776","1789","1804","1815"], c:1},
      {q:"What is the rarest blood type?", a:["A-","B-","AB-","O-"], c:2},
      {q:"Who painted the Sistine Chapel ceiling?", a:["Da Vinci","Raphael","Michelangelo","Botticelli"], c:2},
      {q:"What element has the highest melting point?", a:["Iron","Tungsten","Platinum","Carbon"], c:1},
      {q:"Which organ produces insulin?", a:["Liver","Kidney","Pancreas","Spleen"], c:2},
      {q:"What is the speed of sound in air?", a:["343 m/s","433 m/s","243 m/s","543 m/s"], c:0},
      {q:"How many bones are in the human ear?", a:["2","3","4","5"], c:1},
      {q:"What is the longest river in the world?", a:["Amazon","Congo","Nile","Yangtze"], c:2},
      {q:"In what year was the internet invented?", a:["1969","1979","1989","1991"], c:0},
    ]
  },
  "Science": {
    easy: [
      {q:"What is the powerhouse of the cell?", a:["Nucleus","Ribosome","Mitochondria","Golgi"], c:2},
      {q:"What gas do plants need for photosynthesis?", a:["Oxygen","Nitrogen","CO2","Hydrogen"], c:2},
      {q:"How many planets are in our solar system?", a:["7","8","9","10"], c:1},
      {q:"What force pulls objects to Earth?", a:["Magnetism","Gravity","Friction","Tension"], c:1},
      {q:"What is H2O?", a:["Salt","Water","Oxygen","Hydrogen"], c:1},
      {q:"What is the closest star to Earth?", a:["Sirius","Polaris","The Sun","Proxima Centauri"], c:2},
      {q:"Which vitamin does sunlight give us?", a:["Vitamin A","Vitamin B","Vitamin C","Vitamin D"], c:3},
      {q:"What part of the plant makes food?", a:["Root","Stem","Leaf","Flower"], c:2},
      {q:"How many colors are in a rainbow?", a:["5","6","7","8"], c:2},
      {q:"What do caterpillars become?", a:["Moths","Butterflies","Both A and B","Dragonflies"], c:2},
    ],
    medium: [
      {q:"What is the atomic number of carbon?", a:["4","6","8","12"], c:1},
      {q:"What is the speed of light?", a:["300,000 km/s","30,000 km/s","3,000,000 km/s","3,000 km/s"], c:0},
      {q:"What gas makes up most of Earth's atmosphere?", a:["Oxygen","Argon","CO2","Nitrogen"], c:3},
      {q:"How many chambers does a human heart have?", a:["2","3","4","5"], c:2},
      {q:"What is the hardest natural substance?", a:["Gold","Iron","Diamond","Quartz"], c:2},
      {q:"What is DNA short for?", a:["Deoxyribonucleic acid","Diribonucleic acid","Dinucleotide acid","Deoxynucleotide acid"], c:0},
      {q:"How many bones in an adult human body?", a:["196","206","216","226"], c:1},
      {q:"Which planet has the most moons?", a:["Jupiter","Saturn","Uranus","Neptune"], c:1},
      {q:"What is Newton's 1st law about?", a:["Force","Inertia","Energy","Motion"], c:1},
      {q:"What is the pH of pure water?", a:["6","7","8","9"], c:1},
    ],
    hard: [
      {q:"What is the Heisenberg Uncertainty Principle?", a:["Energy can't be destroyed","Position and momentum can't be known simultaneously","Light travels at constant speed","Atoms are mostly empty space"], c:1},
      {q:"What does CRISPR stand for?", a:["Clustered Regularly Interspaced Short Palindromic Repeats","Cellular Regulated Interspaced Sequence Protein Replication","Continuous RNA Insertion Splice Point Regulation","Clustered RNA Integration System for Protein Replacement"], c:0},
      {q:"What is the half-life of Carbon-14?", a:["1,430 years","5,730 years","14,300 years","57,300 years"], c:1},
      {q:"What is the Chandrasekhar limit?", a:["Max mass of neutron star","Max mass of white dwarf","Max energy of supernova","Max size of black hole"], c:1},
      {q:"What is quantum entanglement?", a:["Particles sharing space","Correlated particles regardless of distance","Particles sharing charge","Particles with same spin"], c:1},
      {q:"What is the SI unit of electric charge?", a:["Ampere","Volt","Coulomb","Farad"], c:2},
      {q:"Which theorem states energy can't be created or destroyed?", a:["1st Law of Thermodynamics","2nd Law of Thermodynamics","3rd Law of Thermodynamics","Zeroth Law"], c:0},
      {q:"What is a quark?", a:["Subatomic particle","Type of wave","Quantum effect","Type of atom"], c:0},
      {q:"What does the Hubble constant measure?", a:["Age of universe","Rate of universe expansion","Size of observable universe","Speed of galaxies"], c:1},
      {q:"What is Avogadro's number?", a:["6.022×10²²","6.022×10²³","6.022×10²⁴","6.022×10²¹"], c:1},
    ]
  },
  "Geography": {
    easy: [
      {q:"What is the largest country in the world?", a:["Canada","China","USA","Russia"], c:3},
      {q:"Which continent is Egypt in?", a:["Asia","Europe","Africa","Australia"], c:2},
      {q:"What is the capital of the USA?", a:["New York","Los Angeles","Washington D.C.","Chicago"], c:2},
      {q:"How many oceans are there?", a:["3","4","5","6"], c:2},
      {q:"Which country has the Eiffel Tower?", a:["Italy","France","Germany","Spain"], c:1},
      {q:"What is the largest desert?", a:["Gobi","Sahara","Antarctic","Arabian"], c:2},
      {q:"Which country is known as the Land of the Rising Sun?", a:["China","Korea","Japan","Vietnam"], c:2},
      {q:"What is the longest river?", a:["Amazon","Nile","Yangtze","Mississippi"], c:1},
      {q:"Which ocean is the largest?", a:["Atlantic","Indian","Arctic","Pacific"], c:3},
      {q:"What is the capital of Australia?", a:["Sydney","Melbourne","Canberra","Brisbane"], c:2},
    ],
    medium: [
      {q:"How many countries are in South America?", a:["10","12","14","16"], c:1},
      {q:"What is the smallest country in the world?", a:["Monaco","San Marino","Vatican City","Liechtenstein"], c:2},
      {q:"Which mountain is the tallest on Earth?", a:["K2","Kangchenjunga","Everest","Lhotse"], c:2},
      {q:"What is the capital of Brazil?", a:["Rio de Janeiro","São Paulo","Brasília","Salvador"], c:2},
      {q:"Which country has the most time zones?", a:["Russia","USA","China","France"], c:3},
      {q:"What is the capital of Canada?", a:["Toronto","Vancouver","Ottawa","Montreal"], c:2},
      {q:"Which sea is the saltiest?", a:["Mediterranean","Red Sea","Dead Sea","Caspian"], c:2},
      {q:"What country owns Greenland?", a:["Norway","Iceland","Denmark","UK"], c:2},
      {q:"Which African country has the largest population?", a:["Egypt","Ethiopia","South Africa","Nigeria"], c:3},
      {q:"Where is the Amazon Rainforest mainly located?", a:["Colombia","Venezuela","Brazil","Peru"], c:2},
    ],
    hard: [
      {q:"What is the capital of Kazakhstan?", a:["Almaty","Astana","Shymkent","Karaganda"], c:1},
      {q:"Which country has the most lakes?", a:["Russia","USA","Finland","Canada"], c:3},
      {q:"What is the deepest lake in the world?", a:["Caspian Sea","Lake Superior","Lake Baikal","Lake Tanganyika"], c:2},
      {q:"What is the smallest ocean?", a:["Antarctic","Indian","Arctic","Atlantic"], c:2},
      {q:"Which country has the longest coastline?", a:["Australia","USA","Norway","Canada"], c:3},
      {q:"What is the capital of Myanmar?", a:["Rangoon","Mandalay","Naypyidaw","Bagan"], c:2},
      {q:"Which is the least densely populated country?", a:["Australia","Iceland","Mongolia","Canada"], c:2},
      {q:"What is the highest waterfall?", a:["Niagara","Victoria","Angel Falls","Yosemite"], c:2},
      {q:"Which country has the most UNESCO World Heritage Sites?", a:["China","France","Italy","Spain"], c:2},
      {q:"What is the Tropic of Capricorn's latitude?", a:["23.5°N","23.5°S","66.5°N","66.5°S"], c:1},
    ]
  },
  "History": {
    easy: [
      {q:"Who was the first US President?", a:["Lincoln","Jefferson","Washington","Adams"], c:2},
      {q:"In which year did WW2 end?", a:["1943","1944","1945","1946"], c:2},
      {q:"Who discovered America?", a:["Vespucci","Magellan","Columbus","Drake"], c:2},
      {q:"Which ancient wonder was in Egypt?", a:["Colossus","Hanging Gardens","Great Pyramid","Lighthouse"], c:2},
      {q:"What year did the Titanic sink?", a:["1910","1912","1914","1916"], c:1},
      {q:"Who was Napoleon?", a:["A King","An Emperor","A General only","A President"], c:1},
      {q:"What year did WW1 begin?", a:["1912","1913","1914","1915"], c:2},
      {q:"Where did the Olympic Games originate?", a:["Rome","Greece","Egypt","Persia"], c:1},
      {q:"Who was the first man on the moon?", a:["Aldrin","Gagarin","Armstrong","Glenn"], c:2},
      {q:"What wall divided East and West Berlin?", a:["Iron Wall","Berlin Wall","Cold Wall","Stone Wall"], c:1},
    ],
    medium: [
      {q:"When did the Berlin Wall fall?", a:["1987","1989","1991","1993"], c:1},
      {q:"Which empire was the largest in history?", a:["Roman","Mongol","Ottoman","British"], c:3},
      {q:"When was the Magna Carta signed?", a:["1199","1215","1265","1300"], c:1},
      {q:"What caused the Black Death?", a:["Virus","Bacteria (Yersinia pestis)","Fungus","Parasite"], c:1},
      {q:"When did the French Revolution begin?", a:["1776","1783","1789","1795"], c:2},
      {q:"Who wrote the Declaration of Independence?", a:["Washington","Franklin","Adams","Jefferson"], c:3},
      {q:"When was the Roman Empire founded?", a:["27 BC","0 AD","44 BC","100 BC"], c:0},
      {q:"What was the Cold War?", a:["An actual frozen war","US-Soviet geopolitical tension","A trade war","A space race only"], c:1},
      {q:"Who was Cleopatra?", a:["Roman Empress","Egyptian Queen","Greek Goddess","Persian Princess"], c:1},
      {q:"When did the first moon landing happen?", a:["1967","1968","1969","1970"], c:2},
    ],
    hard: [
      {q:"What year did the Byzantine Empire fall?", a:["1350","1453","1492","1517"], c:1},
      {q:"Who was the first Holy Roman Emperor?", a:["Frederick Barbarossa","Otto I","Charlemagne","Charles V"], c:2},
      {q:"What caused the Peloponnesian War?", a:["Persian invasion","Rivalry between Athens and Sparta","Death of Alexander","Trade disputes"], c:1},
      {q:"When was the Treaty of Westphalia signed?", a:["1618","1638","1648","1658"], c:2},
      {q:"What was the Sykes-Picot Agreement?", a:["WW1 armistice","Division of Middle East by France and Britain","Treaty ending Ottoman Empire","Balfour Declaration"], c:1},
      {q:"Who was the last Tsar of Russia?", a:["Alexander III","Nicholas I","Alexander II","Nicholas II"], c:3},
      {q:"What was Operation Barbarossa?", a:["Allied invasion of France","German invasion of USSR","US invasion of Japan","British invasion of Germany"], c:1},
      {q:"When did the Meiji Restoration begin in Japan?", a:["1853","1868","1872","1889"], c:1},
      {q:"Who was the longest-reigning British monarch before Elizabeth II?", a:["Victoria","George III","George II","Henry VIII"], c:0},
      {q:"What was the Scramble for Africa?", a:["19th century African wars","European colonization of Africa","Migration within Africa","African resistance movements"], c:1},
    ]
  },
  "Sports": {
    easy: [
      {q:"How many players are on a football (soccer) team?", a:["9","10","11","12"], c:2},
      {q:"How many rings are on the Olympic flag?", a:["4","5","6","7"], c:1},
      {q:"In which sport do you use a puck?", a:["Basketball","Football","Ice Hockey","Tennis"], c:2},
      {q:"How many points is a basketball 3-pointer worth?", a:["1","2","3","4"], c:2},
      {q:"Which sport uses a shuttlecock?", a:["Tennis","Badminton","Squash","Racquetball"], c:1},
      {q:"How long is a marathon (km)?", a:["36.2","40.2","42.2","44.2"], c:2},
      {q:"What sport is played at Wimbledon?", a:["Cricket","Tennis","Golf","Polo"], c:1},
      {q:"How many players are on a basketball team?", a:["4","5","6","7"], c:1},
      {q:"What color is the center of an archery target?", a:["Red","Blue","Gold/Yellow","White"], c:2},
      {q:"In baseball, how many strikes is an out?", a:["2","3","4","5"], c:1},
    ],
    medium: [
      {q:"Who has won the most Grand Slam tennis titles (men)?", a:["Federer","Djokovic","Nadal","Agassi"], c:1},
      {q:"How often are the Summer Olympics held?", a:["2 years","3 years","4 years","5 years"], c:2},
      {q:"What country invented basketball?", a:["USA","Canada","UK","France"], c:0},
      {q:"In golf, what is 2 under par called?", a:["Birdie","Eagle","Albatross","Bogey"], c:1},
      {q:"How many players in a rugby union team?", a:["13","14","15","16"], c:2},
      {q:"In which sport is the Ryder Cup contested?", a:["Tennis","Cricket","Golf","Polo"], c:2},
      {q:"What is the maximum score in ten-pin bowling?", a:["270","280","290","300"], c:3},
      {q:"Which country has won the most FIFA World Cups?", a:["Germany","Argentina","Italy","Brazil"], c:3},
      {q:"How many holes are in a standard golf course?", a:["9","12","18","21"], c:2},
      {q:"What is the offside rule in soccer?", a:["Being behind the ball","Ahead of all defenders","Ahead of second-to-last defender","Beyond the halfway line"], c:2},
    ],
    hard: [
      {q:"Who holds the record for most Olympic gold medals?", a:["Carl Lewis","Mark Spitz","Michael Phelps","Usain Bolt"], c:2},
      {q:"In cricket, how many balls per over?", a:["5","6","7","8"], c:1},
      {q:"What is the 'Fosbury Flop'?", a:["Swimming technique","High jump technique","Gymnastics move","Diving technique"], c:1},
      {q:"Which country won the first Rugby World Cup?", a:["Australia","South Africa","New Zealand","England"], c:2},
      {q:"What is a 'hat trick' in cricket?", a:["Scoring 3 runs","3 consecutive wickets","Hitting the stumps 3 times","3 boundaries"], c:1},
      {q:"In F1, what does DRS stand for?", a:["Dynamic Racing System","Drag Reduction System","Direct Response Steering","Differential Rotation Setup"], c:1},
      {q:"How long is an Olympic swimming pool?", a:["25m","50m","75m","100m"], c:1},
      {q:"Who was the first to run a sub-4-minute mile?", a:["Jim Ryun","Roger Bannister","John Landy","Sebastian Coe"], c:1},
      {q:"What is the highest possible break in snooker?", a:["145","147","149","155"], c:1},
      {q:"In tennis, what is a 'bagel'?", a:["Winning 6-0","A perfect serve","Double fault","6-1 set win"], c:0},
    ]
  },
  "Technology": {
    easy: [
      {q:"What does 'www' stand for?", a:["World Wide Web","World Web World","Wide World Web","Web World Wide"], c:0},
      {q:"What company makes the iPhone?", a:["Samsung","Google","Apple","Microsoft"], c:2},
      {q:"What does CPU stand for?", a:["Central Processing Unit","Computer Power Unit","Core Processing Unit","Central Program Unit"], c:0},
      {q:"What does 'USB' stand for?", a:["Universal Serial Bus","Universal System Bridge","Unified Serial Bus","Universal Software Bridge"], c:0},
      {q:"What is the most popular programming language?", a:["C++","Java","Python","JavaScript"], c:3},
      {q:"What is an IP address?", a:["Internet Protocol address","Internal Port address","Internet Password","Integrated Protocol"], c:0},
      {q:"What does RAM stand for?", a:["Random Access Memory","Read Access Module","Random Application Memory","Read Application Mode"], c:0},
      {q:"What is Google's search engine?", a:["Bing","Yahoo","Google Search","DuckDuckGo"], c:2},
      {q:"What social media has a blue bird logo?", a:["Facebook","Instagram","Twitter","Snapchat"], c:2},
      {q:"What device is used to access the internet wirelessly?", a:["Router","Modem","Switch","Hub"], c:0},
    ],
    medium: [
      {q:"What language is used for web styling?", a:["HTML","JavaScript","CSS","PHP"], c:2},
      {q:"What does 'AI' stand for?", a:["Automated Intelligence","Artificial Intelligence","Advanced Integration","Automated Integration"], c:1},
      {q:"What is the binary number for 5?", a:["100","101","110","111"], c:1},
      {q:"What was the first computer virus?", a:["ILOVEYOU","Creeper","Morris Worm","Melissa"], c:1},
      {q:"What is blockchain?", a:["Programming language","Distributed ledger","Type of CPU","Network protocol"], c:1},
      {q:"What is the purpose of HTTP?", a:["Storage","Transfer web pages","Security","Programming"], c:1},
      {q:"Who founded Microsoft?", a:["Steve Jobs","Elon Musk","Bill Gates and Paul Allen","Larry Page"], c:2},
      {q:"What does SSL stand for?", a:["Secure Sockets Layer","System Security Link","Software Service Layer","Secure System Link"], c:0},
      {q:"What is Git used for?", a:["Web hosting","Version control","Database management","API creation"], c:1},
      {q:"What does IoT stand for?", a:["Internet of Things","Integration of Technology","Interface of Tools","Interconnected Operating Technology"], c:0},
    ],
    hard: [
      {q:"What is Big O notation used for?", a:["Database queries","Algorithm complexity","Network speed","Memory allocation"], c:1},
      {q:"What does SOLID stand for (software)?", a:["5 OOP design principles","3 design patterns","Agile methodology","Code review process"], c:0},
      {q:"What is a race condition in computing?", a:["CPU speed test","Concurrent operations causing unexpected results","Parallel processing method","Load balancing technique"], c:1},
      {q:"What is the CAP theorem?", a:["Consistency, Availability, Performance","Consistency, Availability, Partition tolerance","Caching, Access, Persistence","Concurrency, Availability, Performance"], c:1},
      {q:"What is memoization?", a:["Caching function results","Garbage collection","Memory allocation","Pointer arithmetic"], c:0},
      {q:"What does ACID stand for in databases?", a:["Atomicity, Consistency, Isolation, Durability","Access, Control, Integrity, Data","Automated, Consistent, Integrated, Distributed","Atomicity, Concurrency, Isolation, Distribution"], c:0},
      {q:"What is a Turing-complete system?", a:["A system that can simulate any computer","A system with infinite memory","A quantum computing system","A parallel processing system"], c:0},
      {q:"What is the halting problem?", a:["Stopping infinite loops","Undecidability of program termination","Deadlock prevention","Memory leak detection"], c:1},
      {q:"What is a lambda function?", a:["A recursive function","An anonymous function","A class method","A pointer function"], c:1},
      {q:"What does REST stand for?", a:["Remote Execution State Transfer","Representational State Transfer","Resource Entity State Transfer","Remote State Transfer"], c:1},
    ]
  }
};

let state = {
  mode: null, // 'host' or 'join'
  gamePin: null,
  isHost: false,
  players: [],
  ws: null,
  playerId: null,
  playerName: '',
  topic: 'General Knowledge',
  difficulty: 'easy',
  questions: [],
  current: 0,
  score: 0,
  correctCount: 0,
  streak: 0,
  bestStreak: 0,
  timer: 15,
  timerInterval: null,
  answered: false,
  maxTime: 15,
  gameStarted: false,
  answers: {}, // player answers for current question
  quizMode: 'public', // 'public' or 'custom'
  customQuiz: { title: '', difficulty: 'easy', questions: [] }
};

const DIFFICULTY_TIME = { easy: 20, medium: 15, hard: 10 };

function selectMode(mode) {
  state.mode = mode;
  document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('selected'));
  document.getElementById(mode + 'Btn').classList.add('selected');

  setTimeout(() => {
    if (mode === 'host') {
      showScreen('quizModeScreen');
    } else {
      showScreen('playerJoinScreen');
    }
  }, 300);
}

function selectQuizMode(mode) {
  state.quizMode = mode;
  document.querySelectorAll('.quiz-mode-btn').forEach(btn => btn.classList.remove('selected'));
  document.getElementById('quizModeScreen').querySelector(`[onclick="selectQuizMode('${mode}')"]`).classList.add('selected');
}

function proceedToSetup() {
  if (state.quizMode === 'custom') {
    showScreen('customQuizScreen');
    if (state.customQuiz.questions.length === 0) {
      addQuestion();
    }
  } else {
    showScreen('hostSetupScreen');
    updateHostSetupDisplay();
    generatePin();
    initWebSocket();
  }
}

function selectQuizDiff(btn) {
  document.querySelectorAll('#customQuizScreen .diff-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  state.customQuiz.difficulty = btn.dataset.d;
}

function addQuestion() {
  const questionNum = state.customQuiz.questions.length + 1;
  const questionHtml = `
    <div class="question-editor" data-id="${questionNum}">
      <div class="question-header">
        <div class="question-num">Question ${questionNum}</div>
        <button class="delete-btn" onclick="deleteQuestion(${questionNum})">×</button>
      </div>
      <input type="text" class="question-input" placeholder="Enter your question..." oninput="updateQuestion(${questionNum}, 'question', this.value)">
      <div class="answer-inputs">
        <div class="answer-input">
          <input type="radio" name="correct-${questionNum}" value="0" class="answer-radio" onchange="setCorrectAnswer(${questionNum}, 0)">
          <input type="text" class="answer-text" placeholder="Answer A" oninput="updateAnswer(${questionNum}, 0, this.value)">
        </div>
        <div class="answer-input">
          <input type="radio" name="correct-${questionNum}" value="1" class="answer-radio" onchange="setCorrectAnswer(${questionNum}, 1)">
          <input type="text" class="answer-text" placeholder="Answer B" oninput="updateAnswer(${questionNum}, 1, this.value)">
        </div>
        <div class="answer-input">
          <input type="radio" name="correct-${questionNum}" value="2" class="answer-radio" onchange="setCorrectAnswer(${questionNum}, 2)">
          <input type="text" class="answer-text" placeholder="Answer C" oninput="updateAnswer(${questionNum}, 2, this.value)">
        </div>
        <div class="answer-input">
          <input type="radio" name="correct-${questionNum}" value="3" class="answer-radio" onchange="setCorrectAnswer(${questionNum}, 3)">
          <input type="text" class="answer-text" placeholder="Answer D" oninput="updateAnswer(${questionNum}, 3, this.value)">
        </div>
      </div>
    </div>
  `;
  document.getElementById('questionsList').insertAdjacentHTML('beforeend', questionHtml);
  state.customQuiz.questions.push({
    q: '',
    a: ['', '', '', ''],
    c: 0
  });
}

function updateQuestion(id, field, value) {
  state.customQuiz.questions[id - 1][field] = value;
}

function updateAnswer(questionId, answerId, value) {
  state.customQuiz.questions[questionId - 1].a[answerId] = value;
}

function setCorrectAnswer(questionId, answerId) {
  state.customQuiz.questions[questionId - 1].c = answerId;
}

function deleteQuestion(id) {
  if (state.customQuiz.questions.length > 1) {
    state.customQuiz.questions.splice(id - 1, 1);
    document.querySelector(`[data-id="${id}"]`).remove();
    // Renumber remaining questions
    document.querySelectorAll('.question-editor').forEach((editor, index) => {
      editor.dataset.id = index + 1;
      editor.querySelector('.question-num').textContent = `Question ${index + 1}`;
      editor.querySelector('.delete-btn').onclick = () => deleteQuestion(index + 1);
    });
  }
}

function saveCustomQuiz() {
  const title = document.getElementById('quizTitle').value.trim();
  if (!title) {
    alert('Please enter a quiz title');
    return;
  }

  if (state.customQuiz.questions.length < 3) {
    alert('Please add at least 3 questions');
    return;
  }

  // Validate questions
  for (let i = 0; i < state.customQuiz.questions.length; i++) {
    const q = state.customQuiz.questions[i];
    if (!q.q.trim()) {
      alert(`Question ${i + 1} is empty`);
      return;
    }
    if (q.a.some(a => !a.trim())) {
      alert(`Question ${i + 1} has empty answers`);
      return;
    }
  }

  state.customQuiz.title = title;
  state.questions = state.customQuiz.questions;
  state.topic = title;
  state.difficulty = state.customQuiz.difficulty;
  state.maxTime = DIFFICULTY_TIME[state.difficulty];

  showScreen('hostSetupScreen');
  updateHostSetupDisplay();
  generatePin();
  initWebSocket();
}

function updateHostSetupDisplay() {
  document.getElementById('quizModeDisplay').textContent = state.quizMode === 'custom' ? 'Custom Quiz' : 'Public Quiz';
  document.getElementById('quizTopicDisplay').textContent = state.topic;
  document.getElementById('quizDiffDisplay').textContent = state.difficulty.charAt(0).toUpperCase() + state.difficulty.slice(1);
}

function generatePin() {
  state.gamePin = Math.floor(100000 + Math.random() * 900000).toString();
  document.getElementById('gamePin').textContent = state.gamePin;
  state.isHost = true;
}

function initWebSocket() {
  // For demo purposes, we'll use localStorage for communication
  // In production, replace with actual WebSocket server
  state.ws = {
    send: (data) => {
      const message = JSON.parse(data);
      message.pin = state.gamePin;
      message.timestamp = Date.now();
      localStorage.setItem('quizblitz_' + state.gamePin, JSON.stringify(message));
    },
    onmessage: null,
    onopen: () => {},
    onerror: () => {},
    onclose: () => {}
  };

  // Listen for messages
  const checkMessages = () => {
    const data = localStorage.getItem('quizblitz_' + state.gamePin);
    if (data) {
      const message = JSON.parse(data);
      if (message.timestamp > (state.lastMessageTime || 0)) {
        state.lastMessageTime = message.timestamp;
        handleMessage(message);
      }
    }
  };

  setInterval(checkMessages, 100);
  state.ws.onopen();
}

function joinGame() {
  const pin = document.getElementById('joinPin').value.trim();
  const name = document.getElementById('joinName').value.trim();

  if (!pin || pin.length !== 6) {
    alert('Please enter a valid 6-digit PIN');
    return;
  }

  if (!name) {
    alert('Please enter your name');
    return;
  }

  state.gamePin = pin;
  state.playerName = name;
  state.playerId = Date.now().toString();
  state.isHost = false;

  initWebSocket();
  sendMessage({ type: 'join', name: name });

  showScreen('waitingScreen');
  document.getElementById('waitingTitle').textContent = 'Joining Game...';
  document.getElementById('waitingSub').textContent = 'Connecting to host...';
}

function sendMessage(msg) {
  if (state.ws) {
    state.ws.send(JSON.stringify(msg));
  }
}

function handleMessage(msg) {
  switch (msg.type) {
    case 'join':
      if (state.isHost) {
        // Add player to list
        if (!state.players.find(p => p.name === msg.name)) {
          state.players.push({ id: Date.now().toString(), name: msg.name, score: 0 });
          updatePlayersList();
          sendMessage({ type: 'playerJoined', players: state.players });
        }
      }
      break;
    case 'playerJoined':
      if (state.isHost) {
        state.players = msg.players;
        updatePlayersList();
      }
      break;
    case 'gameStart':
      state.questions = msg.questions;
      state.topic = msg.topic;
      state.difficulty = msg.difficulty;
      state.maxTime = DIFFICULTY_TIME[state.difficulty];
      startMultiplayerGameplay();
      break;
    case 'question':
      showMultiplayerQuestion(msg.question, msg.questionIndex);
      break;
    case 'answer':
      state.answers[msg.playerId] = { answer: msg.answer, time: msg.time };
      updateLiveLeaderboard();
      break;
    case 'nextQuestion':
      showMultiplayerResults();
      break;
    case 'gameEnd':
      showMultiplayerEnd(msg.finalLeaderboard);
      break;
  }
}

function updatePlayersList() {
  const list = document.getElementById('playersList');
  const playerCount = state.players.length + 1; // +1 for host
  document.getElementById('playerCount').textContent = playerCount;

  let html = `
    <div class="player-item host">
      <div class="player-avatar">👑</div>
      <div class="player-name">You (Host)</div>
      <div class="player-status host">Host</div>
    </div>
  `;

  state.players.forEach(player => {
    const avatar = player.name.charAt(0).toUpperCase();
    html += `
      <div class="player-item ready">
        <div class="player-avatar">${avatar}</div>
        <div class="player-name">${player.name}</div>
        <div class="player-status ready">Ready</div>
      </div>
    `;
  });

  list.innerHTML = html;
  document.getElementById('startBtn').disabled = state.players.length < 1;
}

function startMultiplayerGame() {
  if (state.players.length === 0) return;

  state.questions = shuffle(QUESTIONS[state.topic][state.difficulty]);
  sendMessage({
    type: 'gameStart',
    questions: state.questions,
    topic: state.topic,
    difficulty: state.difficulty
  });

  showScreen('waitingScreen');
  document.getElementById('waitingTitle').textContent = 'Starting Game...';
  document.getElementById('waitingSub').textContent = 'Get ready!';

  setTimeout(() => {
    sendMessage({ type: 'question', question: state.questions[0], questionIndex: 0 });
    showHostQuestion(state.questions[0], 0);
  }, 3000);
}

function startMultiplayerGameplay() {
  showScreen('playerAnswerScreen');
  // Wait for first question
}

function showHostQuestion(q, index) {
  showScreen('hostQuestionScreen');
  state.current = index;

  document.getElementById('hostHudProgress').textContent = `${index + 1} / ${state.questions.length}`;
  document.getElementById('hostProgressFill').style.width = `${(index / state.questions.length) * 100}%`;
  document.getElementById('hostQuestionNum').textContent = `Question ${index + 1}`;
  document.getElementById('hostQuestionText').textContent = q.q;

  const grid = document.getElementById('hostAnswersGrid');
  grid.innerHTML = '';
  const letters = ['A','B','C','D'];
  q.a.forEach((ans, i) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.dataset.letter = letters[i];
    btn.appendChild(document.createTextNode(ans));
    btn.disabled = true; // Host can't answer
    grid.appendChild(btn);
  });

  // Start timer
  state.timer = state.maxTime;
  updateHostTimer();
  state.timerInterval = setInterval(() => {
    state.timer--;
    updateHostTimer();
    if (state.timer <= 0) {
      clearInterval(state.timerInterval);
      document.getElementById('nextBtn').disabled = false;
    }
  }, 1000);

  document.getElementById('nextBtn').disabled = true;
}

function updateHostTimer() {
  const t = state.timer;
  const max = state.maxTime;
  const r = 32;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - t / max);

  const circle = document.getElementById('hostTimerCircle');
  circle.style.strokeDashoffset = offset;

  const ratio = t / max;
  if (ratio > 0.6) circle.style.stroke = 'var(--accent)';
  else if (ratio > 0.3) circle.style.stroke = 'var(--accent3)';
  else circle.style.stroke = 'var(--red)';

  document.getElementById('hostTimerText').textContent = t;
}

function showMultiplayerQuestion(q, index) {
  state.current = index;
  state.answered = false;
  clearInterval(state.timerInterval);

  document.getElementById('playerHudProgress').textContent = `${index + 1} / ${state.questions.length}`;
  document.getElementById('playerProgressFill').style.width = `${(index / state.questions.length) * 100}%`;
  document.getElementById('playerQuestionNum').textContent = `Question ${index + 1}`;
  document.getElementById('playerQuestionText').textContent = q.q;

  const grid = document.getElementById('playerAnswersGrid');
  grid.innerHTML = '';
  const letters = ['A','B','C','D'];
  q.a.forEach((ans, i) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.dataset.letter = letters[i];
    btn.appendChild(document.createTextNode(ans));
    btn.onclick = () => selectPlayerAnswer(i);
    grid.appendChild(btn);
  });

  // Start timer
  state.timer = state.maxTime;
  updatePlayerTimer();
  state.timerInterval = setInterval(() => {
    state.timer--;
    updatePlayerTimer();
    if (state.timer <= 0) {
      clearInterval(state.timerInterval);
      timeUp();
    }
  }, 1000);
}

function updatePlayerTimer() {
  const t = state.timer;
  const max = state.maxTime;
  const r = 24;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - t / max);

  const circle = document.getElementById('playerTimerCircle');
  circle.style.strokeDashoffset = offset;

  const ratio = t / max;
  if (ratio > 0.6) circle.style.stroke = 'var(--accent)';
  else if (ratio > 0.3) circle.style.stroke = 'var(--accent3)';
  else circle.style.stroke = 'var(--red)';

  document.getElementById('playerTimerText').textContent = t;

  // Play tick sound in last 5 seconds
  if (t <= 5 && t > 0) {
    playTickSound();
  }
}

function selectPlayerAnswer(idx) {
  if (state.answered) return;
  state.answered = true;
  clearInterval(state.timerInterval);

  const timeLeft = state.timer;
  sendMessage({
    type: 'answer',
    answer: idx,
    time: timeLeft,
    playerId: state.playerId
  });

  // Show selected answer
  const btns = document.querySelectorAll('#playerAnswersGrid .answer-btn');
  btns.forEach((btn, i) => {
    if (i === idx) {
      btn.style.borderColor = 'var(--accent)';
      btn.style.background = 'rgba(124,58,237,0.2)';
    }
    btn.disabled = true;
  });

  showToast('Answer submitted!', true);
  playTickSound();
}

function nextQuestion() {
  sendMessage({ type: 'nextQuestion' });
  showMultiplayerResults();
}

function showMultiplayerResults() {
  // Show results for current question
  const q = state.questions[state.current];
  const correct = q.c;

  // Reveal answers with animation
  const hostBtns = document.querySelectorAll('#hostAnswersGrid .answer-btn');
  hostBtns.forEach((btn, i) => {
    setTimeout(() => {
      if (i === correct) {
        btn.classList.add('correct');
        playCorrectSound();
      } else {
        btn.classList.add('dim');
      }
    }, i * 200);
  });

  // Calculate scores
  Object.keys(state.answers).forEach(playerId => {
    const answer = state.answers[playerId];
    if (answer.answer === correct) {
      const pts = Math.round((answer.time / state.maxTime) * 900) + 100;
      // Update player scores (would be handled by server in real implementation)
      if (pts > 500) spawnParticles(); // Big celebration for high scores
    }
  });

  setTimeout(() => {
    state.current++;
    if (state.current >= state.questions.length) {
      // End game
      sendMessage({ type: 'gameEnd', finalLeaderboard: [] });
      showMultiplayerEnd([]);
    } else {
      // Next question
      sendMessage({ type: 'question', question: state.questions[state.current], questionIndex: state.current });
      if (state.isHost) {
        showHostQuestion(state.questions[state.current], state.current);
      } else {
        showMultiplayerQuestion(state.questions[state.current], state.current);
      }
    }
  }, 4000); // Longer delay for better pacing
}

function showMultiplayerEnd(leaderboard) {
  showScreen('endScreen');
  // Update end screen with multiplayer results
}

function updateLiveLeaderboard() {
  const lb = document.getElementById('liveLbContent');

  // Mock leaderboard data - in real implementation, this would come from server
  const mockPlayers = [
    { name: 'Alice', score: 1250, answered: true, avatar: 'A' },
    { name: 'Bob', score: 980, answered: false, avatar: 'B' },
    { name: 'Charlie', score: 1450, answered: true, avatar: 'C' },
    { name: 'Diana', score: 720, answered: true, avatar: 'D' }
  ].sort((a, b) => b.score - a.score);

  let html = '';
  mockPlayers.forEach((player, index) => {
    const rankClass = index === 0 ? 'r1' : index === 1 ? 'r2' : index === 2 ? 'r3' : '';
    const rankIcon = index < 3 ? ['🥇', '🥈', '🥉'][index] : (index + 1);
    const statusClass = player.answered ? 'answered' : '';
    const statusText = player.answered ? '✓' : '⏳';

    html += `
      <div class="live-lb-item ${player.answered ? '' : 'updating'}">
        <div class="live-lb-rank ${rankClass}">${rankIcon}</div>
        <div class="live-lb-avatar">${player.avatar}</div>
        <div class="live-lb-name">${player.name}</div>
        <div class="live-lb-score">${player.score.toLocaleString()}</div>
        <div class="live-lb-status ${statusClass}">${statusText}</div>
      </div>
    `;
  });

  lb.innerHTML = html;
}

function showLeaderboard() {
  const lb = document.getElementById('liveLeaderboard');
  if (lb.style.display === 'block') {
    lb.style.display = 'none';
  } else {
    lb.style.display = 'block';
    updateLiveLeaderboard();
  }
}

function selectTopic(btn) {
  const grid = btn.closest('.topic-grid');
  grid.querySelectorAll('.topic-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  state.topic = btn.dataset.topic;
}

function selectDiff(btn) {
  const row = btn.closest('.difficulty-row');
  row.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  state.difficulty = btn.dataset.d;
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Simple sound effects using Web Audio API
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playSound(frequency, duration, type = 'sine') {
  if (!audioContext) return;

  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
  oscillator.type = type;

  gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + duration);
}

function playCorrectSound() {
  playSound(523, 0.2); // C5
  setTimeout(() => playSound(659, 0.2), 100); // E5
  setTimeout(() => playSound(784, 0.3), 200); // G5
}

function playWrongSound() {
  playSound(200, 0.3, 'sawtooth');
}

function playTickSound() {
  playSound(800, 0.1, 'square');
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

async function startGame() {
  state.playerName = document.getElementById('playerName').value.trim() || 'Player';
  state.questions = shuffle(QUESTIONS[state.topic][state.difficulty]);
  state.current = 0;
  state.score = 0;
  state.correctCount = 0;
  state.streak = 0;
  state.bestStreak = 0;
  state.maxTime = DIFFICULTY_TIME[state.difficulty];

  // Countdown
  await showCountdown();
  showScreen('questionScreen');
  showQuestion();
}

function showCountdown() {
  return new Promise(resolve => {
    const overlay = document.getElementById('countdownOverlay');
    const numEl = document.getElementById('countdownNum');
    overlay.style.display = 'flex';
    let count = 3;
    numEl.textContent = count;

    const tick = setInterval(() => {
      count--;
      if (count <= 0) {
        clearInterval(tick);
        overlay.style.display = 'none';
        resolve();
      } else {
        numEl.animation = 'none';
        numEl.offsetHeight;
        numEl.animation = 'cPulse 1s ease';
        numEl.textContent = count;
      }
    }, 1000);
  });
}

function showQuestion() {
  state.answered = false;
  clearInterval(state.timerInterval);

  const q = state.questions[state.current];
  const total = state.questions.length;

  document.getElementById('hudProgress').textContent = `${state.current + 1} / ${total}`;
  document.getElementById('hudScore').textContent = state.score.toLocaleString();
  document.getElementById('hudStreak').textContent = state.streak >= 2 ? `🔥 ${state.streak}x` : '';
  document.getElementById('progressFill').style.width = `${(state.current / total) * 100}%`;
  document.getElementById('questionNum').textContent = `Question ${state.current + 1}`;
  document.getElementById('questionText').textContent = q.q;

  // Build answers
  const grid = document.getElementById('answersGrid');
  grid.innerHTML = '';
  const letters = ['A','B','C','D'];
  q.a.forEach((ans, i) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.dataset.letter = letters[i];
    btn.appendChild(document.createTextNode(ans));
    btn.onclick = () => selectAnswer(i);
    grid.appendChild(btn);
  });

  // Timer
  state.timer = state.maxTime;
  updateTimer();
  state.timerInterval = setInterval(() => {
    state.timer--;
    updateTimer();
    if (state.timer <= 0) {
      clearInterval(state.timerInterval);
      timeUp();
    }
  }, 1000);
}

function updateTimer() {
  const t = state.timer;
  const max = state.maxTime;
  const r = 32;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - t / max);

  const circle = document.getElementById('timerCircle');
  circle.style.strokeDashoffset = offset;

  const ratio = t / max;
  if (ratio > 0.6) circle.style.stroke = 'var(--accent)';
  else if (ratio > 0.3) circle.style.stroke = 'var(--accent3)';
  else circle.style.stroke = 'var(--red)';

  document.getElementById('timerText').textContent = t;
}

function selectAnswer(idx) {
  if (state.answered) return;
  state.answered = true;
  clearInterval(state.timerInterval);

  const q = state.questions[state.current];
  const isCorrect = idx === q.c;
  const pts = isCorrect ? Math.round((state.timer / state.maxTime) * 900) + 100 : 0;

  if (isCorrect) {
    state.score += pts;
    state.correctCount++;
    state.streak++;
    if (state.streak > state.bestStreak) state.bestStreak = state.streak;
    showToast(`+${pts} pts${state.streak >= 2 ? '  🔥' + state.streak + 'x' : ''}`, true);
    if (state.streak >= 2) spawnParticles();
  } else {
    state.streak = 0;
    showToast('Wrong!', false);
  }

  revealAnswers(idx, q.c, isCorrect);

  const scoreEl = document.getElementById('hudScore');
  scoreEl.textContent = state.score.toLocaleString();
  scoreEl.classList.remove('score-pop');
  void scoreEl.offsetWidth;
  if (isCorrect) scoreEl.classList.add('score-pop');

  setTimeout(() => {
    state.current++;
    if (state.current >= state.questions.length) endGame();
    else showQuestion();
  }, 1800);
}

function timeUp() {
  if (state.answered) return;
  state.answered = true;
  state.streak = 0;
  revealAnswers(-1, state.questions[state.current].c, false);
  showToast("Time's up!", false);
  setTimeout(() => {
    state.current++;
    if (state.current >= state.questions.length) endGame();
    else showQuestion();
  }, 1800);
}

function revealAnswers(chosen, correct, wasCorrect) {
  const btns = document.querySelectorAll('.answer-btn');
  btns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct) btn.classList.add('correct');
    else if (i === chosen && !wasCorrect) btn.classList.add('wrong');
    else btn.classList.add('dim');
  });
}

function showToast(msg, correct) {
  const toast = document.getElementById('feedbackToast');
  toast.textContent = msg;
  toast.className = 'feedback-toast ' + (correct ? 'correct' : 'wrong');
  toast.classList.add('show');

  if (correct) {
    playCorrectSound();
  } else {
    playWrongSound();
  }

  setTimeout(() => toast.classList.remove('show'), 1500);
}

function spawnParticles() {
  const colors = ['#7c3aed','#06b6d4','#f59e0b','#ec4899','#10b981'];
  for (let i = 0; i < 12; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const angle = (Math.random() * 360) * (Math.PI / 180);
    const dist = 80 + Math.random() * 120;
    p.style.cssText = `
      left: ${50 + Math.random() * 40}%;
      top: ${20 + Math.random() * 20}%;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      --dx: ${Math.cos(angle) * dist}px;
      --dy: ${Math.sin(angle) * dist}px;
      animation-duration: ${0.6 + Math.random() * 0.4}s;
    `;
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 1200);
  }
}

const BOTS = [
  ['GalaxyBrain','👾'], ['NeonNinja','🥷'], ['ThinkFast','⚡'],
  ['QuizLord','👑'], ['DataWiz','🤖'], ['Swiftmind','🦊'],
];

function endGame() {
  clearInterval(state.timerInterval);

  const pct = state.correctCount / state.questions.length;
  let emoji, title, sub;
  if (pct === 1) { emoji = '🏆'; title = 'Perfect Score!'; sub = 'Absolute legend!'; }
  else if (pct >= 0.8) { emoji = '🌟'; title = 'Amazing!'; sub = 'You really know your stuff!'; }
  else if (pct >= 0.6) { emoji = '👍'; title = 'Nice Work!'; sub = 'Solid performance!'; }
  else if (pct >= 0.4) { emoji = '😅'; title = 'Keep Practicing!'; sub = 'Better luck next time!'; }
  else { emoji = '💡'; title = 'Keep Learning!'; sub = 'Every quiz makes you smarter!'; }

  document.getElementById('endEmoji').textContent = emoji;
  document.getElementById('endTitle').textContent = title;
  document.getElementById('endSub').textContent = sub;
  document.getElementById('statScore').textContent = state.score.toLocaleString();
  document.getElementById('statCorrect').textContent = `${state.correctCount}/${state.questions.length}`;
  document.getElementById('statBest').textContent = state.bestStreak + 'x';

  // Build leaderboard
  const players = [{ name: state.playerName, score: state.score, icon: '🎮', you: true }];
  const used = new Set();
  while (players.length < 5) {
    const bot = BOTS[Math.floor(Math.random() * BOTS.length)];
    if (!used.has(bot[0])) {
      used.add(bot[0]);
      const spread = state.score * 0.6;
      players.push({ name: bot[0], score: Math.max(0, Math.round(state.score + (Math.random() - 0.5) * spread * 2)), icon: bot[1] });
    }
  }
  players.sort((a, b) => b.score - a.score);

  const lb = document.getElementById('leaderboard');
  lb.innerHTML = players.map((p, i) => {
    const rankClass = i === 0 ? 'r1' : i === 1 ? 'r2' : i === 2 ? 'r3' : '';
    const rankIcon = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : (i + 1);
    return `<div class="lb-item ${p.you ? 'you' : ''}">
      <div class="lb-rank ${rankClass}">${rankIcon}</div>
      <div class="lb-name">${p.icon} ${p.name}${p.you ? '<span>YOU</span>' : ''}</div>
      <div class="lb-score">${p.score.toLocaleString()}</div>
    </div>`;
  }).join('');

  document.getElementById('progressFill').style.width = '100%';
  showScreen('endScreen');
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