<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ma page d'accueil</title>
  <script
            src="https://code.jquery.com/jquery-3.6.0.min.js"
            integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
            crossorigin="anonymous"></script>
    <link href="bootstrap-4.4.1-dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://kit.fontawesome.com/3e7bbf4130.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="gameON1.css">
</head>
<body>
  <div class="wrapper">
    <section class="light-blue"></section>
       <div class="mouse cursor"></div>
       <div class="mouse follow-cursor first"></div>
       <div class="mouse follow-cursor second"></div>
       <div class="mouse follow-cursor third"></div>
       <div class="mouse follow-cursor fourth"></div>
       <div class="mouse follow-cursor fifth"></div>
       <div class="header">
    <div class="inner-header flex">
        <h1>
            BIENVENUE SUR MONOPROG6  <br>
            <small> Pour le moment c'est un CV. <small>
        </h1>
            <div class="container">
            <div class="btn"><a href="main60s.php">ENTREZ pour 45s</a></div>
        </div>
        <div>
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
             viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g class="parallax">
                <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
        </svg>
    </div>
</div>
<div class="content flex">
    <p>
        Lisez entre les vagues avant de plonger, car UNE seule visite vous sera accordée !
    </p>



    <section class="blue"></section>
    <section class="dark-blue"></section>


  </div>
  
  <script type="text/javascript">

    $("body").mousemove(function(e){
        let mouse = $(".mouse");

        mouse.css({
            left: e.pageX,
            top: e.pageY,
            opacity: 1,
        });
    });


    $("a").hover(function(){

        $(".mouse").toggleClass("hover");
    });

</script>
<script src="jquery-3.4.1.min.js"></script>
<script src="bootstrap-4.4.1-dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>