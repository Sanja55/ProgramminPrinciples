/*1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
number is odd or even, and display a message to the screen.*/

for (var i = 0; i <= 15; i++) {

    if ( i % 2 === 0) {

        console.log( i + "\tThe number is even!");
    
    } else {

        console.log( i + "\tThe number is odd!");
    }
}


/**2. Write a program to sum the multiples of 3 and 5 under 1000. */

var number3 = 3;

var number5 = 5;

var sum = 0;

/*while (sum < 1000) {

    sum = sum + number3 * number5;
}
console.log(sum);*/

do {

    sum = sum + number3 * number5;

} while (sum +  number3 * number5 < 1000) 

console.log(sum);


/**3. Write a program to compute the sum and product of an array of integers. */

var arrayOfIntegers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var sumOfIntegers = 0;

var productOfIntegers = 1;

for (i = 0; i < arrayOfIntegers.length; i++) {

    sumOfIntegers = sumOfIntegers + arrayOfIntegers[i];

    productOfIntegers = productOfIntegers * arrayOfIntegers[i];

}

console.log("The sum of integers of the array is " + sumOfIntegers + " and the product of integers of the array is " + productOfIntegers);


/**4. Write a program which prints the elements of the following array as a single string.
var x = [&#39;1&#39;, &#39;A&#39;, &#39;B&#39;, &quot;c&quot;, &quot;r&quot;, true, NaN, undefined]; */

var randomArray = ['1', 'A', 'B', "c", "r", true, NaN, undefined];

var singleString = "";

for (i = 0; i < randomArray.length; i++) {

    singleString = singleString + randomArray[i];

}

console.log(singleString);

/**5. Write a program that prints the elements of the following array.
var a = [

    [1, 2, 1, 24],
[8, 11, 9, 4],
[7, 0, 7, 27]

]; */

var arrayA = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];

for (i = 0; i < arrayA.length; i++) {

    console.log(arrayA[i]);

}

/**6. Write a program that outputs the sum of squares of the first 20 numbers. */

sumOfSquares = 0

for (i = 1; i <= 20; i++) {

    sumOfSquares = sumOfSquares + i**2;

}

console.log(sumOfSquares);


/**7. Write a program that computes average marks of the following students. Then use this
average to determine the corresponding grade. */

var marksOfStudents = [80, 77, 88, 95, 68];

var sumOfMarks = 0;

var averageMark;

for (i = 0; i < marksOfStudents.length; i++) {

    sumOfMarks = sumOfMarks + marksOfStudents[i];
}

averageMark = sumOfMarks / marksOfStudents.length;

console.log(averageMark);

if (averageMark < 60) {

    console.log("F");

} else if (averageMark < 70) {

    console.log("D");

} else if (averageMark < 80) {

    console.log("C");

} else if (averageMark < 90) {

    console.log("B");

} else if (averageMark < 100) {

    console.log("A")
    
}


/**8. Write a program that uses console.log to print all the numbers from 1 to 100, with two
exceptions. For numbers divisible by 3, print &quot;Fizz&quot; instead of the number, and for numbers
divisible by 5 (and not 3), print &quot;Buzz&quot; instead. When you have that working, modify your
program to print &quot;FizzBuzz&quot;, for numbers that are divisible by both 3 and 5 (and still print
&quot;Fizz&quot; or &quot;Buzz&quot; for numbers divisible by only one of those). */

for (i = 1; i <= 100; i++) {

    if ( i % 15 === 0) {

        console.log(i + "\tFizzBuzz!");
    
    } else if (i % 3 === 0) {

        console.log("FIzz!")
    
    } else if  (i % 5 === 0 && i % 3 !== 0) {

        console.log("Buzz!");
    
    } else {

        console.log(i);
    }
}

 