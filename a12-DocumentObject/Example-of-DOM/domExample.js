
let inputValue = document.getElementById('inputfield');
let button = document.querySelector('.btn') // return  <button class="btn" name="abc", id="bt">Click me</button>
// let button1 = document.querySelectorAll('.btn') //return NodeList [button#bt.btn]
// let button2 = document.getElementsByClassName('.btn') //return HTMLCollection []
// let button3 = document.getElementsByTagName('button'); //return  HTMLCollection [button#bt.btn, bt: button#bt.btn, abc: button#bt.btn]
// let button4 = document.getElementsByName('abc') //return NodeList [button#bt.btn]
// let button5 = document.getElementById('bt') //  <button class="btn" name="abc", id="bt">Click me</button>
// console.log("button", button)
// console.log("button1", button1)
// console.log("button2", button2)
// console.log("button3", button3)
// console.log("button4", button4)
// console.log("button5", button5)
let todoFile = document.getElementById('hi');

const addTodo = () =>{
    console.log(inputValue.value);
    // todoFile.innerHTML = inputValue.value
    // by creating new element you have to create display the value.
   const data= document.createElement('p');
    data.innerHTML = inputValue.value;
    console.log(data);
    todoFile.appendChild(data)
    if(inputValue.value){
        inputValue.value = ""
    }
}

button.addEventListener('click',()=>{
    addTodo()
})

todoFile.addEventListener('click',(event)=>{
   // event object
    console.log(event)
    console.log(event.target);
    let currentElement = event.target
    currentElement.remove()
    
})
 


//? createElement(tagName): create new HTML element
//? appendChild(nde) :Append a node as the last child fo a parent node
//? removeChild(node) : remove a child node from its parent
//? addEventListener(event, callback_function) :create new eventListener to handle event
//? removeEventListener(event,function) : Remove an even listener;
//? setAttribute(name, value) : set the value of attribute on an element
//? getAttribute(name) : get the value of specific attribute on an element



// what is differences between append() and appendChild() method in dom;
// append()
// Definition: Adds one or more elements, text, or DOM nodes to the end of a parent element.
// Accepts multiple arguments. (You can add multiple things at the same time.)
// Can add both Node objects (elements) and plain text strings.
// Does not return the appended node.
// If appending a text string, it automatically creates a text node.
// You can add text or elements to a parent element
const parent = document.getElementById('parent');
// Append a new paragraph and text
parent.append('Hello World', document.createElement('p'));


// appendChild()
// Definition: Adds a single Node object to the end of a parent element.
// Key Features:
// Only accepts a Node object (e.g., element or text node). u can only add one element (or node) at a time.
// Throws an error if you pass a plain string.
// Returns the appended node.
// Cannot add plain text (it must be inside a node).
const parent1 = document.getElementById('parent');
//Create a new paragraph element
const paragraph = document.createElement('p');
paragraph.textContent = 'Hello World';
// Append the paragraph to the parent
parent1.appendChild(paragraph);


// append(): For adding text + elements together or multiple things at once.
// appendChild(): For adding only one element (not plain text).