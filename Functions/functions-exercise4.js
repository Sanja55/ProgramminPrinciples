/**1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no */

function givenElementIsInTheArray(providedArray, givenElement) {

    for (var i = 0; i < providedArray.length; i++) {

        if (givenElement === providedArray[i]) {

            return "Yes!"
        
        } 
    }

    return "No!";
}

var elementInTheArray = givenElementIsInTheArray([5, -4.2, 3, 7], 3);

console.log(elementInTheArray);

console.log (givenElementIsInTheArray([5, -4.2, 18, 7], 3));




/**2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8] */

function multiplyEveryPositiveElementByTwo(inputArray) {

    var newArray = [];

    for (var i = 0; i < inputArray.length; i++) {

        if (inputArray[i] > 0) {

            inputArray[i] *= 2;

        }

        newArray[i] = inputArray[i];
    }
    
    return newArray;

}
var positiveElementsMultiplied = multiplyEveryPositiveElementByTwo([-3, 11, 5, 3.4, -8]);

console.log(positiveElementsMultiplied);

/**3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3 */

function findTheMinimumOfAnArray(givenArray) {

    var minimumOfAnArray = givenArray[0];

    var indexOfMinimum = 0;

    for (var i = 0; i < givenArray.length; i++) {

        if (givenArray[i] < minimumOfAnArray) {

           minimumOfAnArray = givenArray[i];

           indexOfMinimum = i;
           
        }

    }

    return minimumOfAnArray + ", " + indexOfMinimum;

}

var findTheMinimum = findTheMinimumOfAnArray([4, 2, 2, -1, 6]);

console.log(findTheMinimum);

/**4. Write a program that finds the second smallest number and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2*/

function findTheSecondMinimum (justAnotherArray) {

    var firstMinimum = justAnotherArray[0];

    var secondMinimum = justAnotherArray[1];

    for (var i = 0; i < justAnotherArray.length; i++) {
        
        if (justAnotherArray[i] < firstMinimum) {

            firstMinimum = justAnotherArray[i];
        
        } else if (justAnotherArray < secondMinimum) {

            secondMinimum = justAnotherArray[i];
        }
    }

    return secondMinimum;
}


var secondSmallestNumber = findTheSecondMinimum ([4, 2, 2, -1, 6]);

console.log(secondSmallestNumber);

/**5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16 */

function findTheSumOfPositiveElements (array) {

    var sumOfPositiveElements = 0;

    for (var i = 0; i < array.length; i++) {

        if (array[i] > 0) {

            sumOfPositiveElements +=  array[i];
        }
    }

    return sumOfPositiveElements;
}

var sum = findTheSumOfPositiveElements ([3, 11, -5, -3, 2]);

console.log(sum);

/**6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric. */

function checkIfTheArrayIsSymetric(array) {

    for (var i = 0; i < array.length; i++) {

        for (var j = array[array.length-1]; j >= 0; j--) {

            while (i !== j && array[i] === array[j]) {

                return "The given array is symmetric."
            }
        }
    }
    
    return "The given array is not symmetric."
}

var isArraySymmetric = checkIfTheArrayIsSymetric ([2, 4, -2, 7, -2, 4, 2]);

console.log(isArraySymmetric);


/**7. Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]*/

function interwineTwoArrays(firstArray, secondArray) {

    var newArray = [];

    for (var i = 0; i < firstArray.length && secondArray.length; i++) {

        newArray[newArray.length] = firstArray[i];

        newArray[newArray.length] = secondArray[i];
    }

    return newArray;
    
}

var interwineArrays = interwineTwoArrays ([4, 5, 6, 2], [3, 8, 11, 9]);

console.log(interwineArrays);

/**8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9] */

function concatenateArrays(primaryArray, secondaryArray) {

    var concatenatedArray = [];

    for (var i = 0, j = 0; i < primaryArray.length - 1 && j < secondaryArray.length - 1; i++, j++) {

       concatenatedArray = primaryArray + ", " + secondaryArray;
    }
    
    return concatenatedArray;
}

var arraysConcatenated = concatenateArrays ([4, 5, 6, 2], [3, 8, 11, 9]);

console.log(arraysConcatenated);

/**9. Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8] */

function deleteTheElement (array, elementToDelete) {

    var brandNewArray = [];

    for (var i = 0; i < array.length; i++) {

        if (array[i] !== elementToDelete) {

            brandNewArray[brandNewArray.length] = array[i];
        }
    }
    
    return brandNewArray;

}

var deletion = deleteTheElement([4, 6, 2, 8, 2, 2], 2);

console.log(deletion);

/**10. Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8] */

function insertTheElementIntoAnArray (anArray, elementToInsert, insertingPosition) {

    var arrayWithInsertedElement = [];

    for (var i = 0; i < anArray.length; i++) {

        if (insertingPosition > anArray.length) {

            return "Error!";

            break;
        }


        if (i === insertingPosition-1) {

            arrayWithInsertedElement[arrayWithInsertedElement.length] = elementToInsert;
        }
        
        arrayWithInsertedElement[arrayWithInsertedElement.length] = anArray[i];
    }

    return arrayWithInsertedElement;

}

var insert = insertTheElementIntoAnArray ([2, -2, 33, 12, 5, 8], 78, 3);

console.log(insert);