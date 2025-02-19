// Window Object

// The window object represents an open window in a browser. It is browser’s object (not JavaScript’s)
// & is automatically created by browser.
// It is a global object with lots of properties & methods

// What is DOM?
// The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.
// When a web page is loaded, the browser creates a Document Object Model (DOM) of the page

/*
            +-----------------------+
            | Load HTML Document    |
            +-----------------------+
                        |
                        v
            +-----------------------+
            | Select Elements       |
            | - getElementById      |
            | - getElementsByClassName |
            | - getElementsByTagName |
            | - querySelector       |
            | - querySelectorAll    |
            +-----------------------+
                        |
                        v
            +-----------------------+
            | Manipulate Elements   |
            | - Change Content      |
            | - Change Styles       |
            | - Add/Remove Classes  |
            +-----------------------+
                        |
                        v
            +-----------------------+
            | Create and Append     |
            | Elements              |
            | - createElement       |
            | - appendChild         |
            +-----------------------+
                        |
                        v
            +-----------------------+
            | Add Event Listeners   |
            | - addEventListener    |
            +-----------------------+
*/

// DOM

/*
                        +----------------------+
                        |       Window         |
                        +----------------------+
                                |
                                v
                        +----------------------+
                        |      Document        |
                        +----------------------+
                                |
                                v
                        +----------------------+
                        |        <html>        |
                        +----------------------+
                                    |
                                    v
                        +---------------------------+
                        |                           |
            +----------------------+       +----------------------+
            |       <head>         |       |       <body>         |
            +----------------------+       +----------------------+
                        |                           |
                        v                           v
            +----------------------+       +----------------------+
            | <meta>, <title>, etc.|       |  <div>, <p>, etc.    |
            +----------------------+       +----------------------+
*/

// see in browsers console

console.log("hello");

console.log(window);

console.log(document.body.childNodes);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[7]);

document.body.style.background = "orange";

document.body.childNodes[1].innerText = "abcd";

// DOM Maniputlation

//Selecting with id
// Selecting with class
// Selecting with tag
// Query Selector

// Selecting with id
let heading = document.getElementById("heading");
console.log(heading);

let heading2 = document.getElementById("heading");

// Selecting with class
let headings = document.getElementsByClassName("headingClass");
console.log(headings);
console.dir(headings);

// Selecting with tag
let paraTags = document.getElementsByTagName("p");
console.dir(paraTags);

// Query Selector
let elementThroughTag = document.querySelector("p");
console.dir(elementThroughTag);

let elementThroughClass = document.querySelector(".headingClass");
console.dir(elementThroughClass);

let elementThroughId = document.querySelector("#buttonId");
console.dir(elementThroughId);

let elements = document.querySelectorAll("p");
console.dir(elements);

// Properties
// tagName : returns tag for element nodes
// innerText : returns the text content of the element and all its children
// innerHTML : returns the plain text or HTML contents in the element
// textContent : returns textual content even for hidden elements

let firstButtonElement = document.querySelector("#buttonId");

console.log(firstButtonElement.tagName);

let bodyElement = document.querySelector("body");

console.log(bodyElement.innerText);
firstButtonElement.innerText = "Don't Click Me";

console.log(bodyElement.innerHTML);

console.log(bodyElement.textContent);
