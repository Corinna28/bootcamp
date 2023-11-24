/**
 * LES FONCTIONS
 */

function nomDeLaFonction() {
    // ...
}

let nomFonction = () => {
    // ...
}

// Les arguments optionnels sont toujours placés en premier
let nomDeFonction = function(prenom, nom = "Doe", age = null) {

    let phrase = `Bonjour ${prenom}`;

    if (nom !== "Doe") {
        phrase += ` ${nom}`;
    }

    if (age !== null) {
        phrase += `, tu as ${age} ans`;
    }

    // console.log(phrase);
    return phrase;
}

let brouette = "Guillaume";
let lastName = "Bouyer";
let number = 29;

// L'ordre des arguments importants, les respecter
let phraseBienvenue = nomDeFonction(brouette, lastName, number);
// console.log(phraseBienvenue);

document.querySelector('body').innerText = phraseBienvenue;

// nomDeFonction("Jérôme");

/**
 * Fonction recursive
 * ATTENTION ! SI AUCUN ARRÊT, BOUCLE INIFINE
 */
let addition = function(number, limit) {
    if (number != limit) {
        number += 1;
        console.log(number);
        addition(number, limit);
    }

    return true;
}

let finish = addition(1, 20);

if (finish) {
    console.log("Addition terminée !");
}