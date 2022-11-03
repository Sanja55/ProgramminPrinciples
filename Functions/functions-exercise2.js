/**1. Write a function to check whether the `input` is a string or not.
&quot;My random string&quot; -&gt; true
12 -&gt; false */

function checkInput(someString) {

    if (typeof someString === "string") {

        return "Input is a string."
    
    } else {

        return "Input is not a string."
    } 
    
}

var inputIsAstring = checkInput("Ucim funkcije.");

console.log(inputIsAstring);


/**2. Write a function to check whether a string is blank or not.
&quot;My random string&quot; -&gt; false
&quot; &quot; -&gt; true
12 -&gt; false
false -&gt; false */

function isStringBlank(anotherString) {

    if (typeof anotherString === "string" && anotherString === "") {

        return "This string is blank.";
    
    } else {

        return anotherString;
    } 
    
}

var blankString = isStringBlank("");

console.log(blankString);


/**3. Write a function that concatenates a given string n times (default is 1).
&quot;Ha&quot; -&gt; &quot;Ha&quot;
&quot;Ha&quot;, 3 -&gt; &quot;HaHaHa&quot; */

function concatenateTheText(specialString, repeat) {

     var moreSpecialString = "";

     while (repeat > 0) {

        moreSpecialString = moreSpecialString + specialString;

        repeat--;

     }

     return moreSpecialString;

}

var concatenatedText = concatenateTheText("Sanja", 3);

console.log(concatenatedText);


/**4. Write a function to count the number of letter occurrences in a string.
&quot;My random string&quot;, &quot;n&quot; -&gt; 2 */



