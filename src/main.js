import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

let AllFilms = data.films;
console.log(AllFilms);

// Get dropdown element from DOM
let dropdownFilms = document.getElementById("selectFilm");

// Loop through the array
for (let i = 0; i < AllFilms.length; ++i) {
    // Append the element to the end of Array list
    let arrayFilms = AllFilms[i];
    console.log(arrayFilms);
    dropdownFilms[dropdownFilms.length] = new Option(arrayFilms.title, arrayFilms.id);
};

dropdownFilms.addEventListener ('change', function () {
    let valueFilm = dropdownFilms.options[dropdownFilms.selectedIndex].value;
    let resultado = AllFilms.filter(element => element.id == valueFilm);
    console.log(resultado);
});


// console.log()
// console.log(example, data);
