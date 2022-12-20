const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: function() {
    for (let i = 1; i <= personalMovieDB.count; i++) {
      const lastViewedMovie = prompt('Один из последних просмотренных фильмов?', '').trim(),
            rateLastViewedMovie = +prompt('На сколько оцените его?', '');

      if (lastViewedMovie != '' && rateLastViewedMovie != '' || (lastViewedMovie != null && rateLastViewedMovie != null && lastViewedMovie.length > 50)) {
        personalMovieDB.movies[lastViewedMovie] = rateLastViewedMovie;

      } else {
        i--;

        console.log('Недопустимое введенное значение!');
      }
    }
  },
  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDb: function(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function() {
    for (let i = 1; i <=3; i++) {
      let genre = prompt(`Ваш любимый жанр ${i}`, '');

      if (genre === '' || genre === null) {
        i--;

        console.log('Ошибка записи жанра');
      } else {
        personalMovieDB.genres[i-1] = genre;

        console.log('Жанр записан успешно');
      }
    }
    console.log(personalMovieDB.genres);

    personalMovieDB.genres.forEach(function(value, index, arr) {
      console.log(`Любимый жанр #${index+1} - это ${value}`);
    });
  },
  toggleVisibleMyDB: function() {
    if(personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDb(personalMovieDB.privat);
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
