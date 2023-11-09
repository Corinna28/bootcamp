

/*
Dans la démo on peut voir que suivant le titre d'onglet que l'on va cliquer on aura un contenu correspondant, dans le squelette html nous avons des datasets sur les onglets et des id sur les contenus dont il faudra se servir pour pouvoir lié le bon nom d'onglet au bon contenu.

L'onglet cliqué change de couleur au clic en ayant la classe active rajouté dessus.
La div contenant du contenu apparaît quand on met la class active dessus également.
*/

document.addEventListener('click', function() {
     // Sélectionner tous les onglets
  let onglets = document.querySelectorAll('.tab');

  // Ajout un gestionnaire d'événements pour chaque onglet
  onglets.forEach(function(onglet) {
    onglet.addEventListener('click', function() {
      // Réinitialiser la classe active pour tous les onglets
      onglets.forEach(function(tab) {
        tab.classList.remove('active');
      });

      // Ajout la classe active à l'onglet cliqué
      onglet.classList.add('active');

      // Récupére l'ID de la vue associée à l'onglet
      let viewId = onglet.getAttribute('data-open');

      // Sélectionne toutes les vues
      let views = document.querySelectorAll('.view');

      // Masque toutes les vues
      views.forEach(function(view) {
        view.classList.remove('active');
      });

      // Affiche la vue associée à l'onglet cliqué
      document.getElementById(viewId).classList.add('active');
    });
  });
});


