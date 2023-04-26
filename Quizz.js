// On récupère toutes les questions et le bouton "Suivant"
const questions = document.querySelectorAll('.question');
const nextButton = document.querySelector('.next-button');

// On cache toutes les questions sauf la première
for (let i = 1; i < questions.length; i++) {
  questions[i].classList.remove('active');
}

// On ajoute un écouteur d'événement sur le bouton "Suivant"
nextButton.addEventListener('click', showNextQuestion);

// Fonction pour afficher la prochaine question
function showNextQuestion() {
  // On trouve la question actuellement active
  const currentQuestion = document.querySelector('.question.active');

  // On trouve la réponse sélectionnée par l'utilisateur
  const selectedAnswer = currentQuestion.querySelector('input:checked');

  // Si l'utilisateur n'a pas sélectionné de réponse, on ne fait rien
  if (!selectedAnswer) {
    return;
  }

  // On affiche la réponse sélectionnée par l'utilisateur
  const selectedAnswerText = selectedAnswer.labels[0].textContent;
  const selectedAnswerContainer = currentQuestion.querySelector('.selected-answer');
  selectedAnswerContainer.textContent = 'Vous avez choisi : ' + selectedAnswerText;

  // On cache la question actuellement active et on affiche la prochaine question
  currentQuestion.classList.remove('active');
  const nextQuestion = currentQuestion.nextElementSibling;
  if (nextQuestion) {
    nextQuestion.classList.add('active');
  }
}