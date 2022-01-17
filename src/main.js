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
    let arrayFilms = AllFilms[i];
    dropdownFilms[dropdownFilms.length] = new Option(arrayFilms.title, arrayFilms);
};

dropdownFilms.addEventListener ('change', function () {
    var valueFilm = dropdownFilms.options[dropdownFilms.selectedIndex].value;
    var text = dropdownFilms.options[dropdownFilms.selectedIndex].text;
    console.log(text);
});


// console.log()
// console.log(example, data);
