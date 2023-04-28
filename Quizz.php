<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quizz app game</title>
    <link rel="stylesheet" href="Quizz.css">
    <script defer src="quizz.js"></script>
</head>
<body>

<div>
  <button id="start-btn">Démarrer</button>
  <div id="question-container" style="display: none;">
    <h2 id="question"></h2>
    <div id="options-container"></div>
  </div>
  <div id="score-container" style="display: none;">
    <h2>Votre score est :</h2>
    <p id="score"></p>
    <button id="restart-btn">Recommencer</button>
  </div>
</div>

</body>
</html>