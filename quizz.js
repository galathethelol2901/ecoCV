// Récupération des éléments HTML
const questionsContainer = document.getElementById("questions-container");
const resultContainer = document.getElementById("result-container");
const startButton = document.getElementById("start-button");
const submitButton = document.getElementById("submit-button");
const restartButton = document.getElementById("restart-button");
const gameOverButton = document.getElementById("game-over-button");

// Définition des questions et des réponses possibles avec leur score respectif
const questions = [
  {
    question: "Question 1 ?",
    answers: [
      { text: "Réponse A", score: 5 },
      { text: "Réponse B", score: 10 },
      { text: "Réponse C", score: 15 },
      { text: "Réponse D", score: 20 },
    ],
  },
  {
    question: "Question 2 ?",
    answers: [
      { text: "Réponse A", score: 5 },
      { text: "Réponse B", score: 10 },
      { text: "Réponse C", score: 15 },
      { text: "Réponse D", score: 20 },
    ],
  },
  // Ajouter d'autres questions ici
 { 
    question: "Question 3 ?",
  answers: [
    { text: "Réponse A", score: 5 },
    { text: "Réponse B", score: 10 },
    { text: "Réponse C", score: 15 },
    { text: "Réponse D", score: 20 },
  ],
},
{
    question: "Question 4 ?",
answers: [
  { text: "Réponse A", score: 5 },
  { text: "Réponse B", score: 10 },
  { text: "Réponse C", score: 15 },
  { text: "Réponse D", score: 20 },
],
},
{
    question: "Question 5 ?",
answers: [
  { text: "Réponse A", score: 5 },
  { text: "Réponse B", score: 10 },
  { text: "Réponse C", score: 15 },
  { text: "Réponse D", score: 20 },
],
},
];

let currentQuestionIndex = 0;
let score = 0;

// Cache les boutons "submit" et "restart" jusqu'à la fin du quiz
submitButton.style.display = "none";
restartButton.style.display = "none";
gameOverButton.style.display = "none";

// Attache un événement de clic au bouton "Start" pour lancer le quiz
startButton.addEventListener("click", () => {
  startButton.style.display = "none";
  showNextQuestion();
});

// Affiche la question suivante
function showNextQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  const answersHtml = currentQuestion.answers
    .map(
      (answer, index) =>
        `<li><button class="answer-button" data-index="${index}">${answer.text}</button></li>`
    )
    .join("");

  questionsContainer.innerHTML = `
    <h2>${currentQuestion.question}</h2>
    <ul>${answersHtml}</ul>
  `;

  // Attache un événement de clic à chaque bouton de réponse
  const answerButtons = document.querySelectorAll(".answer-button");
  answerButtons.forEach((button) =>
    button.addEventListener("click", handleAnswerButtonClick)
  );
}

// Traite la réponse à une question
function handleAnswerButtonClick(event) {
  const answerIndex = parseInt(event.target.getAttribute("data-index"));
  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = currentQuestion.answers[answerIndex];

  score += selectedAnswer.score;
  currentQuestionIndex++;

  // Si toutes les questions ont été posées, affiche le résultat
  if (currentQuestionIndex === questions.length) {
    showResult();
  } else {
    showNextQuestion();
  }
}

// Affiche le résultat final
function showResult() {
  questionsContainer.style.display = "none";
  submitButton.style.display = "none";
  restartButton.style.display = "block";

  const percentage = Math.round((score / 50) * 100);
  resultContainer.innerHTML = `<h2>Votre score est de ${percentage}%</h2>`;
}

// Attache un événement de clic au bouton de redémarrage
restartButton.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  questionsContainer.style.display = "block";
  submitButton.style.display = "block";
  restartButton.style.display = "none";
  showNextQuestion();
});

// Affiche la première question
showNextQuestion();