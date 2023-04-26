// Définir les questions et les réponses
const questions = [
    {
      question: "Quelle est votre couleur préférée ?",
      answers: ["Bleu", "Jaune", "Rouge", "Vert"],
      correctAnswer: "Vert",
      points: 5
    },
    {
      question: "Quel est votre animal préféré ?",
      answers: ["Chat", "Chien", "Oiseau", "Lion"],
      correctAnswer: "Chien",
      points: 5
    },
    {
      question: "Quel est votre plat préféré ?",
      answers: ["Pizza", "Sushi", "Burger", "Poulet rôti"],
      correctAnswer: "Sushi",
      points: 5
    }
  ];
  
  // Définir les variables
  let currentQuestion = 0;
  let userScore = 0;
  
  // Fonction pour afficher la question et les réponses
  function displayQuestion() {
    // Récupérer la question et les réponses
    const question = questions[currentQuestion].question;
    const answers = questions[currentQuestion].answers;
  
    // Afficher la question et les réponses
    $("#question").text(question);
    $("#answers").empty();
    for (let i = 0; i < answers.length; i++) {
      $("#answers").append("<li><button class='answer-button'>" + answers[i] + "</button></li>");
    }
  
    // Cacher le bouton Suivant et le résultat
    $("#next-button").hide();
    $("#result").hide();
  
    // Ajouter un écouteur d'événements pour les boutons de réponse
    $(".answer-button").on("click", function() {
      // Désactiver tous les boutons de réponse
      $(".answer-button").prop("disabled", true);
  
      // Récupérer la réponse de l'utilisateur
      const userAnswer = $(this).text();
  
      // Vérifier la réponse et ajouter des points si c'est correct
      const correctAnswer = questions[currentQuestion].correctAnswer;
      const points = questions[currentQuestion].points;
      if (userAnswer === correctAnswer) {
        userScore += points;
      }
  
      // Afficher le bouton Suivant et le résultat
      $("#next-button").show();
      $("#result").show();
      $("#result").text("Vous avez choisi " + userAnswer + ".");
    });
  }
  // Fonction pour passer à la question suivante
function nextQuestion() {
    // Augmenter le compteur de question
    currentQuestion++;
  
    // Vérifier si toutes les questions ont été posées
    if (currentQuestion >= questions.length) {
      // Afficher le résultat final
      let resultText = "";
      if (userScore === 15) {
        resultText = "Woaawh! Vous avez obtenu " + userScore + " points. Bravo !";
      } else if (userScore === 10) {
        resultText = "Génial! Vous avez obtenu " + userScore + " points. Bravo !";
      } else if (userScore === 5) {
        resultText = "Bravo! Vous avez obtenu " + userScore + " points. Bravo !";
      } else {
        resultText = "Vous avez obtenu " + userScore + " points. Merci d'avoir joué !";
      }
      $("#result").text(resultText);
      $("#next-button").hide();
      $(".answer-button").off("click");
    } else {
      // Afficher la question suivante
      displayQuestion();
    }
  }