// Je définis mes constantes de mail et mot de passe utilisateur
const mailUser = "admin@gmail.com";
const pwdUser = "Admin123";

// Je demande à l'utilisateur de saisir son mail et son mot de passe en stockant les valeurs dans un variable mail et password
let mail = prompt('Veuillez saisir votre mail !');
let password = prompt('Veuillez saisir votre mot de passe');


//Je déclare ma condition
if(mail !== mailUser || pwdUser !== password){ // Si le mail ou le mot de passe ne correspondent pas à ceux que j'ai définis dans mes constantes
    alert("Identifiants incorrects !"); // j'affiche ce message
}else{ //Sinon
    alert("Bienvenu dans votre espace client !") // j'affiche ce message
}
