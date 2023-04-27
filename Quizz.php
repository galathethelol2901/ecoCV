<!DOCTYPE html>
<html>
<head>
	<title>Mon quiz</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="">
  
</head>
<body>
<div id="quiz-container">
  <h2>Question 1 : Quelle est la capitale de la France ?</h2>
  <button id="answer-a">Londres</button>
  <button id="answer-b">Berlin</button>
  <button id="answer-c">Paris</button>
  <button id="answer-d">Madrid</button>
  <button id="next-btn" style="display: none;">Suivant</button>
</div>

<script>
  const quizContainer = document.getElementById("quiz-container");
  const answerButtons = quizContainer.querySelectorAll("button");
  const nextButton = quizContainer.querySelector("#next-btn");

  answerButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Vérifie si la réponse est correcte
      if (button.id === "answer-c") {
        quizContainer.innerHTML = `
          <h2>Bonne réponse !</h2>
          <button id="next-btn">Suivant</button>
        `;
      } else {
        quizContainer.innerHTML = `
          <h2>Mauvaise réponse...</h2>
          <button id="next-btn">Suivant</button>
        `;
      }

      nextButton.style.display = "block";
    });
  });

  nextButton.addEventListener("click", () => {
    quizContainer.innerHTML = `
      <h2>Question 2 : Combien de planètes dans notre système solaire ?</h2>
      <button id="answer-a">4</button>
      <button id="answer-b">7</button>
      <button id="answer-c">8</button>
      <button id="answer-d">12</button>
      <button id="next-btn" style="display: none;">Suivant</button>
    `;

    answerButtons.forEach((button) => {
      button.addEventListener("click", () => {
        if (button.id === "answer-c") {
          quizContainer.innerHTML = `
            <h2>Bonne réponse !</h2>
            <button id="next-btn">Suivant</button>
          `;
        } else {
          quizContainer.innerHTML = `
            <h2>Mauvaise réponse...</h2>
            <button id="next-btn">Suivant</button>
          `;
        }

        nextButton.style.display = "block";
      });
    });
  });
</script>
</body>
</html>