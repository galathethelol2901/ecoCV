<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quizz app game</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link rel="stylesheet" href="Quizz.css">
    <script defer src="quizz.js"></script>

</head>
<body>
<header></header>

<div id="quiz-container">
  <div id="question-container">
    <h2 id="question"></h2>
    <button class="btn" id="choice-0"></button>
    <button class="btn" id="choice-1"></button>
    <button class="btn" id="choice-2"></button>
    <button class="btn" id="choice-3"></button>
    <button class="btn" id="next-btn" style="display: none;">Suivant</button>
  </div>
  <div id="score-container">
    <h2>Votre score est de <span id="score"></span><span id="total"></span></h2>

    <p id="result-message"></p>

    <button class="btn" id="restart">Recommencer</button>
  </div>
  <button class="btn" id="start">Démarrer le quiz</button>
</div>

<footer>
<ul class="wrapper">
  <li class="icon facebook">
    <span class="tooltip">Facebook</span>
    <span><i class="fab fa-facebook-f"></i></span>
  </li>
  <li class="icon twitter">
    <span class="tooltip">Twitter</span>
    <span><i class="fab fa-twitter"></i></span>
  </li>
  <li class="icon instagram">
    <span class="tooltip">Instagram</span>
    <span><i class="fab fa-instagram"></i></span>
  </li>
  <li class="icon github">
    <span class="tooltip">Github</span>
    <span><i class="fab fa-github"></i></span>
  </li>
  <li class="icon youtube">
    <span class="tooltip">Youtube</span>
    <span><i class="fab fa-youtube"></i></span>
  </li>
</ul>
</footer>
</body>
</html>