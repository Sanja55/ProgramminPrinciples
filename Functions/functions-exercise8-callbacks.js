/**1. Write IIFE that replaces the first and the last element of the given array and prints out its
elements.
Input array: [4, 5, 11, 9]
Output array: [ 9, 5, 11, 4] */

/*function replaceTheFirstAndTheLastElement (array) {

    var invertedArray = [];

    var theFirstElement = array[0];

    var theLastElement = array[array.length-1];

    for (var i = 0; i < array.length; i++) {

        theFirstElement = array[array.length - 1];

        theLastElement = array[i];

        console.log(theFirstElement, theLastElement);
    }
}


/**2. Write IIFE that calculates the surface area of the given rectangle with sides a and b.
Input: 4 5
Output: 20 */

(function calculateTheSurfaceArea(a, b) {

    var surfaceArea = a * b;

    return console.log(surfaceArea);
    
}) (4, 5);

/**3. Write IIFE that replaces all appearances of the letters m or M with * and returns the
number of replacements.
Input: prograMming
Output: progra**ing, 2 */


(function replaceAllAppearancesOfLetterM(string) {

    newString = "";

    replacementCount = 0;

    for (var i = 0; i < string.length; i++) {

        if (string[i] === "M" || string[i] === "m") {

            newString = newString + "*";

            replacementCount++

        } else {

            newString = newString + string[i];
        }
    }

    return console.log([newString, replacementCount]);
    
}) ("prograMming");


/**4. Write a function with parameters name and surname that returns a function that
suggests an email in the form name.surname@gmail.com.
Input: pera peric
Output: pera.peric@gmail.com */


(function suggestingEmail(name, surname) {

    return function() {

        console.log(name + "." + surname + "@gmail.com"); 
    }
    
}) ("Sanja", "Randjelovic") (); 


/**5. Write a function that returns a function that calculates a decimal value of the given octal
number.
Input: 034
Output: 28 */

(function () {

    return function calculate(octalNumber) {

        console.log(parseInt(octalNumber, 8));
        
    }

})()("034");


/**6. Write a function that checks if a given string is valid password. The password is valid if it
is at least 6 characters long and contains at least one digit. The function should receive
two callbacks named successCallback and errorCallback that should be called in case
password is correct or invalid.

Input: JSGuru
Output: Your password is invalid!

Input: JSGuru123
Output: Your password is cool! */

(function checkThePassword(string, successCallback, errorCallback) {

    var digits = ["0", "1", "2", "3", "4", "5", "6", "8", "9"];
    

    for (var i = 0; i < string.length; i++) {

        for (j = 0; j < digits.length; j++)

        if (string.length >= 6 && string[i] === digits[j]) {

            return successCallback();
        
        } 

    }

    return errorCallback();
    
}) ("JSGuru123", function () { console.log("Your password is cool")}, function ()  { console.log("Your password is invalid!");}) 


/**7. Write a function that filters elements of the given array so that they satisfy a condition
given by the callback function.
Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
Output: [11, 9, 3] */

(function filterElements(array, callback) {

    var oddNumbers = [];

    for (var i = 0; i < array.length; i++) {

        if (callback (array[i])) {

            oddNumbers[oddNumbers.length] = array[i];
        
        }
    }
    
    return console.log(oddNumbers);

}) ([2, 8, 11, 4, 9, 3], function (elementOfTheArray) { return elementOfTheArray % 2 !== 0;})

