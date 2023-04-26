const questions = [
    {
      question: "Quelle est votre couleur préférée ?",
      answers: [
        { text: "Bleu", team: 1 },
        { text: "Jaune", team: 2 },
        { text: "Rouge", team: 3 },
      ],
    },
    {
      question: "Quel est votre animal préféré ?",
      answers: [
        { text: "Chat", team: 2 },
        { text: "Chien", team: 1 },
        { text: "Oiseau", team: 3 },
      ],
    },
    {
      question: "Quel est votre plat préféré ?",
      answers: [
        { text: "Pizza", team: 1 },
        { text: "Sushi", team: 2 },
        { text: "Burger", team: 3 },
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