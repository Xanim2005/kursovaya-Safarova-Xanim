const params = new URLSearchParams(window.location.search);

const subject = params.get("subject");

const classNumber = params.get("class");

const level = params.get("level");

const testIndex = params.get("test");

/* QUESTIONS */

let questions;

/* ALGEBRA */

if (subject === "algebra") {
  questions = algebraQuestions[classNumber][level][testIndex];
}

/* GEOMETRY */

if (subject === "geometry") {
  questions = geometryQuestions[classNumber][level][testIndex];
}

/* ARITHMETIC */

if (subject === "arithmetic") {
  questions = arithmeticQuestions[classNumber][level][testIndex];
}

/* LOGIC */

if (subject === "logic") {
  questions = logicQuestions[classNumber][level][testIndex];
}

/* CHECK */

if (!questions) {
  alert("Вопросы не найдены");
}

/* ELEMENTS */

const questionElement = document.getElementById("question");

const answerButtons = document.querySelectorAll(".answer-btn");

const nextBtn = document.getElementById("nextBtn");

const progress = document.querySelector(".progress");

const questionNumber = document.getElementById("question-number");

/* VARIABLES */

let currentQuestion = 0;

let score = 0;

/* SHOW QUESTION */

function showQuestion() {
  resetState();

  const current = questions[currentQuestion];

  questionNumber.innerHTML = `Вопрос ${currentQuestion + 1}`;

  questionElement.innerHTML = current.question;

  answerButtons.forEach((button, index) => {
    button.innerHTML = current.answers[index];

    button.onclick = () => selectAnswer(index);
  });

  updateProgress();
}

/* RESET */

function resetState() {
  answerButtons.forEach((button) => {
    button.disabled = false;

    button.classList.remove("correct", "wrong");
  });
}

/* ANSWER */

function selectAnswer(index) {
  const correctIndex = questions[currentQuestion].correct;

  if (index === correctIndex) {
    score++;

    answerButtons[index].classList.add("correct");
  } else {
    answerButtons[index].classList.add("wrong");

    answerButtons[correctIndex].classList.add("correct");
  }

  answerButtons.forEach((button) => {
    button.disabled = true;
  });
}

/* NEXT */

nextBtn.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    finishTest();
  }
});

/* FINISH */

function finishTest() {
  localStorage.setItem("score", score);

  localStorage.setItem("total", questions.length);

  window.location.href = "result.html";
}

/* PROGRESS */

function updateProgress() {
  const percent = ((currentQuestion + 1) / questions.length) * 100;

  progress.style.width = `${percent}%`;
}

/* START */

showQuestion();
