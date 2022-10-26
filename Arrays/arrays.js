/**1. Write an array of months in a year. Using console.log display June, October and January
from the array. */

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

console.log(months[5]);

console.log(months[9]);

console.log(months[0]);



/**2. Write an arrays of days in a week. Using console.log display Sunday from the array. */

var weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

console.log(weekDays[6]);



/**3. Print all negative elements from the array [2, -4, 5, -2, -11]. */

var negativeNumbers = [2, -4, 5, -2, -11];

console.log(negativeNumbers[1], negativeNumbers[3], negativeNumbers[4]);



/**4. Print all elements with indices divisible by 3 from the array [5, 15, -5, 20, 12, 18, 72, 14, 9]. */

var numbersDivisibleBy3 = [5, 15, -5, 20, 12, 18, 72, 14, 9];

console.log(numbersDivisibleBy3[1], numbersDivisibleBy3[4], numbersDivisibleBy3[5], numbersDivisibleBy3[6], numbersDivisibleBy3[8]);


/**What is the index of number 24 in the following array?
[[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
Using console.log:
● Display the 3rd element of the array,
● Display the 2nd element of the 3rd element. */

var arraysWithinAnArray = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

console.log(arraysWithinAnArray[0][3]);

console.log(arraysWithinAnArray[2]);

console.log(arraysWithinAnArray[2][1]);

