import data from './data/ghibli/ghibli.js';
import { sortAZ, sortDataYear } from "./data.js";

const allFilms = data.films; // Get data ghibli.js

const clearPage = () => { // Función para limpiar contenedor de posters
    document.getElementById("Posters").innerHTML = "";
}

const mainPoster = (films) => { // Función para crear boxes para cada poster
    for (let i = 0; i < films.length; ++i) {
        document.getElementById("Posters").innerHTML += `<div class="subContainerPoster">
        <div id="${allFilms[i].id}" class="containerImg">
        <img src="${allFilms[i].poster}">
        <div class="titleEng"><p>${allFilms[i].title}</p>
        </div>
        </div>
        </div>`;
    }
};

window.addEventListener("load", () => { // cargar todos los poster al cargar la página
    mainPoster(allFilms);
});

const modalDisplay = (film) => { // Función modal box de tarjeta de película
    modal.style.display = "block";
    let filmSelected = allFilms.filter(element => element.id == film); // Filtra según el id == valor del indice seleccionado
    // ******************** DATA FILM  ********************
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
        // modal.style.display = "block";

        // ******************** DATA DE PERSONAJES ********************
        let arrayCharacters = filmArray.people //Toma la propiedad de people del array de filmSelected 

        const charContainer = document.getElementById("Characters"); //Llama a un div de html
        charContainer.innerHTML = ""; // vacia este container before use

        for (let i = 0; i < arrayCharacters.length; ++i) {
            let nameCharacter = arrayCharacters[i].name; //Contiene propiedad name del array
            const imgChar = (arrayCharacters) => { //constante que tiene la función de retornar un div por cada personaje
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
    };
}

// const containerImg = document.querySelector('.subContainerPoster');
// const Img = containerImg.querySelectorAll('.containerImg');

// console.log(containerImg);
// document.querySelectorAll('.containerImg').forEach(item => {
//     item.addEventListener('click', event => {
//         console.log(item);
//         let film_id = item.id; //dropdownFilms.options[dropdownFilms.selectedIndex].value; - 
//         modalDisplay(film_id);
//     })
//   });


// ******************** SELECTOR SORT ********************

let dropdownSort = document.getElementById("selectSort");
dropdownSort.addEventListener('change', function () {

    let valueSort = dropdownSort.value;

    if (valueSort === "Newest") { // Ordena por año descendente
        let infoSorted = sortDataYear(allFilms);
        clearPage();
        mainPoster(infoSorted);
    }

    if (valueSort === "Oldest") { // Ordena por año ascendente
        let OldestYear = sortOldest(allFilms);
        clearPage();
        mainPoster(OldestYear);
    }

    if (valueSort === "A_Z") { // Ordena alfabéticamente de A a Z
        let infoSort = sortAZ(allFilms);
        clearPage();
        mainPoster(infoSort);
    }

    if (valueSort === "Z_A") { // Ordena alfabéticamente de Z a A
        let infoSortR = sortZA(allFilms);
        clearPage();
        mainPoster(infoSortR);
    }

});

// ******************** SELECTOR FILM ********************
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
    modalDisplay(valueFilm);
});

// ******************** SELECTOR DIRECTOR ********************
let dropdownDirector = document.getElementById("selectDirector");
console.log(dropdownDirector);
let allDirectors = new Set(); // crear un nuevo set (array iterable) sin repetir un elemento

for (let i = 0; i < allFilms.length; ++i) {
    let film = allFilms[i];
    allDirectors.add(film.director); // se agregan los elementos al set
}

let arrayAllDir = Array.from(allDirectors); // convirtiendo set en array
console.log(arrayAllDir);

for(let i = 0; i < arrayAllDir.length; ++i){
    
    let option = document.createElement("option");
    option.setAttribute("value",arrayAllDir[i]);
    option.textContent = arrayAllDir[i];
    dropdownDirector.appendChild(option);
}


// dropdownDirector.addEventListener('change', function () {
//     let valueDirector = dropdownDirector.options[dropdownDirector.selectedIndex].value;

// })

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