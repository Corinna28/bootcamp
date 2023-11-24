/**
 * ENTRAINEMENT 8
 */

/**
 * Exercice 4
 */
let notes = [12, 15, 20, 1, 8, 4, 15, 18, 10, 9, 6, 18, 17, 10];

// Moyenne des notes
let moyenne = function(notes) {
  let somme = 0;
  for (let i = 0; i < notes.length; i++) {
    somme += notes[i];
  }

  return somme / notes.length;
}

// Notes supérieures à 10
let meilleureNotes = function(notes) {
  let max = 10;
  let meilleuresNotes = [];

  for (let i = 0; i < notes.length; i++) {
    if (notes[i] > max) {
      meilleuresNotes.push(notes[i]);
    }
  }

  return meilleuresNotes;
}
