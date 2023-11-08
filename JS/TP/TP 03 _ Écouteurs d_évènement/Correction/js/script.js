
// Écouteur d'évènement sur le premier rectangle
document.querySelector('#click').addEventListener('click', function(){
    // La div change de couleur au clique
    this.classList.toggle('color-changed');
});

// Écouteur d'évènement sur le deuxième rectangle
document.querySelector('#double-click').addEventListener('dblclick', function(){
    // La div se retourne au double-clique
    this.classList.toggle('button-reversed');
});


// Écouteurs d'évènements sur le troisième rectangle
let divMouse = document.querySelector('#mouse');

divMouse.addEventListener('mouseenter', function(){
    // La div grossit au passage de la souris
    this.classList.add('button-zoomed');
});

divMouse.addEventListener('mouseleave', function(){
    // La div perd la classe de grossissement quand la souris part
    this.classList.remove('button-zoomed');
});


// Écouteur d'évènement sur le 4ème rectangle
document.querySelector('#copy').addEventListener('copy', function(){
    // Le texte de la div s'efface et laisse des petits points à sa copie
    this.textContent='.......';
});


// Écouteur d'évènement sur le 5ème rectangle
// Ici je pose un écouteur sur la pression d'une touche dans mon champ
document.querySelector('#live input').addEventListener('keyup',function(){
    // Ici je récupère la valeur du champ
    inputText = this.value;

    // Ici je selectionne le paragraphe qui se situe après mon champ grâce à "this.nextElementSibling" puis je change son texte avec textContent pour qu'il soit égale à la valeur que j'aurais récupéré dans inputText
    this.nextElementSibling.textContent = inputText;
});






