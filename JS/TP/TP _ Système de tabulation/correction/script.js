

// Sélectionne tous les onglets pour y rattacher un écouteur d'évènement
document.querySelectorAll('div.tab-container .tabs .tab').forEach((tab) => {

    //Mise en place de l'écouteur sur chaque onglet au clic
    tab.addEventListener('click', function(){

        // Selection de l'onglet qui a la class active et lui enlever sa class active
        document.querySelector('div.tab-container .tabs .tab.active').classList.remove('active');

        // Ajouter la class active à l'onglet cliqué
        this.classList.add('active');

        // Selection de l'onglet qui a la class active et lui enlever sa class active
        document.querySelector('div.tab-container .views .view.active').classList.remove('active');


        /*

            Quand un bouton est cliqué : on récupère son data-open : ("view3" par exemple)

            On met la classe "active" sur la vue dont l'id est égal au data-open récupéré avant.

            Ex : je clique sur le bouton 4, on récupère donc son data-open qui vaux "view4", puis ensuite je selectionne la vue dont l'id est "#view4" pour lui donner la classe "active"

        */

        //Récupération du dataset de l'onglet cliqué
        let viewToOpen = this.dataset.open;

        // Ajout de la class active sur la div de contenu portant un # + le nom de l'id correspondant de ce fait à l'onglet cliqué qui porte le même nom de son data-open
        document.querySelector('#' + viewToOpen).classList.add('active');

    });

});
