<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>BIENVENUE SUR ECOOPROG6 CV</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" integrity="sha384-pa7ozjoaL6yLH6u1+WXBz4n4nR8o/Qv9XuTweE2T/SxWw/XkcL1qVFDJjKdxOBOz" crossorigin="anonymous">

<!-- Inclure jQuery et Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-hdPakfPi+2xk3BzH2tIF9dJAgOJjlma06aCXIlJIDlEweKs8p1ZjiOJZ0cXnX7dJ" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="EcoCVstyle.css">
    
</head>
<body>
<div class="mouse cursor"></div>
<div class="mouse follow-cursor first"></div>
<div class="mouse follow-cursor second"></div>
<div class="mouse follow-cursor third"></div>
<div class="mouse follow-cursor fourth"></div>
<div class="mouse follow-cursor fifth"></div>
<div class="header">
    <div class="inner-header flex">
        <h1>
            BIENVENUE SUR ECOPROG6  <br>
            <small> Pour le moment c'est un CV. <small>
        </h1>
            <div class="container">
            <div class="btn"><a href="main60s.php">ENTREZ pour 45s</a></div>
        </div>
           <div class="dropdown">
            <a class="btn btn-secondary dropdown-toggle"
               href="EcoCVeng.php"
               role="button"
               id="dropdownMenuLink"
               data-toggle="dropdown"
               aria-haspopup="true"
               aria-expanded="false">  select lang
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="EcoCVeng.php">ENG</a>
            </div>
        </div>
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

    <div class="iconFirst"
          data-toggle="modal" data-target="#myModal1" data-placement="top" title="RULES">
            <i class="fa-solid fa-info fa-fw" title="RuleSite"></i>
            </div>
    <div class="iconSec"
         data-toggle="modal" data-target="#myModal2">
        <i class="fa-solid fa-id-card" title="CallMe"></i>
    </div>
    <div class="iconThree"
          data-toggle="modal" data-target="#myModal3">
             <i class="fa-solid fa-sitemap" title="InfoSite" ></i>
            </div>
    <div class="modal fade" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header text-center">
                    <button type="button" class="close" data-dismiss="modal" ></button>
                    <h4 class="modal-title" id="myModalLabel">comment ça marche !?</h4>
                </div>
                <div class="modal-body">
                    <h6 class="text">
                    Fonctionnement du site : <br>
                    Le temps est limité à 45 s.<br>
                    Vous pouvez le visiter qu'une seule fois !!! <br>
                    S'il vous a plu, n'hésitez pas à le partager. <br>
                    <br>
                    Bonne visite !!<br>
                    <br>
                    </h6>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">close</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header text-center">
                    <button type="button" class="close" data-dismiss="modal" ></button>
                    <h4 class="modal-title" id="myModalLabel">me contacter</h4>
                </div>
                <div class="modal-body">
                    <h6 class="text">

                    Yoan Mettoudi <br>
                    30 ans<br>
                    06 36 98 50 85 <br>
                    ymettoudi@yahoo.fr<br>

                    Skype(c), Zoom(c), et mon telephone sont disponible 24h/24 7/7.<br>
                    <br>
                    <br>
                    Mes outils sont un Laptop Intelcore i7, 8g RAM  et <br>
                    une carte graphique à la ramasse...<br>
                    Cela n'est pas un réel problème, tout est modifiable<br>
                    sur mon pc.<br>
                    PHP storm(c) et VScode(c) me permettent d'écrire mes codes,<br>
                    Github me permetterait de vous les envoyer ; à moins que vous<br>
                    ayez un réseau d'entreprise dans ce cas une clé SSH serait nessessaire.<br>
                    </h6>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">close</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="myModal3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header text-center">
                    <button type="button" class="close" data-dismiss="modal" ></button>
                    <h4 class="modal-title " id="myModalLabel">les petits +</h4>
                </div>
                <div class="modal-body">
                    <h6 class="text">
                        Ce site a été créé par moi seul.<br>
                        Pas de cms, pas de wordpress. <br>
                        Inspiré par beaucoup de créateurs, <br>
                        je m'efforce de re-coder moi-même <br>
                        et selon mes choix toutes idées qui<br>
                        me semblent cool.<br>
                        168h -soit 7j- fut nécessaire avant la mise en ligne.<br>
                        <br>
                        <br>
                        Selon moi, il y a 3 façons de visiter sans limite ! <br>
                        <br>
                        - ctrl + impr Ecr <br>
                        - le prendre en photo<br>
                        - modifier le script en moins de 45s <br>
                        <br>
                        <br>
                        Si vous en trouvez une autre, envoyez-moi un SMS !<br>
                        Cette liste sera renouvelée à chaque faille !
                    </h6>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Ouvrir le modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Titre du modal</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Contenu du modal
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
        <button type="button" class="btn btn-primary">Enregistrer</button>
      </div>
    </div>
  </div>
</div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-hdPakfPi+2xk3BzH2tIF9dJAgOJjlma06aCXIlJIDlEweKs8p1ZjiOJZ0cXnX7dJ" crossorigin="anonymous"></script>


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


</body>
</html>
