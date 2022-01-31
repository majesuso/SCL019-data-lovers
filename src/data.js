// import data from './data/ghibli/ghibli.js';

// let allFilms = data.films; // Get data ghibli.js

export const sortAZ = (allFilms) => {
    let sortAZ_2 = allFilms.sort((a,b) => {
        return a.title.localeCompare(b.title);
    });
return sortAZ_2;
}

