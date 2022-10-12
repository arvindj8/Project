"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const nameOfFilms1 = prompt('Один из последних просмотренных фильмов?', ''),
      feedbackOfFilms1 = prompt('на сколько вы оцените его?', ''),
      nameOfFilms2 = prompt('Один из последних просмотренных фильмов?', ''),
      feedbackOfFilms2 = prompt('на сколько вы оцените его?', '');


personalMovieDB.movies[nameOfFilms1] = feedbackOfFilms1;
personalMovieDB.movies[nameOfFilms2] = feedbackOfFilms2;

console.log(personalMovieDB);

