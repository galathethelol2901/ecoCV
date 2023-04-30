const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const choiceElements = document.querySelectorAll(".btn");
const nextButton = document.getElementById("next-btn");
const startButton = document.getElementById("start");
const scoreContainer = document.getElementById("score-container");
const scoreElement = document.getElementById("score");
const totalElement = document.getElementById("total");
let shuffledQuestions, currentQuestionIndex, score;

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startQuiz() {
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  score = 0;
  quizContainer.style.display = "block";
  scoreContainer.style.display = "none";
  startButton.style.display = "none";
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.choices.forEach((choice, index) => {
    choiceElements[index].innerText = choice;
    choiceElements[index].addEventListener("click", () => {
      if (choice === question.answer) {
        score += 10;
      }
      choiceElements.forEach(choice => {
        choice.disabled = true;
      });
      showAnswer();
    });
  });
}

function showAnswer() {
  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const correctIndex = currentQuestion.choices.indexOf(currentQuestion.answer);
  choiceElements[correctIndex].classList.add("correct");
  if (score < shuffledQuestions.length * 10) {
    nextButton.style.display = "block";
  } else {
    showScore();
  }
}

function resetState() {
  nextButton.style.display = "none";
  choiceElements.forEach(choice => {
    choice.classList.remove("correct");
    choice.disabled = false;
  });
}

function showScore() {
  quizContainer.style.display = "none";
  scoreContainer.style.display = "block";
  const totalPoints = shuffledQuestions.length * 10;
  totalElement.innerText = "sur " + totalPoints;
  const percentage = ((score / totalPoints) * 100).toFixed(2);
  let message = "";
  if (score >= 90) {
    message = "Bravo ! ";
  } else if (score >= 70) {
    message = "Très bien ! ";
  } else if (score >= 50) {
    message = "Bon travail ! ";
  } else {
    message = "Dommage ! ";
  }
  scoreElement.innerText = message + `Vous avez obtenu ${percentage}% !`;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreElement.innerText = score;
  scoreContainer.style.display = "none";
  quizContainer.style.display = "block";
  startButton.style.display = "block";
  setNextQuestion();
}

document.getElementById("restart").addEventListener("click", restartQuiz);