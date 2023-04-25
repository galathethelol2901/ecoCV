<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quizz app ecoprog6</title>
    <link rel="stylesheet" href="Quizz.css">
    <script defer src="Quizz.js"></script>
</head>
<body>
    <header>
        </header> 
<div class="container">
    <div id="container-text" class="container-text">
    <h2>Ecoprog6 le QUIZZ ! </h2>
    <p>5 question pas de mauvaise reponse !</p>
</div>

<div class="question">
  <h2>Question 1: Quelle est votre couleur préférée ?</h2>
  <input type="radio" id="option1" name="color" value="rouge">
  <label for="option1">Rouge</label><br>
  <input type="radio" id="option2" name="color" value="bleu">
  <label for="option2">Bleu</label><br>
  <input type="radio" id="option3" name="color" value="vert">
  <label for="option3">Vert</label><br>
  <p id="result"></p>
  <button onclick="nextQuestion()">Suivant</button>
</div>
</body>
</html>