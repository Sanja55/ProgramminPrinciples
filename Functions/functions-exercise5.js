/**1. Find the min and max element in the following array and switch their places. Print out the
modified array in the console.
Input: [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ] */

function findTheMinimumAndMaximumAndSwitchTheirPlaces(inputArray) {
    
    var minimum = inputArray[0];
    var maximum = inputArray[1];
    var indexOfMinimum = 0;
    var indexOfMaximum = 0;
    
    for (var i = 0; i < inputArray.length; i++) {

        if (inputArray[i] <= minimum) {

            minimum = inputArray[i];
            indexOfMinimum = i;

        } else if (inputArray[i] >= maximum) {

            maximum = inputArray[i];
            indexOfMaximum = i;
        
        }
        
    }
    inputArray[indexOfMaximum] = minimum;
    inputArray[indexOfMinimum] = maximum;
    return inputArray;

}


var switchPlaces = findTheMinimumAndMaximumAndSwitchTheirPlaces ([ 3, 500, 12, 149, 53, 414, 1, 19 ]);

console.log(switchPlaces);


/**2. Use the following array to make a new one by dividing its values by two and adding 5. If
a given element's value is 0, change it to 20.
Input: [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ] */

function divideTheValues(arrayProvided) {

    var newArray = [];

    var newElement = 0;

    for (var i = 0; i < arrayProvided.length; i++) {

        newElement = (arrayProvided[i] / 2) + 5;

        if (arrayProvided[i] === 0) {

            newElement = 20;
        }
        
        newArray[newArray.length] = newElement;
        
    }
    
    return newArray;

}

var dividingValues = divideTheValues ([ 3, 500, -10, 149, 53, 414, 1, 19 ]);

console.log(dividingValues);


/**3. Initialize two arrays. The first one should contain student names, the second one the
number of points for each student. Display students names with their corresponding
grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input:
[ "Micahel", "Anne", "Frank", Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99,
51, 83, 59 ]
Output:
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete
the exam. */

function displayStudentNameWithGrade(studentNames, studentGrades) {

    var studentsAndTheirMarks = [];

    var marks = [];

    for (var i = 0; i < studentNames.length && i < studentGrades.length; i++) {

        if (studentGrades[i] < 51) {

            marks[i] = studentNames[i] + " acquired " + studentGrades[i] + " points and failed to complete the exam."
        
        } else if (studentGrades[i] >= 51 && studentGrades[i] < 60) {

            marks[i] = studentNames[i] + " acquired " + studentGrades[i] + " points and earned 6."
        
        } else if (61 <= studentGrades[i] && studentGrades[i] < 70) {

            marks[i] = studentNames[i] + " acquired " + studentGrades[i] + " points and earned 7."
        
        } else if (71 <= studentGrades[i] && studentGrades[i] < 80) {

            marks[i] = studentNames[i] + " acquired " + studentGrades[i] + " points and earned 8."
        
        } else if (81 <= studentGrades[i] && studentGrades[i] < 90) {

            marks[i] = studentNames[i] + " acquired " + studentGrades[i] + " points and earned 9."
        
        } else {

            marks[i] = studentNames[i] + " acquired " + studentGrades[i] + " points and earned 10."
        }

        studentsAndTheirMarks[studentsAndTheirMarks.length] = studentNames[i] + studentGrades[i];
    }
    
    return marks;
}

var studentGradeMark = displayStudentNameWithGrade ([ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99,
    51, 83, 59 ] );

console.log(studentGradeMark);


/**4. (skip :))Sort a previously defined array. Place its sorted values into a new array whose
values are equivalent to the first arrays values multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]*/





/**5. (skip :))Sort a previously defined array in a descending order and display it in the
console.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ] */

/*function sortTheArrayInDescendingOrder(randomArray) {

    var sortedArray = [];

    var descendingArray = [];

    for (var i = 0; i < randomArray.length; i++) {

        
    }
   
    return sortedArray;
}

var descendingOrder = sortTheArrayInDescendingOrder ([ 13, 11, 15, 5, 6, 1, 8, 12 ]);

console.log(descendingOrder);


/**6. Write a program that uses a loop to add all the even numbers from 1 to 1000 and
subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then
be multiplied by 12.5 and displayed in console.
Output: 2350000 */

function addEvenSubstractOdd() {
    
    sumOfEven = 0;

    sumOfOdd = 0;

    substractOddFromEven = 0;
    
    for (var i = 0; i <= 1000; i++) {

        if (i % 2 === 0) {

            sumOfEven = sumOfEven + i;

        } else if (i % 2 !== 0 && i < 500) {


            sumOfOdd = sumOfOdd + i;
        }

    }
    
    return substractOddFromEven = (sumOfEven - sumOfOdd) * 12.5;
}

var substraction = addEvenSubstractOdd ();

console.log(substraction);


/**7. Define a 10 element array. Take the first two letters from every string (that has at least 2
letters) in the array and create a new string from them. Print it out in the console.
Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]
Output: AnStJoJoDaMa */

function firstTwoLettersCreateNewString(tenElementArray) {

    var firstTwoLettersString = "";

    for (var i = 0; i < tenElementArray.length; i++) {

        var element = tenElementArray[i];
        
        if (typeof element === "string") {
            
            if (element.length > 1) {
            
                var firstTwo = element[0] + element[1];
            
                firstTwoLettersString += firstTwo;
            
            }
        
        }
    
    }
    
    return firstTwoLettersString;
}

var newString = firstTwoLettersCreateNewString ([ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]);

console.log(newString);

/**8. Write a program that takes a string and prints its characters out in reversed order in the
console.
Input: Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB */

function reverseTheString(stringToReverse) {

    var reversedString = "";

    for (var i = stringToReverse.length - 1; i >=0; i--) {

        reversedString += stringToReverse[i];
    
    }

    return reversedString;
    
}

var reversingTheString = reverseTheString("Belgrade Institute of Technology");

console.log(reversingTheString);

/**9. Write a program that displays all the combinations of two numbers between 1 and 7.
Don't display two of the same numbers at the same time. Display the number of possible
combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...). */

function displayTheCombinationOfTwoNumbers (arrayOfNumbers) {
   

    for (var i = 0; i < arrayOfNumbers.length; i++) {
        for (var j = arrayOfNumbers.length-1; j > -1; j--) {
            if (arrayOfNumbers[i] !== arrayOfNumbers[j]) {
                var combinationOfTwoNumbers = [];
                
                var elementOne = arrayOfNumbers[i];
                
                var elementTwo = arrayOfNumbers[j];
                
                combinationOfTwoNumbers += elementOne;
                combinationOfTwoNumbers += elementTwo;

            }   
        }
       
    }

    return combinationOfTwoNumbers;

}

var combinations = displayTheCombinationOfTwoNumbers([1, 2, 3, 4, 5, 6, 7]);

console.log(combinations);


/**10. Write a program that checks if the entered number is a prime number (i.e. divisible only
by 1 and by itself).
Input: 17 | 15
Output: true | false */

function numberIsPrime(number) {

    for (var i = 2; i < number; i++) {

        if (number % i === 0) {

            return number + " is a composite number.";
        }
    }

    return number + " is a prime number."

}

var primeNumber = numberIsPrime(15);


console.log(primeNumber);

/**11. Check if a given string is a palindrome (spaces are ignored).
Input: eye | Geek | a nut for a jar of tuna
Output: true | false | true */

function palindromeCheck(stringToCheck) {

    for (var i= 0, j = stringToCheck.length-1; i < stringToCheck.length, j >= 0; i++, j--) {

        if (stringToCheck[i] === stringToCheck[j]) {

            return stringToCheck + " is a palindrome."

        } else {

            return stringToCheck + " is not a palindrome."
        }
    }
}
var isPalindrome = palindromeCheck ("a nut for a jar of tuna");

console.log(isPalindrome);


/**12. Write a program that calculates the greatest common divisor of two integers. Note: The
greatest common divisor of two non-zero integers is the greatest positive number that
divides both numbers with no remainder.
Input: 192 42 | 81 9
Output: 6 | 9 */


function findTheGreatestCommonDivisor(firstNumber, secondNumber) {
    
    if (firstNumber === 0)

        return secondNumber;
    
        return findTheGreatestCommonDivisor(secondNumber % firstNumber, firstNumber);
}

var theGreatestCommonDivisor = findTheGreatestCommonDivisor (81, 9);

console.log(theGreatestCommonDivisor);








