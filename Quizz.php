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

    <div class="quiz-container">
  <div class="question active">
    <h2>Question 1: Quelle est votre couleur préférée ?</h2>
    <input type="radio" id="option1" name="color" value="rouge">
    <label for="option1">Rouge</label><br>
    <input type="radio" id="option2" name="color" value="bleu">
    <label for="option2">Bleu</label><br>
    <input type="radio" id="option3" name="color" value="vert">
    <label for="option3">Vert</label><br>
    <p class="selected-answer"></p>
    <button class="next-button" onclick="showNextQuestion()">Suivant</button>
  </div>

  <div class="question">
    <h2>Question 2: Quel est votre animal préféré ?</h2>
    <input type="radio" id="option4" name="animal" value="chien">
    <label for="option4">Chien</label><br>
    <input type="radio" id="option5" name="animal" value="chat">
    <label for="option5">Chat</label><br>
    <input type="radio" id="option6" name="animal" value="oiseau">
    <label for="option6">Oiseau</label><br>
    <p class="selected-answer"></p>
    <button class="next-button" onclick="showNextQuestion()">Suivant</button>
  </div>

  <div class="question">
    <h2>Question 3: Quelle est votre nourriture préférée ?</h2>
    <input type="radio" id="option7" name="food" value="pizza">
    <label for="option7">Pizza</label><br>
    <input type="radio" id="option8" name="food" value="hamburger">
    <label for="option8">Hamburger</label><br>
    <input type="radio" id="option9" name="food" value="sushi">
    <label for="option9">Sushi</label><br>
    <p class="selected-answer"></p>
    <button class="next-button" onclick="showNextQuestion()">Suivant</button>
  </div>

  <div class="question">
    <h2>Question 4: Quelle est votre saison préférée ?</h2>
    <input type="radio" id="option10" name="season" value="été">
    <label for="option10">Été</label><br>
    <input type="radio" id="option11" name="season" value="automne">
    <label for="option11">Automne</label><br>
    <input type="radio" id="option12" name="season" value="hiver">
    <label for="option12">Hiver</label><br>
    <p class="selected-answer"></p>
    <button class="next-button" onclick="showNextQuestion()">Suivant</button>
  </div>

</body>
</html>