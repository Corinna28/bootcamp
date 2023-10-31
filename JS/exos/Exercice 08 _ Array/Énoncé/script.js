// Ici j'écris le code qui me permettra de répondre à l'énoncé

// Écrire un programme Javascript qui :
// Va demander confirmation à l’utilisateur si il souhaite ajouter un nouveau prénom puis va demander «Quel prénom souhaitez-vous ajouter à la liste ?»
// Après avoir rentrer le prénom, il lui sera re demandé si il souhaite ajouter un nouveau prénom
// Tant que l’utilisateur entrera un prénom à ajouter, rajouter ce prénom dans un array et l’afficher dans la console

// Crée pour stocker les prénoms
const prenoms = [];

// Fonction pour demander à l'utilisateur de confirmer s'il souhaite ajouter un prénom
function demanderConfirmation() {
  return confirm("Voulez-vous ajouter un nouveau prénom à la liste ?");
}

// Fonction pour demander le prénom à ajouter
function demanderPrenom() {
  return prompt("Quel prénom souhaitez-vous ajouter à la liste ?");
}

// Boucle pour ajouter des prénoms 
while (demanderConfirmation()) {
  const prenom = demanderPrenom();
  prenoms.push(prenom);
}

// Affiche les prénoms dans la console
console.log("Liste des prénoms ajoutés :");
for (const prenom of prenoms) {
  console.log(prenom);
}
