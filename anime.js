var animation = document.querySelector('.animation');
animation.style.transform = 'translateX(-100%)';

setTimeout(function() {
  animation.style.transition = 'all 1s linear';
  animation.style.transform = 'translateX(100%)';
}, 1000);