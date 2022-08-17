/*

Destructuring: 

Destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects into distinct variables.

Essentially, this means that you have a data structure (Such as an array or an object) and you want 
the information from it to be its own variable.

We can achieve this through destructuring.


Example Data Structure 1:

const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@SSw0rd9',
    username: 'bmarley',
    createdAt = '1543945177623'
};

const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];


*/

w = 8; // Bad practice - this creates a global variable w

var x = 9; // Before ES6 // the old way - we don't do this anymore

let y = 10; // A scoped variable

const z = 11; // A scoped variable. 

/*
With let - you cannot use the variable without first initializing it - which is a good thing.

Calling console.log('YYYY' , y); 
if this is above the let declaration we'll see that YYYY is undefined




Hoisting: Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

JavaScript only hoists declarations, not initializations.

*/

// Array Destructuring
//ctrl +opt +n
const array = [1, 2, 3, 4, 5, 6];
console.log(array[0])

// Lecture @ 20:41