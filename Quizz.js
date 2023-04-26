function nextQuestion() {
    var radios = document.getElementsByName("color");
    var selectedOption;
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        selectedOption = radios[i].value;
        break;
      }
    }
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
  function checkAnswer(questionNumber) {
    var radios = document.getElementsByName("animal");
    var selectedOption;
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        selectedOption = radios[i].value;
        break;
      }
    }
    var result = document.getElementById("result" + questionNumber);
    if (selectedOption === "chien") {
      result.innerHTML = "Vous avez choisi le chien.";
    } else if (selectedOption === "chat") {
      result.innerHTML = "Vous avez choisi le chat.";
    } else if (selectedOption === "oiseau") {
      result.innerHTML = "Vous avez choisi l'oiseau.";
    } else {
      result.innerHTML = "Vous n'avez rien choisi.";
    }
  }
  function checkAnswer(questionNumber) {
    var radios = document.getElementsByName("food");
    var selectedOption;
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        selectedOption = radios[i].value;
        break;
      }
    }
    var result = document.getElementById("result" + questionNumber);
    if (selectedOption === "pizza") {
      result.innerHTML = "Vous avez choisi la pizza.";
    } else if (selectedOption === "spaghetti") {
      result.innerHTML = "Vous avez choisi les spaghetti.";
    } else if (selectedOption === "burger") {
      result.innerHTML = "Vous avez choisi le burger.";
    } else {
      result.innerHTML = "Vous n'avez rien choisi.";
    }
  }
  
  
  
  
  
  
  