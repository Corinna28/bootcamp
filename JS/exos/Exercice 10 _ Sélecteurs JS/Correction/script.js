/*
    Exercice 10 :

    1) Sélectionner l'élément ayant la classe ".start" dans le deuxième container

    2) Sélectionner le 4ème "li" du premier container à partir de l'élément ".start", puis l'afficher dans la console.

*/
// 1
let startElement = document.querySelector('.start');

// 2
// manière plus longue mais plus détaillé au niveau des étapes
let target = startElement.parentElement; // on selectionne le ul

let parentUl = target.parentElement; // on selectionne la div section

let parentSection = parentUl.parentElement; // on selectionne la div container qui est parente de ma div section

let containerPrevious = parentSection.previousElementSibling; // On selectionne l'élément frère de ma div class container qui se situe avant lui (donc la première div container)

let childContainer = containerPrevious.children[2]; // On selectionne l'élément enfant à l'index 2 (le ul) de ma première div class container

let childUl = childContainer.children[3]; // On selectionne l'élément enfant à l'index 3 (le li  à selectionner) de mon ul

console.log(childUl); // je vérifie dans la console que je selectionne bien mon li à selectionner

// manière plus courte mais moin explicite
let target2 = startElement.parentElement.parentElement.parentElement.previousElementSibling.children[2].children[3];
console.log(target2);// je vérifie dans la console que je selectionne bien mon li à selectionner