const vague = document.getElementById('vague');
const bulle = document.getElementById('bulle');
const galaxie = document.getElementById('galaxie');

const circles = document.querySelectorAll('.circle');

vague.addEventListener('mousemove', (event) => {
  let x = event.clientX;
  let y = event.clientY;
  
  circles[0].style.left = `${x}px`;
  circles[0].style.top = `${y}px`;
});

bulle.addEventListener('mousemove', (event) => {
  let x = event.clientX;
  let y = event.clientY;
  
  circles[1].style.left = `${x}px`;
  circles[1].style.top = `${y}px`;
});

galaxie.addEventListener('mousemove', (event) => {
  let x = event.clientX;
  let y = event.clientY;
  
  circles[2].style.left = `${x}px`;
  circles[2].style.top = `${y}px`;
});
