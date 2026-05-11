const score = Number(localStorage.getItem("score"));

const total = Number(localStorage.getItem("total"));

const scoreElement = document.getElementById("score");

const resultText = document.getElementById("resultText");

const percentElement = document.getElementById("percent");

const progressCircle = document.querySelector(".circle-progress");

/* SCORE */

scoreElement.innerHTML = `${score} / ${total}`;

/* PERCENT */

const percent = Math.round((score / total) * 100);

percentElement.innerHTML = `${percent}%`;

/* CIRCLE */

const radius = 70;

const circumference = 2 * Math.PI * radius;

progressCircle.style.strokeDasharray = circumference;

const offset = circumference - (percent / 100) * circumference;

progressCircle.style.strokeDashoffset = offset;

/* RESULT TEXT */

if (percent >= 80) {
  resultText.innerHTML = "Отличный результат!";
} else if (percent >= 50) {
  resultText.innerHTML = "Хорошая работа!";
} else {
  resultText.innerHTML = "Попробуйте пройти тест еще раз.";
}
