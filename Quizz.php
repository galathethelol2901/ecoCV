<!DOCTYPE html>
<html>
<head>
	<title>Mon quiz</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="Quizz.css">
</head>
<body>
	<div class="container">
		<h1>Mon quiz</h1>
		<form id="quiz-form">
			<!-- Question 1 -->
			<div class="question">
				<h2>Quelle est votre couleur préférée?</h2>
				<label><input type="radio" name="q1" value="Bleu">Bleu</label>
				<label><input type="radio" name="q1" value="Jaune">Jaune</label>
				<label><input type="radio" name="q1" value="Rouge">Rouge</label>
				<label><input type="radio" name="q1" value="Vert">Vert</label>
			</div>
			
			<!-- Question 2 -->
			<div class="question">
				<h2>Quel est votre animal préféré?</h2>
				<label><input type="radio" name="q2" value="Chien">Chien</label>
				<label><input type="radio" name="q2" value="Chat">Chat</label>
				<label><input type="radio" name="q2" value="Oiseau">Oiseau</label>
				<label><input type="radio" name="q2" value="Poisson">Poisson</label>
			</div>
			
			<!-- Question 3 -->
			<div class="question">
				<h2>Quel est votre plat préféré?</h2>
				<label><input type="radio" name="q3" value="Sushi">Sushi</label>
				<label><input type="radio" name="q3" value="Pizza">Pizza</label>
				<label><input type="radio" name="q3" value="Burger">Burger</label>
				<label><input type="radio" name="q3" value="Salade">Salade</label>
			</div>
			
			<!-- Submit button -->
			<button type="submit">Soumettre</button>
		</form>
		
		<!-- Score display -->
		<div id="score"></div>
	</div>
	
	<!-- JavaScript -->
	<script src="Quizz.js"></script>
</body>
</html>