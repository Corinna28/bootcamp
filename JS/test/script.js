

// Je selectionne mon paragraphe (.text02)
let text02 = document.querySelector('.text02');

// Je stock le contenu textuel de mon paragraphe dans ma variablecontentText02
let contentText02 = text02.textContent;

// Je modifie le contenu textuel de mon paragraphe en 'Thor'
text02.textContent = 'Thor';


// Je stock le contenu html de mon paragraphe dans ma variablecontentText02
let contentElement = text02.innerHTML;

// Je modifie le contenu html de mon paragraphe en '<strong>Thor</strong>'
text02.innerHTML = '<strong>Thor</strong>';


// Je selectionne mon titre h1
let titleMain = document.querySelector('h1');


// Je stock/récupère l'id de mon h1
let titleId = titleMain.id;

// Je change l'id de mon h1
titleMain.id = 'new-id';


// Classes

// Je stock/récupère la class de mon h1
let titleClass = titleMain.className;

// Je change la class de mon h1
titleMain.className = 'new-class';

// J'ajoute une classe à mon élément sans toucher aux autres
titleMain.classList.add('color-red');

// Je supprime une classe à mon élément sans toucher aux autres
titleMain.classList.remove('color-red');

// Je remplace une classe de mon élément sans toucher aux autres
titleMain.classList.replace('new-class', 'color-green');

// Ajoute une class si elle n'est pas déjà présente sinon la supprime
titleMain.classList.toggle('color-red');

if(titleMain.classList.contains('color-red')){
    alert('L\élément contient bien la classe css color-red');
}else{
    alert('L\élément ne contient pas la classe css color-red');
}

// Attributs

// Je stock ma selection (mon image) dans une variable
let imgAnimal = document.querySelector('img');

// Je stock ma valeur d'attribut (de mon image) dans une variable
let attributeValue = imgAnimal.getAttribute('src');

// Je change la valeur de l'attribut src de mon image (l'élément que j'ai selectionné)
imgAnimal.setAttribute('src','img/hérisson.jpg');



// Je selectionne mon titre h1
let titleMain2 = document.querySelector('h1');

// J'applique la couleur rouge sur mon h1 grâce à style.nomDeLaPropiétéCss = 'valeurDeLaPropriétéCss'
titleMain2.style.color = 'red';

// Je selectionne ma première section pour lui appliquer une couleur de fond "rgb(113, 96, 129)"
document.querySelector('section').style.backgroundColor = "rgb(113, 96, 129)" ;

// Je selectionne mon élément (ici mon <a> par sa classe) puis je le supprime avec .remove()
document.querySelector('.link-wiki-cat').remove();


// Déplacement d'élément dans le DOM

// je stock dans ma variable l'élément que je souhaite déplacer
let targetToMove = document.querySelector('.target');

// je stock dans ma variable l'élément dont me sert comme destination
let destination = document.querySelector('.parent-list');



// point de référence + type de déplacement(l'élément à deplacer)
    // Déplacement de li .target dans mon ul .parent-list au début
destination.prepend(targetToMove); // à l'intérieur au début
destination.append(targetToMove); // à l'intérieur à la fin

destination.after(targetToMove); // après
destination.before(targetToMove); // avant


// Création et insertion d'un ou plusieurs éléments html avec leurs textes, attributs, classes etc

// Je créé mon footer (<footer></footer>) avec createElement
let footer = document.createElement('footer');

// Je créé un paragraphe avec du texte à l'intérieur de mon footer
footer.innerHTML = '<p>lorem ipsum</p>';

// Je place mon footer après mon image
imgAnimal.after(footer);




// Je selectionne l'élément à dupliquer et je le stock dans une variable
let sectionList = document.querySelector('.section-list');

// J'utilise cloneNode pour dupliquer l'élément selectionné, avec true pour dupliquer également les enfants de mon élément, et je stock mon élément dupliqué dans la variable copy
let copy = sectionList.cloneNode(true);

// Pour placer ma copie j'utilise les placements js (ici after) pour la positionner après ma section sectionList
sectionList.after(copy);

    // autre possibilité d'écriture sans passer par une variable : sectionList.after(sectionList.cloneNode(true));


    


let elements = document.querySelectorAll('.parent-list>li');

elements.forEach((element)=>{
    element.style.color = 'red';
});