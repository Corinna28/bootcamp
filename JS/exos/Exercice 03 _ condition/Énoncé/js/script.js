// Ici j'écris le code qui me permettra de répondre à l'énoncé

// Valeurs définies dans le script
const emailAttendu = "dave.lloper@flash.com";
const motDePasseAttendu = "motdepasse123";

// Demander à l'utilisateur son email et son mot de passe
const emailUtilisateur = prompt("Entrez votre email :");
const motDePasseUtilisateur = prompt("Entrez votre mot de passe :");

// Vérifier si les valeurs correspondent
if (emailUtilisateur === emailAttendu && motDePasseUtilisateur === motDePasseAttendu) {
  alert("Bienvenue dans votre espace client");
} else {
  alert("Identifiants incorrects");
}
