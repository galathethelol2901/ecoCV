<!DOCTYPE html>
<html>
<head>
	<title>Mon quiz</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="Quizz.css">
    <script
  src="https://code.jquery.com/jquery-3.6.4.min.js"
  integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8="
  crossorigin="anonymous"></script>

</head>
<body>

<div id="quiz-container">
  <h2 id="question"></h2>
  <ul id="answers">
    <li><button class="answer-button"></button></li>
    <li><button class="answer-button"></button></li>
    <li><button class="answer-button"></button></li>
  </ul>
  <button id="next-button" style="display:none">Suivant</button>
  <p id="result" style="display:none"></p>
</div>
<script src="Quizz.js"></script>

<script>
  $("#next-button").on("click", function() {
    nextQuestion();
  });
  displayQuestion();
</script>
</body>
</html>