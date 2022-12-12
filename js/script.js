let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }

}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms() {
  for (let i = 1; i <= numberOfFilms; i++) {
    const lastViewedMovie = prompt('Один из последних просмотренных фильмов?', '').trim(),
          rateLastViewedMovie = +prompt('На сколько оцените его?', '');

   if (lastViewedMovie != '' && rateLastViewedMovie != '' || (lastViewedMovie != null && rateLastViewedMovie != null && lastViewedMovie.length > 50)) {
    personalMovieDB.movies[lastViewedMovie] = rateLastViewedMovie;

    console.log('done');
   } else {
    i--;

    console.log('error');
   }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

detectPersonalLevel();

function showMyDb(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDb(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
  }
}

writeYourGenres();
