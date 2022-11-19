const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for (let i = 1; i <= numberOfFilms; i++) {
  const lastViewedMovie = prompt('Один из последних просмотренных фильмов?', ''),
        rateLastViewedMovie = +prompt('На сколько оцените его?', '');

 if (lastViewedMovie != '' && rateLastViewedMovie != '' || (lastViewedMovie != null && rateLastViewedMovie != null && lastViewedMovie.length > 50)) {
  personalMovieDB.movies[lastViewedMovie] = rateLastViewedMovie;
 } else {
  i--;
 }
}

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}

console.log(personalMovieDB.movies);
