export const sortAZ = (data) => {
    let sortedData=[];
    sortedData = data.sort((a,b) => {
        return a.title.localeCompare(b.title);
    });
    return sortedData;
}
<<<<<<< HEAD
// window.sortAZ = sortAZ;

export const sortDataYear = (allFilms) => {

    const sortDataYear = allFilms.sort((a,b) => {
        return b.release_date - a.release_date;
    });
return sortDataYear;
}

=======
window.sortAZ = sortAZ;

export const sortZA = (data) => {
    let sortedRev=[];
    sortedRev = data.sort((a,b) => {
        return b.title.localeCompare(a.title);
    });
    return sortedRev;
}
window.sortZA = sortZA;

export const sortDataYear = (data) => {

    const sortedYear = data.sort((a,b) => {
        return b.release_date - a.release_date;
    });
return sortedYear;
}

window.sortDataYear = sortDataYear;

export const sortOldest = (data) => {

    const sortedOld = data.sort((a,b) => {
        return a.release_date - b.release_date;
    });
return sortedOld;
}

window.sortOldest = sortOldest;


>>>>>>> BuhaAutilla-main
