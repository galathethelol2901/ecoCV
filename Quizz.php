<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quizz app game</title>
    <link rel="stylesheet" href="Quizz.css">
    <script src="https://kit.fontawesome.com/3e7bbf4130.js" crossorigin="anonymous"></script>
    <script defer src="quizz.js"></script>
</head>
<body>
  <header>
    <h1>bienvenue sur le ULTRA fast quizz ! </h1>
    <h4>pour ce site , pas de pression , pas de mauvaise reponse et pas de temps limiter, la seule limite est la curiositer<h4>
  </header>

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
    <div id="home">
    <a href="index.php">
    <i class="fa-solid fa-house fa-bounce"></i>
    </a>
    </div>
  </footer>
</body>

</html>