// Récupérer le formulaire de quiz et le div pour afficher le score
const quizForm = document.getElementById("quiz-form");
const scoreDisplay = document.getElementById("score");

// Initialiser les variables pour stocker les réponses de l'utilisateur et le score total
let userResponses = [];
let totalScore = 0;

// Ajouter un écouteur d'événements pour soumettre le formulaire
quizForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Empêcher la soumission du formulaire par défaut

    // Récupérer les réponses de l'utilisateur et les stocker dans un tableau
    userResponses.push(quizForm.elements.q1.value);
    userResponses.push(quizForm.elements.q2.value);
    userResponses.push(quizForm.elements.q3.value);

    // Calculer le score total en fonction des réponses de l'utilisateur
    for (let i = 0; i < userResponses.length; i++) {
        if (userResponses[i] === "Vert") {
            totalScore += 1;
        } else if (userResponses[i] === "Chien") {
            totalScore += 2;
        } else if (userResponses[i] === "Sushi") {
            totalScore += 3;
        }
    }

    // Afficher le score final à l'utilisateur
    scoreDisplay.textContent = "Votre score est de " + totalScore + " points.";
});