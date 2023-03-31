function Festival () {

    this.movieList = [];
    this.programList = [];
  
  };

  var createFestival = function () {

    return new Festival ();
    
  }
  
  function Movie (title, length, genre) {
  
    this.title = title;
    this.length = length;
    this.genre = genre;
  
  };

 
  
  Movie.prototype.getGenreAcronym = function () {
    return (this.genre[0] + this.genre[this.genre.length-1]).toUpperCase();
  }
  
  Movie.prototype.getData = function () {
    return "\nMovie Title: " + this.title + ", \nMovie Duration: " + this.length + 
    " mins, \nGenre: " + this.getGenreAcronym();
  };


  var createMovie = function (title, length, genre) {

    return new Movie (title, length, genre)
    
  }
  
  function Program (date) {
  
    this.date = new Date (date);
    this.movieList = [];
  };
  
  Program.prototype.durationOfAllMovies = function () {
    
    var totalLenght = 0;
    this.movieList.forEach(function (movie) {
      totalLenght += movie.length;
    });
    return totalLenght;
  };
  
  Program.prototype.addMovie = function (movie) {
    return this.movieList.push(movie);
  };
  
  Program.prototype.getTotalNumberOfMovies = function () {
    return this.movieList.length;
  };
  
  Program.prototype.getData = function () {
    var day = this.date.getDate();
    var month = this.date.getMonth() + 1;
    var year = this.date.getFullYear();
    var newDate = day + "/" + month + "/" + year + ".";
    
    return newDate /* + ", " + this.getTotalNumberOfMovies() + " movies, duration: " + 
    this.durationOfAllMovies() + " minutes."*/
  
  }

  var createProgram = function (date) {

    return new Program(date);
    
  }