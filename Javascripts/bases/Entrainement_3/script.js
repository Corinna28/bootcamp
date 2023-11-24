/**
 * ENTRAINEMENT #3
 */

let prenoms = ["Laure", "Hugo", "Vincent", "Florian", "Steven"];

// Point #1
for(const prenom of prenoms) {
    console.log(prenom);
}

// Point #2
// Ajoute une nouvelle valeur en fin de tableau 
// quelque soit le type (string, int, bool...)
prenoms.push("Jean");
console.log(prenoms);

// splice() permet de choisir l'emplacement où vous voulez
// ajouter votre nouvelle valeur.
// Premier paramètre : index où mettre la nouvelle valeur
// Deuxième paramètre : 0 (sinon supprime des éléments)
// Troisième paramètre : la valeur à ajoutée
prenoms.splice(1, 0, "Romain");
console.log(prenoms);


// Point #3
// Supprime la valeur positionnée à l'index 2
// prenoms.splice(2, 1);
// console.log(prenoms);

// Stock les résultats filtrés dans une nouvelle variable
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
let filtered = prenoms.filter((value, index, array) => {
    // Retourne toutes les valeurs sauf celui ayant
    // l'index numéro 2
    return index !== 2;
});

console.log(prenoms);
console.log(filtered);


// Point #4
let newPrenoms = ["Jean-Marc", "Philippe", "Bertrand"];

newPrenoms.forEach(prenom => {
    console.log(prenom);
})

// Point #5

// Associe 2 tableaux en un et stock le nouveau tableau
// dans une variable
let nouveau = newPrenoms.concat(prenoms);
console.log(nouveau);

// Spread operator => ...
// https://geeklecode.com/loperateur-spread-en-javascript-va-vous-simplifier-la-vie/
// Affecter par décomposition
let nouveauTableau = [...newPrenoms, ...prenoms];
console.log(nouveauTableau);

let index = 0;
while(index < nouveauTableau.length) {
    console.log(nouveauTableau[index]);
    index++;
}