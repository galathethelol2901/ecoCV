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
  question: "Parmi ces choix, comment êtes-vous arrivé sur ce quiz ?",    
  answers: [      
    { text: "Je me suis perdu dans les méandres de l'Internet, comme d'habitude, alors on va dire 'visiteur'.", points: 0 },           
    { text: "Je suis tombé sur votre site et j'ai décidé de voir si le développeur d'ECOPROG6 était candidat pour mon entreprise.", points: 5 },      
    { text: "Je suis actuellement à la recherche d'un développeur talentueux pour rejoindre mon équipe ", points: 10 }, 
    { text: "Je suis venu voir ce que font mes concurrents pour m'inspirer et, finalement, j'ai préféré passer ce petit quiz.", points: 3 },    
     ],
  },
  {
    question: "Parmi ces choix, quelle est votre vision de l'entreprise idéale ?",
    answers: [
      { text: "Une entreprise de production de cigarettes, avec une stratégie de marketing agressive pour cibler les jeunes. On dit 'visiteur', j'imagine ?", points: 0 },
      { text: "Une entreprise qui accorde la priorité absolue aux profits, l'écologie et le bien-être social étant relégués au second plan.", points: 3 },
      { text: "Une entreprise qui vise un juste milieu entre profits et bien-être des employés ,éthique et responsable. ", points: 10 },
      { text: "Une entreprise qui valorise la liberté et l'autonomie de ses employés, tant que cela fonctionne !? ", points: 5 }
    ],
  },
{
    question: "Parmi ces choix, quel profil recherchez-vous chez vos employés ?",
    answers: [
      { text: "Si quelqu'un peut me battre à Mario Kart, il est clairement qualifié pour travailler avec moi... Ok, ok, 'visiteur' !", points: 0 },
      { text: "Je suis ouvert à tous les profils, y compris les autodidactes, après vérification de leurs compétences dans le domaine.", points: 10 },
      { text: "Master +5 : j'exige un niveau élevé d'études supérieures, indicateur important de la capacité à assimiler des connaissances", points: 3 },
      { text: "Je valorise plus l'expérience professionnelle que le niveau d'études, les compétences pratiques acquises sont fondamentales.", points: 5 },
    ],
  },
  {    
    question: "Parmi ces choix, Quel type de salaire proposez-vous ?",    
    answers: [      
      { text: "100 bitcoins, soit 262001.6 € par mois, et un café. Bon, on commence à comprendre que les réponses 'VISITEUR' rapportent 0 point !", points: 0 },      
      { text: "Un salaire fixe mensuel, peu importe le travail accompli, défini en amont selon le poste et les compétences.", points: 5 },      
      { text: "Une rémunération variable basée sur les résultats de l'entreprise, on gagne ensemble ou on perd ensemble.", points: 3 },      
      { text: "Une combinaison de salaire fixe et variable en fonction de la performance individuelle et de l'entreprise", points: 10 },    
       ],
    },
    {    
      question: "Parmi ces choix, quel est votre jeu favori ?",    
      answers: [      
        { text: "VISITEUR, pour la cinquième fois depuis le début de ce quiz, je me suis bien amusé. On fait quoi maintenant ?", points: 0 },  
        { text: "J'aime les jeux de stratégie et de réflexion pour leur complexité et leur défi intellectuel. J'aime également les jeux de société ou de cartes", points: 10 },     
        { text: "Les jeux vidéo ne sont pas ma tasse de thé, mais je reconnais leur potentiel pour se détendre. Cependant, je n'ai pas vraiment le temps de jouer", points: 3 },      
        { text: "J'adore les jeux open-world pour leur liberté de création et leur capacité à me permettre d'explorer de vastes univers virtuels.", points: 5 },      
         
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
    message = "Il semble que nos profils ne soient pas très compatibles pour travailler ensemble. Cependant, nous pouvons toujours nous suivre sur les réseaux sociaux. Dans le CV, il y a tous les liens.;)";
  } else if (percentage <= 25) {
    message =  "Nous avons quelques points en commun, bien que peut-être pas suffisamment. Un entretien téléphonique ne coûte rien, alors n'hésitez pas à m'appeler. ";
  } else if (percentage <= 35) {
    message =  "Je comprends vos attentes, et vous comprenez les miennes. Ne perdons pas de temps, prenons contact dès maintenant !";
  } else {
    message = "Nous avons les mêmes valeurs et sommes faits pour nous rencontrer. Ne perdons pas de temps, contactez-moi rapidement !";
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
