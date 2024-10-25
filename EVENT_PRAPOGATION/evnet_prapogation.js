// EVENT PRAPOGATION

//  what is Event bubbling ? OR What is event propagation ? 0R What is event capturing

// 1. Event propagation is a way to describe the stack of events that are fired in a web browser.
// Event propagation in the DOM refers to the way events travel through the elements in the HTML structure when an event occurs. 

// 2.  Event propagation mode determines in which order the element receives the event.

// 3. Event propagation is a mechanism in the DOM (Document Object Model) that defines how events flow or propagate through the HTML elements in response to an event (like a click or keypress).

// 4.  It determines the order in which event handlers are triggered for nested elements. 

// Event prapogation flow 

    // BUBBLE PHASE : BOTTOM --> TOP
// window --> document --> <HTML> --> <body> --> <div> --> <button> (TARGET PHASE)
    // CAPTURE PHASE : TOP --> BOTTOM
// event propagation defined determine which order the element receive the event is called as event propagation 


// Definition 
// 5. If they are executed in a certain way can we change the sequences of event propagation so this complete process of deciding when and in which direction an event will be executed is called event propagation.


// What is Event bubbling ?
// event bubbling is make the event execution process bottom to top
// 1.  It is an event that occurs from  Bottom to top.
//  2. After the event reaches the target element, it propagates back up (or "bubbles") through its ancestors until it reaches the root again
// 3. Any event handlers attached to these ancestor elements will be triggered in this phase.
//4.  With event bubbling the event is first captured and handled by the innermost element and then propagated to outer element
//  example 
// 5. So blbbing always go to bottom up so the element are executed from button to up like in above example button, form, and div in example 
// 6. The event flows from the child button back up to the parent div, and eventually to the document.
// 7. Form the event target parent back to the window 

// The target phase :(it is target phase)



// what is event capturing ?
// 1. it is an event occurs form top to Bottom
// 2.The event starts at the root of the DOM tree and propagates downward through the parent elements until it reaches the target element.
// 3. In this phase, the browser checks if any ancestor elements (starting from the top) have event handlers that should be triggered.
// 4. So by default the event bubbling process happen but another process is called as capturing which make the event execution process top to bottom
// 5 The event flows from the document down to the parent div, and finally to the child button.
// 6.  so if i am click on button it execute first div—> then form and then form event It is an event that occurs top to bottom
// 7. With event capturing the event is first captured by the outermost element and propagated to the inner element 
// Capturing is also called as trickling which helps remember the prapogation order.
// Going from the window to the event target phase.


// Target Phase: The event reaches the target element where the event was triggered.



// Q By default which event are prapogated ?
// by default BOTTOM TO TOP element are prapogated.


// example of top to bottom like bubblig phase.
const div = document.querySelector('div');
const form = document.querySelector('form');
const button = document.querySelector('button');

div.addEventListener('click',(e)=>{
    e.stopPropagation()
    alert('div called')
    console.log("1")
    console.log("CurrentTarget",e.currentTarget.tagName);
    console.log("Target",e.target.tagName);
    console.log("this.name", this.tagName);
    
},{
    capture: false
})
form.addEventListener('click',(e)=>{
    
    // e.stopPropagation()
alert('form called')
console.log("2")
    console.log("CurrentTarget",e.currentTarget.tagName);
    console.log("Target",e.target.tagName);
    console.log("this.name",this.tagName)

},{
    capture:false
})

button.addEventListener('click',(e)=>{
   
    // e.stopPropagation()
    alert('button click')
    console.log("3")
    console.log("CurrentTarget",e.currentTarget.tagName);
    console.log("Target",e.target.tagName);
    console.log("this.name", this.tagName)
},{
    capture:false
})
//IMPORTANT :
// Here this.name are return undefined because here you have to defined the arraow function  so arrow function do not have their own this context 
// insted they inherit this from the surrounign  lexical context( the scope whree the function is defined)
// This means that when you use this inside an arrow function, it refers to the value of this in the outer scope where the function is defined, which, in the case of event handlers, is not the DOM element.

// NOTE :
// To achieve the event capturing so you need to pass the third parameter in addEventlistener is the capture : true as an obejct
// by defaut  

// By setting { capture: true } in the addEventListener() method, you switch the event listener to the capturing phase.

// so in this case event fire from bottom to up so this exact process is called as event bubbling
// If i click on button then first call button the form and then div 
// Also we have a click of form so first call form then call div

// Q  if there is any way to stop this bubbling ?
// Like i.t when I click on a button so I don't want this from and div to be executed. 
// So by default is the bubbling process  when we click on the button so way to do that called stop propagation 
// I.e when we click on the button only button event executed and another event stop the propagation 

// So stop the bubbling and capturing you have to use the event.stopPropagation method and inside the event or callback function


// Q What are the events they are not bubbling ?
// Like focus, blur,  etc 

// 1. Event bubbling and event capturing are two ways of event propagation in the html Dom api, when an event occurs an element inside another element and both elements have registered to handle  for the event.
// 2. Event Propagation mode determines in which order the element receives the event

// ------------------------------------------------------------------------

// What is the difference between event.target, this.target and event.currentTarget ?
// All of this is very important to know if you want to tackle event propagation


// 1. event.currentTarget:

// event.currentTarget represents the element to which the event listener is currently attached. 
// This can be particularly useful when you have event delegation, where you attach an event listener to a common ancestor of multiple elements.
// It remains the same regardless of where the event was actually triggered. It always points to the element to which the event handler is attached.

// // example of top to bottom like bubblig phase.
// const div = document.querySelector('div');
// const form = document.querySelector('form');
// const button = document.querySelector('button');

// div.addEventListener('click',(e)=>{
//     e.stopPropagation()
//     alert('div called')
//     console.log("1")
//     console.log("CurrentTarget",e.currentTarget.tagName);
//     console.log("Target",e.target.tagName);
    
// },{
//     capture: true
// })
// form.addEventListener('click',(e)=>{
    
//     // e.stopPropagation()
// alert('form called')
// console.log("2")
//     console.log("CurrentTarget",e.currentTarget.tagName);
//     console.log("Target",e.target.tagName);

// },{
//     capture:true
// })

// button.addEventListener('click',(e)=>{
   
//     // e.stopPropagation()
//     alert('button click')
//     console.log("3")
//     console.log("CurrentTarget",e.currentTarget.tagName);
//     console.log("Target",e.target.tagName);
// },{
//     capture:true
// })


// 2. event.target:
// event.target represents the actual DOM element on which the event was originally triggered.
//  It can be any descendant element within the target element, and it accurately identifies the element that triggered the event.
// For example, if you have a click event on a button within a div, event.target would refer to the button, not the div.
// It is a reference to the element that the event listener is attached to.
// Whenever event.target is only naming towards the button because this is where the origin of our bubbling

// this.tagName
// this in the context of an event handler usually refers to the element to which the event listener is attached.
// You can access its tagName property to get the tag name of that element (e.g., "div", "button", "a", etc.).
// This is often used to determine the type of element that triggered the event, but it doesn't give you the full context of the event like event.target does
// console.log('tagName', this.tagName)
    //it print button, form , div
