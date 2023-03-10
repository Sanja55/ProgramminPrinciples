/* 1. Write a function that capitalizes the first letter of each string argument it receives.  
	Function arguments: ['hello', 'there', 'ES', 6]
	Output: ['Hello', 'There', 'ES'] */

    const arguments = ['hello', 'there', 'ES', 6];

    const capitalizeTheFirstLetter = (...arguments) => {
        return arguments.filter(argument => typeof argument === 'string')
        .map(argument => argument.charAt(0).toUpperCase() + argument.slice(1));
    };

    
    
    console.log(capitalizeTheFirstLetter('hello', 'there', 'ES', 6));


/**2. Write a function that calculates sale tax that should be paid for the product of the given price.
// Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia).
// Input: [{ name: “Banana”, price: 120 }, {name: “Orange”, price: 100}]
// Output: [{ name: “Banana”, price: 144 }, { name: “Orange”, price: 120 }] // product full price
// Output2: [ 24, 20 ] // tax only*/


const taxRate = 0.2;

let products = [
  {
    name: 'Banana',
    price: 120
  },
  {
    name: 'Orange',
    price: 100
  }];


const calculateSaleTax = array => {
    
    return array.map(item => {
        
        return {
          name: item.name,
          price: item.price * (1 + taxRate)
        };
    
    });
};

const calculateTaxOnly = array => {

    return array.map(item => {
         return item.price * taxRate;
    })
}

console.log(calculateSaleTax(products));
console.log(calculateTaxOnly(products));
 

