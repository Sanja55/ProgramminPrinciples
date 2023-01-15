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
