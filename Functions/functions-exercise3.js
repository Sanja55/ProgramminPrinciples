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


/**5. Write a function to get the last element of an array. Passing a parameter &#39;n&#39; will return the
last &#39;n&#39; elements of the array.
[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2] */

function getTheLastElementOfAnArray (inputArray, numberOfLastElements) {

    var arrayOfLastElements = [];

    for (var i = 0; i < inputArray.length; i++) { 

        if ( numberOfLastElements > 0) {
            
            arrayOfLastElements += inputArray[inputArray.length - numberOfLastElements];

            numberOfLastElements--;
            
            }

    }
        
    return arrayOfLastElements;

}

//var lastElements = getTheLastElementOfAnArray([7, 9, 0, -2], 1);

var lastElements = getTheLastElementOfAnArray([7, 9, 0, -2], 2)

console.log(lastElements);


/**6. Write a function to create a specified number of elements with pre-filled numeric value
array.
6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null] */

function createSpecifiedNumberOfElements(element, repetition) {
    
    var resultArray= [];
    
    for (var i = 0; i < element; i++) {
      
        if (typeof repetition === "undefined") {
        
        resultArray[resultArray.length] = null
      
        } else {
        
            resultArray[resultArray.length] = repetition;
      }
    }
    return resultArray;
  }
  
  //var specifiedNumberOfElements = createSpecifiedNumberOfElements(6, 0);

  //var specifiedNumberOfElements = createSpecifiedNumberOfElements(2, "none");

  var specifiedNumberOfElements = createSpecifiedNumberOfElements(2);
  
  console.log(specifiedNumberOfElements);


/**7. Write a function that says whether a number is perfect.
28 -> 28 is a perfect number.
Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum
of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known
as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors
(including itself).
E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6.

Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next
perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128. */


function isPerfect(number) {

    var temp = 0;
   
    for(var i = 1; i <= number / 2; i++) {
         
        if(number % i === 0) {
            
            temp += i;
          
        }
     }
   
     if(temp === number && temp !== 0) {
       
        console.log("It is a perfect number.");
        
    } else {
       
        console.log("It is not a perfect number.");
    }   
 } 

 isPerfect(28); 


 /** 8. Write a function to find a word within a string.
'The quick brown fox', 'fox' -> "'fox' was found 1 times"
'aa bb cc dd', 'aa' -> "'aa' was found 2 times"  */

function findWord(string, word) {
    
    var array = [];
    
    var count = 0;
    
    array[0] = "";
    
    var times = 0;
    
    var output = "";
    
    for (var i = 0; i < string.length; i++) {
      
        if (string[i] === " " || string[i] === ",") {
        
            count++;
        
            array[count] = "";
      
        } else {
        
            array[count] += string[i];
        }
    }
    
    for (var j = 0; j < array.length; j++) {
      
        if (array[j] === word) {
         
            times++
      }
    
    } 
    
    if (times > 1) {
      
        output = " times"
    
    } else {
      
        output = " time"
    }
    
    return word + " was found " + times + output;  
  
}
  
   
var findTheWord = findWord("The quick brown fox", "fox");

console.log(findTheWord);


/* 9. Write a function to hide email address.
"myemailaddress@bgit.rs" -> "mye...@bgit.rs" */

function hideEmailAddress(email) {
    
    var hiddenMail = "";

    for (i = 0; i < email.length; i++) {
    
        if (i > 2 && i< email.indexOf("@") ) {
        
            hiddenMail += "*";
      
        } else {
        
            hiddenMail += email[i];
      
        }
    
    }
    
    return hiddenMail;
}

var hideEmail= hideEmailAddress("superstar@gmail.com");

console.log(hideEmail)


/** 10. Write a program to find the most frequent item of an array.
[3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]*/

function findTheMostFrequentItem(array) {
    
    var number = 1; 
    
    var frequency = 0; 
    
    var element;
  
    for (var i = 0; i < array.length; i++) {
      
        for (var j = i; j < array.length; j++) {
        
            if (array[i] === array[j]) {
          
                frequency++;
        
            }
        
            if (number < frequency) {
          
                number = frequency;
          
                element = array[i];
        }
      }
      
      frequency = 0;
    
    }
    
    return element;
  
}
  
  var theMostFrequent = findTheMostFrequentItem([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]);
  
  console.log(theMostFrequent);