// Variables

age = 24;
console.log(age);

fullName = "Atharva Pardeshi"
console.log(fullName);

price = 99.99
console.log(price);

isFollow = true;
console.log(isFollow);

x = null;
console.log(x);

y = undefined; 
console.log(y);


// JS is  dynamically typed language
// you do not need to define variable as int before to store int.
// fullName can be 9 and not necessaryly string

// console.log(console)

// let,const,var


// var ---> Variable can be re-declared and updated.
//          global scope 

// let ---> variable can not be re-declared but can be updated.
//          block scope

// const ---> variable can not be re-declared or updated.
//            block scope variable

// use let or const but not var.
// because
var abc = "should";
var abc = 3; // this should not be allowed to redefine like var abc = 3
console.log(abc);


let fullname = "tony stark";

let totalPrice = 999;
totalPrice = 34;

console.log(fullname);
console.log(totalPrice);

const discount = 23;
// discount = 3;
console.log(discount);

// scope

// block
{
    let num = 5;
    console.log("Inside of block: "+ num);
}
// console.log("Outside of block: "+ num); // ReferenceError: num is not defined

