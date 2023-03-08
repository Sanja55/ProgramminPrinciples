/**1. Write a function that converts an array of strings into an array of numbers. Filter
out all non-numeric values.
Input: ["1", "21", undefined, "42", "1e+3", Infinity]
Output: [1, 21, 42, 1000] */

function convertArrayOfStringsToArrayOfNumbers(randomArray) {

    var arrayOfNumbers = [];

    for (var i = 0; i < randomArray.length; i++) {

        var element = parseFloat(randomArray[i]);
        
        if (isFinite(element)) {

            arrayOfNumbers[arrayOfNumbers.length] = element;

        }
    }
    
    return arrayOfNumbers;
}

var convertingTheRandomArray = convertArrayOfStringsToArrayOfNumbers(["1", "21", undefined, "42", "1e+3", Infinity]);

console.log(convertingTheRandomArray);

/**2. Write a program to join all elements of the array into a string skipping elements
that are undefined, null, NaN or Infinity.
Input: [NaN, 0, 15, false, -22, "", undefined, 47, null]
Output: “015false-2247” */

function joinAllElements(someArray) {

    var joinedElements = "";

    for (var i = 0; i < someArray.length; i++) {

        if (isFinite(someArray[i]) && someArray[i] !== null) {

            joinedElements += someArray[i];
        }
    }

    return joinedElements;
}

var joinAll = joinAllElements ([NaN, 0, 15, false, -22, "", undefined, 47, null]);

console.log(joinAll);

