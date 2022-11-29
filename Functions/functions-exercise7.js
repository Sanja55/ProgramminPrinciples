/**1. Why pay a fortune teller when you can just program your fortune yourself?
Write a function named tellFortune that:
● takes 4 arguments: number of children, partner&#39;s name, geographic location, job title.
● outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N
kids";
Call that function 3 times with 3 different values for the arguments. */

function  tellFortune(numberOfChildren, partnersName, location, job) {

    var fortune = "You will be a " + job + " in " + location + ", " + "and married to "

    + partnersName + " with " + numberOfChildren + " kids."

    return fortune;
    
}

var fortuneTeller = tellFortune (3, "Aleksandar", "Los Angeles", "programmer");

console.log(fortuneTeller);

/**2. You know how old your dog is in human years, but what about dog years? Calculate it!
Write a function named calculateDogAge that:
● takes 1 argument: your puppy's age.
● calculates your dog&#39;s age based on the conversion rate of 1 human year to 7 dog years.
● outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.

Bonus: Add an additional argument to the function that takes the conversion rate of human to dog
years. */

function calculateDogAge(puppyAgeInHumanYears) {
    
    var puppyAge = 7 * puppyAgeInHumanYears;

    return "Your doggie is " + puppyAge + " years old in dog years!"

}

var howOldIsYourDoggie = calculateDogAge(3);

console.log(howOldIsYourDoggie);

/*************************bonus**************************/

function calculatePuppyAge(puppyAgeInHumanYears, conversionRateOfHumanToDogYears) {

    var puppyAgeInDogYears = conversionRateOfHumanToDogYears * puppyAgeInHumanYears;

    return "Your doggie is " + puppyAgeInDogYears + " years old in dog years!";

}
var yourPuppyAge = calculatePuppyAge(4, 7);

console.log(yourPuppyAge);


/**3. Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
Write a function named calculateSupply that:
● takes 2 arguments: age, amount per day.
● calculates the amount consumed for rest of the life (based on a constant max age).
● outputs the result to the screen like so: "You will need NN to last you until the ripe old age of
X."
Call that function three times, passing in different values each time.

Bonus: Accept floating point values for amount per day, and round the result to a round number. */


function calculateSupply (yourAge, amountOfChocolatePerDay) {

    var maxAge = 120;

    var yearsForSupply = maxAge - yourAge;

    var leapYears = parseInt(yearsForSupply / 4);

    var lifetimeSupply = (maxAge - yourAge) * 365 * amountOfChocolatePerDay + leapYears * amountOfChocolatePerDay;

    return "You will need " + lifetimeSupply + " to last you until the ripe old age of " + maxAge + ".";

}

var yourLifetimeSupply = calculateSupply (67, 0.2);

console.log(yourLifetimeSupply);


/**4. It's hot out! Let's make a converter based on the steps here.

Create a function called celsiusToFahrenheit:
● Store a celsius temperature into a variable.
● Convert it to fahrenheit and output "NN°C is NN°F".

Create a function called fahrenheitToCelsius:
● Now store a fahrenheit temperature into a variable.
● Convert it to celsius and output &quot;NN°F is NN°C.&quot; */

function celsiusToFahrenheit(celsiusTemperature) {

    var fahrenheitTemperature = ((celsiusTemperature / 5) * 9) + 32;



    return celsiusTemperature  + " \u00B0C" + " is " + fahrenheitTemperature + " \u00B0F."

}

var celsiusToFahrenheitConverter = celsiusToFahrenheit (35);

console.log(celsiusToFahrenheitConverter);


/**********************Fahrenheit to Celsius**********************/


function fahrenheitToCelsius(fahrenheitTemperature) {

    var celsiusTemperature = (fahrenheitTemperature - 32) / 1.8;

    return fahrenheitTemperature +  " \u00B0F"+ " is " + celsiusTemperature + " \u00B0C."

}

var fahrenheitToCelsiusConverter = fahrenheitToCelsius (86);

console.log(fahrenheitToCelsiusConverter);

