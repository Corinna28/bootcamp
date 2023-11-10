
let body = document.querySelector('body'); // je selectionne le body et le stocke dans une variable
let buttonDark = document.querySelector('#theme-dark'); // je selectionne le bouton thème sombre et le stocke dans une variable
let buttonLight = document.querySelector('#theme-light'); // je selectionne le bouton thème clair dans une variable

// fonction qui permet de mettre en place ou supprimer la classe qui changera le thème de couleur de notre page
function setTheme(theme) {
    if (theme === 'dark') { // si la valeur du paramètre est égale à 'dark'
        body.classList.add('dark-theme'); // on ajoute la class dark-theme au body
    } else if (theme === 'light') { // sinon si la valeur du paramètre est égale à 'light'
        body.classList.remove('dark-theme'); // on supprime la class dark-theme du body
    }
}

// Écouteur d'évènement pour attendre le chargement complet du DOM
document.addEventListener('DOMContentLoaded', function(){
    // on écoute le clic du bouton thème sombre
    buttonDark.addEventListener('click', function() {
        setTheme('dark'); // on appel la fonction setTheme en mettant en argument 'dark'
    });

    // on écoute le clic du bouton thème clair
    buttonLight.addEventListener('click', function() {
        setTheme('light'); // on appel la fonction setTheme en mettant en argument 'light'
    });

});
