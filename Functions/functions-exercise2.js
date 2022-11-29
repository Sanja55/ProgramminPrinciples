/**1. Write a function to check whether the `input` is a string or not.
"My random string" -> true
12 -> false */

function checkInput(someString) {

    if (typeof someString === "string") {

        return "Input is a string."
    
    } else {

        return "Input is not a string."
    } 
    
}

var inputIsAstring = checkInput(12);

console.log(inputIsAstring);


/**2. Write a function to check whether a string is blank or not.
"My random string" -> false
"" -> true
12 -> false
false -> false */

function isStringBlank(anotherString) {

    if (typeof anotherString === "string" && anotherString === "") {

        return "This string is blank.";
    
    } else {

        return anotherString;
    } 
    
}

var blankString = isStringBlank("");

console.log(blankString);


/**3. Write a function that concatenates a given string n times (default is 1).
"Ha" -> "Ha"
"Ha", 3 -> "HaHaHa"*/

function concatenateTheText(specialString, repeat) {

     var moreSpecialString = "";

     while (repeat > 0) {

        moreSpecialString = moreSpecialString + specialString;

        repeat--;

     }

     return moreSpecialString;

}

var concatenatedText = concatenateTheText("Ha", 3);

console.log(concatenatedText);


/**4. Write a function to count the number of letter occurrences in a string.
"My random string", "n" ->; 2 */

function countTheLetterOccurances (randomString, letter) {

    var countOccurances = 0;

    for (var i = 0; i < randomString.length; i++) {

        if (randomString[i] === letter) {

            countOccurances++
        }
    }

    return countOccurances;

}

var countingTheOccurances = countTheLetterOccurances ("My random string", "n");

console.log(countingTheOccurances);



/*5. Write a function to find the position of the first occurrence of a character in a string. The
result should be the position of character. If there are no occurrences of the character, the
function should return -1.*/

function findThePositionOfCharacter (inputWord, character) {

var positionOfCharacter = 0;

for (i = 0; i < inputWord.length; i++) {

    if (inputWord[i] === character) {

        positionOfCharacter = inputWord.indexOf(character);

        return positionOfCharacter;

    } else if (inputWord[i] === 0) {

        return positionOfCharacter = -1;
    }
    
} return positionOfCharacter;

}

var findThePosition = findThePositionOfCharacter ("Sanja", "a");

console.log(findThePosition);


/**6. Write a function to find the position of the last occurrence of a character in a string. The
result should be in human numeration form. If there are no occurrences of the character,
function should return -1. */

/*function findThePositionOfTheLastOccurance (stringName, character) {

    var lastOccuranceOfCharacter = -1;

    for (var i = stringName.length-1; i >= 0; i--) {

        if (stringName[i] === character) {

            lastOccuranceOfCharacter =  -1;

            return lastOccuranceOfCharacter;
        
        } else if (stringName[i] === 0) {

            return lastOccuranceOfCharacter = -1;
        }
    
    }

    return lastOccuranceOfCharacter;

}

var lastOccurance = findThePositionOfTheLastOccurance("Sanja", "a");

console.log(lastOccurance);*/

/**7. Write a function to convert string into an array. Space in a string should be represented as
“null” in new array. */

function convertStringToAnArray (wordString) {


    var characterArray = [];

    for (var i = 0; i < wordString.length; i++) {

        if (wordString[i] === " ") {

            characterArray[i] = null;
        
        } else {
            
            
            characterArray[i] = wordString[i];
            
        }

            
    }

     return characterArray;
}

var stringToArray = convertStringToAnArray("Sanja Randjelovic");

console.log(stringToArray);


/**8. Write a function that accepts a number as a parameter and checks if the number is prime or
not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself. */     

function numberIsPrime (primeNumber) {

    for (var i = 2; i < primeNumber; i++) {

        if (primeNumber % i === 0) {
            
            return "Input number is a composite number."
        
        } 
    }

    return "Input number is a prime number."
}
 
var checkThePrimeNumber = numberIsPrime (21);

console.log(checkThePrimeNumber);


/**9. Write a function that replaces spaces in a string with provided separator. If separator is not
provided, use “-” (dash) as the default separator. */



function replaceSpacesInAString (myString, separator) {

    var defaultSeparator = "-";

    var separatedString = "";

    for ( var i = 0; i < myString.length; i++) {

        if (myString[i] == " ") {

            separatedString += separator;

            if (separator == null) {

                separatedString += defaultSeparator;
            }
        
        } else {

            separatedString = separatedString + myString[i];

        }
    }
    
    return separatedString;
}

var newString = replaceSpacesInAString("Hajde vise, majka mu stara, pokreni se!", "/");

console.log(newString);


/**10. Write a function to get the first n characters and add “...” at the end of newly created string. */


function getTheFirstCharacters (myString, numberOfCharacters) {

    var firstCharacters = "";

    var endOfTheString = "...";

    for (var i = 0; i < numberOfCharacters; i++) {
            
            firstCharacters = firstCharacters + myString[i];

        }

    return firstCharacters += endOfTheString;

}

var newString = getTheFirstCharacters ("Sanja Randjelovic", 2);

console.log(newString);


/**11. Write a function that converts an array of strings into an array of numbers. Filter out all
non-numeric values.*/

function convertingTheStringArrayToNumberArray (arrayOfStrings) {

    var numberArray = [];

    //var nonNumericValues = "";

    for (i = 0; i < arrayOfStrings.length; i++) {

        if(typeof arrayOfStrings[i] === "string") {

            numberArray += parseInt(arrayOfStrings[i]);
        }
    }

    return numberArray;
}
var convertedString = convertStringToAnArray(["1", "2", "4", "5"]);

console.log(convertedString);


/**12. Write a function to calculate how many years there are left until retirement based on the
year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
already retired, a proper message should be displayed. */

function yearsLeftUntilRetirement (yearOfBirth, gender) {

    var yearsToRetirement = 0;

    var femaleRetirement = 60;

    var maleRetirement = 65;

    var yourAge = 2022 - yearOfBirth;

    if (yearOfBirth < 1962 && gender === "female" || yearOfBirth < 1957 && gender === "male") {

        return "You have already retired!"
    
    } else if (gender === "female"){

        yearsToRetirement = femaleRetirement - yourAge;
    
    } else {

        yearsToRetirement = maleRetirement - yourAge;
    }

    return "You have left " + yearsToRetirement + " to retirement.";

}

var yearsUntilRetirement = yearsLeftUntilRetirement(1968, "male");

console.log(yearsUntilRetirement);

/**13. Write a function to humanize a number (formats a number to a human-readable string) with
the correct suffix such as 1st, 2nd, 3rd or 4th.
1 ->; 1st
11 ->; 11th */

function humanizeANumber(numberToHumanize) {
    
    if (numberToHumanize % 100 >= 11 && numberToHumanize % 100 <= 13)

        return numberToHumanize + "th";
    
    switch (numberToHumanize % 10) {
        
        case 1: return numberToHumanize + "st";
        
        case 2: return numberToHumanize + "nd";
        
        case 3: return numberToHumanize + "rd";
    
    }
    
    return numberToHumanize + "th";
}

var humanizedNumber = humanizeANumber(5);

console.log(humanizedNumber);