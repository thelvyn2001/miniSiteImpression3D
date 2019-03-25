//----------------------------------------------------------
//    Clignotement de la zone de message
//----------------------------------------------------------
let signe = -1;
let clignotementFading = function(){
let lblClignot = document.getElementById('LblClignotant');
  if (lblClignot.style.opacity >= 0.96){
    signe = -1;
  }
  if (lblClignot.style.opacity <= 0.04){
    signe = 1;
  }
  lblClignot.style.opacity = (lblClignot.style.opacity * 1)  + (signe * 0.04);  //Augmente ou diminbue de 0,04 l'opacité
};

// mise en place de l appel de la fonction toutes les 0.085 secondes
// Pour arrêter le clignotement : clearInterval(periode);
periode = setInterval(clignotementFading, 85 );