const startButton = document.getElementById("start");
const restartButton = document.getElementById("restart");
const questionContainer = document.getElementById("question-container");
const scoreContainer = document.getElementById("score-container");
const questionElement = document.getElementById("question");
const choiceButtons = document.querySelectorAll(".btn");
const scoreElement = document.getElementById("score");
const totalElement = document.getElementById("total");
const nextButton = document.getElementById("next-btn");

let shuffledQuestions, currentQuestionIndex, score;

const questions = [  {    question: "Question 1",    answers: [      { text: "Réponse 1", points: 10 },      { text: "Réponse 2", points: 0 },      { text: "Réponse 3", points: 0 },      { text: "Réponse 4", points: 0 },    ],
  },
  {
    question: "Question 2",
    answers: [
      { text: "Réponse 1", points: 10 },
      { text: "Réponse 2", points: 0 },
      { text: "Réponse 3", points: 0 },
      { text: "Réponse 4", points: 0 },
    ],
  },
  {
    question: "Question 3",
    answers: [
      { text: "Réponse 1", points: 10 },
      { text: "Réponse 2", points: 0 },
      { text: "Réponse 3", points: 0 },
      { text: "Réponse 4", points: 0 },
    ],
  },
];

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
  startButton.style.display = "none";
  shuffledQuestions = questions;
  currentQuestionIndex = 0;
  score = 0;
  scoreElement.innerText = score;
  totalElement.innerText = shuffledQuestions.length * 10;
  questionContainer.style.display = "block";
  nextButton.style.display = "inline-block";
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
  nextButton.style.display = "none";
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
  });
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer, index) => {
    choiceButtons[index].innerText = answer.text;
    choiceButtons[index].dataset.points = answer.points;
    choiceButtons[index].addEventListener("click", selectAnswer);
  });
}

function resetState() {
  choiceButtons.forEach((button) => {
    button.classList.remove("correct");
    button.classList.remove("incorrect");
    button.removeEventListener("click", selectAnswer);
  });
}

function selectAnswer(event) {
  const selectedButton = event.target;
  const points = Number(selectedButton.dataset.points);
  score += points;
  scoreElement.innerText = score;
  Array.from(choiceButtons).forEach((button) => {
    button.classList.add(button.dataset.points > 0 ? "correct" : "incorrect");
  });
  choiceButtons.forEach((button) => {
    button.removeEventListener("click", selectAnswer);
  });
  if (currentQuestionIndex === shuffledQuestions.length - 1) {
    showScore();
  } else {
    currentQuestionIndex++;
    setNextQuestion();
  }
}
function showScore() {
  questionContainer.style.display = "none";
  scoreContainer.style.display = "block";
  const totalPoints = shuffledQuestions.length * 10;
  totalElement.innerText = " sur " + totalPoints;
  const percentage = ((score / totalPoints) * 100).toFixed(2);
  let message = "";
  if (score >= 90) {
    message = "Wonderful! ";
  } else if (score >= 70) {
    message = "Very good! ";
  } else if (score >= 50) {
    message = "Great job! ";
  } else {
    message = "Oops! ";
  }
  questionElement.innerText = message + `You scored ${percentage}%!`;
  scoreElement.innerText = score;
}

function restartQuiz() {
  startButton.style.display = "inline-block";
  scoreContainer.style.display = "none";
  currentQuestionIndex = 0;
  score = 0;
  scoreElement.innerText = score;
  questionContainer.style.display = "none";
  nextButton.style.display = "none";
}