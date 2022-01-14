import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

let AllFilms = data.films;
console.log(AllFilms);

// Get dropdown element from DOM
var dropdownFilms = document.getElementById("selectFilm");

// Loop through the array
for (var i = 0; i < AllFilms.length; ++i) {
    // Append the element to the end of Array list
    dropdownFilms[dropdownFilms.length] = new Option(AllFilms[i].title, AllFilms[i]);
};

// document.getElementById("selectFilm").addEventListener ('onselect', function () {
// AllFilms.forEach(element => console.log(element));
// });


// console.log()
// console.log(example, data);
