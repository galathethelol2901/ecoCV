function animateLine() {
    var animation = document.querySelector('.animation');
    animation.style.transition = 'none';
    animation.style.transform = 'translate(-100%, -100%) rotate(45deg)';
  
    setTimeout(function() {
      animation.style.transition = 'all 1s linear';
      animation.style.transform = 'translate(100%, 100%) rotate(45deg)';
    }, 100);
  }
  
  animateLine(); // exécute une fois l'animation pour la première fois
  setInterval(animateLine, 2000); // répète l'animation toutes les 2 secondes