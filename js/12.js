'use strict';

let numberOfFilms ;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms==null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    }
}


start();

 const personalMovieDB = {
  count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
 
             
function rememberMyFilms() {
    for (let i=0; i<2; i++){
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = +prompt('На сколько оцените его?', '');
 
              if(a !=null && b !=null && a != '' && b != '' && a.length < 50 ){
                 personalMovieDB.movies[a] = b;
                 console.log('Done');
              }else{
 
         console.log('Error');
         i--;
      }
     }
     rememberMyFilms();

   
            
}




 function detectPersonaLevel() {
    if (personalMovieDB.count < 10){
        console.log('Ви переглянули мало фільмів');
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
        console.log("Ви класний глядач");
    }else if(personalMovieDB.count >30){
        console.log('Ви кіноман');
    }else{
        console.log('Error');
    }
    detectPersonaLevel();
 }

 
 function showMyDB(hidden) {

   if(!hidden ) {
       console.log( personalMovieDB);
   
 showMyDB(personalMovieDB.privat);
 }

 

 }

function writeYourCenres(){
    for (let i = 1; i <= 3; i++) { 
     const  genre = prompt(`Ваш улюблений жанр під номером ${i}`, '');
     personalMovieDB.genres[i - 1] = genre;
    }
}
writeYourCenres();