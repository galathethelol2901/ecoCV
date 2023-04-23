<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>le petit jeu</title>
    <link rel="stylesheet" href="GameStyle.css">
</head>
<body>
    <container>
      <canvas id="canvas1"></canvas>
      <article>
        <span>
          <audio id="myAudio" src="musicGme.mp3" autoplay></audio>
          <button onclick="toggleMute()">Mute/Unmute</button>
        </span>
      </article>
    </container>
    <script src="scriptGame.js"></script>
    <script>
      var myAudio = document.getElementById("myAudio");

      function toggleMute() {
        if (myAudio.muted == true) {
          myAudio.muted = false;
        } else {
          myAudio.muted = true;
        }
      }
    </script>
  </body>
</html>