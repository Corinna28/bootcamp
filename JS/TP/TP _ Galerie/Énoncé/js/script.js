// Pour cet exercice il vous faudra obligatoirement créer 2 fonctions :

/*

- Une fonction displayImage qui permettra l'ouverture d'un l'overlay avec l'image et la croix

- Une fonction removeImage qui permettra la suppression de l'overlay

Vous pouvez vous aider de l'exercice sur l'overlay qui utilise le même principe

Les datasets seront également nécessaires pour pouvoir identifier l'image à faire apparaître dans l'overlay.

*/

function displayImage(imageUrl) {
    // Récupérer l'overlay et l'image
    var overlay = document.getElementById('imageOverlay');
    var overlayImage = document.getElementById('overlayImage');

    // Mettre à jour l'URL de l'image
    overlayImage.src = imageUrl;

    // Afficher l'overlay
    overlay.style.display = 'block';
}

function removeImage() {
    // Cacher l'overlay
    var overlay = document.getElementById('imageOverlay');
    overlay.style.display = 'none';
}


/* fonction displayImage(paramètre qui stock la source) qui va afficher :

- une div (avec une class (overlay) (cette classe aura en css des propriétés))
- une croix qui est un caractère "X" qui se trouve dans une balise <a></a> (avec une class (close) (cette classe aura en css des propriétés))
- une image avec ses attributs (src, alt) (ici pour avoir une source qui change je vais utiliser une paramètre dans ma fonction)

- Avec les différents types de déplacement en js (prepend, append, after et before) je place mes éléments (div overlay, image et croix)

- mettre un écouteur sur la croix au clic (pour appeler la seconde fonction)

*/

/* fonction removeImage :
- Sélectioner la div overlay et la supprimer
*/

// js/script.js

function displayImage(imageUrl) {
    // Récupérer l'overlay et l'image
    var overlay = document.getElementById('imageOverlay');
    var overlayImage = document.getElementById('overlayImage');

    // Mettre à jour l'URL de l'image
    overlayImage.src = 'images/' + imageUrl;

    // Afficher l'overlay
    overlay.style.display = 'block';
}

function removeImage() {
    // Cacher l'overlay
    var overlay = document.getElementById('imageOverlay');
    overlay.style.display = 'none';
}

//Récupération de toutes les vignettes de la galerie

    // Dans ma boucle chaque vignette aura un ecouteur au clic

        // on récupère le nom de l'image à afficher (stocké dans la data-image) dans une variable

        // j'affiche l'image récupérée en la passant en paramètre de ma fontion displayImage()
            // displayImage('images/'+ laVariable)

          // Récupération de toutes les vignettes de la galerie
var galleryThumbnails = document.querySelectorAll('.gallery img');

// Dans ma boucle, chaque vignette aura un écouteur au clic
galleryThumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener('click', function() {
        // On récupère le nom de l'image à afficher (stocké dans l'attribut data-image) dans une variable
        var imageUrl = thumbnail.getAttribute('data-image');

        // J'affiche l'image récupérée en la passant en paramètre de ma fonction displayImage()
        displayImage('images/' + imageUrl); // Les guillemets supplémentaires ont été retirés
    });
});

