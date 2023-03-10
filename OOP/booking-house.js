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


