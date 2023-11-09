// Ici j'écris le code qui me permettra de répondre à l'énoncé


// Créer un Objet en Javascript qui sera :
// Un animal
// Avec 4 attributs :
// un attribut sur le type d’animal (ex : chat, chien, loutre…)
// un attribut sur la provenance de l’animal(ex : Europe, Asie, Amérique…),
// un attribut sur le caractère de l’animal (ex: sociable, joueur, agressif, solitaire…)
// un attribut sur l’ âge de l’animal (ex: 2, 10…)
// Avec 2 méthodes :
// Une méthode manger qui produira un alert(«est entrain de manger !»)
// Une méthode boire qui produira un alert(«est entrain de boire! »)
// Bonus :
// En dehors de l’objet, faire afficher avec une alert une phrase type qui reprendra les attributs : Il s'agit d’un chat originaire du Japon. Il a un caractère plutôt calme et il a 2 ans.
// Ensuite faire afficher dans une alert la méthode manger.

// Création de l'objet Animal
let Animal = {
    type: "",           // Attribut sur le type d'animal
    provenance: "",     // Attribut sur la provenance de l'animal
    caractere: "",      // Attribut sur le caractère de l'animal
    age: 0,             // Attribut sur l'âge de l'animal
  
    // Méthode pour faire manger l'animal
    manger: function() {
      alert(this.type + " est en train de manger !");
    },
  
    // Méthode pour faire boire l'animal
    boire: function() {
      alert(this.type + " est en train de boire !");
    }
  };
  
  // Remplissage des attributs de l'animal
  Animal.type = "chat";
  Animal.provenance = "Japon";
  Animal.caractere = "plutôt calme";
  Animal.age = 2;
  
  // Affichage des attributs dans une alert
  alert("Il s'agit d'un " + Animal.type + " originaire du " + Animal.provenance + ". Il a un caractère " + Animal.caractere + " et a " + Animal.age + " ans.");
  
  // Appel de la méthode manger dans une alert
  Animal.manger();
  



