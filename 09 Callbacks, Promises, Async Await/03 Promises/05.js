// Solving Callback Hell with promise Chaining

// Callback Hell Example
/*
function firstFunction(callbackFunction) {
  setTimeout(() => {
    console.log("First function completed");
    callbackFunction();
  }, 1000);
}

function secondFunction(callbackFunction) {
  setTimeout(() => {
    console.log("Second function completed");
    callbackFunction();
  }, 1000);
}

function thirdFunction(callbackFunction) {
  setTimeout(() => {
    console.log("Third function completed");
    callbackFunction();
  }, 1000);
}

function fourthFunction(callbackFunction) {
  setTimeout(() => {
    console.log("Fourth function completed");
    callbackFunction();
  }, 1000);
}

// Nested callbacks leading to callback hell
firstFunction(() => {
  secondFunction(() => {
    thirdFunction(() => {
      fourthFunction(() => {
        console.log("All functions completed");
      });
    });
  });
});
*/

// Using promise chaining

function firstFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("First function completed");
      resolve();
    }, 1000);
  });
}

function secondFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Second function completed");
      resolve();
    }, 1000);
  });
}

function thirdFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Third function completed");
      resolve();
    }, 1000);
  });
}

function fourthFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fourth function completed");
      resolve();
    }, 1000);
  });
}

// Using promise chaining
firstFunction()
  .then(() => secondFunction())
  .then(() => thirdFunction())
  .then(() => fourthFunction())
  .then(() => console.log("All functions completed"));
