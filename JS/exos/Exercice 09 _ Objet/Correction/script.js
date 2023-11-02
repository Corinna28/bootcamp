
let animal = { // Création de l'Objet 'animal'
    // Mes 4 attributs
    type: 'chat', // Attribut type de l'animal
    origin: 'Japon', // Attribut provenance de l'animal
    nature: 'calme', // Attribut caractère de l'animal
    age: 5, // Attribut Age de l'animal

    // Mes 2 méthodes
    eat: function(){ // méthode manger
        alert('est en train de manger !');
    },
    drink: function(){ // méthode boire
        alert('est en train de boire !');
    },
}

// Affichera Il s'agit d’un chat originaire du Japon. Il a un caractère plutôt calme et il a 5 ans.
alert('Il s\'agit d\'un ' + animal.type + ' originaire du ' + animal.origin + '. Il a un caractère plutôt ' + animal.nature + ' et il a ' + animal.age + ' ans.');

// Affichera est en train de manger
animal.eat();

