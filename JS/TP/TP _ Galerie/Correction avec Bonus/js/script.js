
// Fonction permettant d'afficher une image avec une croix de fermeture dans un overlay (avec un paramètre 'imageToDisplay' qui sera l'image à faire afficher
function displayImage(imageToDisplay){


    //---------- Création de l'overlay (une div) : <div class="overlay"></div>
    let overlayElement = document.createElement('div');
    overlayElement.classList.add('overlay');


    //---------- Création du lien du bouton de fermeture (un lien) : <a href="#" class="close">X</a>
    let closeButtonElement = document.createElement('a');
    closeButtonElement.textContent = 'X';
    closeButtonElement.setAttribute('href', '#');
    closeButtonElement.classList.add('close');

    // Ajout du bouton dans l'overlay
    overlayElement.prepend(closeButtonElement);

    // Écouteur d'évènement sur le bouton pour supprimer l'overlay au clique
    closeButtonElement.addEventListener('click', function(){
        removeImage();
    });


    //---------- Création de l'image : <img src="images/1.jpg" alt="">
    let imageElement = document.createElement('img');
    imageElement.setAttribute('src', imageToDisplay);
    imageElement.setAttribute('alt', '');

    // Ajout de l'image dans l'overlay
    overlayElement.prepend(imageElement);


    // Ajout de l'overlay (+ le bouton et l'image qui sont déjà dedans) dans le body
    document.querySelector('body').append(overlayElement);





    //------------------------Partie Bonus Touche Echap :----------------------------
    //Selection du body pour  mettre un écouteur par pression de touche
    document.body.addEventListener('keydown', function escapeEventRemoveOverlay(e){
        // Le paramètre (e) de la fonction nous servira à avoir accès au code de la touche Echap

        if(e.key == 'Escape'){ // condition dans laquelle on agit si la touche pressée est Echap

            this.removeEventListener('keydown', escapeEventRemoveOverlay); // Suppression de l'écouteur pour éviter son écoute si il n'y a pas d'Overlay ouvert

            removeImage();// Appel de la fonction de suppresion de l'Overlay
        }
    });
    //-------------------------------------------------------------------------------



}


// Fonction permettant de supprimer l'overlay affiché (avec l'image et le bouton dedans)
function removeImage(){

    document.querySelector('.overlay').remove();

}



// Récupération de toutes les vignettes de la galerie
let pictures = document.querySelectorAll('.gallery img');


pictures.forEach((picture) => {

    // Chaque vignette aura un écouteur d'évènement "click"
    picture.addEventListener('click', function(){

        // On récupère le nom de l'image à afficher (stocké dans l'attribut data-image de la vignette cliquée)
        let imageName = this.dataset.image;

        // Affichage de l'image récupérée précédemment en la passant en paramètre de notre fonction displayImage()
        displayImage('images/' + imageName);
    });


});





//------------------------ Partie Bonus hérisson :----------------------------

//Selection du body pour mettre un écouteur par pression de touche
document.body.addEventListener('keydown', function(e){
    // Le paramètre (e) de la fonction nous servira à avoir accès au code de la touche h

    if(e.key == 'h' && !document.querySelector('.overlay')){ // condition dans laquelle on agit si la touche pressée est h ET si l'overlay n'est actuellement pas présent dans la page
        displayImage('https://www.jardiner-malin.fr/wp-content/uploads/2022/05/herisson-jardin.jpg'); // Appel à la fonction d'apparition d'overlay avec l'image d'un hérisson trouvé sur une page web
    }
});

//----------------------------------------------------------------------------