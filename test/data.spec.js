import { sortOldest, sortDataYear } from './data.js';

const FilmData = [
  {
    "title": "Castle in the Sky",
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
    "release_date": "1986",
    "rt_score": "95"
  },
  {
    "title": "From Up on Poppy Hill",
    "director": "Gorō Miyazaki",
    "producer": "Toshio Suzuki",
    "release_date": "2011",
    "rt_score": "83"
  },
  {
    "title": "My Neighbor Totoro",
    "director": "Hayao Miyazaki",
    "producer": "Hayao Miyazaki",
    "release_date": "1988",
    "rt_score": "93"
  },
  {
    "title": "Spirited Away",
    "director": "Hayao Miyazaki",
    "producer": "Toshio Suzuki",
    "release_date": "2001",
    "rt_score": "97"
  }
]

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
