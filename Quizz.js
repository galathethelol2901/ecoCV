var question_actuelle = 1;
function suivant() {
  if (question_actuelle == 1) {
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "block";
    question_actuelle = 2;
  } else if (question_actuelle == 2) {
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "block";
    question_actuelle = 3;
  }
}
function soumettre() {
  // récupérer les réponses des questions
  var reponse1 = document.querySelector('input[name="q1"]:checked').value;
  var reponse2 = document.querySelector('input[name="q2"]:checked').value;
  var reponse3 = document.querySelector('input[name="q3"]:checked').value;
  
  // faire quelque chose avec les réponses (par exemple les envoyer à un serveur)
  console.log("Réponse 1 : " + reponse1);
  console.log("Réponse 2 : " + reponse2);
  console.log("Réponse 3 : " + reponse3);
}