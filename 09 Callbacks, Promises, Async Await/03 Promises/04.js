
function asyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Some data1.');
            resolve("Success");
        }, 4000);
    });
}


function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Some data2.');
            resolve("Success");
        }, 4000);
    });
}

/*
console.log("fetching data1............");
let p1 = asyncFunc();
p1.then((res) => {
    console.log(res);
})

console.log("fetching data2............");
let p2 = asyncFunc2();
p2.then((res) => {
    console.log(res);
})
*/

// Output:

// fetching data1............
// fetching data2............
// Some data1.
// Success
// Some data2.
// Success

// But we don not need this type of o/p i need chaining after asyncFunc() gets executed then only asyncFunc2() should get executed.
// For that we need to use .then() chaining.


/*********************************************************** */

// Method 1 (Using nested promises)

/*
console.log("fetching data1............");
let p1 = asyncFunc();
p1.then((res) => {
    console.log("fetching data2............");
    let p2 = asyncFunc2();
    p2.then((res) => {
    })
})
*/


// Method 2 (Using Promise chaining)
console.log("fetching data1............");
asyncFunc().then((res) => {
    console.log("fetching data2............");
    asyncFunc2().then((res) => {
    })
})