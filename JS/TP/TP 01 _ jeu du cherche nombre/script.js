function jouerAuJeu() {
    const nombreADeviner = Math.floor(Math.random() * 100) + 1;
    let tentativesRestantes = 10;
  
    const startGame = confirm("Souhaitez-vous démarrer une nouvelle partie ?");
  
    if (startGame) {
      while (tentativesRestantes > 0) {
        const guess = prompt(`Choisissez un nombre entre 1 et 100 (${tentativesRestantes} / 10)`);
        const nombrePropose = parseInt(guess, 10);
  
        if (isNaN(nombrePropose) || nombrePropose < 1 || nombrePropose > 100) {
          alert("Veuillez entrer un nombre valide entre 1 et 100.");
          continue;
        }
  
        if (nombrePropose < nombreADeviner) {
          alert(`Le chiffre à trouver est plus grand que ${nombrePropose} !`);
        } else if (nombrePropose > nombreADeviner) {
          alert(`Le chiffre à trouver est plus petit que ${nombrePropose} !`);
        } else {
          alert(`Bravo ! Vous avez deviné le nombre ${nombreADeviner} en ${11 - tentativesRestantes} tentatives.`);
          break;
        }
  
        tentativesRestantes--;
      }
  
      if (tentativesRestantes === 0) {
        alert(`Désolé, vous avez épuisé toutes vos tentatives. Le nombre à deviner était ${nombreADeviner}.`);
      }
    } else {
      alert("Le jeu a été annulé. Cliquez sur le bouton de rafraîchissement pour recommencer.");
    }
  }
  
  jouerAuJeu();
  