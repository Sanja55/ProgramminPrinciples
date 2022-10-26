/**1. Write a program that shows text representation of a day in a week for a number input from
1 to 7. Print output in console.
For input 1, output should be “Monday”. */

var day = 3;

var result = "";

switch (day) {
    case 1:
        result = "Monday";
        break;
    
    case 2:
        result = "Tuesday"
        break;

    case 3:
        result = "Wednesday"
        break;
        
    case 4:
        result = "Thursday"
        break;
        
    case 5:
        result = "Friday"
        break;
        
    case 6:
        result = "Saturday"
        break;
        
    case 7:
        result = "Sunday"
        break;

}

console.log(result);


/**2. Write a program that shows text representation of a day in a week for a number input from
1 to 7. All other cases output a message explaining that input must be a number between 1
and 7. */

day = 9;
result = "";

switch (day) {
    case 1:
        result = "Monday";
        break;
    
    case 2:
        result = "Tuesday"
        break;

    case 3:
        result = "Wednesday"
        break;
        
    case 4:
        result = "Thursday"
        break;
        
    case 5:
        result = "Friday"
        break;
        
    case 6:
        result = "Saturday"
        break;
        
    case 7:
        result = "Sunday"
        break;

    default:
        result = "Input must be a number between 1 and 7."
        break;

}

console.log(result);

/**3. Write a program that for a 1-7 number input (representing a day in a week) shows if that day
is a weekday or weekend. All other cases output a message explaining that input must be a
number between 1 and 7.
For input 2, output should be “It’s weekday”.
For input 6, output should be “It’s weekend”.
For input 12, output should be “Input must be number between 1 and 7”. */

day = 6;

result = "";

switch(day) {

    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        result = "It's a weekday!";
        break;

    case 6:
    case 7:
        result = "It's weekend!";
        break;
        
    default:
        result = "Input must be a number between 1 and 7";
        break;    

}

console.log(result);


day = 11;

result = "";

switch(day) {

    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        result = "It's a weekday!";
        break;

    case 6:
    case 7:
        result = "It's weekend!";
        break;
        
    default:
        result = "Input must be a number between 1 and 7";
        break;    

}

console.log(result);


/**4. Write a program that for a 1-12 number input (representing a month in a year) shows that
month’s name. All other cases output a message explaining that 
For input 2, output should be “February”.
For input 6, output should be “June”.
For input 13, output should be “Input must be a number between 1 and 12”. */

var month = 6;

result = "";

switch (month) {
    case 1:
        result = "Janurary"
        break;

    case 2:
        result = "February"
        break;
        
    case 3:
        result = "March"
        break;

    case 4:
        result = "April"
        break;
        
    case 5:
        result = "May"
        break;
        
    case 6:
        result = "June"
        break;
            
    case 7:
        result = "July"
        break;

    case 8:
        result = "August"
        break;
        
    case 9:
        result = "September"
        break;
        
    case 10:
        result = "October"
        break;
        
    case 11:
        result = "November"
        break;
        
    case 12:
        result = "December"
        break;
        
    default:
        result = "input must be a number between 1 and 12."
        break;

    }

    console.log(result);


    var month = 15;

    result = "";

    switch (month) {
        case 1:
            result = "Janurary"
            break;

        case 2:
        result = "February"
        break;
        
        case 3:
            result = "March"
            break;

        case 4:
            result = "April"
            break;
            
        case 5:
            result = "May"
            break;
            
        case 6:
            result = "June"
            break;
                
        case 7:
            result = "July"
            break;

        case 8:
            result = "August"
            break;
            
        case 9:
            result = "September"
            break;
            
        case 10:
            result = "October"
            break;
            
        case 11:
            result = "November"
            break;
            
        case 12:
            result = "December"
            break;
            
        default:
            result = "Input must be a number between 1 and 12."
            break;

    }

    console.log(result);

/**5. Write a program that for a 1-12 number input (representing a month in a year) shows what
season it is. All inputs different from 1-12 output a message explaining that input must be a
number between 1 and 12. */

month = 7;

result = "";

switch (month) {
    case 1:
    case 2:
    case 12:
        result = "It's Winter!"
        break;
        
        
    case 3:
    case 4:
    case 5:       
        result = "It's Springtime!"
        break;
        
    case 6:
    case 7:
    case 8:
        result = "It's Summertime!!!"
        break;
        
    case 9:
    case 10:
    case 11:
        result = "It's Fall!"
        break;


    default:
        result = "Input must be a number bewtween 1 and 12"
        break;
}

console.log(result);


month = 20;

result = "";

switch (month) {
    case 1:
    case 2:
    case 12:
        result = "It's Winter!"
        break;
        
        
    case 3:
    case 4:
    case 5:       
        result = "It's Springtime!"
        break;
        
    case 6:
    case 7:
    case 8:
        result = "It's Summertime!!!"
        break;
        
    case 9:
    case 10:
    case 11:
        result = "It's Fall!"
        break;


    default:
        result = "Input must be a number bewtween 1 and 12"
        break;
}

console.log(result);


/**6. Write a program that for a string input of a grade from “A”-“F” outputs a proper info
message about that grade in the following manner: A - &quot;Good job&quot;&quot;, B - &quot;Pretty good&quot;&quot;, C -
&quot;Passed&quot;&quot;, D - &quot;Not so good&quot;&quot;, F - &quot;Failed&quot;. Input different from letters A-F outputs a message
&quot;Unknown grade&quot;. */

var grade = "B";

var infoMessage = "";

switch (grade) {

    case "A":
        infoMessage = "Good Job!!!"
        break;

    case "B":
        infoMessage = "Pretty Good!"
        break;
        
    case "C":
        infoMessage = "Passed"
        break;
        
    case "D":
        infoMessage = "Not so good"
        break;
        
    case "D":
        infoMessage = "Failed"
        break;
        
    default:
        infoMessage = "Unknown Grade."
        break;    
}

console.log(infoMessage);


grade = "M";

infoMessage = "";


switch (grade) {

    case "A":
        infoMessage = "Good Job!!!"
        break;

    case "B":
        infoMessage = "Pretty Good!"
        break;
        
    case "C":
        infoMessage = "Passed"
        break;
        
    case "D":
        infoMessage = "Not so good"
        break;
        
    case "D":
        infoMessage = "Failed"
        break;
        
    default:
        infoMessage = "Unknown Grade."
        break;    
}

console.log(infoMessage);


/**7. Write a program that takes as input a city name and outputs the country where the city is.
You may choose which cities and countries you want to output yourself, however there has
to be at least 5 countries and 15 cities. Note that each country must have a different
number of cities. Input different from the listed cities should output a message&quot;Please
choose a different city&quot;. */

var city = "Berlin";

var  country = "";

switch (city) {

    case "London":
    case "Liverpool":
    case "Chelsea":
    case "Brighton":
    case "Manchester":
        country =   city + " is in England."
        break;

    case "Hamburg":
    case "Munich":
    case "Berlin":
    case "Dresden":
        country = city + " is in Germany."
        break;
        
    case "Paris":
    case "Bordeaux":
    case "Lyon":
    case "Marseille":
    case "Strasbourg":
    case "Toulouse":
        country = city + " is in France."
        break;
        
    case "Madrid":
    case "Barcelona":
    case "Seville":
    case "Malaga":
    case "Bilbao":
    case "Granada":
    case "Valladolid":
        country = city + " is in Spain." 
        break;
        
    case "Milan":
    case "Napoli":
    case "Rome":
    case "Venice":
    case "Trieste":
    case "Naples":
    case "Palermo":
    case "Genoa":
        country = city + " is in Italy."
        break;
        
    default:
        country = "Please, choose a different city."
        break;
}

console.log(country);


var city = "Los Angeles";

var  country = "";

switch (city) {

    case "London":
    case "Liverpool":
    case "Chelsea":
    case "Brighton":
    case "Manchester":
        country =   city + " is in England."
        break;

    case "Hamburg":
    case "Munich":
    case "Berlin":
    case "Dresden":
        country = city + " is in Germany."
        break;
        
    case "Paris":
    case "Bordeaux":
    case "Lyon":
    case "Marseille":
    case "Strasbourg":
    case "Toulouse":
        country = city + " is in France."
        break;
        
    case "Madrid":
    case "Barcelona":
    case "Seville":
    case "Malaga":
    case "Bilbao":
    case "Granada":
    case "Valladolid":
        country = city + " is in Spain." 
        break;
        
    case "Milan":
    case "Napoli":
    case "Rome":
    case "Venice":
    case "Trieste":
    case "Naples":
    case "Palermo":
    case "Genoa":
        country = city + " is in Italy."
        break;
        
    default:
        country = "Please, choose a different city."
        break;
}

console.log(country);




/**8. Write a program that takes as input two numbers and a string denoting the operation (“+”, “-
”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero! */

var firstNumber = -20;

var secondNumber = 0;

var operator = "/";



result = "";


switch (operator) {

    case "+":
        result = firstNumber + secondNumber;
        break;

    case "-": 
        result = firstNumber - secondNumber;
        break;

    case "*":
        result = firstNumber * secondNumber;
        break;

    case "/":
        result = firstNumber / secondNumber;
        break;
        
    default:
        result = "I have no idea what to do with  this!"
        break;
}

console.log(result);




