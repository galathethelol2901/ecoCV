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
    
<div id="questionnaire">
  <h2>Questionnaire</h2>
  <div id="question1">
    <p>Question 1 : Quelle est votre couleur préférée ?</p>
    <label><input type="radio" name="q1" value="rouge">Rouge</label><br>
    <label><input type="radio" name="q1" value="bleu">Bleu</label><br>
    <label><input type="radio" name="q1" value="vert">Vert</label><br>
    <button onclick="suivant()">Suivant</button>
  </div>
  <div id="question2" style="display:none;">
    <p>Question 2 : Quel est votre animal préféré ?</p>
    <label><input type="radio" name="q2" value="chien">Chien</label><br>
    <label><input type="radio" name="q2" value="chat">Chat</label><br>
    <label><input type="radio" name="q2" value="oiseau">Oiseau</label><br>
    <button onclick="suivant()">Suivant</button>
  </div>
  <div id="question3" style="display:none;">
    <p>Question 3 : Quel est votre plat préféré ?</p>
    <label><input type="radio" name="q3" value="pizza">Pizza</label><br>
    <label><input type="radio" name="q3" value="pâtes">Pâtes</label><br>
    <label><input type="radio" name="q3" value="sushi">Sushi</label><br>
    <button onclick="soumettre()">Soumettre</button>
  </div>
</div>

  

</body>
</html>