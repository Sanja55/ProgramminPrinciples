(function () {

    "use strict";

function Genre (name) {

    if (!name) {
        throw new Error ("Invalid name input!");
    }
    
    this.name = name;
    this.getData = function () {
        return (this.name[0] + this.name[this.name.length - 1]).toUpperCase();
    }

}

var comedy = new Genre ("comedy");
console.log(comedy.getData());


function Movie (title, genre, length) {

    if (!title || !genre || !length) {
        throw new Error ("Valid input missing!");
    }

    if (isNaN(length)) {
        throw new Error ("The length input should be a number!");
    }

    if (!(genre instanceof Genre)) {
        throw new Error ("Invalid genre input!");
    }

    this.title = title;
    this.genre = genre;
    this.length = length;
    this.getData = function () {
        return "\nMovie Title: " + this.title + ", \nMovie Duration: " + 
        this.length + " mins, \nGenre: " + genre;
    }
    
}

// var minorityReport = new Movie ("Minority Report", new Genre("thriller"), 120);
// console.log(minorityReport);

function Program (date) {

    if (!date) {
        throw new Error ("Property missing!");
    }

    this.date = new Date (date);
    this.movieList = [];
    this.getTheNumberOfMovies = function () {
        return this.movieList.length;
        
    }

    this.addMovie = function (movie) {

        if (!(movie instanceof Movie)) {
            throw new Error ("Invalid movie input!")
        }
        
        return this.movieList.push(movie);
    }

    this.getTheTotalDurationOfMovies = function () {

        var total = 0;

        this.movieList.forEach(function (movie) {
            total += movie.length;
        })

        return total;
    }

    this.getData = function () {
        
        var day = this.date.getDate();
        var month = this.date.getMonth() + 1;
        var year = this.date.getFullYear();
        var newDate = day + "." + month + "." + year + ".";

        return newDate + ", total duration of all movies " + 
        this.getTheTotalDurationOfMovies() + ", " + this.movie.getData();
    }
}

function Festival (name) {

    if (!name) {
        throw new Error ("Property name is required");
    }

    this.name = name;
    this.programList = [];
    this.getTheTotalNumberOfMovies = function () {

        var total = 0;
        this.programList.forEach(function (program) {
            
            total += program.getTheNumberOfMovies();
         
        });
        return total;
    }

    this.addProgram = function (program) {
        
        if(!(program instanceof Program)) {
            throw new Error ("Invalid program input!")
        }

        return this.programList.push(program);
    }

    this.getData = function () {
        
        return this.name + " has " + this.getTheTotalNumberOfMovies() +  " movie titles."
    }
}

function createMovie (title, length, genre) {

    var genre = new Genre (genre);
    var movie = new Movie (title, length, genre);
    return movie;

}

try {

    var weekendMovieFestival = new Festival("Weekend Movie Festival");

    var saturdayProgram = new Program ("12/24/2022");
    var sundayProgram = new Program ("12/25/2022");
    var sciFiGenre = new Genre ("Sci-Fi");
    var dramaGenre = new Genre("Drama")
    var comedyGenre = new Genre ("Comedy");
    var thrillerGenre = new Genre ("Thriller");
    var bladeRunner = new Movie ("Blade Runner", sciFiGenre, 117);
    var melancholia = new Movie ("Melancholia", dramaGenre, 130);
    var five = new Movie ("Five", comedyGenre, 102);
    var theGirlWithADragonTattoo = new Movie ("The Girl with a Dragon Tattoo", thrillerGenre, 158);

    saturdayProgram.addMovie(bladeRunner);
    saturdayProgram.addMovie(melancholia);
    sundayProgram.addMovie(five);
    sundayProgram.addMovie(theGirlWithADragonTattoo);

    weekendMovieFestival.addProgram(saturdayProgram);
    weekendMovieFestival.addProgram(sundayProgram);

    console.log(weekendMovieFestival.getData());

} catch (error) {

    console.log(error);
}
    
})();












