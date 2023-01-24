'use strict';

(function () {

  const Continent = {

    AFRICA: "AF",
    ASIA: "AS",
    AUSTRALIA: "AU",
    EUROPE: "EU",
    NORTH_AMERICA: "NA",
    SOUTH_AMERICA: "SA"

  }

    function Country (name, odds, continent) {

        if (!name || !odds || !continent) {
            throw new Error ("Invalid poperty input!")
        } 
        
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    
    }

    function Person (name, surname, dateOfBirth) {

        if (!name || !surname || !dateOfBirth) {
            throw new Error ("Please, enter the valid data!")
        }

        this.name = name;
        this.surname = surname;
        this.dateOfBirth = new Date(dateOfBirth);

        this.getData = function () {

          var dateOfBirthToString = this.dateOfBirth.toLocaleDateString("en-US", 
          {day: "2-digit", month: "2-digit", year: "2-digit"});

          return "\nName: " + this.name + "\nSurname: " + this.surname + "\nDate of Birth: " + 
          " "+ dateOfBirthToString +" " ;

      }
    
    }
    var person = new Person ('Petar', 'Petrovic', "02/06/78")
    console.log(person.getData());

    function Player (person, betAmount, country) {

      if (isNaN(betAmount)) {
        throw new Error ("Fill in the valid data!");
      }

      if (!(person instanceof Person)) {
        throw new Error ("Invalid person input.")
      }

      if (!(country instanceof Country)) {
        throw new Error ("Invalid country");
      }

      this.person = person;
      this.betAmount = betAmount;
      this.country = country;

      this.getPlayerInfo = function () {

        var expectedWinAmount = this.odds * this.betAmount;

        return "\nCountry: " + this.country + "\nExpected Win Amount: " + 
        this.expectedWinAmount + "\nPersonal Data: " + this.person.getData(); 
      }
    
    }
    var 

    function Address (country, city, postalCode, street, number) {
      
      this.country = country;
      this.city = city;
      this.postalCode = postalCode;
      this.street = street;
      this.number = number;

      this.getFullAddress = function () {
        return "\nStreet and home number: " + this.street + " " + this.number + 
        "\nPostal code, City: " + this.postalCode + " " + this.city + "\nCountry: " 
        + this.country;
      
      }
    
    }
    var fullAddress = new Address ("Serbia", "Belgrade", "11000", "Nemanjina", 4);
    console.log(fullAddress.getFullAddress());

    function BettingPlace (address, listOfPlayers) {

      this.address = [];
      this.listOfPlayers = [];
    
    }

    function BettingHouse (competition, listOfBettingPlaces, numberOfPlayers) {

      this.competition = competition;
      this.listOfBettingPlaces = [];
      this.numberOfPlayers = numberOfPlayers;
    
    }

})();


(function () {
  function Genre(n) {
    if (!n) {
      throw new Error('Property name is required');
    }
    this.name = n;
    this.getData = function () {
      var firstLetter = this.name[0];
      var lastLetter = this.name[this.name.length - 1];
      var result = firstLetter + lastLetter;
      return result.toUpperCase();
    };
  }

  function Movie(t, g, l) {
    if (!t || !g || !l) {
      throw new Error('Missing propertied!');
    }
    if (!(g instanceof Genre)) {
      throw new Error('Invalid genre input!');
    }
    this.title = t;
    this.genre = g;
    this.lengthOfMovie = l;
    this.getData = function () {
      return (
        this.title + ', ' + this.lengthOfMovie + 'min, ' + this.genre.getData()
      );
    };
  }

  function Program(d) {
    if (!d) {
      throw new Error('Property date is required');
    }
    this.date = new Date(d);
    this.movieList = [];
    this.getNumberOfMovies = function () {
      return this.movieList.length;
    };
    this.addMovie = function (m) {
      if (!(m instanceof Movie)) {
        throw new Error('Invalid movie input!');
      }
      this.movieList.push(m);
    };
    this.getTotalLength = function () {
      var total = 0;
      this.movieList.forEach(function (movie) {
        total += movie.lengthOfMovie;
      });
      return total;
    };
    this.getData = function () {
      var day = this.date.getDate();
      var month = this.date.getMonth() + 1;
      var year = this.date.getFullYear();
      var result =
        day +
        '.' +
        month +
        '.' +
        year +
        ', program duration ' +
        this.getTotalLength() +
        'min';
      this.movieList.forEach(function (movie) {
        result += '\n\t\t' + movie.getData();
      });
      return result;
    };
  }

  function Festival(n) {
    if (!n) {
      throw new Error('Property name is required');
    }
    this.name = n;
    this.programList = [];
    this.getTotalNumberOfMovies = function () {
      var total = 0;
      this.programList.forEach(function (program) {
        total += program.getNumberOfMovies();
      });
      return total;
    };
    this.addProgram = function (p) {
      if (!(p instanceof Program)) {
        throw new Error('Invalid program input!');
      }
      this.programList.push(p);
    };
    this.getData = function () {
      var result =
        this.name +
        ' festival has ' +
        this.getTotalNumberOfMovies() +
        ' movie titles';
      this.programList.forEach(function (program) {
        result += '\n\t' + program.getData();
      });
      return result;
    };
  }

  function createMovie(t, l, g) {
    var genre = new Genre(g);
    var movie = new Movie(t, genre, l);
    return movie;
  }

  function createProgram(d) {
    return new Program(d);
  }

  //Testing
  try {
    var kustendorf = new Festival('Kustendorf');

    var sundayProgram = createProgram('12/24/2022');
    var mondayProgram = createProgram('12/25/2022');

    var rushHours = createMovie('Rush Hour', 95, 'action');
    var theRing = createMovie('The Ring', 103, 'horror');
    var frida = createMovie('Frida', 87, 'drama');
    var tropicThunder = createMovie('Tropic Thunder', 91, 'comedy');

    sundayProgram.addMovie(rushHours);
    sundayProgram.addMovie(theRing);
    mondayProgram.addMovie(frida);
    mondayProgram.addMovie(tropicThunder);

    kustendorf.addProgram(sundayProgram);
    kustendorf.addProgram(mondayProgram);

    console.log(kustendorf.getData());
  } catch (error) {
    console.log(error.message);
  }
})();

