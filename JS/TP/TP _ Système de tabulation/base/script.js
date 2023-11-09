

/*
Dans la démo on peut voir que suivant le titre d'onglet que l'on va cliquer on aura un contenu correspondant, dans le squelette html nous avons des datasets sur les onglets et des id sur les contenus dont il faudra se servir pour pouvoir lié le bon nom d'onglet au bon contenu.

L'onglet cliqué change de couleur au clic en ayant la classe active rajouté dessus.
La div contenant du contenu apparaît quand on met la class active dessus également.
*/

document.addEventListener('click', function() {
    