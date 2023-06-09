<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Ma page d'accueil ECOPROG6</title>
      <link rel="stylesheet" href="indexHome.css">
      <script src="https://kit.fontawesome.com/3e7bbf4130.js" crossorigin="anonymous"></script>

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
      <link rel="manifest" href="favicon.ico">
      
   </head>
   <body>
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">
      <section class="hero-section">
         <div class="card-grid">
         <a class="card" href="indexCV.php">
            <div class="card__background" style="background-image: url(DeepDev.gif?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60)"></div>
            <div class="card__content">
               <p class="card__category">pour me connaitre</p>
               <h3 class="card__heading">le CV</h3>
            </div>
         </a>
         <a class="card" href="Quizz.php">
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
               <p class="card__category">encore travaux </p>
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
         function createCookie(name, value) {
         	var date = new Date();
         	date.setTime(date.getTime() + (1 * 60 * 60 * 1000)); 
         	var expires = "; expires=" + date.toUTCString();
         	document.cookie = name + "=" + value + expires + "; path=/";
         }
         function hideBanner() {
         	document.getElementById("cookie-banner").style.display = "none";
         }
         document.getElementById("accept-cookie").addEventListener("click", function() {
         	createCookie("cookie_accepte", "oui");
         	hideBanner();
         });
         document.getElementById("refuse-cookie").addEventListener("click", function() {
         	createCookie("cookie_accepte", "non");
         	hideBanner();
         });
         if (document.cookie.indexOf("cookie_accepte=oui") !== -1) {
         	hideBanner();
         }
      </script>
   </body>
</html>