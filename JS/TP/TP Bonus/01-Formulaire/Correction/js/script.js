// Fonctions : gérer les erreurs, nettoyer les erreurs

// fonction pour mettre le champ demandé (field) en rouge (classe CSS "field-invalid") et insérer un message d'erreur (errorText) en dessous du champ qui aura la class css "error-text".
function setFieldError(field, errorText){

    // Ajout de la classe css "field-invalid" sur le champ
    field.classList.add('field-invalid');

    // Création d'une nouvelle div pour le message d'erreur
    let errorElement = document.createElement('div');

    // On donne la classe css "invalid-feedback" à cette div
    errorElement.classList.add('error-text');

    // On donne le contenu textuel à l'erreur
    errorElement.textContent = errorText;

    // Insertion de l'erreur après le champ (after)
    field.after(errorElement);
}

// Attente du chargement de la page
document.addEventListener('DOMContentLoaded', function(){

    // Sélection du formulaire que nous souhaitons vérifier
    let form = document.querySelector('form#register-form');

    // Création des variables qui pointent sur les champs du formulaire
    let firstnameField = form.querySelector('#firstname');
    let lastnameField = form.querySelector('#lastname');

    // Mise en place d'un écouteur d'évènement sur l'envoi du formulaire (event submit)
    form.addEventListener('submit', (e) => {

        // On empêche le formulaire d'actualiser la page
        e.preventDefault();

        // On nettoie les messages d'erreurs déjà présent pour éviter leur accumulation

            // Sélection de tous les champs actuellement en rouge dans le formulaire (ceux ayant la classe css "field-invalid")
        let fieldsToClear = document.querySelectorAll('.field-invalid');

            // On parcourt tous les champs trouvés pour leur retirer la classe "field-invalid"
        fieldsToClear.forEach((field) => {

            field.classList.remove('field-invalid');

        });

            // Sélection de tous les messages d'erreur (les éléments ayant la classe css "error-text")
        let errorElements = document.querySelectorAll('.error-text');

            // On parcourt tous les messages d'erreurs trouvés pour les supprimer complètement
        errorElements.forEach((errorElement) => {
            errorElement.remove();
        });


        // Vérification du premier champ
        // On vérifie si la taille de la valeur correspond à l'interval que nous souhaitons sinon erreur
        if(firstnameField.value.length < 2 || firstnameField.value.length > 25){
            // Appel de la fonction permettant de mettre le champ "firstnameField" en rouge avec un message d'erreur dessus
            setFieldError(firstnameField, 'Le prénom doit contenir entre 2 et 25 caractères !');
        }

        // Vérification du deuxième champ
        if(lastnameField.value.length < 2 || lastnameField.value.length > 25){
            setFieldError(lastnameField, 'Le nom doit contenir entre 2 et 25 caractères !');
        }


    });
});