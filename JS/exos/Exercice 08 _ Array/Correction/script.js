
// Création d'un array vide qui contiendra les prénoms
const firstName = [];

// Tant que l'utilisateur souhaite ajouter un prénom, on boucle
while(confirm("Ajouter un nouveau prénom ?")){

    //Récupération d'un prénom avec un prompt
    let addName = prompt("Quel prénom souhaitez-vous ajouter à la liste ?");

    // Ajout du nouveau prénom dans le tableau
    firstName.push(addName);

    // Affichage du tableau dans la console
    console.log(firstName);
}






