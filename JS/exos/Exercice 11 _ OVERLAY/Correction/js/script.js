/*

Exercice 11 :

1) Créer une fonction JS permettant de créer un overlay HTML et de l'insérer dans la page (dans le body)

2) Créer une fonction permettant de supprimer l'overlay sur la page

*/

function setOverlay(){
    let overlay = document.createElement('div'); // <div></div>

    document.querySelector('body').prepend(overlay); // positionnement de ma div

    overlay.classList.add('overlay'); // <div class="overlay"></div>

    // correction partie niveau 2 si le css doit être fait ici, mis en commentaire  :
    // overlay.style.position = "fixed";
    // overlay.style.backgroundColor = "rgba(0, 0, 0, 0.92)";
    // overlay.style.top = "0";
    // overlay.style.bottom = "0";
    // overlay.style.left = "0";
    // overlay.style.right = "0";
}

function removeOverlay(){
    document.querySelector('.overlay').remove(); // supprime l'élément qui aura la classe overlay
}