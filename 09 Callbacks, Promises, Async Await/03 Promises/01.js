// What is a Promise?
// A Promise is an object that represents an asynchronous operation that will eventually complete (or fail). It has three states:

// Pending – The operation is still in progress.
// Resolved (Fulfilled) – The operation completed successfully.
// Rejected – The operation failed.

// resolve & reject are callbacks provided by JS

// resolve(result)
// reject(error)

// Promise is a constructor function, so we can create a new Promise object using new keyword and passing a function with resolve and reject parameters.


// Check in chrome browser console

let promise = new Promise((resolve, reject) => {
    console.log("Promise is pending...");
});

console.log(promise);

console.log("--------------------");

let promise2 = new Promise((resolve, reject) => {
    console.log("Promise is pending...");
    resolve("Promise fulfilled");
});

console.log(promise2);

console.log("--------------------");

let promise3 = new Promise((resolve, reject) => {
    console.log("Promise is pending...");
    reject(new Error("Something went wrong"));
});

console.log(promise3);

console.log("--------------------");