// Pour ceux qui veulent tester l'overlay avec gestion du temps (chose qu'on a pas encore vu) je vous partage mon code :


let h1 = document.querySelector("h1"); //nécessite un h1
let overlay = document.createElement('div');

overlay.classList.add('overlay');
overlay.style.backgroundColor='rgba(55, 128, 96, 0.373)';
overlay.style.top='0';
overlay.style.bottom='0';
overlay.style.right='0';
overlay.style.left='0';
overlay.style.position='fixed';

function setOverlay() {
    let askOver=confirm("Avtiver l'overlay ?")
    if(askOver == true) {
        h1.before(overlay);
    };
    
};

function removeOverlay(){
    let askRemove=confirm("Retier l'overlay ?")
    if(askRemove == true) {
        overlay.remove();
    };
        
};
setOverlay();
setTimeout(removeOverlay,10*1000);
// setTimeout permet de définir un temps de pause avant l'appel d'une fonction 
// ici la fonction removeOverlay(), avec un délai de 10 secondes, les intervalles sont mesurés en ms