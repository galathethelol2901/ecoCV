let questions = document.querySelectorAll('.question');
let currentQuestion = 0;

function showNextQuestion() {
  questions[currentQuestion].classList.remove('active');
  currentQuestion++;
  if (currentQuestion < questions.length) {
    questions[currentQuestion].classList.add('active');
  } else {
    // Toutes les questions ont été posées
    displayResult();
  }
}

function displayResult() {
  let selectedAnswers = document.querySelectorAll('input:checked');
  let result = document.getElementById('result');
  if (selectedAnswers.length === 5) {
    // Toutes les questions ont une réponse sélectionnée
    let animal = selectedAnswers[0].value;
    let food = selectedAnswers[1].value;
    let season = selectedAnswers[2].value;
    let color = selectedAnswers[3].value;
    let movie = selectedAnswers[4].value;
    result.innerHTML = `Vous avez choisi : ${animal}, ${food}, ${season}, ${color}, ${movie}.`;
  } else {
    result.innerHTML = 'Veuillez répondre à toutes les questions.';
  }
}