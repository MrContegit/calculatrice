//RECUPERER LES VALEURS DU HTML
const touches=[...document.getElementsByClassName("button")];
const listekeyscode=touches.map(touche=>touche.dataset.key);
const ecran=document.querySelector('.ecran');

//RECUPERER LES VALEURS SAISIES PAR LA SOURIES OU LE CLAVIER
document.addEventListener('keydown',(e)=>{
  const valeur=e.keyCode.toString();
  calcul(valeur);
});
document.addEventListener('click',(e)=>{
  const valeur=e.target.dataset.key;
  calcul(valeur);
});

//TRAITER LES VALEURS
const calcul=(valeur=>{
  if(listekeyscode.includes(valeur)){
    switch(valeur){
      case '8':
          ecran.textContent="";
          break;
      case '13':
          const result=eval(ecran.textContent);
          ecran.textContent=result;
          break;
      default:
          ecran.textContent+=touches[listekeyscode.indexOf(valeur)].textContent;
    }
  } 
});
window.addEventListener('error',(e)=>{
  alert('Une erreur est survenue dans votre calcul :'+e.message);
});
