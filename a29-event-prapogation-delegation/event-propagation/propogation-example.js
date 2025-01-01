// const div = document.querySelector('div');
// const form = document.querySelector('form');
// const button = document.querySelector('button');

// div.addEventListener('click',(e)=>{

//     alert('div called')
//     console.log("1")
//     console.log("CurrentTarget",e.currentTarget.tagName);
//     console.log("Target",e.target.tagName);
//     console.log("this.name", this.tagName);

// },{
//     capture: true
// })
// form.addEventListener('click',(e)=>{

//     // e.stopPropagation()
// alert('form called')
// console.log("2")
//     console.log("CurrentTarget",e.currentTarget.tagName);
//     console.log("Target",e.target.tagName);
//     console.log("this.name",this.tagName)

// },{
//     capture:true
// })

// button.addEventListener('click',(e)=>{

//     // e.stopPropagation()
//     alert('button click')
//     console.log("3")
//     console.log("CurrentTarget",e.currentTarget.tagName);
//     console.log("Target",e.target.tagName);
//     console.log("this.name", this.tagName)
// },{
//     capture:true
// })


//IMPORTANT :
// Here this.name are return undefined because here you have to defined the arrow function  so arrow function do not have their own this context
// instead they inherit this from the surrounding  lexical context( the scope where the function is defined)
// This means that when you use this inside an arrow function, it refers to the value of this in the outer scope where the function is defined, which, in the case of event handlers, is not the DOM element.

// Q What are the events they are not bubbling ?
// Like focus, blur,  etc

// 1. Event bubbling and event capturing are two ways of event propagation in the html Dom api, when an event occurs an element inside another element and both elements have registered to handle  for the event.

// ------------------------------------------------------------------------

//? What is the difference between event.target, this.target and event.currentTarget ?
// All of this is very important to know if you want to tackle event propagation

// 1. event.currentTarget:
// event.currentTarget represents the element to which the event listener is currently attached.(Refers to the element to which the event listener is attached)
// This can be particularly useful when you have event delegation, where you attach an event listener to a common ancestor of multiple elements. (This is the element that is currently handling the event, regardless of where the event originated.)
// It remains the same regardless of where the event was actually triggered. It always points to the element to which the event handler is attached.

// example of top to bottom like bubbling phase.
const div = document.querySelector('div');
const form = document.querySelector('form');
const button = document.querySelector('button');

div.addEventListener('click',(e)=>{
    // e.stopPropagation()
    alert('div called')
    console.log("1")
    console.log("CurrentTarget",e.currentTarget.tagName);
    console.log("Target",e.target.tagName);

},{
    capture: true
})
form.addEventListener('click',(e)=>{

    // e.stopPropagation()
alert('form called')
console.log("2")
    console.log("CurrentTarget",e.currentTarget.tagName);
    console.log("Target",e.target.tagName);

},{
    capture:true
})

button.addEventListener('click',(e)=>{

    // e.stopPropagation()
    alert('button click')
    console.log("3")
    console.log("CurrentTarget",e.currentTarget.tagName);
    console.log("Target",e.target.tagName);
},{
    capture:true
})


// 2. event.target:
// event.target represents the actual DOM element on which the event was originally triggered. (Refers to the element that triggered the event)
//  It can be any descendant element within the target element, and it accurately identifies the element that triggered the event.( This is the actual element where the event occurred (e.g., the element that was clicked, or where the user interacted).)
// For example, if you have a click event on a button within a div, event.target would refer to the button, not the div.
// It is a reference to the element that the event listener is attached to.
// Whenever event.target is only naming towards the button because this is where the origin of our bubbling


// this.tagName
// this in the context of an event handler usually refers to the element to which the event listener is attached.
// You can access its tagName property to get the tag name of that element (e.g., "div", "button", "a", etc.).
// This is often used to determine the type of element that triggered the event, but it doesn't give you the full context of the event like event.target does
// console.log('tagName', this.tagName)
//it print button, form , div

//! conclusion about e.target and e.currentTarget

//e.target :
// it is refer the element that triggered the event;
// this is actual element where the event occurred.

// e.currentTarget
// it is refer the element to which  event listener is attached.
// This is the element that is currently handling the event, regardless of where the event originated.