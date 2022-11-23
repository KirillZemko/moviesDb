let numberOfFilms;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }

}

start();

function rememberMyFilms() {
  for (let i = 1; i <= numberOfFilms; i++) {
    const lastViewedMovie = prompt('Один из последних просмотренных фильмов?', ''),
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

console.log(personalMovieDB.movies);

// const usdCurr = 28;
// const eurCurr = 32;
// const discount = 0.9;

// function convert(amount, curr) {
//    return curr * amount;
// }

// function promotion(result) {
//   console.log(result * discount);
// }

// let res = convert(500, usdCurr)

// promotion(res);

// function test() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);

//     if (i === 3) return;
//   }

//   console.log('Done');
// }

// test();

// function doNothing() {}
// console.log(doNothing() === undefined);

// // первая задача
// function sayHello(name) {
//   return `Привет, ${name}!`;
// }

// // вторая задача
// function returnNeighboringNumbers(num) {
//   let res = [num - 1, num, num + 1];

//   return res;
// }

// console.log((returnNeighboringNumbers(5)));

// //третия задача

// // 3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно
// // будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку
// // (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---".
// // После последнего числа их не должно быть. Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент.

// // (Проверяем через оператор typeof)

// // Примеры:
// // Вызов функции getMathResult(5, 3) даст ответ 5---10---15
// // Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30
// // Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50
// // Вызов функции getMathResult(10, '5') даст ответ 10
// // Вызов функции getMathResult(10, 0) даст ответ 10
// // Вызов функции getMathResult(20, -5) даст ответ 20

// // Эта задача уже ближе к реальности, когда вам нужно учитывать и тип данных у аргументов, проверять их и продумывать логику работы внутри. Обратите внимание на прогрессию, она рассчитывается по простой формуле умножения. Если первый аргумент 5, а второй 3, то число повторяется 3 раза, каждый раз увеличиваясь на само себя. Это базовая математика, которая и нужна для работы в 95% случае на фронтенде.
// // function getMathResult(num, times) {
// //     if (typeof(times) !== 'number' || times <= 0) {
// //       return num;
// //     }

// //     let str = '';

// //     for (let i = 1; i <= times; i++) {
// //       if (i === times) {
// //         str += `${num * i}`; // Тут без черточек в конце
// //       } else {
// //         str += `${num * i}---`; // Это тоже самое, что и str = str + num * i + "---"
// //       }
// //     }
// //   return str;
// // }

// // console.log(getMathResult(5, 3));

// const str = 'test';
// // const arr = [1, 2, 4];

// console.log(str);
// console.log(str.toUpperCase());

// const fruit = 'Some fruit';
// console.log(fruit.indexOf('fruit'));

// const logg = 'Hello world';

// console.log(logg.slice(6));
// console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 5));

// const num = 12.2;
// console.log(Math.round(num));

// const test = '12.2px';
// // console.log(parseInt(test));
// console.log(parseFloat(test));
