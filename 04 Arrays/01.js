// Arrays
// Collections of items

let heroes = ["ironman", "hulk", "thor", "batman"];

let marks = [96, 75, 48, 83, 66];

let info = ["rahul", 86, "Delhi"];

console.log(heroes[1]);
console.log(marks[3]);
console.log(info[0]);

console.log(heroes);
console.log(marks);
console.log(info);

console.log(typeof marks);

// Looping over an Array
for (let index = 0; index < heroes.length; index++) {
  const element = heroes[index];
  console.log(element);
}

for (const element of marks) {
  console.log(element);
}

// Array Methods
// Arrays are mutable unlike strings which are immutable
let fruits = ["apple", "banana", "orange"];
console.log(fruits);

// push() --> add to end
fruits.push("cherry");
console.log(fruits);
fruits.push("watermelon", "melon", "banana");
console.log(fruits);

// pop() ---> delete from end and return
let fruitPopped = fruits.pop();
console.log(fruitPopped);
console.log(fruits);

// toString()
let marksString = marks.toString();
console.log(marksString);

// concat()
let marvelHeroes = ["ironman", "hulk", "thor", "captain America"];
let dcHeroes = ["batman", "wonder Woman", "superman"];
let indianHeroes = ["shaktiman", "krishh"];

heroes = marvelHeroes.concat(dcHeroes, indianHeroes);
console.log(heroes);

marks = [96, 75, 48, 83, 66];
// unshift() ---> add to start
marks.unshift(100);
console.log(marks);

// shift() ---> delete from start and return
let deletedMarks = marks.shift();
console.log(deletedMarks);
console.log(marks);

// slice() : returns a piece of the array
let heroesCollection = [
  "ironman",
  "hulk",
  "thor",
  "captain America",
  "batman",
  "wonder Woman",
  "superman",
  "shaktiman",
  "krishh",
];
let heroesSliced = heroesCollection.slice(1, 4);
console.log(heroesSliced); // 'hulk','thor','captain America'
console.log(heroesCollection);

// splice() : change original array (add, remove, replace)

// startIdx = 2 ,delete 3 elements ,add 10 at startIdx
heroesCollection.splice(2, 3, 10);
console.log(heroesCollection);

// replacing using splice
heroesCollection.splice(2, 1, 100);
console.log(heroesCollection);
