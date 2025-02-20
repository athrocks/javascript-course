// Async-Await
// To use async-await, we need to use the async keyword before the function and await keyword before the function that returns a promise.

// The async function returns a promise, and the resolved value of the promise is whatever the async function returns.

// The await keyword makes JavaScript wait until the promise is settled and returns its result.
// The await keyword only works inside an async function.
// The async function can contain multiple await expressions.
// The await keyword pauses the execution of the async function and waits for the promise to be settled.
// The await keyword can only be used inside an async function.

// The async function returns a promise. When the async function returns a value, the promise will be resolved with the returned value.
// If the async function throws an error, the promise will be rejected with the thrown error.

// The async function can return a promise that gets rejected.
// The async function can return a promise that gets rejected with an error.
// The async function can throw an error.

async function hello() {
  console.log("Hello");
}

let promise = hello();
console.log(promise);

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Weather data");
      resolve(200);
    }, 2000);
  });
}

async function getWeatherApiData() {
    await api();
    await api();
}

let promise2 = getWeatherApiData();
console.log(promise2);