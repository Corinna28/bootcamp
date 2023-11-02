function jouerAuJeu() {

  // La fonction Math.floor(x) renvoie le plus grand entier qui est inférieur ou égal à un nombre .x

  // La fonction Math.random() renvoie un nombre flottant pseudo-aléatoire compris dans l'intervalle [0, 1[ (ce qui signifie que 0 est compris dans l'intervalle mais que 1 en est exclu) selon une distribution approximativement uniforme sur cet intervalle. Ce nombre peut ensuite être multiplié afin de couvrir un autre intervalle. La graine (seed) du générateur est choisie par l'algorithme et ne peut pas être choisie ou réinitialisée par l'utilisateur.

    const nombreADeviner = Math.floor(Math.random() * 100) + 1;
    let tentativesRestantes = 10;
  
    const startGame = confirm("Souhaitez-vous démarrer une nouvelle partie ?");

    // La déclaration const permet de créer une constante nommée accessible uniquement en lecture. Cela ne signifie pas que la valeur contenue est immuable, uniquement que l'identifiant ne peut pas être réaffecté. Autrement dit la valeur d'une constante ne peut pas être modifiée par des réaffectations ultérieures. Une constante ne peut pas être déclarée à nouveau.
   
    if (startGame) {
      while (tentativesRestantes > 0) {
        const guess = prompt(`Choisissez un nombre entre 1 et 100 (${tentativesRestantes} / 10)`);
        const nombrePropose = parseInt(guess, 10);
  
        // La fonction isNaN() permet de déterminer si une valeur est NaN. On notera que cette fonction utilise des règles de conversion différentes de Number.isNaN(), définie avec ECMAScript 2015 (ES6).

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
  