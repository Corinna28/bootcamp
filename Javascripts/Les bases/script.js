/**
 * Consoles
 */
console.log("Bonjour toi !", 42, "Hello");
console.warn("Oula");
console.error("Outch");
console.info("Informations");

/**
 * Variables
 * var, let et const
 */

/* 
* var
* ---
* On utilise le lowerCamelCase, pas d'accents, de caractères spéciaux et
* ne commence pas par un chiffre
*
* Le égal "=" est un opérateur d'affectation
*/
var guillaume = "Coucou, moi c'est Guillaume";
console.log(guillaume);

/**
 * Concaténation
 */
var phrase = "Bonjour";
var prenom = "Guillaume";

var phraseComplete = phrase + " " + prenom;
phraseComplete = phrase + ", comment allez-vous " + prenom + " ?";

// Littéraux des gabarits
// Windows : AltGR + 7 pour les backtits
phraseComplete = `${phrase}, comment allez-vous ${prenom} ?`;
console.log(phraseComplete);


/**
 * Types de variables
 */
var nombre = 36; // Type Integer/Number (int)
var negatif = -120;
var decimal = 12.56; // Type "float"
var texte = "Ceci est une chaîne de caractère"; // Type "string"
var boolean = true; // Type "bool" ou "boolean"

var brouette;
brouette = "Jardin";

/**
 * let
 */

// Hoisting
ephad = 12;
var ephad;

{
    let variable2 = 34;
    console.log(ephad, variable2);
}

// console.log(variable2);

/**
 * const
 * Une constante ne peut être modifiée une fois sa valeur affectée
 */
const maVariable = "Hello";
console.log(maVariable);

// maVariable = "Bonjour";
// console.log(maVariable); // Erreur


/**
 * Opérateurs de calcul
 */
let nombre1 = 10;
let nombre2 = 3;

console.log(nombre1 + nombre2); // Addition
console.log(nombre1 - nombre2); // Soustraction
console.log(nombre1 * nombre2); // Multiplication
console.log(nombre1 / nombre2); // Division
console.log(nombre1 % nombre2); // Modulo est le reste d'une division


let total = 10;
total += 2; // total = total + 2;
total -= 2; // total = total - 2;
total *= 2; // total = total * 2;
total /= 2; // total = total / 2;
total %= 2; // total = total % 2;


/**
 * Incrémentation & décrémentation
 */

// Incrémentation, permet d'ajouter 1 à une variable de type "integer"
// total = total + 1;
// total += 1;
total++;

// Décrémentation, permet de retirer 1 à une variable de type "int"
total--;

/**
 * Opérateurs de comparaison
 */
let compare1 = 45;
let compare2 = 12;

// Egalité
// Egal à ... "==", vérifie que les valeurs sont bien identiques
console.log(compare1 == compare2);

// Strictement égal à ... "===", vérifie que les valeurs et les types
// sont bien identiques
// "64" === 64 // La condition est fausse
console.log(compare1 === compare2);

// Différent
// Différent de ..., vérifie sue les valeurs sont bien différentes
console.log(compare1 != compare2);

// Strictement différent de..., vérifie que les valeurs et les types
// sont bien différents
// "64" !== 64 // La condition est vraie
console.log(compare1 !== compare2);

// Strictement supérieur à...
console.log(compare1 > compare2);

// Strictement supérieur ou égal à...
console.log(compare1 >= compare2);

// Strictement inférieur à...
console.log(compare1 < compare2);

// Strictement inférieur ou égal à...
console.log(compare1 <= compare2);

/**
 * && veut dire "et"
 * Les deux conditions doivent être VRAIES
 */

// Une des 2 conditions étant fausse fait que la totalité des conditions
// est fausse
console.log(compare1 > compare2 && compare1 === compare2);

// Les 2 conditions étant vraies fait que la totalité des conditions
// est vraies
console.log(compare1 > compare2 && compare2 < compare1);


/**
 * || veut dire "ou"
 * 
 * Sous Mac : Options + Maj + L
 * Sous Win : AltGr + 6
 * 
 * Une des deux conditions doivent être VRAIES
 */
 console.log(compare1 > compare2 || compare1 === compare2);


 /**
  * Les conditions
  */

 /**
 * SI condition FAIRE
 *     ...
 * FINSI
 */
if (compare1 > compare2) {
    console.log("C'est exact");
}

/**
 * SI condition FAIRE
 *     ...
 * SINON
 *    ...
 * FINSI
 */
if (compare1 === compare2) {
    console.log("C'est exact");
} 
else {
    console.log("Erreur...");
}

/**
 * SI condition FAIRE
 *     ...
 * SINON SI condition FAIRE
 *     ...
 * SINON
 *     ...
 * FINSI
 */
if (compare1 === compare2) {
    console.log("C'est exact");
} 
else if (compare1 > compare2) {
    console.log("C'est exactement");
}
else {
    console.log("Erreur...");
}

/**
 * Intéragir avec l'utilisateur
 */

// Boite de dialogue
// Demande une valeur à l'utilisateur
// let age = prompt("Donnes moi ton âge ?");
// console.log(age);

// Demande une confirmation par deux boutons "Annuler" et "Ok"
// let response = confirm("Es-tu sûr de ton âge ?");
// console.log(response);

// Affiche une alerte
// alert("Attention ! Vous êtes observé !");


/**
 * Les boucles
 */

// while()
let compteur = 1;
while (compteur < 11) {
    console.log(compteur);

    // Se place en dernier
    compteur++; // NE PAS OUBLIER, SINON BOUCLE INFINIE
}

// do... while()
// Effectue au minimum une itération avant la vérification
let counter = 1;
do {
    console.log(counter);
    counter++;  // NE PAS OUBLIER, SINON BOUCLE INFINIE
} while (counter < 11);

// for()
// for([déclaration]; [condition]; [incrémentation])
for (let compteur = 1; compteur < 11; compteur++) {
    console.log(compteur);
}
