const questions = [
    {
      question: "laquel de ces qualiter prefere vous a votre developper ?",
      answers: [
        { text: "les etudes ya que ça de vrais !", team: 1 },
        { text: "la motivation ,ca deplace des montagne !", team: 2 },
        { text: "le salaire ,plus c est cher plus c est fort ;)", team: 3 },
      ],
    },
    {
      question: "la meilleur entreprise possible selon vous ?",
      answers: [
        { text: "celle ou y fait bon vivre !", team: 2 },
        { text: "seul les effort compte pas de repos !", team: 1 },
        { text: "on est tous des copain hehe", team: 3 },
      ],
    },
    {
      question: "l informatique selon toi c est ?",
      answers: [
        { text: "du bluff , vive l adsl !", team: 1 },
        { text: "le futur , welcome to 2222", team: 2 },
        { text: "obscure , genre pillule bleu et pillule rouge", team: 3 },
      ],
    },
  {
    question: "quelle est la meilleur replique de harry potter ?",
    answers: [
      { text: "tu est un sorcier harry ", team: 1 },
      { text: "tu est une espionne triple conne ", team: 2 },
      { text: "avduukuduvru", team: 3 },
    ],
  },
{
    question: "plouf plouf?",
    answers: [
      { text: "une boule en or", team: 1 },
      { text: "le dauphin", team: 2 },
      { text: "les crotte a ma femme !", team: 3 },
    ],
  },
];
  
  const teams = {
    1: "équipe 1",
    2: "équipe 2",
    3: "équipe 3",
  };
  
  let currentQuestion = 0;
  const teamScores = {
    1: 0,
    2: 0,
    3: 0,
  };
  
  // Fonction pour afficher la question et les réponses
  function displayQuestion() {
    // Récupérer la question et les réponses
    const question = questions[currentQuestion].question;
    const answers = questions[currentQuestion].answers;
  
    // Afficher la question et les réponses
    $("#question").text(question);
    $("#answers").empty();
    for (let i = 0; i < answers.length; i++) {
      const answer = answers[i];
      $("#answers").append(
        `<li><button class="answer-button" data-team="${answer.team}">${answer.text}</button></li>`
      );
    }
  
    // Cacher le bouton Suivant et le résultat
    $("#next-button").hide();
    $("#result").hide();
  
    // Ajouter un écouteur d'événements pour les boutons de réponse
    $(".answer-button").on("click", function () {
      // Désactiver tous les boutons de réponse
      $(".answer-button").prop("disabled", true);
  
      // Récupérer l'équipe de la réponse de l'utilisateur
      const userTeam = $(this).data("team");
  
      // Ajouter 1 point à l'équipe de la réponse de l'utilisateur
      teamScores[userTeam]++;
  
      // Afficher le bouton Suivant
      $("#next-button").show();
    });
  }
  
  // Fonction pour passer à la question suivante
  function nextQuestion() {
    // Augmenter le compteur de question
    currentQuestion++;
  
    // Vérifier si toutes les questions ont été posées
    if (currentQuestion >= questions.length) {
      // Trouver l'équipe ayant le score le plus élevé
      let highestTeam = 1;
      for (const team in teamScores) {
        if (teamScores[team] > teamScores[highestTeam]) {
          highestTeam = team;
        }
      }
  
      // Afficher le message avec l'équipe ayant le score le plus élevé
      const message = `Vous êtes l'équipe ${highestTeam} !`;
      $("#result").text(message);
      $("#result").show();
  
      // Cacher le bouton Suivant
      $("#next-button").hide();
  
      // Désactiver les boutons de réponse
      $(".answer-button").prop("disabled", true);
    } else {
    // Afficher la prochaine question
    displayQuestion();
    }
    }
    
    // Ajouter un écouteur d'événements pour le bouton Suivant
    $("#next-button").on("click", nextQuestion);
    
    // Afficher la première question
    displayQuestion();