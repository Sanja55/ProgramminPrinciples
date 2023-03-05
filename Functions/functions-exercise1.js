/**1. Write a program that calculates the maximum of two given numbers. */

function calculateMaximumOfTwoNumbers(numberOne, numberTwo) {
  
    var result;

    if (numberOne > numberTwo) {

        result = "The first number has a maximum.";
    
    } else {

        result = "The second number has a maximum.";
    }

    return result;
    
}

var maximum = calculateMaximumOfTwoNumbers(15, 89);

console.log(maximum);


/**2. Write a program that checks if a given number is odd. */

function checkIfNumberIsOdd (number) {

    var result;

    if (number % 2 !== 0) {

        result = "The given number is odd."
    
    } else {

        result = "The given number is even."
    }
    
    return result;

}

var numberIsOdd = checkIfNumberIsOdd(10);

console.log(numberIsOdd);


/**3. Write a program that checks if a given number is a three digit long number. */

function numberHasThreeDigits(number) {

    if (number > 100 && number < 1000) {

        result = "The given number is a three digit number."
    
    } else {

        result = "The number is a non - three digit number."
    
    }

    return result;
    
}

var threeDigitNumber = numberHasThreeDigits(43698);

console.log(threeDigitNumber);


/**4. Write a program that calculates an arithmetic mean of four numbers. */

function calculatesArithmeticMean(arrayOfNumbers) {

    var sum = 0;

    var arithmeticMean;

    for (i = 0; i < arrayOfNumbers.length; i++) {

        sum = sum + arrayOfNumbers[i];

        arithmeticMean = sum / arrayOfNumbers.length;

        }

        return arithmeticMean;

   }

var arithmetic = calculatesArithmeticMean([10, 10, 10, 10, 10, 10, 10]);

console.log(arithmetic);


/**5. Write a program that draws a square of a given size. For example, if the size of
square is 5 the program should draw:
*****
* *
* *
* *
***** */

function drawSquare(size) {

    var square = "";
    
    for (var i = 0; i < size; i++) {

        for (var j = 0; j < size; j++) {

            if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {

                square += "*";
            
            } else {

                square += " ";
            }

        }

        if (i !== size - 1) {

            square += "\n";
        }
            
    }

    return square;

}

var drawing = drawSquare (10);

console.log(drawing);


/**6. Write a program that draws a horizontal chart representing three given values.
For example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * * */

function drawHorizontalChart (a, b, c) {
    
    var drawing = "";

    for (var i = 0; i < a; i++) {
        
        drawing += "*"; }   
    
        if (i !== a - 1) drawing += "\n";  

    for (var j = 0; j < b; j++) {
        
        drawing += "*"; }
    
        if (j !== b - 1) drawing += "\n";

    for (var k = 0; k < c; k++) {
        
        drawing += "*";
    }
        
    return drawing;
}

var horizontalChart = drawHorizontalChart(4, 11, 7);

console.log(horizontalChart);


/**7. Write a program that calculates a number of digits of a given number. */

function getTheNumberOfDigits(number) {
    
   var counterOfDigits = 0;

   if (number >= 1) { 
    
    counterOfDigits++;
    
    while (number / 10 > 1) {
         
        number = number / 10;

        counterOfDigits++;
    }
  }

  return counterOfDigits;

}

var numberOfDigits = getTheNumberOfDigits(6578);

console.log(numberOfDigits);


/**8. Write a program that calculates a number of appearances of a given number in a
given array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3 */

function getTheNumberOfAppearancesOfTheSameNumber(a) {

    var a = [2, 4, 7, 8, 7, 7, 1];

    e = 7;

    var appearance = 0;

    for (i = 0; i < a.length; i++) {

        if (a[i] === 7) {

            appearance++;
        }
    }

    return appearance;
}

var numberOfAppearances = getTheNumberOfAppearancesOfTheSameNumber([2, 4, 7, 8, 7, 7, 1]);

console.log(numberOfAppearances);


/**9. Write a program that calculates the sum of odd elements of a given array. */

function getTheSumOfOddElements(arrayOfElements) {

    sumOfOddElements = 0;

    for (var i = 0; i < arrayOfElements.length; i++) {

        if (arrayOfElements[i] % 2 !== 0) {

            sumOfOddElements = sumOfOddElements + arrayOfElements[i];
        }
    }
    
    return sumOfOddElements;

}

var sum = getTheSumOfOddElements([2, 3, 5, 6, 7, 9, 1, 13]);

console.log(sum);

/**10. Write a program that calculates the number of appearances of a letter a in a
given string. Modify the program so it calculates the number of both letters a and
A. */

function getTheNumberOfAppearancesOfTheLetterA(givenString, letter) {

    var letterAppearance = 0;

    for ( var i = 0; i < givenString.length; i++) {

        if (givenString[i] === letter) {

            letterAppearance++;
        }
    }

    return letterAppearance;
}

var countAppearance = getTheNumberOfAppearancesOfTheLetterA("Fantazmagorija", "a");

console.log(countAppearance);

/******************Modify*****************/

function findTheNumberOfAppearances(string) {

    var letterCount = 0;

    for (var i = 0; i < string.length; i++) {

        if (string[i] === "a" && string[i] === "A") {

            letterCount++

        }
    }  
    
    return letterCount;
}
 
var totalNumberOfLetters = findTheNumberOfAppearances ("AbrakadAbrA");

 console.log(totalNumberOfLetters);



/**11. Write a program that concatenates a given string given number of times. For
example, if “abc” and 4 are given values, the program prints out abcabcabcabc. */

function concatenateTheString(someText, repetition) {

    newText = "";

    while (repetition > 0) {

        newText = newText + someText;

        repetition--;
    }

    return newText;

}

var textConcatenation = concatenateTheString("Sanja", 5);

console.log(textConcatenation);



