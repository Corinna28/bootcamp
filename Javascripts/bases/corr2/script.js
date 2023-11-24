/**
 * ENTRAINEMENT #2
 */

/**
 * Point #1
 */
let compteur = 1;
while (compteur < 11) {
    console.log(compteur);
    compteur++;
}

/**
 * Point #2
 */
for (let compteur = 1; compteur < 11; compteur++) {
    console.log(compteur);
}

/**
 * Point #3
 */

// Solution 1
for (let compteur = 2; compteur < 20; compteur+=2) {
    console.log(compteur);
}

// Solution 2
for (let compteur = 2; compteur < 20; compteur++) {
    if ((compteur%2) === 0) {
        console.log(compteur);
    }
}

/**
 * Point #4
 */
for (let i = 1; i < 11; i++) {
    let total = i*i;
    console.log(`${i} -> ${total}`);
}

/**
 * Point #5
 */
let i = 1
while (i <= 5) {
    // Math.random() génère un nombre aléatoire entre
    // 0.00000... et 0.99999...

    // Solution #1
    // let ramdom = Math.floor(Math.random() * 10);
    // console.log(ramdom);

    // Solution #2
    let ramdom = Math.random() * 10;
    // .toFixed() est un prototype permettant de limité le nombre
    // de chiffres après la virgule
    console.log(ramdom.toFixed(0));

    i++;
}

/**
 * Point #6
 */
for(let i = 4; i <= 50; i++) {

    // Si la variable "i" est différente de 13 ET 27, alors on affiche
    // le nombre en cours
    if (i !== 13 && i !== 27) {
        console.log(i);
    }
}

/**
 * 1. Array.from() est une méthode en JavaScript qui crée un nouveau tableau
 * 2. Lorsque Array.from() voit cet objet, il comprend qu'il doit créer un tableau avec 47 éléments.
 * 3. La fonction de mappage reçoit deux arguments : la valeur actuelle (ici marquée par _, qui est une convention pour indiquer qu'on ne l'utilise pas) et l'index i de l'élément en cours.
 * 4. La fonction retourne i + 4 pour chaque élément
 */
Array.from({ length: 47 }, (_, i) => i + 4)
    .filter(i => i !== 13 && i !== 27)
    .forEach(i => console.log(i))
;
