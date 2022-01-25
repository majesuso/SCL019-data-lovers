import data from './data/ghibli/ghibli.js';

let allFilms = data.films; // Get data ghibli.js

window.addEventListener("load",() => {
    for (let i = 0; i < allFilms.length; ++i) {
        document.getElementById("Posters").innerHTML += `<div class = "EachPoster"><img src="${allFilms[i].poster}"></div>`;
    }
});

let dropdownSort = document.getElementById("selectSort");
dropdownSort.addEventListener('change', function () {

});



let dropdownFilms = document.getElementById("selectFilm"); // Get dropdown element from DOM

// Loop through the array
for (let i = 0; i < allFilms.length; ++i) {
    // Append the element to the end of Array list
    let arrayFilms = allFilms[i];
    // la capacidad de dropdownFilms[] se declara según la propiedad title e id del objeto/array, arrayFilms
    dropdownFilms[dropdownFilms.length] = new Option(arrayFilms.title, arrayFilms.id);
};

dropdownFilms.addEventListener('change', function () {
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

        document.getElementById("TarjetaFilmP").innerHTML = descriptionFilm;
        document.getElementById("TarjetaFilmPoster").src = posterFilm;
        document.getElementById("FilmTitle").innerHTML = titleFilm;
        document.getElementById("Director").innerHTML = directorFilm;
        document.getElementById("myYear").innerHTML = dateFilm;
        document.getElementById("RT_Score").innerHTML = rtScoreFilm;
        modal.style.display = "block";

        let arrayCharacters = filmArray.people //Toma la propiedad de people del array de filmSelected 
        //Recorre el array de people del film seleccionado
        for (let i = 0; i < arrayCharacters.length; ++i) {

            let nameCharacter = arrayCharacters[i].name; //Contiene propiedad name del array
            const charContainer = document.getElementById("Characters"); //Llama a un div de html

            const imgChar = (arrayCharacters) => { //constante que toma la función de retornar un div por cada personaje
                return `<div class="subContainerChar">
                <div class="imgChar">
                <img src="${arrayCharacters}" width="150">
                </div>
                <div class="nameChar">
                <p>${nameCharacter}</p>
                </div>
                </div>`;
            }
            
            charContainer.innerHTML += imgChar(arrayCharacters[i].img)//se le suma la url de img a cada div
        }

        
    }

});

//usando y llamando modal box
// Get the modal
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




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


