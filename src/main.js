import data from './data/ghibli/ghibli.js';

let allFilms = data.films;
console.log(allFilms);

// Get dropdown element from DOM
let dropdownFilms = document.getElementById("selectFilm");

// Loop through the array
for (let i = 0; i < allFilms.length; ++i) {
    // Append the element to the end of Array list
    let arrayFilms = allFilms[i];
    //console.log(arrayFilms);
    dropdownFilms[dropdownFilms.length] = new Option(arrayFilms.title, arrayFilms.id);

    let arrayCharacters = arrayFilms.people;
    //console.log(arrayCharacters);
};

dropdownFilms.addEventListener('change', function () {
    let valueFilm = dropdownFilms.options[dropdownFilms.selectedIndex].value;
    let resultado = allFilms.filter(element => element.id == valueFilm);
    console.log(resultado);
});

let dropDownGender = document.getElementById("selectGender");

dropDownGender.addEventListener('change', function (showByGender) {

    let allData = data.films,
        valueCharacter = dropDownGender.value;

    for (let i = 0; i < allData.length; ++i) {
        let arrayCharacters = allData[i].people;
        //console.log(arrayCharacters);
        if (valueCharacter == "Female"){
            console.log(arrayCharacters.filter(element => element.gender == "Female"))
        }
        if (valueCharacter == "Male"){
            console.log(arrayCharacters.filter(element => element.gender == "Male")) 
        }
        if (valueCharacter == "NA"){
            console.log(arrayCharacters.filter(element => element.gender == "NA"))
        }

    }
});
