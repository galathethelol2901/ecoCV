function nextQuestion() {
    // Récupère toutes les options radio pour cette question
    var radios = document.getElementsByName("color");
  
    // Vérifie quelle option est sélectionnée
    var selectedOption;
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        selectedOption = radios[i].value;
        break;
      }
    }
  
    // Affiche le résultat correspondant
    var result = document.getElementById("result");
    if (selectedOption === "rouge") {
      result.innerHTML = "Vous avez choisi le rouge.";
    } else if (selectedOption === "bleu") {
      result.innerHTML = "Vous avez choisi le bleu.";
    } else if (selectedOption === "vert") {
      result.innerHTML = "Vous avez choisi le vert.";
    } else {
      result.innerHTML = "Vous n'avez rien choisi.";
    }
  }