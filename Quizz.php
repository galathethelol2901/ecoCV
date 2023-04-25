<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quizz app game</title>
    <link rel="stylesheet" href="Quizz.css">
    <script defer src="Quizz.js"></script>
</head>
<body>
    <header>
        </header> 
<div class="container">
    <div id="container-text" class="container-text">
    <h2>Welcome to my quiz game</h2>
    <p>How well do you know these facts? Let's see</p>
</div>
    <div id="question-container" class="hide">
    <div id="question">question</div>
    <div id="answer-buttons" class="btn-grid">
    <button class="btn "> ans a</button>
    <button class="btn "> ans b</button>
    <button class="btn "> ans c</button>
    <button class="btn "> ans d</button>
    </div>
</div>
    <div id="score" class= "grade hide"> SCORE: 20%</div> 

    <div class="controls">
        <button id="start-btn" class="start-btn btn">Start</button>
        <button id="next-btn" class="next-btn btn hide" >Next</button>
        <button id="gameover-btn" class="gameover-btn btn hide">Game-over</button>
    </div> 
</div>
</body>
</html>