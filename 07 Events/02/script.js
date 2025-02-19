// Events in JS

// The change in the state of an object is known as an Event
// Events are fired to notify code of "interesting changes" that may affect code execution.

// Mouse events (click, double click etc.)
// Keyboard events (keypress, keyup, keydown)
// Form events (submit etc.)
// Print event & many more

let btn1 = document.querySelector("#btn1");
console.log(btn1);

btn1.innerText = "btn1";

btn1.onclick = () => {
  console.log("btn1 was clicked");
  let a = 25;
  a++;
  console.log(a);
};

let divElement = document.querySelector("#div1");
console.log(divElement);

divElement.onmouseover = () => {
  console.log("your div was accessed");
};

// Event Object
// It is a special object that has details about the event.
// All event handlers have access to the Event Object's properties and methods.

let btn2 = document.querySelector("#btn2");
console.log(btn2);

btn2.innerText = "btn2";

btn2.onclick = (e) => {
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(e.clientX, e.clientY);
};

btn2.onmouseover = (e) => {
  console.log(e.type);
};

// Event Listeners
// node.addEventListener(event, callback)
// node.removeEventListener event, callback)

let btn3 = document.querySelector("#btn3");

btn3.addEventListener("click", (e) => {
  console.log("Button 3 was clicked");
  console.log(e.type);
  console.log(e.target);
});

let divElement2 = document.querySelector("#div2");

const handler1 = () => {
  console.log("Event listener 1");
};
const handler2 = () => {
  console.log("Event listener 2");
};
const handler3 = () => {
  console.log("Event listener 3");
};
const handler4 = () => {
  console.log("Event listener 4");
};

divElement2.addEventListener("click", handler1);
divElement2.addEventListener("click", handler2);
divElement2.addEventListener("click", handler3);
divElement2.addEventListener("click", handler4);

divElement2.removeEventListener("click", handler3);
