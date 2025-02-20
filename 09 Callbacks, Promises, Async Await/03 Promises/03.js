// Example 1
/*
const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("Promise started");
    // resolve("Promise resolved");
    reject("Promise rejected");
  });
};

let promise = getPromise();

// if promise Fullfilled then .then() works
promise.then(() => {
  console.log("promise fullfilled");
});

// if promise Rejected then .catch() works
promise.catch(() => {
  console.log("promise rejected");
});
*/

// Example 2
const getPromise = () => {
    return new Promise((resolve, reject) => {
      console.log("Promise started");
      resolve("Promise resolved");
    //   reject("Promise rejected");
    });
  };
  
  let promise = getPromise();
  
  promise.then((res) => {
    console.log("promise fullfilled",res);
  });
  
  promise.catch((err) => {
    console.log("promise rejected",err);
  });