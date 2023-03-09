/**1. Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A,
E, I, O, and U. */

function couuntVowels(someString) { 

    var counter = 0;

    for (var i = 0; i < someString.length; i ++) {

        if (someString[i] === "a" || someString[i] === "A" || someString[i] === "e" || someString[i] === "E" || someString[i] === "i" 
        
        || someString[i] === "I" || someString[i] === "o" || someString[i] === "O" || someString[i] === "u" || someString[i] === "U") {

            counter++;
        }
    }
    
    return counter;

}

var countingTheVowels = couuntVowels("Sanja Randjelovic");

console.log(countingTheVowels);

/**2. Write a function that combines two arrays by alternatingly taking elements.
[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3] */

function combineTwoArrays(firstArray, secondArray) {

    var combinedArray = [];

    for (var i =0; i < firstArray.length && i < secondArray.length; i++) {

        combinedArray[combinedArray.length] = firstArray[i];

        combinedArray[combinedArray.length]= secondArray[i];
    }

    return combinedArray;

}

var combiningTheArrays = combineTwoArrays(["a", "b", "c"], [1, 2, 3]);

console.log(combiningTheArrays);

/**3. Write a function that rotates a list by k elements.
For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2] */

function listRotation(array, rotation) {
    
    var rotatedArray = [];
    
    var i;
    
    var j;
    
    for (i = rotation, j = rotation - array.length; i < array.length + rotation; i++, j++) {
        
        if (array[i] !== undefined) {
            
            rotatedArray[rotatedArray.length] = array[i];
        
        } else {
            
            rotatedArray[rotatedArray.length] = array[j];
        
        }
    
    }    
    
    return rotatedArray;

} 
    
var rotate = listRotation([1, 2, 3, 4, 5, 6], 2);

console.log(rotate)


/**4. Write a function that takes a number and returns array of its digits. */


function  numberToArrayOfDigits(number) {

    var i = 0;

    if (number >= 1) 

    i++;

    while (number / 10 > 1) {

        number = number / 10;

        i++;
    }

    return i;
}

var numberOfDigits = numberToArrayOfDigits (2346);

console.log(numberOfDigits);


/**5. Write a program that prints a multiplication table for numbers up to 12. */

function printMultiplicationTable() {


    var table = "";

    for (var i = 1; i <= 12; i++) {

        for (var j = 1; j <=12; j++) {

            table += i * j + "\n";
        }
    }

    return table;
}

var multiplicationTable = printMultiplicationTable ();

console.log(multiplicationTable);


/**6. Write a function to input temperature in Centigrade and convert to Fahrenheit. */

function convertCentigradeToFahrenheit (celsiusTemperature) {

    var fahrenheitTempreture = ((celsiusTemperature / 5) * 9) + 32;

    return fahrenheitTempreture + " \u00B0F";
    
}

var celsiusToFahrenheit = convertCentigradeToFahrenheit (30);

console.log(celsiusToFahrenheit);


/**7. Write a function to find the maximum element in array of numbers. Filter out all non-number
elements. */

function findTheMaximum(arrayOfNumbers) {

    var maximumOfTheArray = arrayOfNumbers[0];

    for (var i = 0; i < arrayOfNumbers.length; i++) {


        if (isFinite(arrayOfNumbers[i])) {

            if( arrayOfNumbers[i] >= maximumOfTheArray) {

                maximumOfTheArray = arrayOfNumbers[i];
            }


        }
    }

    return "The maximum of the array of numbers is " + maximumOfTheArray + ".";
    
}

var maximum = findTheMaximum ([3, "Sanja", "Randjelovic", 6, 8, false, 9, 12, 15, 46, 96, undefined]);

console.log(maximum);


//8. Write a function to find the maximum and minimum elements. Function returns an array.

function findTheMaximumAndMinimum (array) {

    var minimum = array[0];

    var maximum = array[1];

    for (var i = 0; i < array.length; i++) {

        if (array[i] < minimum) {

            minimum = array[i];
        
        } else if (array[i] > maximum) {

            maximum = array[i];
        }
    }
    
    return [minimum, maximum];

}

var minAndMax = findTheMaximumAndMinimum ([1, 3, 5, 7, 9, 256, 11, 13, 35, 47]);

console.log(minAndMax);


//9. Write a function to find the median element of array.

function findTheMedianElement(array) {
    
    "use strict"
    
    var positionOfMedianElement = (parseInt(array.length / 2)) + 1;

    var medianElement = array[positionOfMedianElement - 1];

    for (var i = 0; i < array.length; i++) {

        if (array.length % 2 !== 0) {

            return medianElement;

        } else {

            return "Median element not found."
        }

    }

    
}

var median = findTheMedianElement ([1, 6, 90, 49, 67, 43, 28, 51, 83, 105, 303]);

console.log(median);

//10. Write a function to find the element that occurs most frequently.

function findTheMostFrequentElement(array) {
    
    var element = 0; 
    var mostFrequent = 0; 
    var result = 0;
    
    for (var i = 0; i < array.length; i++) {
        
        for (var j = 0; j < array.length; j++) {
            
            if (array[i] === array[j]) {
                
                element++
            }
            
            if (mostFrequent < element) {
                
                mostFrequent = element;
                
                result = array[i];
            }
        
        }
    
    }
    
    return result;
}

var theMostFrequentElement = findTheMostFrequentElement([1, 2, 6, 8, 3, 2, 9, 2]);

console.log(theMostFrequentElement)


/**11. Write a function to find and return the first, middle and last element of an array if the array
has odd number of elements. If number of elements is even, return just the first and the
last. In other cases (empty array), input array should be returned.*/

function findAndReturnFirstMiddleLastElement (array) {

    var firstElement = array[0];

    var lastElement = array[array.length-1];

    var positionOfMiddleElement = parseInt(array.length / 2) + 1;

    var middleElement = array[positionOfMiddleElement - 1];

    for (var i = 0; i < array.length; i++) {

        if (array.length % 2 !== 0) {

            return [firstElement, middleElement, lastElement];
        
        } else if (array.length % 2 === 0) {

            return [firstElement, lastElement];
        
        } else  {

            return array;
        }
    }
}

var firstMiddleLast = findAndReturnFirstMiddleLastElement ([9, 5, 6, 7, 3, 5, 7, 8, 10]);

console.log(firstMiddleLast);


/** Task 12. Write a function to find the average of N elements. Make the function flexible to receive
dynamic number or parameters. */

function averageOfElements (array) {
    
    var sumOfElements = 0;
    
    for (var i = 0; i < array.length; i++) {
        
        sumOfElements = sumOfElements +  array[i];
    }
    
    return sumOfElements / array.length;

}

var average = averageOfElements([5, 10, 15, 20, 10])

console.log(average);



// Task 13. Write a function to find all the numbers greater than the average.

function greaterThanAverage (array) {
    
    var sumOfElements = 0;

    var averageOfElements = 0;

    var elementsGreaterThanAverage = [];

    for (var i = 0; i < array.length; i++) {
        
        sumOfElements += array[i];

        averageOfElements = sumOfElements / array.length;
    }
    
    for (var i = 0; i < array.length; i++) {
        
        averageOfElements = sumOfElements / array.length;
        
        if (array[i] > averageOfElements) {
            
            elementsGreaterThanAverage[elementsGreaterThanAverage.length] = array[i];        
        }
    }
    return elementsGreaterThanAverage;
}

console.log(greaterThanAverage([3, 5, 7, 8, 12, 14, 17, 22]));








