<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>BIENVENUE SUR MONOPROG6 LE JEUX !</title>
    <link rel="stylesheet" href="gameON1.css">
  </head>
  <body>

<script>

function toggleSound() {
  const audio = document.querySelector("#myAudio");
  const muteButton = document.querySelector("#muteButton");
  
  if (audio.muted) {
    audio.muted = false;
    muteButton.textContent = "Mute";
  } else {
    audio.muted = true;
    muteButton.textContent = "Unmute";
  }
} 
</script>

  <audio id="myAudio" src="musicGme.mp3" autoplay loop></audio>
  <button onclick="toggleSound()" id="muteButton">Mute</button>

    <container>
      <canvas id="canvas1"></canvas>
      <article>
        <span>Created by <a href="" target='blank'>yoan mettoudi</a>
        </span>
      </article>
    </container>
  </body>
  <footer>pour me contatcer suivez le lien ! <a href="" target='blank'>ici </a>
  </footer> 
  <script src="anime.js"></script>
</html>