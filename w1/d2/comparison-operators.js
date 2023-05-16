/*


  Comparison Operators!

  - Comparison Operators
   <, <=, ==, ===, >=, >

    < - less than
    > - greater than
    == - loose equality
    === - strict equality
    <= - less than equal too
    >= - greater than equal too

    return a boolean => true or false
*/

// console.log(2 < 3);//t
// console.log(10 > 5);//t
// //strict equality
// console.log(10 === 10);//t - checking the value and the data type
// //lose equality
// console.log(10 == '10');//t - check just the value and not the type
// console.log(10 === '10');//f - check the value and the data type
// //we get false because the number 10 is the same value but it is not the same data type, the other value is a string of 10

// 0 1 2 3 4 5...
// a b c d e f...
// https://www.asciitable.com/

// console.log('a' <  'z');//true
// console.log('first' < 'last');

/*


  Strings!

  Strings are delineated with '', "", ``- learn next week

*/

// print a string to the terminal
// console.log('hello world');
// console.log('we can have an entire sentence');

// strings can hold words, sentences, letters
// is that spaces count as a character
let newString = "Cool string";
// console.log(newString);
// console.log('Cool string');

//can make sentence
let sentence1 = " this a sentence! ";

//Quotes within quotes
//use the alternate way to wrap a string
let sentence2 = '"This is a quote"';
let sentence3 = "' this is a quote'";

//quotes within quotes within quotes
let sentence4 = '" "You miss 100% of the shots you don\'t take" -  Wayne Gretysky" - Micheal Scott ';
// console.log("sentence4:", sentence4);



// String methods!
// all strings have a length property
// tell us the length of the string
// console.log('brandon'.length);//7
let lastName = 'laursen';

//'laursen'.length = 7
// console.log(lastName.length);

// strings also have indexes
// indexes in programming start 0


/*
length of 4
VALUE - C A T S undefined undefined
INDEX - 0 1 2 3     4         5
*/


let animal = 'cats';
// console.log(animal)//cats
// console.log(animal.length);//4

// console.log(animal[0]);// [] to index were saying retrieve the value at the 0th index and log it - c
// console.log(animal[1]);//a
// console.log(animal[2]);//t
// console.log(animal[3]);//s
// console.log(animal[4]);//undefined -  we are indexing outside the bounds the string
// console.log(animal[5]);//undefined

// access the last value of the string
// trick to get last value guarantee
// console.log(animal[animal.length - 1]);//s
// //'cats'[3]
// // were grabbing the last value by getting the length of the array and subtracting one to account for the 0th index
// console.log(animal[animal.length - 2])

// strings have methods as well
// .indexOf - mdn
// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

let animal2 = 'rhino';
console.log(animal2.indexOf('r'));
console.log(animal2.indexOf('i'));
console.log(animal2.indexOf('o'));
console.log(animal2.indexOf('z'));
