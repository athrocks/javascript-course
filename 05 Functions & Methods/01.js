// Functions
// Block of code that performs a specific task, can be invoked whenever needed

function greet(fullName) {
  console.log(`Hello My Name is ${fullName}`);
}

greet("atharva");

let fullName = "atharva Pardeshi";
greet(fullName);

// Arrow Functions
// Compact way of writing a function

const sum = (a, b) => {
  return a + b;
};

let num1 = 4,
  num2 = 6;
let ans = sum(num1, num2);
console.log(`sum of ${num1} & ${num2} is`, ans);

// forEach Loop in Arrays
let heroes = ["ironman", "hulk", "thor", "batman"];

heroes.forEach((hero) => {
  console.log(hero);
});

heroes.forEach((hero, idx) => {
  console.log(hero, idx);
});

heroes.forEach((hero, idx, heroes) => {
  console.log(hero, idx, heroes);
});

// Higher Order Function/ Methods
// these are functions where they take functions as paramenter or return function as output.
