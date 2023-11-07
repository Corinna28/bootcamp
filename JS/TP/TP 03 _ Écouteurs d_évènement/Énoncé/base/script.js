
// Écouteur d'évènement sur le premier rectangle

const bouton = document.querySelector('#click');

bouton.addEventListener('click', function () {
    // Vérifie si la classe 'changement-couleur' est présente sur le bouton
    if (bouton.classList.contains('changement-couleur')) {
        // Si la classe est présente, la supprime
        bouton.classList.remove('changement-couleur');
    } else {
        // Si la classe est absente, l'ajoute
        bouton.classList.add('changement-couleur');
    }
});
// Écouteur d'évènement sur le deuxième rectangle


const element2 = document.querySelector('#double-click');

element2.addEventListener('dblclick', function () {
    // Vérifie si la classe 'retournement' est présente sur l'élément
    if (element2.classList.contains('retournement')) {
        // Si la classe est présente, la supprime
        element2.classList.remove('retournement');
    } else {
        // Si la classe est absente, l'ajoute
        element2.classList.add('retournement');
    }
});


// Écouteurs d'évènements sur le troisième rectangle

const bouton2 = document.querySelector('#mouse');

bouton2.addEventListener('mouseenter', function () {
    // Ajoute la classe 'zoom' quand la souris entre sur le bouton
    bouton2.classList.add('zoom');
  });
  
  bouton2.addEventListener('mouseleave', function () {
    // Supprime la classe 'zoom' quand la souris sort du bouton
    bouton2.classList.remove('zoom');
  });
  

// Écouteur d'évènement sur le 4ème rectangle

const bouton3 = document.querySelector('#copy');

bouton3.addEventListener('copy', function (event) {
    // Empêche la copie par défaut du texte
    event.preventDefault();
    
    // Modifie le texte de l'élément par "..."
    bouton3.textContent = "...";
  });
  

// Écouteur d'évènement sur le 5ème rectangle


const champTexte = document.querySelector('#live input[type="text"]');

const paragraphe = document.querySelector('#live p');


champTexte.addEventListener('keydown', function () {
    // Met à jour le texte du paragraphe avec la valeur du champ de texte
    paragraphe.textContent = champTexte.value;
  });
  






