const startButton = document.getElementById("start");
const restartButton = document.getElementById("restart");
const questionContainer = document.getElementById("question-container");
const scoreContainer = document.getElementById("score-container");
const questionElement = document.getElementById("question");
const choiceButtons = document.querySelectorAll(".btn");
const scoreElement = document.getElementById("score");
const totalElement = document.getElementById("total");

let questions = [
  {
    question: "Dans quelle ville se trouve la tour Eiffel ?",
    answers: [
      { text: "Londres", points: 0 },
      { text: "Berlin", points: 0 },
      { text: "Paris", points: 10 },
      { text: "Madrid", points: 0 },
    ],
  },
  {
    question: "Quelle est la capitale de l'Espagne ?",
    answers: [
      { text: "Londres", points: 0 },
      { text: "Berlin", points: 0 },
      { text: "Paris", points: 0 },
      { text: "Madrid", points: 10 },
    ],
  },
];

let shuffledQuestions, currentQuestionIndex, score;

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
  startButton.style.display = "none";
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  score = 0;
  scoreElement.innerText = score;
  totalElement.innerText = shuffledQuestions.length * 10;
  questionContainer.style.display = "block";
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer, index) => {
    choiceButtons[index].innerText = answer.text;
    choiceButtons[index].addEventListener("click", () => {
      selectAnswer(answer.points);
    });
  });
}

function resetState() {
  choiceButtons.forEach((button) => {
    button.classList.remove("correct");
    button.classList.remove("incorrect");
    button.removeEventListener("click", () => {});
  });
}

function selectAnswer(points) {
  score += points;
  scoreElement.innerText = score;
  Array.from(choiceButtons).forEach((button) => {
    button.classList.add(button.dataset.correct ? "correct" : "incorrect");
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
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreElement.innerText = score;
  totalElement.innerText = shuffledQuestions.length * 10;
  scoreContainer.style.display = "none";
  questionContainer.style.display = "block";
  shuffledQuestions = questions.slice().sort(() => Math.random() - 0.5);
  setNextQuestion();
}