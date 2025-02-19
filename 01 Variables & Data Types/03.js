//             Data Types
//                 |
//                 |
//                 |
//           --------------
//           |            |
//           |            |
//       primitive    non-primitive

// Primitive Data Types

// Number, 
// String, 
// Boolean, 
// Undefined, 
// Null, 
// BigInt, 
// Symbol

let age = 22;
console.log(typeof age);

let price = 99.99;
console.log(typeof price);

let fullName = "Atharva Pardeshi";
console.log(typeof fullName);

let isFollow = true;
console.log(typeof isFollow);

let x;
console.log(x); // undefined
console.log(typeof x);

let y = null;
console.log(y);
console.log(typeof y); // object yet its taken as primitive data type

let bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);
console.log(typeof bigInt);

let sym = Symbol('description');
console.log(sym);
console.log(typeof sym);

// Non-Primitive Data Types

// Object
// Array
// Function
// Date
// RegExp 

// Objects
// A collection of properties, where each property is a key-value pair.

let person = {
    firstName: "Atharva",
    lastName: "Pardeshi",
    age: 22,
    isMale: true
}

console.log(person);

person.firstName = "Atharvaaaa";
person.age = 21;
console.log(person);

// accessing value from keys
console.log(person.lastName);
console.log(person["lastName"])

console.log(typeof person);

// Arrays
// A special type of object used for storing ordered collections of values.

let colors = ['red', 'green', 'blue'];
console.log(colors);
console.log(typeof colors);

function greet() {
    console.log("Hello, World!");
}
greet();
console.log(typeof greet);

let now = new Date();
console.log(now);
console.log(typeof now);

let pattern = /ab+c/;
console.log(pattern);
console.log(typeof pattern);