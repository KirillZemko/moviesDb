const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '1');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const lastViewedmovie = prompt('Один из последних просмотренных фильмов?', 'Logan'),
  rateLastViewedMovie = +prompt('На сколько оцените его?', '8.2'),
  lastViewedmovie2 = prompt('Один из последних просмотренных фильмов?', 'Logan'),
  rateLastViewedMovie2 = +prompt('На сколько оцените его?', '8.2');

personalMovieDB.movies[lastViewedmovie] = rateLastViewedMovie;
personalMovieDB.movies[lastViewedmovie2] = rateLastViewedMovie2;

console.log(personalMovieDB.movies);

let num = 50;

while (num < 55) {
  console.log(num);
  num++;
}
