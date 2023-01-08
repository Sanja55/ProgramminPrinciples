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