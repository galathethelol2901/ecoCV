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

<div class="question">
  <h2>Question 1: Quel est votre animal préféré ?</h2>
  <input type="radio" id="option1" name="animal" value="chien">
  <label for="option1">Chien</label><br>
  <input type="radio" id="option2" name="animal" value="chat">
  <label for="option2">Chat</label><br>
  <input type="radio" id="option3" name="animal" value="oiseau">
  <label for="option3">Oiseau</label><br>
  <p id="result1"></p>
  <button onclick="checkAnswer(1)">Suivant</button>
</div>


<div class="question">
  <h2>Question 2: Quel est votre plat préféré ?</h2>
  <input type="radio" id="option1" name="food" value="pizza">
  <label for="option1">Pizza</label><br>
  <input type="radio" id="option2" name="food" value="spaghetti">
  <label for="option2">Spaghetti</label><br>
  <input type="radio" id="option3" name="food" value="burger">
  <label for="option3">Burger</label><br>
  <p id="result2"></p>
  <button onclick="checkAnswer(2)">Suivant</button>
</div>

</body>
</html>