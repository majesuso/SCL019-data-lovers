export const sortAZ = (data) => {
    let sortedData=[];
    sortedData = data.sort((a,b) => {
        return a.title.localeCompare(b.title);
    });
    return sortedData;
}

export const sortZA = (data) => {
    let sortedRev=[];
    sortedRev = data.sort((a,b) => {
        return b.title.localeCompare(a.title);
    });
    return sortedRev;
}

export const sortDataYear = (data) => {
    const sortedYear = data.sort((a,b) => {
        return b.release_date - a.release_date;
    });
return sortedYear;
}

export const sortOldest = (data) => {
    const sortedOld = data.sort((a,b) => {
        return a.release_date - b.release_date;
    });
return sortedOld;
}

export const filtredFilm = (data, film) => {
    const filmSel = data.filter(element => element.id == film);
    // console.log(filmSel);
    return filmSel;
}

export const filtredDirector = (data, director) => {
    const dirSel = data.filter(element => element.director == director);
    // console.log(dirSel);
    return dirSel;
}

export const filtredGender = (data, gender) => {
    const genSel = data.filter(element => element.gender == gender);
    // console.log(genSel);
    return genSel;
}