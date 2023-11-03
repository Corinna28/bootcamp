// Boucle du jeu. Tant que l'utilisateur dit oui, on relance une partie
while(confirm('Souhaitez-vous démarrer une nouvelle partie ?')){

    // Création du nombre aléatoire à trouver (un entier entre 0 et 100)
    let randomNumber = Math.round( Math.random() * 100 );

    // Compteur de la boucle for, déclarée ici pour qu'il soit accessible en dehors de la boucle
    let i;

    // Boucle pour faire les 10 tentatives de l'utilisateur
    for(i = 0; i < 10; i++){

        // Récupération de la tentative du joueur, convertie en un entier de type "Number"
        let chooseNumber = parseInt( prompt('Choisissez un nombre entre 0 et 100 (' + i + ' / 10)') );

        // Cas où l'utilisateur a entré un nombre entre 0 et 100 plus grand que le nombre à trouver
        if(chooseNumber > randomNumber && chooseNumber <= 100 && chooseNumber >= 0){

            alert('Le chiffre à trouver est plus petit que ' + chooseNumber + ' !');

        // Cas où l'utilisateur a entré un nombre entre 0 et 100 plus petit que le nombre à trouver
        } else if(chooseNumber < randomNumber && chooseNumber <= 100 && chooseNumber >= 0){

            alert('Le chiffre à trouver est plus grand que ' + chooseNumber + ' !');

        // Cas où l'utilisateur a trouvé la bonne réponse
        } else if(chooseNumber === randomNumber){

            // calcul d'un score (10 points par tentatives restantes)
            let score = (10 - (i + 1)) * 10;

            alert('Bravo! vous avez trouvé le bon nombre en ' + (i+1) + ' essais! Vous avez fait un score de ' + score + ' points !');

            // On stop la boucle pour ne pas faire d'autres tentatives
            break;

        // Si on arrive ici, l'utilisateur a mis quelque chose d'invalide (nombre négatif, plus grand que 100, pas un nombre)
        } else {

            alert('Réponse invalide !');

            // On annule le tour en cours pour ne pas décompter un tour pour rien
            i--;

        }

    }

    // Si le compteur est égal à 10, c'est que la boucle a été jusqu'au bout et donc le joueur a perdu
    if(i === 10){

        alert('ECHEC : le nombre à trouver était ' + randomNumber + ' !');
    }

}