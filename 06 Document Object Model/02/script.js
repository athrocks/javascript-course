// Attributes
// getAttribute( attr ) //to get the attribute value
// setAttribute( attr, value ) //to set the attribute value

// getAttribute( attr )
let divElement = document.querySelector("div");
console.log(divElement);

let divElement2 = document.querySelectorAll("div")[1];


let divId = divElement.getAttribute("id");
console.log(divId);

let divName = divElement.getAttribute("name");
console.log(divName);

let divClass = divElement.getAttribute("class");
console.log(divClass);

let paraElement = document.querySelector("p");
console.log(paraElement);

// setAttribute( attr, value )

paraElement.setAttribute("name", "paraName");
console.log(paraElement);

// Style
console.log(divElement.style);
divElement.style.backgroundColor = "red";
divElement.style.color = "blue";

// Insert Elements
// But first create
let buttonElement1 = document.createElement("button");
console.log(buttonElement1);

buttonElement1.innerText = "Save";
buttonElement1.style.backgroundColor = "green";

let buttonElement2 = document.createElement("button");
let buttonElement3 = document.createElement("button");
let buttonElement4 = document.createElement("button");


buttonElement2.innerText = "Save";
buttonElement2.style.backgroundColor = "Yellow";

buttonElement3.innerText = "Save";
buttonElement3.style.backgroundColor = "Orange";

buttonElement4.innerText = "Save";
buttonElement4.style.backgroundColor = "aqua";

// let el = document.createElement("div") ----> creates Element first
// node.append(el) ----> adds at the end of node (inside)
// node.prepend(el) ----> adds at the start of node (inside)
// node.before(el) ----> adds before the node (outside)
// node.after(el) ----> adds after the node (outside)


// node.append(el) ----> adds at the end of node (inside)
divElement.append(buttonElement1);

// node.prepend(el) ----> adds at the start of node (inside)
divElement.prepend(buttonElement2);

// node.before(el) ----> adds before the node (outside)
divElement2.before(buttonElement3);

// node.after(el) ----> adds after the node (outside)
divElement2.after(buttonElement4);


// Delete Element
paraElement.remove()