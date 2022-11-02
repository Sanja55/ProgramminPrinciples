/**1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
number is odd or even, and display a message to the screen. */

for (let i = 0; i <= 15; i++) {

    if (i % 2 === 0) {

        console.log("The number " + i + " is even.");

    } else {

        console.log("The number " + i + " is odd.");
    }
} 

/**2. Write a program to sum the multiples of 3 and 5 under 1000. */

var number3 = 3;

var number5 = 5;

var sum = 0;

do  {

    sum = sum + (number3 * number5);

} while (sum + (number3 * number5) < 1000) 

console.log(sum);


/*3. Write a program to compute the sum and product of an array of integers.*/

var arrayOfIntegers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var sumOfIntegers= 0;

var productOfIntegers = 1;

for (var index = 0; index < arrayOfIntegers.length; index++) {
    sumOfIntegers = sumOfIntegers + arrayOfIntegers[index];

    productOfIntegers = productOfIntegers * arrayOfIntegers[index];
    
}

console.log("Sum of array of integers is: " + sumOfIntegers + "\nProduct of array of integers is: " + productOfIntegers);


/**4. Write a program which prints the elements of the following array as a single string.
var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined]; */

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];

var singleString ="";

for (var index = 0; index < x.length; index++) {
    
    singleString = singleString + x[index]; 
    
}
 console.log(singleString);


 /**5. Write a program that prints the elements of the following array.
var a = [

[1, 2, 1, 24],
[8, 11, 9, 4],
[7, 0, 7, 27]
]; */

var a = [

    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
    ]; 


var index = 0;

while (index < a.length) {

    console.log(a[index]);

    index++;
}

/**6. Write a program that outputs the sum of squares of the first 20 numbers. */

var sumOfSquares = 0;

for (var number = 1; number <= 20; number++) {

    sumOfSquares = sumOfSquares + number**2;
}

console.log("Sum of squares of the fisrst 20 numbers is " + sumOfSquares);


/**7. Write a program that computes average marks of the following students. Then use this
average to determine the corresponding grade. */

var averageMark;

var sumOfMarks = 0;

var marks = [80, 77, 88, 95, 68];

for (var index = 0; index < marks.length; index++) {

    sumOfMarks = sumOfMarks + marks[index];

}

averageMark = sumOfMarks / marks.length;

console.log(averageMark);


if (averageMark < 60) {

    console.log("F")

} else if (averageMark < 70) {
    console.log("D");

} else if (averageMark < 80) {

    console.log("C");

} else if (averageMark < 90) {

    console.log("B");

} else if (averageMark < 100) {

    console.log("A");
} 

/**8. Write a program that uses console.log to print all the numbers from 1 to 100, with two
exceptions. For numbers divisible by 3, print &quot;Fizz&quot; instead of the number, and for numbers
divisible by 5 (and not 3), print &quot;Buzz&quot; instead. When you have that working, modify your
program to print &quot;FizzBuzz&quot;, for numbers that are divisible by both 3 and 5 (and still print
&quot;Fizz&quot; or &quot;Buzz&quot; for numbers divisible by only one of those). */

for (var number = 1; number <= 100; number++) {

   if (number % 5 === 0) {

        if (number % 3 === 0) {

            console.log(number + "\tFizzBuzz!");
    
        } else {

         console.log("Buzz!")
        }

   } else if (number % 3 === 0) {

    console.log("Fizz!")
   
    } else {

        console.log(number);
    }

}

