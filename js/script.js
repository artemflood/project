"use strict";

const   numberofFilms = +prompt("Скыльки філімів ви переглянули?", "");
console.log(numberofFilms);

//let numberofFilms = ['скільки фільмів ви глянули?', ""];

const PersonaMovse = {
  count: numberofFilms,
  movies: {},
  actors: {},
  ganres: [],
  privat: false,
};

const a = prompt("останній фільм який ви глянули?", ""),
      b = prompt("Ваша оцінка", ""); 
      c = prompt("останній фільм який ви глянули?", ""),
      d = prompt("Ваша оцінка", ""); 

PersonaMovse.movies.a = b;
PersonaMovse.movies.c = d;

console.log(PersonaMovse);