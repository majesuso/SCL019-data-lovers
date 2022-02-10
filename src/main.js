import data from './data/ghibli/ghibli.js';
import { filtredFilm, filtredDirector, filtredGender, sortOldest, sortZA, sortAZ, sortDataYear } from "./data.js";

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
    document.querySelectorAll('.containerImg').forEach(item => {
        item.addEventListener('click', () => {
            let film_id = item.id;
            modalDisplay(film_id);
        })
    });
};

window.addEventListener("load", () => { // cargar todos los poster al cargar la página
    mainPoster(allFilms);
});

const modalDisplay = (film) => { // Función modal box de tarjeta de película
    modal.style.display = "block";
    let filmSelected = filtredFilm(allFilms, film);

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

        // ******************** DATA DE PERSONAJES ********************
        let arrayCharacters = filmArray.people //Toma la propiedad de people del array de filmSelected 
        const charContainer = document.getElementById("Characters"); //Llama a un div de html
        charContainer.innerHTML = ""; // vacia este container before use

        for (let i = 0; i < arrayCharacters.length; ++i) {
            let nameCharacter = arrayCharacters[i].name; //Contiene propiedad name del array
            const imgChar = (arrayCharacters, nameCharacter) => { //constante que toma la función de retornar un div por cada personaje
                return `<div class="subContainerChar">
                <div class="imgChar">
                <img src="${arrayCharacters}" width="150">
                </div>
                <div class="nameChar">
                <p>${nameCharacter}</p>
                </div>
                </div>`;
            }

            charContainer.innerHTML += imgChar(arrayCharacters[i].img, nameCharacter);//se le suma la url de img mas nombre a cada div
           
            let dropdownGender = document.getElementById("selectGender");
            dropdownGender.selectedIndex = 0;
            dropdownGender.addEventListener('change', function () {
                let valueGender = dropdownGender.options[dropdownGender.selectedIndex].value;
                let sortGender = filtredGender(arrayCharacters, valueGender);
                charContainer.innerHTML = "";  
                for (let i = 0; i < sortGender.length; ++i) { 
                charContainer.innerHTML += imgChar(sortGender[i].img, sortGender[i].name);
                }
            });
        }
    }
}

// Section Sorting:
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

//Sector Dropdown peliculas
let dropdownFilms = document.getElementById("selectFilm"); // Get dropdown element from DOM

for (let i = 0; i < allFilms.length; ++i) {
    let arrayFilms = allFilms[i];
    // la capacidad de dropdownFilms[] se declara según la propiedad title e id del objeto/array, arrayFilms
    dropdownFilms[dropdownFilms.length] = new Option(arrayFilms.title, arrayFilms.id);
}

dropdownFilms.addEventListener('change', function () {
    let valueFilm = dropdownFilms.options[dropdownFilms.selectedIndex].value; //valor de Film sera igual al valor del indice seleccionado
    modalDisplay(valueFilm);
})

// ******************** SELECTOR DIRECTOR ********************
let dropdownDirector = document.getElementById("selectDirector");

let allDirectors = new Set(); // crear un nuevo set (array iterable) sin repetir un elemento
// let allDirectors = [];
for (let i = 0; i < allFilms.length; ++i) {
    let film = allFilms[i];
    allDirectors.add(film.director); // se agregan los elementos al set
}

let arrayAllDir = Array.from(allDirectors); // convirtiendo set en array

for (let i = 0; i < arrayAllDir.length; ++i) {
    let option = document.createElement("option"); // se crea un nodo de tipo option
    option.setAttribute("value", arrayAllDir[i]); // se le da un atributo al nodo option
    option.textContent = arrayAllDir[i]; // Texto que aparece en dropdown
    dropdownDirector.appendChild(option); // se inserta el nodo en nuestro nodo existente en html (dropdownDirector)
}

dropdownDirector.addEventListener('change', function () {
    let valueDirector = dropdownDirector.options[dropdownDirector.selectedIndex].value;
    let directorSelected = filtredDirector(allFilms, valueDirector);
    clearPage();
    mainPoster(directorSelected);
})

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