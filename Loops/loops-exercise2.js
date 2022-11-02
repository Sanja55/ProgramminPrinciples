/**1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes */

var e = 3;

var a = [5, -4.2, 6, 3, 7];

result = "No!"

for (var index = 0; index < a.length; index++) {
    if (a[index] === e) {

        result = "Yes!"
        break;
    }    
    
} 

console.log(result);


/*for(var i = 0; i < a.length; i++) {

    if (a[i] === e) {

        console.log("Yes!")
    } else {

        console.log("No!")
    }
}


/** 2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]*/

var a = [-3, 11, 5, 3.4, -8];

for (let index = 0; index < a.length; index++) {
    if (a[index] > 0) { 
        
        a[index] *= 2;
    }
    
}

console.log(a);

/*3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3*/

var someArray = [4, 2, 2, -1, 6];

var minimum = someArray[0];

for (var index = 1; index < someArray.length; index++) {
    if (someArray[index] < minimum) {

        minimum = someArray[index];
    }

}

console.log(minimum, someArray.indexOf(minimum));



/**4. Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2 */

var arrayOfFive = [4, 2, 2, -1, 6];

var minimum = arrayOfFive[0];

var firstLargerElement;

for (var index = 0; index < arrayOfFive.length; index++) {
    if (arrayOfFive[index] < minimum) {
        firstLargerElement = minimum;
        minimum = arrayOfFive[index];
    }    
}
 console.log(firstLargerElement);

/**5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16 */


var newArray = [3, 11, -5, -3, 2];

var sum = 0;

for (let index = 0; index < a.length; index++) {

    if (newArray[index] > 0) {

        sum = sum + newArray[index];
    }

}

console.log(sum);


/**6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric. */

var a = [2, 4, -2, 7, -2, 4, 2];

var result = "The array is symmetric";

for (var i = 0, j =  a.length - 1; i <= j; i++, j--) {
    
    if (a[i] !== a[j]) {

        result = "The array isn't symmetric!"
        
        break;
    }

}
console.log(result);


var b = [3, 4, 12, 8];

for (var i = 0, j = b.length - 1; i <=j; i++, j--) {

    if(b[i] !== b[j]) {

        console.log("Array is not symmetric!");

        break;

    }

}



/**7. Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9] */

var a = [4, 5, 6, 2];

var b = [3, 8, 11, 9];

var c = [];

var i = 0;



for (i=0; i < a.length; i++) {
    
    c[c.length] = a[i];
    
    c[c.length] = b[i];
}

console.log(c);

/**8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9] */

var firstArray = [4, 5, 6, 2];

var secondArray = [3, 8, 11, 9];

var newArray = firstArray.concat(secondArray);

console.log(newArray);

/**9. Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2] */

var e = 2;

var a = [4, 6, 2, 8, 2, 2];

var noElementArray = [];

//var index = a.indexOf(2);

for (i = 0; i < a.length; i++) {

    if (a[i] !== 2) {

        noElementArray.push(a[i]);
    }
}

console.log(noElementArray);



/*a.pop();

console.log(a);

a.pop();

console.log(a);

a.splice(2, 1);

console.log(a);*/


/**10. Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8] */

var e = 78;

var p=3;

var a = [2, -2, 33, 12, 5, 8];

var result=[];


for (var i=0; i < a.length; i++) {
  
    if(p > a.length) {
    
        console.log('Error');
    
        break;
  }
  
  if(i === p) {
    
    result[result.length] = e;
  }
  
    result[result.length] = a[i];
}

console.log(result);


