let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '1');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a = prompt('Один из последних просмотренных фильмов?', 'Logan'),
    b = +prompt('На сколько оцените его?', '8.2'),
    c = prompt('Один из последних просмотренных фильмов?', 'Logan'),
    d = +prompt('На сколько оцените его?', '8.2');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;    

console.log(personalMovieDB);