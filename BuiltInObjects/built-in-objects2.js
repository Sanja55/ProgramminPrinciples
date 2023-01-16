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
"John Snow" ->; "John S." */

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




