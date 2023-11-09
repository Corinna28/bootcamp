

// fonction qui permet de mettre en place ou supprimer la classe qui changera le thème de couleur de notre page

// Fonction pour changer le thème
function changerTheme(theme) {
    // Récupérer l'élément body
    const body = document.body;
  
    // Vérifier le thème demandé
    if (theme === "dark") {
      // Ajouter la classe dark au body
      body.classList.add("dark-theme");
      // Supprimer la classe light du body (si elle existe)
      body.classList.remove("light-theme");
    } else if (theme === "light") {
      // Ajouter la classe light au body
      body.classList.add("light-theme");
      // Supprimer la classe dark du body (si elle existe)
      body.classList.remove("dark-theme");
    }
  }
  
  // Écouteur d'événement pour le bouton Thème Clair
  document.getElementById("theme-light").addEventListener("click", () => changerTheme("light"));
  
  // Écouteur d'événement pour le bouton Thème Sombre
  document.getElementById("theme-dark").addEventListener("click", () => changerTheme("dark"));
  

// Écouteur d'évènement pour attendre le chargement complet du DOM
document.addEventListener('DOMContentLoaded', function(){// Écouteur d'événement pour le bouton Dark
    document.getElementById("bouton-dark").addEventListener("click", () => changerTheme("dark"));

    // Écouteur d'événement pour le bouton Light
    document.getElementById("bouton-light").addEventListener("click", () => changerTheme("light"));
});



