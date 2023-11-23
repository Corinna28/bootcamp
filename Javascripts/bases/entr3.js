// Créer un tableau contenant 5 prénoms différents.
// 1. Afficher le tableau dans la console avec la boucle for... of ;
// 2. Ajouter un nouveau prénom à la fin du tableau en JavaScript et non 
// manuellement ;
// 3. Retirer le prénom du tableau en index 2 (toujours en JavaScript et non 
// manuellement)

// Étape 1: Créer un tableau avec 5 prénoms différents
let prenoms = ['Dave', 'Jean', 'Guillaume', 'David', 'Eva'];

// Étape 2: Afficher le tableau dans la console avec la boucle for...of
console.log("Tableau initial :");
for (const prenom of prenoms) {
    console.log(prenom);
}

// Étape 3: Ajouter un nouveau prénom à la fin du tableau
let nouveauPrenom = 'Corinna';
prenoms.push(nouveauPrenom);

// Étape 4: Afficher le tableau mis à jour dans la console avec la boucle for...of
console.log("Tableau mis à jour avec le nouveau prénom :");
for (const prenom of prenoms) {
    console.log(prenom);
}

// Étape 5: Retirer le prénom du tableau en index 2
let indexASupprimer = 2;
prenoms.splice(indexASupprimer, 1);

// Étape 6: Afficher le tableau mis à jour après la suppression
console.log("Tableau mis à jour après la suppression :");
for (const prenom of prenoms) {
    console.log(prenom);
}


// Créer un tableau de 3 prénoms différents de l’entrainement #1.
// 1. Afficher dans la console les prénoms de ce tableau avec la boucle forEach. 
// 2. Associer en JavaScript ce tableau et le tableau de l’entrainement #1pour en 
// former qu’un seul ;
// 3. Afficher le contenu dans la console avec la boucle de votre choix

// Étape 1: Créer un tableau de 3 prénoms différents de l’entraînement #1
let tableauEntrainement2 = prenomsEntrainement1.slice(0, 3);

// Étape 2: Afficher les prénoms du tableau avec la boucle forEach
console.log("Prénoms du tableau avec la boucle forEach :");
tableauEntrainement2.forEach(prenom => {
    console.log(prenom);
});

// Étape 3: Associer les deux tableaux pour en former qu’un seul
let tableauCombine = prenomsEntrainement1.concat(tableauEntrainement2);

// Étape 4: Afficher le contenu dans la console avec la boucle de votre choix
console.log("Contenu du tableau combiné avec la boucle for...of :");
for (const element of tableauCombine) {
    console.log(element);
}
