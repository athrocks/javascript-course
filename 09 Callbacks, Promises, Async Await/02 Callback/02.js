// Callback Hell
// Callback hell is a situation where callbacks are nested within other callbacks several levels deep.
// It makes the code difficult to read and maintain.
// It can be avoided by using promises or async/await.

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

// secondFunction is callbackFunction for firstFunction
// thirdFunction is callbackFunction for secondFunction
// fourthFunction is callbackFunction for thirdFunction

// To avoid callback hell, you can use Promises or async/await.
