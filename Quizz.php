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

<div class="landscape">
  <div class="mountain"></div>
  <div class="mountain mountain-2"></div>
  <div class="mountain mountain-3"></div>
  <div class="sun-container sun-container-1">
  </div>
  <div class="sun-container">
    <div class="sun"></div>
  </div>
  <div class="cloud"></div>
  <div class="cloud cloud-1"></div>
  <div class="sun-container sun-container-reflection">
    <div class="sun"></div>
  </div>
  <div class="light"></div>
  <div class="light light-1"></div>
  <div class="light light-2"></div>
  <div class="light light-3"></div>
  <div class="light light-4"></div>
  <div class="light light-5"></div>
  <div class="light light-6"></div>
  <div class="light light-7"></div>
  <div class="water"></div>
  <div class="splash"></div>
  <div class="splash delay-1"></div>
  <div class="splash delay-2"></div>
  <div class="splash splash-4 delay-2"></div>
  <div class="splash splash-4 delay-3"></div>
  <div class="splash splash-4 delay-4"></div>
  <div class="splash splash-stone delay-3"></div>
  <div class="splash splash-stone splash-4"></div>
  <div class="splash splash-stone splash-5"></div>
  <div class="lotus lotus-1"></div>
  <div class="lotus lotus-2"></div>
  <div class="lotus lotus-3"></div>
  <div class="front">
    <div class="stone"></div>
    <div class="grass"></div>
    <div class="grass grass-1"></div>
    <div class="grass grass-2"></div>
    <div class="reed"></div>
    <div class="reed reed-1"></div>
  </div>
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