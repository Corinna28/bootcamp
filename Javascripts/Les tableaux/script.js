/**
 * LES TABLEAUX
 */

// Déclarer un tableau
let tableau = [34, "Welcome back!", 4.67, true];
console.log(tableau);

// L'index d'un tableau démarre toujours à zéro
// Extrait la valeur située en deuxième position
console.log(tableau[1]);

// Undefined car cet index n'existe pas
console.log(tableau[5]);

console.log(tableau.length);

// Lire un tableau au complet
/* for (let i = 0; i < tableau.length; i++) {
    console.log(tableau[i]);
} */

// forEach()
tableau.forEach(item => {
    console.log(item);
});

// for... in
// Extrait l'index du tableau
for(const index in tableau) {
    console.log(index, tableau[index]);
}

// for... of
// Extrait la valeur du tableau
for(const item of tableau) {
    console.log(item);
}

// Tableau multidimensionnel
let departements = [
    [10, "Aube"],
    [30, "Gard"]
];

// [[10, "Aube"]];
departements.forEach(item => {
    // [10, "Aube"]
    item.forEach(dpt => {
        // 10
        console.log(dpt);
    });
});

/**
 * Le type "objet"
 * Collection de propriétés contenant des clés et valeurs
 */
let personnage = {
    firstName: "Guillaume",
    lastName: "Bouyer",
    address: {
        city: "Troyes"
    }
};

console.log(personnage.lastName, personnage.address.city);