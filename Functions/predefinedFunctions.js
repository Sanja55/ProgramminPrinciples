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


/**3. Write a program to filter out falsy values from the array.
Input: [NaN, 0, 15, false, -22, "", undefined, 47, null]
Output: [15, -22, 47] */


function filterOutFalsyValues (array) {

    var filteredArray = [];

    for (var i = 0; i < array.length; i++) {

        if ( !!array[i]) {

            filteredArray[filteredArray.length] = array[i];
        }
    }

    return filteredArray;
}

var filterTheArrray = filterOutFalsyValues ([NaN, 0, 15, false, -22, "", undefined, 47, null]);

console.log(filterTheArrray);


/**4. Write a program that calculates a number of integer values in the array.
Input: [NaN, 23.1, 15, false, -22.5, "", 4, 7, null]
Output: 3 */

function calculateIntegers (array) {

    var integers = [];

    for (var i = 0; i < array.length; i++) {

       if(parseInt(array[i]) === array[i]) {

        integers[integers.length] = array[i];
       
        }

    }

    return integers.length;

}

var integerCounter = calculateIntegers ([NaN, 23.1, 15, false, -22.5, "", 4, 7, null]);

console.log(integerCounter);

/** 5. Write a program that calculates a number of float values in the array.
Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 2 */

function countFloats(array) {
    
    var floats = [];
    
    for (var i = 0; i < array.length; i++) {
        
        if (typeof array[i] === "number" && array[i] !== parseInt(array[i]) && isNaN(array[i]) === false) {
          
            output[output.length] = array[i];
        } 
    
    }
    
    return floats.length;
  
}
         
  var floatsCounter = countFloats([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]);
  
  console.log(floatsCounter);

