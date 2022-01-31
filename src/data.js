export const sortAZ = (data) => {
    let sortedData=[];
    sortedData = data.sort((a,b) => {
        return a.title.localeCompare(b.title);
    });
    return sortedData;
}
// window.sortAZ = sortAZ;

export const sortDataYear = (allFilms) => {

    const sortDataYear = allFilms.sort((a,b) => {
        return b.release_date - a.release_date;
    });
return sortDataYear;
}

