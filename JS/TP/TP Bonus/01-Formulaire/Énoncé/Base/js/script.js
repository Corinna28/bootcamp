

// fonction pour mettre le champ demandé (field) en rouge (classe CSS "field-invalid") et insérer un message d'erreur (errorText) en dessous du champ qui aura la class css "error-text".

// Fonction pour ajouter la classe field-invalid, créer et afficher un message d'erreur
// Fonction pour ajouter la classe field-invalid, créer et afficher un message d'erreur

function afficherErreur(champ, message) {
    // Ajouter la classe field-invalid sur le champ demandé
    champ.classList.add("field-invalid");
  
    // Créer une div pour le message d'erreur
    const erreurDiv = document.createElement("div");
  
    // Ajouter la classe error-text à la div
    erreurDiv.classList.add("error-text");
  
    // Donner du texte à la div avec le message d'erreur
    erreurDiv.textContent = message;
  
    // Insérer la div après le champ demandé
    champ.parentNode.insertBefore(erreurDiv, champ.nextSibling);
  }
  



// Attente du chargement de la page
document.addEventListener('DOMContentLoaded', function(){
// Sélectionner le formulaire à vérifier
const formulaire = document.getElementById("register-form");

// Créer 2 variables pour les champs de formulaire à vérifier
const prenomChamp = document.getElementById("firstname");
const nomChamp = document.getElementById("lastname");

// Mettre un écouteur d'événement sur l'envoi du formulaire
formulaire.addEventListener("submit", (event) => {
  // Empêcher le comportement par défaut du formulaire
  event.preventDefault();

  // Nettoyer les messages d'erreurs existants
  document.querySelectorAll(".field-invalid").forEach((element) => element.classList.remove("field-invalid"));
  document.querySelectorAll(".error-text").forEach((element) => element.parentNode.removeChild(element));

  // Vérifier la longueur du prénom
  if (prenomChamp.value.length < 2 || prenomChamp.value.length > 25) {
    afficherErreur(prenomChamp, "Le prénom doit contenir entre 2 et 25 caractères !");
  }

  // Vérifier la longueur du nom
  if (nomChamp.value.length < 2 || nomChamp.value.length > 25) {
    afficherErreur(nomChamp, "Le nom doit contenir entre 2 et 25 caractères !");
  }
});
});