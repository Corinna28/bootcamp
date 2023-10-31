/*
Écrire un programme Js qui demande à l’utilisateur d’entrer à partir du clavier la distance parcourue en m (mètre) et demande ensuite le temps mît à parcourir cette distance en sec (secondes).

Calculer la vitesse selon la formule suivante : vitesse = distance parcourue/temps.

Afficher le résultat en pop-up sur la page et dans la console dans le format suivant : 345 m/s.
*/

// 1er étape
let dist = prompt('Veuillez rentrer la distance parcourue (en mètre)');
let timeDist = prompt('Veuillez rentrer le temps mît pour la distance parcourue (en seconde)');

// 2ème étape
let speed = parseInt(dist / timeDist);

// 3ème étape
alert('Votre vitesse est de ' + speed + 'm/s');

console.log(`${speed} m/s`);