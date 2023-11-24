/**
 * ENTRAINEMENT 8
 */

/**
 * Exercice 5
 */
document.querySelector('button').addEventListener('click', function() {
    let picture = document.querySelector('img');
    picture.remove();

    let alert = document.querySelector('div.alert-success');
    alert.classList.remove('d-none');

    setTimeout(function() {
        alert.classList.add('d-none');
    }, 3000);
});
