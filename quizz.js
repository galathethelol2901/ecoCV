const startButton = document.getElementById("start");
const restartButton = document.getElementById("restart");
const questionContainer = document.getElementById("question-container");
const scoreContainer = document.getElementById("score-container");
const questionElement = document.getElementById("question");
const choiceButtons = document.querySelectorAll(".btn");
const scoreElement = document.getElementById("score");
const totalElement = document.getElementById("total");
const nextButton = document.getElementById("next-btn");
const resultMessage = document.getElementById("result-message");


let shuffledQuestions, currentQuestionIndex, score;

const questions = [  
  {    
  question: "PARMIS CEST CHOIX, Dans quelle circomstance etes vous arrivez sur ce quizz ?",    
  answers: [      
    { text: "Je me suis perdu dans les méandres de l'Internet, comme d'habitude alors VISITEUR", points: 0 },      
    { text: "Je suis venu voir ce que font mes concurrents pour m'inspirer, mais finalement j'ai préféré passer ce petit quizz", points: 3 },      
    { text: "Je suis tombé sur vos sites j'ai décidé de voir si le dev de ecopro6 est candidat pour mon entreprise ", points: 5 },      
    { text: "Je suis actuellement à la recherche d'un développeur talentueux pour rejoindre mon équipe ", points: 10 },    
     ],
  },
  {
    question: "PARMIS CEST CHOIX, Quelle est votre vision de l'entreprise idéale ?",
    answers: [
      { text: "Une entreprise où tout le monde est payé en tacos ,donc ont dit VISITEUR hein ? ", points: 0 },
      { text: "Une entreprise qui accorde la priorité aux profits avant tout", points: 3 },
      { text: "Une entreprise qui valorise la liberté et l'autonomie de ses employés", points: 5 },
      { text: "Une entreprise qui vise un juste milieu entre profits et bien-être des employés", points: 10 },
    ],
  },
{
    question: "PARMIS CEST CHOIX, Quel niveau d'études recherchez-vous chez vos employés ?",
    answers: [
      { text: "si il a youtube je prend ! donc comme toujours VISITEUR ! ", points: 0 },
      { text: "Master +5 : j'exige un niveau élevé d'études supérieures", points: 3 },
      { text: "Je valorise plus l'expérience professionnelle que le niveau d'études ", points: 5 },
      { text: "je suis ouvert à tous les profils, y compris les autodidactes ", points: 10 },
    ],
  },
  {    
    question: "PARMIS CEST CHOIX, Quel type de salaire proposez-vous ?",    
    answers: [      
      { text: "100 bitcoin soit 262001.6e par mois , ok ok VISITEUR ! ", points: 0 },      
      { text: "Un salaire fixe mensuel, peu importe le travail accompli", points: 3 },      
      { text: "Une rémunération variable basée sur les résultats de l'entreprise", points: 5 },      
      { text: "Une combinaison de salaire fixe et variable en fonction de la performance individuelle et de l'entreprise ", points: 10 },    
       ],
    },
    {    
      question: "PARMIS CEST CHOIX, Quel est votre jeu favori ?",    
      answers: [      
        { text: "le jeu de la vie ! haha comique ou VISITEUR ?", points: 0 },      
        { text: "Les jeux vidéo ne sont pas vraiment ma tasse de thé, mais je reconnais leur potentiel pour se détendre.", points: 3 },      
        { text: "J'adore les jeux open-world pour leur liberté de création et leur capacité à me permettre d'explorer de vastes univers virtuels.", points: 5 },      
        { text: "J'aime les jeux de stratégie et de réflexion pour leur complexité et leur défi intellectuel", points: 10 },    
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
function showResultMessage() {
  const totalPoints = shuffledQuestions.length * 10;
  const percentage = Math.round((score / totalPoints) * 50);
  let message = "";
  if (percentage <= 15) {
    message = " visiblement on est pas fait pour travailler ensemble MAIS on peut toujours ce suivre sur les reseaux les liens sont en bas de page";
  } else if (percentage <= 25) {
    message = "on a des point commain , peut etre pas sufisament mais un entretiens telephonique n engage a rien alors hesiter pas a apeller";
  } else if (percentage <= 35) {
    message = "je comprend vos attente et vous comprenez les miennes prenon contact sans plus attendre !";
  } else {
    message = "on est fait pour ce rencomtrer on a les meme valeur alors autant ne pas perdre de temps contacter moi rapidement !";
  }
  resultMessage.innerText = message;
}

function showScore() {
  questionContainer.style.display = "none";
  scoreContainer.style.display = "block";
  const totalPoints = shuffledQuestions.length * 10;
  totalElement.innerText = " sur " + totalPoints;

  let message;
  if (score >= 50) {
    message = "";
  } else if (score >= 25) {
    message = "";
  } else if (score >= 15) {
    message = "";
  } else {
    message = "";
  }

  scoreElement.innerText = score + " points. " + message;
  showResultMessage(); // appel de la fonction pour afficher le message personnalisé
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreElement.innerText = score;
  scoreContainer.style.display = "none";
  questionContainer.style.display = "block";
  setNextQuestion();
}
