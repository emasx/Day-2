// The 7 primitive data types

/*
1.Number -          Floating point numbers. Used for decimal and integers
2.String -          Sequence of characters. Used for text
3.Boolean-          Logical type that can only be true or false. Used for taking decisions.
4.Undefined -       Value taken by a variable that is not yet defined (empty value)
5.Null -            Also means empty value
6.Symbol (ES2015) - Value that is unique and cannot be changed
7.BigInt (ES2020) - Larger integers than the Numbers type can hold

JavaScript has dynamic typing: We don't have to manually define the data type of the value stored in
                               a variable.Instead, data types are determined automatically.

*/

// 1.Declare variables called 'country', 'continent' and 'population' and assign their values 
//   according to your own country.
// 2.Log their values to the console

let country = "Romania";
let continent = "Europe";
let population = 19;

console.log(country);
console.log(continent);
console.log(population);


/*
1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console
*/

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);