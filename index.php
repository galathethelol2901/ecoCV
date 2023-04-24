<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ma page d'accueil</title>
    <link rel="stylesheet" href="indexHome.css">
    <script src="https://kit.fontawesome.com/3e7bbf4130.js" crossorigin="anonymous"></script>
</head>
<body>
<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">


<section class="hero-section">
  <div class="card-grid">
    <a class="card" href="https://monoprog6.herokuapp.com/index.php">
    <div class="card__background" style="background-image: url(DeepDev.gif?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60)"></div>
      <div class="card__content">
        <p class="card__category">pour me connaitre</p>
        <h3 class="card__heading">le CV</h3>
      </div>
    </a>
    <a class="card" href="#">
    <div class="card__background" style="background-image: url(match.gif?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60)"></div>
      <div class="card__content">
        <p class="card__category">pour vous decouvrire</p>
        <h3 class="card__heading">Le QUIZZ</h3>
      </div>
    </a>
    <a class="card" href="gameON.php">
    <div class="card__background" style="background-image: url(fishGame.gif?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60)"></div>
      <div class="card__content">
        <p class="card__category">pour ce detendre</p>
        <h3 class="card__heading">Le JEU</h3>
      </div>
    </li>
    <a class="card" href="#">
    <div class="card__background" style="background-image: url(movie.gif?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60)"></div>
      <div class="card__content">
        <p class="card__category">en travaux </p>
        <h3 class="card__heading">Le FILM </h3>
      </div>
    </a>
  <div>
</section>


<div class="cookie-banner" id="cookie-banner">
		<p>Nous utilisons des cookies pour améliorer votre expérience sur notre site. En continuant à naviguer sur ce site, vous acceptez notre utilisation des cookies.</p>
		<button id="accept-cookie">Accepter</button>
		<button id="refuse-cookie">Refuser</button>
	</div>

	<script>
		// Fonction pour créer un cookie avec une durée de vie d'une heure
		function createCookie(name, value) {
			var date = new Date();
			date.setTime(date.getTime() + (1 * 60 * 60 * 1000)); // Durée de vie d'une heure
			var expires = "; expires=" + date.toUTCString();
			document.cookie = name + "=" + value + expires + "; path=/";
		}

		// Fonction pour cacher la bannière de cookie
		function hideBanner() {
			document.getElementById("cookie-banner").style.display = "none";
		}

		// Événement click sur le bouton "Accepter"
		document.getElementById("accept-cookie").addEventListener("click", function() {
			createCookie("cookie_accepte", "oui");
			hideBanner();
		});

		// Événement click sur le bouton "Refuser"
		document.getElementById("refuse-cookie").addEventListener("click", function() {
			createCookie("cookie_accepte", "non");
			hideBanner();
			// Vous pouvez ajouter du code ici pour gérer le cas où l'utilisateur refuse les cookies
		});

		// Vérifier si l'utilisateur a déjà accepté les cookies
		if (document.cookie.indexOf("cookie_accepte=oui") !== -1) {
			hideBanner();
		}
	</script>

</body>
</html>