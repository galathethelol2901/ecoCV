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

const questions = [  
  {    
  question: "Quelle est votre vision de l'entreprise idéale ?",    
  answers: [      
    { text: "visiteur", points: 0 },      
    { text: "Une entreprise qui accorde la priorité aux profits avant tout", points: 5 },      
    { text: "Une entreprise qui valorise la liberté et l'autonomie de ses employés", points: 10 },      
    { text: "Une entreprise qui vise un juste milieu entre profits et bien-être des employés", points: 20 },    
     ],
  },
{
    question: " Quel niveau d'études recherchez-vous chez vos employés ?",
    answers: [
      { text: "visiteur ", points: 0 },
      { text: "Master +5 : j'exige un niveau élevé d'études supérieures", points: 5 },
      { text: "Je valorise plus l'expérience professionnelle que le niveau d'études ", points: 10 },
      { text: "je suis ouvert à tous les profils, y compris les autodidactes ", points: 20 },
    ],
  },
  {    
    question: "salaire?",    
    answers: [      
      { text: "visiteur", points: 0 },      
      { text: "10 bitcoin : une rémunération basée sur une crypto-monnaie pourrait être intéressante ", points: 5 },      
      { text: "une rémunération qui tient compte des compétences, de l'expérience et des réalisations de l'employé", points: 10 },      
      { text: "une rémunération compétitive par rapport aux normes de l'industrie ", points: 20 },    
       ],
    },
    {    
      question: "jeux favorit  ?",    
      answers: [      
        { text: "visiteur", points: 0 },      
        { text: "J'aime jouer à des jeux pour me détendre", points: 5 },      
        { text: "J'aime les jeux de réflexion pour leur complexité", points: 10 },      
        { text: "J'aime les jeux open-world pour leur liberté de création", points: 20 },    
         ],
      },
];

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
  totalElement.innerText = totalPoints;
  scoreElement.innerText = score;
  const percentage = ((score / totalPoints) * 100).toFixed(2);
  questionElement.innerText = `Vous avez obtenu ${percentage}% des points !`;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreElement.innerText = score;
  scoreContainer.style.display = "none";
  questionContainer.style.display = "block";
  setNextQuestion();
}