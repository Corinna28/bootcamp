
// À l’aide d’une boucle « while », afficher les entiers allant de 1 à 10 ;

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}


// Faire la même chose que le point précédent, mais avec une boucle « for » ;

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// En commençant par le nombre 2, afficher tous les nombres pairs inférieurs à 20 avec une boucle « for » 


for (let i = 2; i < 20; i += 2) {
    console.log(i);
}


// Afficher les dix premiers entiers et leurs carrés avec la boucle de votre choix 
// 

for (let i = 1; i <= 10; i++) {
    const entiers = i ** 2;
    console.log(`${i} au carré est ${entiers}`);
}

// Afficher grâce à une boucle « while » cinq numéros aléatoires :

let count = 0;
while (count < 5) {
    console.log(Math.floor(Math.random() * 100) + 1);
    count++;
}

// . Afficher les entiers de 4 à 50, hormis les nombres 13 et 27 avec une boucle 
// « for »

for (let i = 4; i <= 50; i++) {
    if (i !== 13 && i !== 27) {
        console.log(i);
    }
}

