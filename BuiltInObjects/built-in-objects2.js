/**1. Write a JavaScript function that reverses a number. typeof result of the function should
be “number”.
12345 -> 54321 */

function reverseTheNumber (number) {

    var numberToString = number.toString();
    var stringToArray = numberToString.split("");
    var reversedArray = stringToArray.reverse();
    var reversedArrayToString = reversedArray.join("");
    var reversedStringToNumber = parseInt(reversedArrayToString);
    
    return reversedStringToNumber;

}
var reversedNumber = reverseTheNumber (12345);
console.log(reversedNumber);
console.log(typeof reversedNumber);


/**2. Write a JavaScript function that returns a passed string with letters in alphabetical order.
Note: Assume punctuation, numbers and symbols are not included in the passed string.
“Webmaster” -> “abeemrstw” */

function returnLettesInAlphabeticalOrder (string) {

    var arrayOfLetters = string.toLowerCase().split("");
    var sortInAlphabeticalOrder = arrayOfLetters.sort();
    var alpahbeticalToString = sortInAlphabeticalOrder.join("");

    return alpahbeticalToString;
}
var alphabeticalOrder = returnLettesInAlphabeticalOrder ("Webmaster");
console.log(alphabeticalOrder);

/**3. Write a function to alphabetize words of a given string. Alphabetizing a string means
rearranging the letters so they are sorted from A to Z.
"Republic Of Serbia" -> "Rbceilpu Of Sabeir" */

function alphabetizeWords (string) {

    var stringToArray = string.split("");
    var firstLetter = stringToArray.shift();
    var firstWordSliced = stringToArray.slice(1, 7);
    var firstWordSorted = firstWordSliced.sort();
    var secondWordSliced = stringToArray.slice(7, 12);
    var thirdWordSliced = stringToArray.slice(12);
    var thirdWordSorted = thirdWordSliced.sort();
    var alphabetize = [];
    alphabetize.push(firstLetter);
    
    for (var i = 0; i < firstWordSorted.length; i++) {
        alphabetize.push(firstWordSorted[i])
       
    }
    for (var j = 0; j < secondWordSliced.length; j++) {
        alphabetize.push(secondWordSliced[j]);
    }
   
    for(k = 0; k < thirdWordSorted.length; k++) {
        alphabetize.push(thirdWordSorted[k]);
    }
    return alphabetize.join("");
}
var alphabetized = alphabetizeWords ("Republic Of Serbia");
console.log(alphabetized);

/**4. Write a function to split a string and convert it into an array of words.
"John Snow" -> [ "John", "Snow" ] */

function convertAStringToAnArray (string) {

    var stringToArray = string.split("");
    var john = stringToArray.slice(0, 4).join("");
    var snow = stringToArray.slice(5).join("");
    var converted = [];
    converted[0] = john;
    converted[1] = snow;
    return converted;
}

var convertedString = convertAStringToAnArray ("John Snow");
console.log(convertedString);

/**5. Write a function to convert a string to its abbreviated form.
"John Snow" -> "John S." */

function convertAStringToAbbreviatedForm (string) {

    var stringToArray = string.split(" ");
    var john = stringToArray[0];
    var snow = stringToArray[1].split("");
    var abbreviatedSnow = snow[0];
    var abbreviated = [];
    abbreviated[0] = john;
    abbreviated[1] = abbreviatedSnow;
    return abbreviated.join(" ") + ".";
}

var abbreviatedForm = convertAStringToAbbreviatedForm ("John Snow");
console.log(abbreviatedForm);

/**6. Write a function that adds string to the left or right of string, by replacing it’s characters.
"0000", "123", "l" == "0123"
"00000000", "123", "r" == "12300000"*/



/**7. Write a function to capitalize the first letter of a string and returns modified string.
"js string exercises" -> "Js string exercises"*/

function capitalizeTheFirstLetter(string) {

    var firstLetter = string.charAt(0);
    var capitalized = firstLetter.toUpperCase() + string.slice(1);
    return capitalized;

}
var capitalize = capitalizeTheFirstLetter ("js string exercises");
console.log(capitalize);

/**8. Write a function to hide email addresses to protect them from unauthorized users.
"somerandomaddress@example.com"-> "somerand...@example.com"*/

function hideEmailAddress (string) {
    
    var splitted = string.split("");
    var firstPart = splitted.slice(0, 8).join("");
    var hiddenPart = "...";
    var secondPart = splitted.slice(17).join("");
    
    return firstPart + hiddenPart + secondPart;

}
var hideEmail = hideEmailAddress ("somerandomaddress@example.com");
console.log(hideEmail);

/**9. Write a program that accepts a string as input and swaps the case of each character. For
example, if you input "The Quick Brown Fox", the output should be "tHE qUICK bROWN fOX".
var UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var LOWER = "abcdefghijklmnopqrstuvwxyz";
"The Quick Brown Fox" -> "tHE qUICK bROWN fOX" */

function swapTheCaseOfEachCharacter (string) {

   var newString = "";

    for (var i = 0; i < string.length; i++) {
        if(string[i] === string[i].toUpperCase()) {
            newString += string[i].toLowerCase()
        } else {
            newString += string[i].toUpperCase();
        }
    }
    return newString;
}
var swapTheCases = swapTheCaseOfEachCharacter("The Quick Brown Fox");
console.log(swapTheCases);


