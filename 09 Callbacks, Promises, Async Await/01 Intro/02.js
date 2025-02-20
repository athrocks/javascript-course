// Asynchronous
// Due to synchronous programming, sometimes imp instructions get
// blocked due to some previous instructions, which causes a delay in the UI.
// Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

console.log("1");

function hello() {
    console.log("2");
}

setTimeout(hello, 2000); // 2sec

console.log("3");