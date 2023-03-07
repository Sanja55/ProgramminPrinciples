/** 1. Write a program to insert a string within a string at a particular position (default is 1,
beginning of a string).
"My random string", "JS" -> "JS My random string"
"My random string", "JS", 10 -> "My random JS string" */

function insertAStringWithinAString(mainString, insertedString, stringPosition) {

    if(!stringPosition) {

        stringPosition = 1;
    }

    var fabulouslyNewString = "";

    for (var i = 0; i < mainString.length; i++) {

       if(i === stringPosition - 1) {

            fabulouslyNewString += insertedString;

        }

        fabulouslyNewString += mainString[i];
    }
    
    return fabulouslyNewString;
}

var insertingString = insertAStringWithinAString("My random string", " JS", 10);

console.log(insertingString);

/**2. Write a program to join all elements of the array into a string skipping elements that are
undefined, null, NaN or Infinity.
[NaN, 0, 15, false, -22, " ", undefined, 47, null] */


function joinAllArrayElementsIntoAString(arrayOfElements) { 

    var brandNewString = "";

    for (var i = 0; i < arrayOfElements.length; i++) {

        if (isFinite(arrayOfElements[i]) && arrayOfElements[i] !== null) {

            brandNewString += arrayOfElements[i]; 
        }
    }
    return brandNewString;
}

var joinAllElements = joinAllArrayElementsIntoAString([NaN, 0, 15, false, -22, " ", undefined, 47, null, Infinity]);

console.log(joinAllElements);

/**3. Write a program to filter out falsy values from the array.
 [NaN, 0, 15, false, -22, " ", undefined, 47, null] -> [15, -22, 47]*/


 function filterOutFalsyValues (falsyValuesIntruders) {

    var filteredArray = [];

    for (var i = 0; i < falsyValuesIntruders.length; i++) {

        if (!!falsyValuesIntruders[i]) {

            filteredArray = filteredArray + falsyValuesIntruders[i];
        }
    }

    return filteredArray;
}

var filteringArrays = filterOutFalsyValues ([NaN, 0, 15, false, -22, " ", undefined, 47, null]);

console.log(filteringArrays);


/**4. Write a function that reverses a number. The result must be a number.
12345 -> 54321 // Output must be a number */


function numberReversing (originalNumber) {

    var reversedNumber = 0;

    while (originalNumber !== 0) {

        reversedNumber = (reversedNumber*10) + (originalNumber % 10);

        originalNumber = parseInt(originalNumber / 10);

    }

    return reversedNumber;

}

var reversingTheNumber = numberReversing(1234567);

console.log(reversingTheNumber);

