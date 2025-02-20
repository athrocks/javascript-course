// Callbacks
// Callbacks are functions that are passed as arguments to other functions.
// They are executed after the completion of the task.
// They are used to handle asynchronous operations such as reading files, making HTTP requests, etc.

// Method 1

function sum(a, b) {
  console.log(a + b);
}

function calculate(a, b, sumCallback) {
  sumCallback(a, b);
}

calculate(2, 3, sum);

console.log("-------------------");

// Method 2

calculate(2, 3, function (a, b) {
  console.log(a - b);
});

console.log("-------------------");

// Method 3

calculate(2, 3, (a, b) => {
  console.log(a * b);
});

console.log("-------------------");