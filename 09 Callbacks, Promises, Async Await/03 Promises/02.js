function getData(dataId, getNextDataCallback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Data ${dataId}`);
      resolve("Success");
      if (getNextDataCallback) {
        getNextDataCallback(dataId + 1);
      }
    }, 5000);
  });
}

let promise = getData(123);
console.log(promise);

setTimeout(() => {
  console.log(promise);
}, 6000);
