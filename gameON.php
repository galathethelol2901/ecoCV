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

    <div id="orientation-message">

  <p>Please rotate your device to landscape mode for better experience.</p>
  
</div>

      <canvas id="canvas1"></canvas>
      <article>
        <span>a partir de 10pts la music peut aider !
          <audio id="myAudio" src="musicGme.mp3"></audio>
          <button onclick="togglePlay()">Play</button>
        </span>
      </article>
    </container>
    <script src="scriptGame.js"></script>
    <script>
      var myAudio = document.getElementById("myAudio");

      function togglePlay() {
        if (myAudio.paused) {
          myAudio.play();
        } else {
          myAudio.pause();
        }
      }
    </script>
  </body>
</html>