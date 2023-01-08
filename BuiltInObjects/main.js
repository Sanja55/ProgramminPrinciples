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