import { sortOldest, sortDataYear, filtredDirector, filtredFilm } from './data.js';

const FilmData = [
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
    "release_date": "1986",
    "rt_score": "95"
  },
  {
    "id": "45db04e4-304a-4933-9823-33f389e8d74d",
    "title": "From Up on Poppy Hill",
    "director": "Gorō Miyazaki",
    "producer": "Toshio Suzuki",
    "release_date": "2011",
    "rt_score": "83"
  },
  {
    "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    "title": "My Neighbor Totoro",
    "director": "Hayao Miyazaki",
    "producer": "Hayao Miyazaki",
    "release_date": "1988",
    "rt_score": "93"
  },
  {
    "id": "dc2e6bd1-8156-4886-adff-b39e6043af0c",
    "title": "Spirited Away",
    "director": "Hayao Miyazaki",
    "producer": "Toshio Suzuki",
    "release_date": "2001",
    "rt_score": "97"
  }
]
// sort by year and vice versa
describe('sortOldest returns Films in order from oldest to newest', () => {
  it('is a function', () => {
    expect(typeof sortOldest).toBe('function');
  });

  it('returns films like [From Up on Poppy Hill],[Spirited Away], [My Neighbor Totoro], [Castle in the Sky]', () => {
    let dataYear = sortOldest(FilmData);

    expect(dataYear[0].title).toEqual('From Up on Poppy Hill');
    expect(dataYear[1].title).toEqual('Spirited Away');
    expect(dataYear[2].title).toEqual('My Neighbor Totoro');
    expect(dataYear[3].title).toEqual('Castle in the Sky');
  });
});

describe('sortDataYear returns Films in order from newest to oldest', () => {
  it('is a function', () => {
    expect(typeof sortDataYear).toBe('function');
  });

  it('return films like [Castle in the Sky],[My Neighbor Totoro],[Spirited Away],[From Up on Poppy Hill] ', () => {

    let dataYear = sortDataYear(FilmData);

    expect(dataYear[0].title).toEqual('Castle in the Sky');
    expect(dataYear[1].title).toEqual('My Neighbor Totoro');
    expect(dataYear[2].title).toEqual('Spirited Away');
    expect(dataYear[3].title).toEqual('From Up on Poppy Hill');
  });
});

// selected director
describe('filtredDirector return films for selected director', () => {
  it('is a function', () => {
    expect(typeof filtredDirector).toBe('function');
  });

  it('Return film for director Gorō Miyazaki: [From Up on Poppy Hill]', () => {

    let dataDirector = filtredDirector(FilmData, ["Gorō Miyazaki"]);
    expect(dataDirector[0].title).toEqual('From Up on Poppy Hill');
  });

  it('Return selected item: Gorō Miyazaki', () => {
    let dataDirector = filtredDirector(FilmData, ["Gorō Miyazaki"]);
    expect(dataDirector[0].director).toEqual('Gorō Miyazaki');
  });

});

// selectedfilm
describe('filtredFilm return film id', () => {
  it('is a function', () => {
    expect(typeof filtredFilm).toBe('function');
  });

  it('Return film Id for selected [From Up on Poppy Hill]: ', () => {

    let dataFilm = filtredFilm(FilmData, ["From Up on Poppy Hill"]);
    expect(dataFilm[0].id).toEqual("45db04e4-304a-4933-9823-33f389e8d74d");
  });
});
