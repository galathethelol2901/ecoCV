const questions = [
  {
    question: "Question 1",
    options: [
      { text: "Réponse A", points: 1 },
      { text: "Réponse B", points: 2 },
      { text: "Réponse C", points: 3 },
      { text: "Réponse D", points: 4 },
    ],
  },
  {
    question: "Question 2",
    options: [
      { text: "Réponse A", points: 1 },
      { text: "Réponse B", points: 2 },
      { text: "Réponse C", points: 3 },
      { text: "Réponse D", points: 4 },
    ],
  },
];

const startButton = document.getElementById("start-btn");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const scoreContainer = document.getElementById("score-container");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");

let currentQuestionIndex = 0;
let score = 0;

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
  startButton.style.display = "none";
  questionContainer.style.display = "block";
  showQuestion();
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;
  optionsContainer.innerHTML = "";
  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option.text;
    button.classList.add("btn");
    button.addEventListener("click", () => {
      score += option.points;
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        showScore();
      }
    });
    optionsContainer.appendChild(button);
  });
}

function showScore() {
  questionContainer.style.display = "none";
  scoreContainer.style.display = "block";
  scoreElement.innerText = score;
}

function restartQuiz() {
currentQuestionIndex = 0;
score = 0;
scoreContainer.style.display = "none";
startButton.style.display = "block";
}