/**1. Write a functional expression that duplicates each element of a given array.

Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1] */

function duplicateEachElementOfTheArray(array) {

    var newArray = []; 

    for (var i = 0; i < array.length; i++) {

        newArray.push(array[i]);

        newArray.push(array[i]);
    
    }

    return newArray;
    
}

var duplicate = duplicateEachElementOfTheArray([2, 4, 7, 11, -2, 1]);

console.log(duplicate);


/**2. Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13] */

function removeAllDuplicatesFromTheArray (array) {

    var newArray = [];

    for (var i = 0; i < array.length; i++) {

        if(newArray.indexOf(array[i]) === -1) {

            newArray.push(array[i]);
        }
    }
    
    return newArray.sort(function (a, b) {

        return a - b;
        
        })
}

var removeDuplicates =  removeAllDuplicatesFromTheArray ([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]);

console.log(removeDuplicates);


/**3.
a. Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true */

function checkIfTheArrayHasOddNumberOfElements (array) {

    if (array.length % 2 !== 0) {

        return true;
    
    } else {

        return false;
    }
}

var oddNumberOfElements = checkIfTheArrayHasOddNumberOfElements ([1, 2, 9, 2, 1]);

console.log(oddNumberOfElements);

/*b. Write a function that counts the number of elements less than the middle
element. If the given array has an even number of elements, print out an error
message.
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4*/

function countTheNumberOfElementsLessThanTheMiddleElement (array) {

    var elementCounter = 0;

    if (array.length % 2 === 0) {

        return "Error!"
    
    } else {

        var middleElement = Math.ceil(array.length / 2);

        for (var i = 0; i < array.length; i++) {

            if (array[i] < middleElement) {

                elementCounter++;
            }
        }

    }

    return elementCounter;

}

var elementsLessThanTheMiddleElement = countTheNumberOfElementsLessThanTheMiddleElement ([-1, 8.1, 3, 6, 2.3, 44, 2.11]);

console.log(elementsLessThanTheMiddleElement);

/*4. Write a function that finds the smallest element of a given array. The function should
return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output: { minValue: -2, minLastIndex: 6 }*/

function findTheSmallestElementOfTheArray (array) {

    var theSmallestElement = array[0];

    for (var i = 0; i < array.length; i++) {

        if (theSmallestElement > array[i]) {

            theSmallestElement = array[i];
        
        }
    
    }

    return {minValue: theSmallestElement, minLastIndex: array.lastIndexOf(theSmallestElement)};
    
}

var theSmallestAndTheLastIndex = findTheSmallestElementOfTheArray ([1, 4, -2, 11, 8, 1, -2, 3]);

console.log(theSmallestAndTheLastIndex);