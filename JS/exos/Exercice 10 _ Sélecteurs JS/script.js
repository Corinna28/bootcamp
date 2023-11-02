/*
    Exercice 10 :

    1) Sélectionner l'élément ayant la classe ".start" dans le deuxième container*/

  var container2 = document.getElementById("container2");

// Sélectionnez l'élément avec la classe ".start" à l'intérieur du deuxième container
var startElement = container2.querySelector(".start");

// l'élément ".start" du deuxième container
console.log(startElement);


    // 2) Sélectionner le 4ème "li" du premier container à partir de l'élément ".start", puis l'afficher dans la console.

  
var container1 = document.getElementById("container1");

// Trouvez l'élément ".start" à l'intérieur du premier container
var startElement = container1.querySelector(".start");

// En partant de l'élément ".start," sélectionnez le 4ème "li"
var fourthLi = startElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;


console.log(fourthLi);


