// Array Methods

// Map
// Creates a new array with the results of some operation. The value its callback returns are
// used to form new array

// arr.map( callbackFnx( value, index, array ) )

let marks = [96, 75, 48, 83, 66];
let newMarks = marks.map((val) => {
    return val*3;
});

console.log(marks);
console.log(newMarks);


// Filter
// Creates a new array of elements that give true for a condition/filter.

let evenMarks = marks.filter((val) => {
    return val%2 == 0;
});

console.log(marks);
console.log(evenMarks);


// Reduce
// Performs some operations & reduces the array to a single value. It returns
// that single value. 

let nums = [1, 5, 3, 9 , 31];

let sumOfAll = nums.reduce((result,current) => {
    return result + current;
});

console.log(sumOfAll);