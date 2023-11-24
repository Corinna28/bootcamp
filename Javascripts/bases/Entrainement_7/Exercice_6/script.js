/**
 * ENTRAINEMENT 8
 */

/**
 * Exercice 5
 */
document.querySelector('input#text').addEventListener('keyup', function(e) {
    let span = document.querySelector('span');
    span.innerText = this.value;
});
