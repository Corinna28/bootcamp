/**
 * ENTRAINEMENT 8
 */

/**
 * Point #1
 */

// Table de multiplication
let max = 10;

// Ouverture du tableau HTML dans une chaine de caractère
let table = '<table>';

for(let index = 1; index <= max; index++) {

    // Création d'une ligne dans le tableau HTML
    table += '<tr>';

    for (let i = 1; i <= max; i++) {
        // Création de la cellule du tableau contenant le résultat d'une opération
        // table += `<td>${index ** i}</td>`; // Avoir le carré des nombres
        table += `<td>${index * i}</td>`;
    }

    // Fermeture de la ligne du tableau
    table += '</tr>';
}

// Fermeture du tableau HTML dans une chaine de caractère avec concaténation des valeurs
// précédentes
table += '</table>';

// Récupération de la DIV "multiplication"
let multi = document.querySelector('#tableau');
multi.innerHTML = table;
