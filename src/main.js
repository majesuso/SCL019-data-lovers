import data from './data/ghibli/ghibli.js';

let allFilms = data.films; // Get data ghibli.js
let dropdownFilms = document.getElementById("selectFilm"); // Get dropdown element from DOM

// Loop through the array
for (let i = 0; i < allFilms.length; ++i) {
    // Append the element to the end of Array list
    let arrayFilms = allFilms[i];
    // la capacidad de dropdownFilms[] se declara según la propiedad title e id del objeto/array, arrayFilms
    dropdownFilms[dropdownFilms.length] = new Option(arrayFilms.title, arrayFilms.id);
};

dropdownFilms.addEventListener('change', function (showFilm) {
    let valueFilm = dropdownFilms.options[dropdownFilms.selectedIndex].value; //valor de Film sera igual al valor del indice seleccionado
    let filmSelected = allFilms.filter(element => element.id == valueFilm); // Filtra según el id == valor del indice seleccionado

    //Recorriendo array del film seleccionado
    for (let i = 0; i < filmSelected.length; ++i) {

        //Recogiendo propiedades del objeto del film seleccionado
        let filmArray = filmSelected[i],
            titleFilm = filmArray.title,
            descriptionFilm = filmArray.description,
            directorFilm = filmArray.director,
            posterFilm = filmArray.poster,
            dateFilm = filmArray.release_date,
            rtScoreFilm = filmArray.rt_score;

        document.write("Título: " + titleFilm + "<br>" + "Descripción: " + descriptionFilm + "<br>" + "Director: " + directorFilm + "<br>" + "Año: " + dateFilm + "<br>" + rtScoreFilm);

    }
});

//let dropDownGender = document.getElementById("selectGender");

/* dropDownGender.addEventListener('change', function () {

    let allData = data.films,
        valueCharacter = dropDownGender.value;

    for (let i = 0; i < allData.length; ++i) {
        let arrayCharacters = allData[i].people;
        console.log(arrayCharacters.filter(element => element.gender == valueCharacter));
    }
});
*/
