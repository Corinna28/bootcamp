/**
 * CAROUSEL
 */

// Chemin où sont situées les images du carousel
const path = "images/";

// Tableau contenant les différentes images du carousel
const pictures = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"];

// Image du slider
const picture = document.querySelector(".slider img");

// Compteur
let counter = 0;

// Déclaration du timer pour le setInterval()
let timer;

// Fonction permettant "d'avancer" sur la slide
const autoSlide = () => {
    // Si le compteur est égal à l'index final du tableau, alors on le réinitialise à zéro (on repart au début du tableau)
    if (counter === pictures.length - 1) {
        counter = 0
    }
    else {
        // Sinon, on ajoute 1 à notre compteur
        counter += 1;
    }

    // Modifie l'attribut "src" de l'image en sélectionnant l'élément suivant du tableau
    picture.src = `${path}${pictures[counter]}`;
}

// Écouteur d'évènement sur la flèche pointant vers la droite
const arrowRight = document.querySelector(".bi-arrow-right-circle-fill");
arrowRight.addEventListener("click", autoSlide);

// Écouteur d'évènement sur la flèche pointant vers la gauche
const arrowLeft = document.querySelector(".bi-arrow-left-circle-fill");
arrowLeft.addEventListener("click", () => {

    // Si le compteur est à zéro, je suis au début du tableau
    if (counter === 0) {
        // On met à jour le compteur avec le dernier index du tableau
        counter = pictures.length - 1;
    }
    else {
        // Sinon on décrémente de 1
        counter -= 1;
    }

    // Modifie l'attribut "src" de l'image en sélectionnant l'élément suivant du tableau
    picture.src = `${path}${pictures[counter]}`;
});

// Fonction permettant d'arrêter le carousel
const stopCarousel = () => {
    // "Tue" le setInterval()
    clearInterval(timer);
}

// Fonction permettant de démarrer le carousel en automatique
const startCarousel = () => {
    // Appelle la fonction "autoSlide" toutes les 2 secondes
    timer = setInterval(autoSlide, 2000);
}

startCarousel();

// Quand le pointeur de la souris se retrouve sur l'image du carousel, on stop le setInterval()
picture.addEventListener("mouseover", stopCarousel);
picture.addEventListener("mouseout", startCarousel);

arrowRight.addEventListener("mouseover", stopCarousel);
arrowRight.addEventListener("mouseout", startCarousel);

arrowLeft.addEventListener("mouseover", stopCarousel);
arrowLeft.addEventListener("mouseout", startCarousel);
