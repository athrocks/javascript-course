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
