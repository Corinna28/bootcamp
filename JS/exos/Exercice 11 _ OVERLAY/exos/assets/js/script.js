// Utilisez la fonction "setOverlay()" dans la console Javascript pour créer un overlay, puis "removeOverlay()" pour le supprimer !


// Créer deux fonctions, une fonction qui permettra de créer une div avec une class overlay et un déplacement dans le body au début. (en laissant ce qu'on a fait ensemble en css dans le fichier css) et une fonction qui permettra de supprimer la div.overlay

   // Fonction pour créer la div overlay
  function createOverlay() {
    // Créez un élément div
    let overlay = document.createElement('div');
    
    // Ajoutez la classe "overlay" à la div
    overlay.classList.add('overlay');
    
    // Placement de la div body au début
   document.querySelector('body').prepend(overlay);
  }

  // Fonction pour supprimer la div overlay
  function removeOverlay() {
    // Sélectionnez l'élément avec la classe "overlay" et supression avec remove()
   document.querySelector('.overlay').remove();

   
  }




  
  