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

<div id="quiz-container">
  <div class="question active">
    <h2>Question 1: Quel est votre animal préféré ?</h2>
    <input type="radio" id="option1" name="animal" value="chien">
    <label for="option1">Chien</label><br>
    <input type="radio" id="option2" name="animal" value="chat">
    <label for="option2">Chat</label><br>
    <input type="radio" id="option3" name="animal" value="oiseau">
    <label for="option3">Oiseau</label><br>
    <button class="next-button" onclick="showNextQuestion()">Suivant</button>
  </div>
  <div class="question">
    <h2>Question 2: Quel est votre plat préféré ?</h2>
    <input type="radio" id="option4" name="food" value="pizza">
    <label for="option4">Pizza</label><br>
    <input type="radio" id="option5" name="food" value="spaghetti">
    <label for="option5">Spaghetti</label><br>
    <input type="radio" id="option6" name="food" value="burger">
    <label for="option6">Burger</label><br>
    <button class="next-button" onclick="showNextQuestion()">Suivant</button>
  </div>
  <div class="question">
    <h2>Question 3: Quel est votre saison préférée ?</h2>
    <input type="radio" id="option7" name="season" value="printemps">
    <label for="option7">Printemps</label><br>
    <input type="radio" id="option8" name="season" value="été">
    <label for="option8">Été</label><br>
    <input type="radio" id="option9" name="season" value="automne">
    <label for="option9">Automne</label><br>
    <button class="next-button" onclick="showNextQuestion()">Suivant</button>
  </div>
  <div class="question">
    <h2>Question 4: Quelle est votre couleur préférée ?</h2>
    <input type="radio" id="option10" name="color" value="rouge">
    <label for="option10">Rouge</label><br>
    <input type="radio" id="option11" name="color" value="bleu">
    <label for="option11">Bleu</label><br>
    <input type="radio" id="option12" name="color" value="vert">
    <label for="option12">Vert</label><br>
    <button class="next-button" onclick="showNextQuestion()">Suivant</button>
  </div>

</body>
</html>