var heightwindow = window.innerHeight;
var widthwindow = window.innerWidth;

var nbrparticule = 20;
var start = 200;
var vy = [];
var vx = [];
var rebond = 0;
var particule = [];
var posy = [];
var posx = [];
var rebond = [];
var leftorright = 0;

var main = document.getElementById('main');

for (var i=1; i<nbrparticule; i++){
  main.innerHTML += '<div class="particule" id="particule'+i+'"></div>';
}


for (var i=1; i<nbrparticule; i++){
  //start = Math.random() * (heightwindow - 1) + 1;
  particule[i] = document.getElementById("particule"+i);
  posy[i] = start;
  posx[i] = widthwindow/2;
  vy[i] = Math.random()*(3-1)+1;
  vy[i] = 0-vy[i];
  vx[i] = Math.random()*(2-0)+0;
  rebond[i] = 0;
  leftorright = Math.round(Math.random()*(1-0));
  if (leftorright==0){vx[i] = 0-vx[i];}
}

setInterval(function(){
  for (var i=1; i<nbrparticule; i++){
    particule[i].style.top = posy[i]+'px';
    particule[i].style.left = posx[i]+'px';
    if(rebond[i]==0){
      particule[i].style.height = vy[i]*4+'px';
    }
    else {
      particule[i].style.height = 5+'px';
    }
    posy[i] = posy[i]+vy[i];
    posx[i] = posx[i]+vx[i];
    vy[i] = vy[i]+0.1;
    if (vx[i]>0){
      vx[i] = vx[i]-0.01;
    }
    if (posy[i]>heightwindow){
      if (rebond[i]<2){
        vy[i]=vy[i]/Math.round(Math.random()*(4-2)+2);
        vy[i]=0-vy[i];
        rebond[i]++;
        posy[i] = heightwindow-5;
      }
      else {
        //start = Math.random() * (heightwindow - 1) + 1;
        posy[i] = start;
        posx[i] = widthwindow/2;
        vy[i] = Math.random()*(3-1)+1;
        vy[i] = 0-vy[i]
        rebond[i] = 0;
        vx[i] = Math.random()*(2-0)+0;
        leftorright = Math.round(Math.random()*(1-0));
        if (leftorright==0){vx[i] = 0-vx[i];}
      }
    }
  }
},10)