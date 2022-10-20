/* Presentation Tasks

Write a program that compares two numbers and display the larger. Result should be
displayed in the console.*/

var a = 135;

var b = 25;

if (a > b) {

    console.log(a);
    
} else {

    console.log(b);
}


/*Write a program to check if the number is divisible by 2. If it is, print even, if not, print
odd.

Sample numbers: 3, 4, 9 (check one at the time)

Output: odd, even, odd */

var a = 3;

var b = 4;

var c = 9;

if (a % 2 === 0) {

    console.log("Even!")
    
} else {

    console.log("Odd!")
    
}


if (b % 2 === 0) {
    
    console.log("Even!")

} else {

    console.log("Odd!")
    
}


if (c % 2 === 0) {

    console.log("Even!")
    
} else {

    console.log("Odd!")
}


/**Write a program to check if the number is divisible by 3 and 5. If it is, print that number.

Sample numbers: 15, 12 (check one at the time)

Output: 15 */


var a = 15;

if (a % 3 === 0 && a % 5 === 0) {

    console.log(a);

} else {

    console.log(a + " is not divisible by 3 or 5.");
}


var b = 12;

if (b % 3 === 0 && b % 5 === 0) {

    console.log(b);

} else {

    console.log(b + " is not divisible by 3 or 5.");

}






/*Task 1. 
Write a conditional statement to find the sign of product of three numbers. Display the
result in the console with the specified sign.
Sample numbers: 3, -7, 2
Output: The sign is -*/


var a = 3;

var b = -7;

var c = 2;

var product = a * b * c;

if (product >= 0) {

    console.log("The Sign is +")

} else {

    console.log("The sign is -")
}


/* Task 2.
Write a conditional statement to find the largest of five numbers. Display the result in the
console.
Sample numbers: -5, -2, -6, 0, -1
Output: 0 */


var firstNumber = -5;

var secondNumber = -2;

var thirdNumber = -6;

var fourthNumber = 0;

var fifthNumber = -1;


if (firstNumber > secondNumber && firstNumber > thirdNumber && firstNumber > fourthNumber && firstNumber > fifthNumber ) {

    console.log(firstNumber)

} else if (secondNumber > thirdNumber  && secondNumber > fourthNumber && secondNumber > fifthNumber && secondNumber > firstNumber) {

    console.log(secondNumber)

} else if (thirdNumber > fourthNumber && thirdNumber > fifthNumber && thirdNumber > firstNumber && thirdNumber > secondNumber) {

    console.log(thirdNumber)

} else if (fourthNumber > fifthNumber && fourthNumber > firstNumber && fourthNumber > secondNumber && fourthNumber > thirdNumber) {

    console.log(fourthNumber)

} else if (fifthNumber > firstNumber && fifthNumber > secondNumber && fifthNumber > thirdNumber && fifthNumber > fourthNumber) {

    console.log(fifthNumber)
}


/*Task 3. 
Write a conditional statement to print three numbers as sorted number list.
Sample numbers : 0, -1, 4
Output : 4, 0, -1 */

var a = 0;

var b = -1;

var c = 4;

if (a > b && b > c && b > c) {

    console.log(a + ", " + b + ", " + c)

} else if ( b > c && b > a && c > a) {

    console.log(b + ", " + c + ", " + a)

} else if (c > a && c > b && a > b) {

    console.log(c + ", " + a + ", " + b)
    
}


/*Task 4.
Write a program to check if the variable is a number and if it’s a number, check if it is
divisible by 2. If it is, print the result, if not, show “X”.
Sample input: 10 Sample input: 7
Output: 10 / 2 = 5 Output: X*/


var d = 10;

var result = d / 2;

if (typeof d == "number") {

    if (d % 2 === 0) {

        console.log(result)
        
    } else {

        console.log("X")
    }

}


var e = 7;

if (typeof e == "number") {

    if (e % 2 === 0) {

        console.log(e % 2 === 0)
        
    } else {

        console.log("X")
    }

} 
/*Task 5.
Write a program that compares two numbers and displays the larger. Display the result in
the console. */


var numberOne = 3458;

var numberTwo = 76584;

if (numberOne > numberTwo) {

    console.log(numberOne + " is greater than " + numberTwo + ".")
    
} else {

    console.log(numberTwo + " is greater than " + numberOne + ".")
}


/*Task 6. 
Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Sample Input: 60°C
Output : 60°C is 140 °F */


var temperatureInCelsius = 60;

var temperatureInFahrenheit = (9 * temperatureInCelsius / 5) +32;

console.log(temperatureInCelsius);

console.log(temperatureInFahrenheit);


/*Task 7. 
Write a JavaScript program to get the difference between a given number and 13, if
the number is greater than 13 return double difference between that number and 13.
Sample Input: 11             Sample Input: 32
Output : 2                   Output : 38 */


var givenNumberOne = 11;

var givenNumberTwo = 32;


if (givenNumberOne > 13) {

    console.log((givenNumberOne - 13) * 2)
    
} else {

    console.log(givenNumberOne + " is less than 13.")

}






if (givenNumberTwo > 13) {

    console.log((givenNumberTwo - 13) * 2)

} else {

    console.log( givenNumberTwo + " is less than 13.")

}
    

/*Task 8. 
Write a JavaScript program to compute the sum of the two given integers. If the two
values are same, then returns triple their sum.
Sample Input: 12,5 Sample Input: 8,8
Output : 17 Output : 48*/


var input1 = 12;

var input2 = 5;


var sum = input1 + input2;

if (input1 === input2) {

    console.log(sum * 3)

} else {

    console.log(sum)
}


var input3 = 8;

var input4 = 8;

var sum2 = input3 + input4;


if (input3 === input4) {

    console.log(sum2 * 3)

} else {

    console.log(sum2)
}


/*Task 9. 
Write a JavaScript program to check two given numbers and print “true” if one of
the number is 50 or if their sum is 50.
Sample Input: 5,54 Sample Input: 6,50 Sample Input: 40,10*/


var numeroUno = 5;

var numeroDue = 54;

var sumeria = numeroUno + numeroDue;

if (numeroUno === 50 || numeroDue === 50 || sumeria === 50) {

    console.log("True!")

} else {

    console.log("False!")

}


var x = 6;

var y = 50;

var summ = x + y;

if (x === 50 || y === 50 || summ === 50) {

    console.log("True!")

} else {

    console.log("False!")
}


var i = 40;

var j = 10;

var k = i + j;


if (i === 50 || j === 50 || k === 50) {

    console.log("True!")

} else {

    console.log("False!")
}


/*Task 10. 
Write a JavaScript program to check a given integer is within 20 of 100 or 400,
and print range in which number belongs.
Sample Input: 13 Sample Input: 34 Sample Input: 256
Output : - Output : 20 ⇔ 100 Output : 100 ⇔ 400 */

var l = 13;

if (20 < l < 100) {

    console.log( l + " is out of range.")

} else {

    console.log("20 ⇔ 100")
}

var m = 34;

if (20 < m < 100) {

    console.log("20 ⇔ 100")
    
} else {

    console.log(m + " is out of range.")

}


var n = 256;

if (100 < n < 400) {

    console.log("100 ⇔ 400")

} else {

    console.log(n + " is out of range.")

}