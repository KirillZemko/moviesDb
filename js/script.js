// 1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
// перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
// Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

// 2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
// переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

// 3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
// Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены -
// при помощи метода forEach вывести в консоль сообщения в таком виде:
// "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

let numberOfFilms;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: function() {
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
