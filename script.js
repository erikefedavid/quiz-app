/* ════════════════════════════════════════════════
   QUESTION BANK
════════════════════════════════════════════════ */
const quizData = [
  { id:1,  question:"What is the capital of Nigeria?", options:["Lagos","Abuja","Kano","Port Harcourt"], correctIndex:1, explanation:"Abuja became the federal capital territory of Nigeria in December 1991, replacing Lagos." },
  { id:2,  question:"Which data structure operates on a LIFO (Last In, First Out) principle?", options:["Queue","Stack","Linked List","Tree"], correctIndex:1, explanation:"A Stack follows LIFO — the last element pushed is the first popped. Think of a stack of plates." },
  { id:3,  question:"What does CPU stand for?", options:["Central Processing Unit","Computer Personal Unit","Central Program Utility","Core Processing Unit"], correctIndex:0, explanation:"CPU stands for Central Processing Unit — the primary component that executes instructions." },
  { id:4,  question:"Which sorting algorithm has an average time complexity of O(n log n)?", options:["Bubble Sort","Insertion Sort","Merge Sort","Selection Sort"], correctIndex:2, explanation:"Merge Sort consistently achieves O(n log n) by dividing the array and merging sorted halves." },
  { id:5,  question:"What does HTML stand for?", options:["HyperText Markup Language","High Transfer Markup Language","HyperText Management Language","High Tech Markup Language"], correctIndex:0, explanation:"HTML stands for HyperText Markup Language — the standard language for creating web pages." },
  { id:6,  question:"Which of these is NOT a primitive data type in most programming languages?", options:["Integer","Boolean","Array","Float"], correctIndex:2, explanation:"Arrays are composite/reference data types, not primitives. Primitives include Integer, Boolean, Float, Char." },
  { id:7,  question:"In database design, what does ACID stand for?", options:["Atomicity, Consistency, Isolation, Durability","Access, Control, Integration, Database","Atomicity, Computation, Isolation, Data","Access, Consistency, Integration, Durability"], correctIndex:0, explanation:"ACID: Atomicity, Consistency, Isolation, Durability — the four key properties of database transactions." },
  { id:8,  question:"Which protocol is used to send emails?", options:["FTP","HTTP","SMTP","SSH"], correctIndex:2, explanation:"SMTP (Simple Mail Transfer Protocol) is the standard protocol for sending email across the internet." },
  { id:9,  question:"What is the binary representation of the decimal number 10?", options:["1100","1010","1001","0110"], correctIndex:1, explanation:"Decimal 10 = 8 + 2 = 1010 in binary. Each position represents a power of 2 (8, 4, 2, 1)." },
  { id:10, question:"Which concept in OOP allows a class to inherit properties from another class?", options:["Encapsulation","Polymorphism","Abstraction","Inheritance"], correctIndex:3, explanation:"Inheritance allows a child class to acquire properties and methods from a parent class, promoting code reuse." },
  { id:11, question:"What does RAM stand for?", options:["Read Access Memory","Random Access Memory","Readily Available Memory","Read And Modify"], correctIndex:1, explanation:"RAM stands for Random Access Memory — volatile memory used by the CPU to store data currently being processed." },
  { id:12, question:"Which of these is an example of a NoSQL database?", options:["MySQL","PostgreSQL","MongoDB","Oracle"], correctIndex:2, explanation:"MongoDB is a document-oriented NoSQL database. MySQL, PostgreSQL, and Oracle are relational (SQL) databases." },
  { id:13, question:"What is the time complexity of binary search on a sorted array?", options:["O(n)","O(n²)","O(log n)","O(1)"], correctIndex:2, explanation:"Binary search has O(log n) complexity because it halves the search space with each comparison." },
  { id:14, question:"Which HTTP method is typically used to update an existing resource?", options:["GET","POST","DELETE","PUT"], correctIndex:3, explanation:"PUT is used to update (replace) an existing resource at a specific URL. PATCH is used for partial updates." },
  { id:15, question:"What is the purpose of a DNS server?", options:["To store web page files","To translate domain names to IP addresses","To encrypt internet traffic","To manage email routing"], correctIndex:1, explanation:"DNS (Domain Name System) translates human-readable domain names (like google.com) into IP addresses." },
  { id:16, question:"In Python, which keyword is used to define a function?", options:["function","def","func","define"], correctIndex:1, explanation:"In Python, functions are defined using the 'def' keyword, followed by the function name and parameters." },
  { id:17, question:"Which of these represents a valid IPv4 address?", options:["192.168.1.300","192.168.1.1","192.168.256.1","999.168.1.1"], correctIndex:1, explanation:"Valid IPv4 addresses have four octets, each between 0–255. 192.168.1.1 is a common private network address." },
  { id:18, question:"What is a deadlock in operating systems?", options:["When a process uses too much CPU","When two processes wait on each other indefinitely","When memory overflows","When a file cannot be deleted"], correctIndex:1, explanation:"A deadlock occurs when two or more processes each hold a resource while waiting for a resource held by the other." },
  { id:19, question:"Which CSS property controls the space between the content and its border?", options:["margin","border-spacing","padding","gap"], correctIndex:2, explanation:"Padding controls the space between an element's content and its border. Margin controls space outside the border." },
  { id:20, question:"What does the acronym 'API' stand for?", options:["Application Programming Interface","Advanced Program Integration","Application Protocol Internet","Automated Programming Interface"], correctIndex:0, explanation:"API stands for Application Programming Interface — a set of rules allowing different software programs to communicate." },
  { id:21, question:"Which data structure is used in Breadth-First Search (BFS)?", options:["Stack","Queue","Heap","Hash Table"], correctIndex:1, explanation:"BFS uses a Queue (FIFO) to explore nodes level by level. DFS uses a Stack (LIFO) to explore depth-first." },
  { id:22, question:"What is the result of 15 mod 4 (15 % 4)?", options:["3","4","1","0"], correctIndex:0, explanation:"15 ÷ 4 = 3 remainder 3. So 15 mod 4 = 3. The modulo operator returns the remainder after division." },
  { id:23, question:"Which of these is NOT a valid JavaScript data type?", options:["undefined","symbol","integer","bigint"], correctIndex:2, explanation:"JavaScript has 'number' (not 'integer'). The 7 primitive types are: string, number, bigint, boolean, undefined, null, symbol." },
  { id:24, question:"What is the primary role of an operating system?", options:["To provide internet access","To manage hardware and software resources","To compile programming languages","To render web pages"], correctIndex:1, explanation:"An Operating System manages hardware resources (CPU, memory, storage) and provides services for programs." },
  { id:25, question:"Which network topology connects each device to every other device directly?", options:["Star","Bus","Ring","Mesh"], correctIndex:3, explanation:"In a Mesh topology, every node is connected to every other node, providing high redundancy and fault tolerance." }
];

/* ════════════════════════════════════════════════
   CONSTANTS & STATE
════════════════════════════════════════════════ */
const STORAGE_KEY    = 'samoState';
const QUIZ_DURATION  = 15 * 60 * 1000;   // 15 min in ms
const BASE_POINTS    = 10;
const STREAK_BONUS   = 5;
const LETTERS        = ['A','B','C','D'];

let questions      = [];   // shuffled question list for current session
let state          = {};   // { currentIndex, totalScore, currentStreak, highStreak, answers, completed }
let answered       = false;
let selectedIdx    = null;
let endTime        = 0;
let timerInterval  = null;

/* ════════════════════════════════════════════════
   DOM REFERENCES
════════════════════════════════════════════════ */
const screens       = { home: document.getElementById('screen-home'), quiz: document.getElementById('screen-quiz'), results: document.getElementById('screen-results'), review: document.getElementById('screen-review') };
const badgeScore    = document.getElementById('badge-score');
const badgeStreak   = document.getElementById('badge-streak');
const badgeStreakW  = document.getElementById('badge-streak-wrap');
const badgeTimer    = document.getElementById('badge-timer');
const timerText     = document.getElementById('timer-text');
const qCounter      = document.getElementById('q-counter');
const progFill      = document.getElementById('prog-fill');
const qLabel        = document.getElementById('q-label');
const qText         = document.getElementById('q-text');
const qCard         = document.getElementById('question-card');
const optionsGrid   = document.getElementById('options-grid');
const explanBox     = document.getElementById('explanation-box');
const explanResult  = document.getElementById('explanation-result');
const explanText    = document.getElementById('explanation-text');
const navRow        = document.getElementById('nav-row');
const btnNext       = document.getElementById('btn-next');
const srStatus      = document.getElementById('sr-status');
const streakPopup   = document.getElementById('streak-popup');
const streakPopupT  = document.getElementById('streak-popup-text');

/* ════════════════════════════════════════════════
   UTILITY FUNCTIONS
════════════════════════════════════════════════ */

// Fisher-Yates shuffle — O(n), unbiased
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatTime(ms) {
  const s = Math.max(0, Math.floor(ms / 1000));
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

function showScreen(name) {
  Object.entries(screens).forEach(([k, el]) => {
    el.classList.toggle('active', k === name);
  });
}

/* ════════════════════════════════════════════════
   LOCAL STORAGE
════════════════════════════════════════════════ */
function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...state, endTime }));
  } catch(e) {}
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const s = JSON.parse(raw);
    if (s.completed || !s.endTime || Date.now() > s.endTime) return null;
    return s;
  } catch(e) { return null; }
}

function clearProgress() {
  try { localStorage.removeItem(STORAGE_KEY); } catch(e) {}
}

/* ════════════════════════════════════════════════
   TIMER
════════════════════════════════════════════════ */
function startTimer() {
  stopTimer();
  timerInterval = setInterval(() => {
    const remaining = endTime - Date.now();
    if (remaining <= 5000) {
      badgeTimer.classList.add('urgent', 'anim-timer-urgent');
    }
    if (remaining <= 0) {
      stopTimer();
      endQuiz();
      return;
    }
    timerText.textContent = formatTime(remaining);
  }, 200);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

// PRD Alignment: clearInterval on beforeunload
window.addEventListener('beforeunload', () => clearInterval(timerInterval));

/* ════════════════════════════════════════════════
   PREPARE QUESTIONS
════════════════════════════════════════════════ */
function prepareQuestions() {
  return shuffleArray(quizData).slice(0, 20).map(q => {
    const indexed = q.options.map((opt, i) => ({ opt, i }));
    const shuffled = shuffleArray(indexed);
    return {
      ...q,
      shuffledOptions: shuffled.map(s => s.opt),
      originalIndices: shuffled.map(s => s.i)
    };
  });
}

/* ════════════════════════════════════════════════
   RENDER QUESTION
════════════════════════════════════════════════ */
function renderQuestion() {
  const q = questions[state.currentIndex];
  const total = questions.length;

  answered   = false;
  selectedIdx = null;

  // Progress
  const pct = Math.round((state.currentIndex / total) * 100);
  progFill.style.width = pct + '%';
  progFill.setAttribute('aria-valuenow', pct);  // ARIA update

  // Counter
  qCounter.textContent = `${state.currentIndex + 1} / ${total}`;

  // Question text — animate entry
  qCard.classList.remove('anim-q-enter');
  void qCard.offsetWidth; // reflow trigger
  qCard.classList.add('anim-q-enter');
  qLabel.textContent = `Question ${state.currentIndex + 1}`;
  qText.textContent  = q.question;

  // Build options — event delegation handles clicks
  optionsGrid.innerHTML = '';
  q.shuffledOptions.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = `opt-btn anim-opt-${i} samo-opt-delegated`;
    btn.dataset.index = i;
    btn.setAttribute('data-testid', `option-btn-${i}`);
    btn.innerHTML = `<span class="opt-letter">${LETTERS[i]}</span><span>${opt}</span>`;
    optionsGrid.appendChild(btn);
  });

  // Hide explanation & next button
  explanBox.classList.remove('visible');
  navRow.style.display = 'none';
}

/* ════════════════════════════════════════════════
   EVENT DELEGATION — single listener on optionsGrid
   (PRD Alignment requirement)
════════════════════════════════════════════════ */
optionsGrid.addEventListener('click', function(e) {
  const btn = e.target.closest('.samo-opt-delegated');
  if (!btn || btn.disabled || answered) return;
  const idx = parseInt(btn.dataset.index, 10);
  selectAnswer(idx);
});

/* ════════════════════════════════════════════════
   SELECT ANSWER
════════════════════════════════════════════════ */
function selectAnswer(shuffledIndex) {
  if (answered) return;
  answered    = true;
  selectedIdx = shuffledIndex;

  const q           = questions[state.currentIndex];
  const origIdx     = q.originalIndices[shuffledIndex];
  const isCorrect   = origIdx === q.correctIndex;

  // Disable all buttons
  optionsGrid.querySelectorAll('.samo-opt-delegated').forEach(b => b.disabled = true);

  // Style buttons
  optionsGrid.querySelectorAll('.samo-opt-delegated').forEach((btn, i) => {
    const bOrig = q.originalIndices[i];
    const isCorrectOpt = bOrig === q.correctIndex;

    if (i === shuffledIndex) {
      btn.classList.add(isCorrectOpt ? 'correct' : 'wrong');
      btn.classList.add(isCorrectOpt ? 'anim-correct' : 'anim-wrong');
    } else if (isCorrectOpt) {
      btn.classList.add('reveal');
    }
  });

  // Update score & streak with requestAnimationFrame (PRD Alignment)
  const newStreak = isCorrect ? state.currentStreak + 1 : 0;
  const bonus     = isCorrect ? BASE_POINTS + newStreak * STREAK_BONUS : 0;

  state.totalScore    += bonus;
  state.currentStreak  = newStreak;
  state.highStreak     = Math.max(state.highStreak, newStreak);
  state.answers.push({ questionId: q.id, shuffledIndex, origIdx, isCorrect });

  requestAnimationFrame(() => {
    badgeScore.textContent  = state.totalScore;
    badgeStreak.textContent = state.currentStreak;

    if (state.currentStreak >= 3) {
      badgeStreakW.classList.add('hot');
      badgeStreakW.classList.remove('anim-streak-pop');
      void badgeStreakW.offsetWidth;
      badgeStreakW.classList.add('anim-streak-pop');
    } else {
      badgeStreakW.classList.remove('hot');
    }
  });

  // Streak popup
  if (isCorrect && state.currentStreak >= 3) {
    streakPopupT.textContent = `${state.currentStreak} STREAK!`;
    streakPopup.classList.add('visible', 'anim-popup-in');
    setTimeout(() => streakPopup.classList.remove('visible', 'anim-popup-in'), 1600);
  }

  // Explanation
  const correctOptText = q.shuffledOptions[q.shuffledOptions.findIndex((_, i) => q.originalIndices[i] === q.correctIndex)];
  explanResult.textContent = isCorrect
    ? `Correct! +${bonus} pts`
    : `Incorrect — correct answer: "${correctOptText}"`;
  explanResult.className = 'explanation-result ' + (isCorrect ? 'correct-text' : 'wrong-text');
  explanText.textContent = q.explanation;
  explanBox.classList.add('visible');

  // Screen reader
  srStatus.textContent = isCorrect
    ? `Correct! You earned ${bonus} points. Streak: ${state.currentStreak}.`
    : 'Incorrect answer.';

  // Next button label
  btnNext.innerHTML = state.currentIndex + 1 >= questions.length
    ? 'See Results <span aria-hidden="true">›</span>'
    : 'Next Question <span aria-hidden="true">›</span>';
  navRow.style.display = 'flex';

  // Save progress
  saveProgress();
}

/* ════════════════════════════════════════════════
   NEXT QUESTION
════════════════════════════════════════════════ */
btnNext.addEventListener('click', function() {
  state.currentIndex++;
  if (state.currentIndex >= questions.length) {
    endQuiz();
  } else {
    renderQuestion();
  }
});

/* ════════════════════════════════════════════════
   END QUIZ
════════════════════════════════════════════════ */
function endQuiz() {
  stopTimer();
  state.completed = true;
  clearProgress();
  showResults();
  showScreen('results');
}

/* ════════════════════════════════════════════════
   SHOW RESULTS
════════════════════════════════════════════════ */
function showResults() {
  const correct  = state.answers.filter(a => a.isCorrect).length;
  const total    = state.answers.length;
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

  document.getElementById('stat-score').textContent    = state.totalScore.toLocaleString();
  document.getElementById('stat-accuracy').textContent = accuracy + '%';
  document.getElementById('stat-correct').textContent  = `${correct}/${total}`;
  document.getElementById('stat-streak').textContent   = '×' + state.highStreak;

  let grade = '', gradeColor = '';
  if (accuracy >= 90) { grade = '🏆 Outstanding!'; gradeColor = '#facc15'; }
  else if (accuracy >= 75) { grade = '⭐ Excellent!'; gradeColor = '#22c55e'; }
  else if (accuracy >= 60) { grade = '👍 Good Work!'; gradeColor = '#60a5fa'; }
  else if (accuracy >= 40) { grade = '📚 Keep Practicing'; gradeColor = '#fb923c'; }
  else { grade = '💪 Don\'t Give Up!'; gradeColor = '#f87171'; }

  const resultsGrade = document.getElementById('results-grade');
  resultsGrade.textContent = grade;
  resultsGrade.style.color = gradeColor;

  if (accuracy >= 60) launchConfetti();
}

/* ════════════════════════════════════════════════
   REVIEW
════════════════════════════════════════════════ */
function buildReview() {
  const list = document.getElementById('review-list');
  list.innerHTML = '';

  const answerMap = new Map(state.answers.map(a => [a.questionId, a]));

  questions.forEach((q, qi) => {
    const ans = answerMap.get(q.id);
    const isCorrect = ans ? ans.isCorrect : false;
    const selectedShuffled = ans ? ans.shuffledIndex : -1;

    const item = document.createElement('div');
    item.className = 'review-item glass anim-slide-up';
    item.style.animationDelay = (qi * 0.04) + 's';

    const optsHtml = q.shuffledOptions.map((opt, i) => {
      const origI = q.originalIndices[i];
      const isCorrectOpt = origI === q.correctIndex;
      const isSelected   = i === selectedShuffled;
      let cls = 'review-opt';
      let marker = '';
      if (isCorrectOpt)           { cls += ' correct-opt'; marker = ' ✓'; }
      else if (isSelected && !isCorrectOpt) { cls += ' wrong-opt'; marker = ' ✗'; }

      return `<div class="${cls}"><span class="review-opt-letter">${LETTERS[i]}</span><span>${opt}${marker}</span></div>`;
    }).join('');

    item.innerHTML = `
      <div class="review-item-header">
        <div class="review-icon ${isCorrect ? 'correct-icon' : 'wrong-icon'}">${isCorrect ? '✓' : '✗'}</div>
        <div>
          <div class="review-q-label">Question ${qi + 1}</div>
          <div class="review-q-text">${q.question}</div>
        </div>
      </div>
      <div class="review-opts">${optsHtml}</div>
      <div class="review-explanation">${q.explanation}</div>
    `;
    list.appendChild(item);
  });
}

/* ════════════════════════════════════════════════
   CONFETTI
════════════════════════════════════════════════ */
const CONFETTI_COLORS = ['#9333ea','#a855f7','#ec4899','#f59e0b','#10b981','#3b82f6','#f97316'];

function launchConfetti() {
  const container = document.getElementById('confetti-container');
  container.innerHTML = '';
  for (let i = 0; i < 80; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    const size = 8 + Math.random() * 8;
    el.style.cssText = `
      left: ${Math.random() * 100}%;
      top: -${size}px;
      width: ${size}px;
      height: ${size}px;
      background: ${CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)]};
      border-radius: ${Math.random() > .5 ? '50%' : '2px'};
      animation-duration: ${2.5 + Math.random() * 2}s;
      animation-delay: ${Math.random() * 1.5}s;
    `;
    container.appendChild(el);
  }
  setTimeout(() => { container.innerHTML = ''; }, 5000);
}

/* ════════════════════════════════════════════════
   START FRESH
════════════════════════════════════════════════ */
function startFresh() {
  clearProgress();
  questions = prepareQuestions();
  state = {
    currentIndex:  0,
    totalScore:    0,
    currentStreak: 0,
    highStreak:    0,
    answers:       [],
    completed:     false
  };

  // Reset UI
  badgeScore.textContent  = '0';
  badgeStreak.textContent = '0';
  badgeStreakW.classList.remove('hot');
  badgeTimer.classList.remove('urgent', 'anim-timer-urgent');
  timerText.textContent = '15:00';

  endTime = Date.now() + QUIZ_DURATION;
  saveProgress();
  startTimer();
  renderQuestion();
  showScreen('quiz');
}

/* ════════════════════════════════════════════════
   RESUME
════════════════════════════════════════════════ */
function resumeSession() {
  const saved = loadProgress();
  if (!saved) { startFresh(); return; }

  questions = prepareQuestions();
  state = {
    currentIndex:  saved.currentIndex  || 0,
    totalScore:    saved.totalScore    || 0,
    currentStreak: saved.currentStreak || 0,
    highStreak:    saved.highStreak    || 0,
    answers:       saved.answers       || [],
    completed:     false
  };

  badgeScore.textContent  = state.totalScore;
  badgeStreak.textContent = state.currentStreak;
  endTime = saved.endTime;

  if (Date.now() > endTime - 5000) {
    badgeTimer.classList.add('urgent', 'anim-timer-urgent');
  }

  startTimer();
  renderQuestion();
  showScreen('quiz');
}

/* ════════════════════════════════════════════════
   BUTTON WIRING
════════════════════════════════════════════════ */
document.getElementById('btn-start').addEventListener('click', startFresh);
document.getElementById('btn-resume').addEventListener('click', resumeSession);
document.getElementById('btn-restart').addEventListener('click', startFresh);

document.getElementById('btn-review').addEventListener('click', function() {
  buildReview();
  showScreen('review');
});

document.getElementById('btn-back-review').addEventListener('click', function() {
  showScreen('results');
});

document.getElementById('btn-back-results').addEventListener('click', function() {
  showScreen('results');
});

/* ════════════════════════════════════════════════
   INIT — check for resume on load
════════════════════════════════════════════════ */
(function init() {
  const saved = loadProgress();
  if (saved) {
    document.getElementById('btn-resume').style.display = 'inline-block';
  }
})();
