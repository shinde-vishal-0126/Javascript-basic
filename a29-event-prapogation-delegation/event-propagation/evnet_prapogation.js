//! event propagation

// event propagation refer to process of how event are propagated or travel through throw the DOM (document object model) hierarchy
// Event propagation is a way to describe the stack of events that are fired in a web browser.
// Event propagation in the DOM describes how events move through the HTML element hierarchy when an event is triggered.
// Event propagation mode determines in which order the element receives the event.
//! Event propagation is a mechanism in the DOM (Document Object Model) or refer to the process that defines how events travel or flow or propagate through the HTML elements in response to an event (like a click or keypress).
// It determines the order in which event handlers are triggered for nested elements.
// event propagation is crucial for managing and handling event in complex web application
// Event Propagation mode determines in which order the element receives the event

// 2 phase of event propagation
// 1. capturing phase
// 2. bubbling phase
// 3. target phase

//? what is event capturing phase ?
// it is an event occurs form top to Bottom
// The event start from the root of the DOM and goes down to the target element
// handlers registered for the capturing phase are executed
//! The event starts at the root of the DOM tree and propagates downward through the parent elements until it reaches the target element.
// In this phase, the browser checks if any ancestor(grandparent) elements (starting from the top) have event handlers that should be triggered.
// So by default the event bubbling process happen but another process is called as capturing which make the event execution process top to bottom
// With event capturing the event is first captured by the outermost element and propagated to the inner element
// Capturing is also called as trickling which helps remember the propagation order.
// Going from the window to the event target phase.

// / The target phase :(it is target phase)
// Target Phase: The event reaches the target element where the event was triggered.
// handlers registered for the target phase are executed

//?  What is Event bubbling phase ?
//  It is an event that occurs from  Bottom to top.(event bubbling is make the event execution process bottom to top)
//! The event start from the target element to bubble up to the root of the DOM
// handlers registered for the bubbling phase are executed
//  After the event reaches the target element, it propagates back up (or "bubbles") through its ancestors until it reaches the root again
//  Any event handlers attached to these ancestor elements will be triggered in this phase.
//  With event bubbling the event is first captured and handled by the innermost element and then propagated to outer element
// The event flows from the child button back up to the parent div, and eventually to the document.
// Form the event target parent back to the window

//? By default which event are propagated ?
// by default BOTTOM TO TOP event are propagated.(down to up)
// by default bubbling phase executed.

//| Note
// BUBBLE PHASE : BOTTOM --> TOP (target element to ==> root of the DOM)
// (TARGET PHASE) <button> ==> div ==> body ==> html ==> document ==> window

// CAPTURE PHASE : TOP --> BOTTOM
// window ==> document ==> html ==> body ==> button (TARGET PHASE)
// event propagation defined determine which order the element receive the event is called as event propagation

//* If they are executed in a certain way can we change the sequences of event propagation so this complete process of deciding when and in which direction an event will be executed is called event propagation.

//! example for bubbling phase
// const outer = document.getElementById('outer').addEventListener('click',(e)=>{
//     console.table([{
//         description:'i am outer one',
//         target: e.target,
//         CurrentTarget:e.currentTarget
//     }])
// });

// const middle = document.getElementById('middle').addEventListener('click', (e)=>{
//     console.table([{
//         description:'i am middle one',
//         target: e.target,
//         CurrentTarget:e.currentTarget
//     }])
// })

// const inner = document.getElementById('inner').addEventListener('click', (e)=>{
//     console.table([{
//         description:'i am inner one',
//         target: e.target,
//         CurrentTarget:e.currentTarget
//     }])

// })

//| note:
//! To achieve event capturing, you used the third parameter of the addEventListener method which specifies whether the event should be captured during the capturing phase
// setting it to true will activate the captured phase (like give third parameter in in addEventListener as capture:true)
// To achieve the event capturing so you need to pass the third parameter in addEventlistener is the capture : true as an Object
//  By setting { capture: true } in the addEventListener() method, you switch the event listener to the capturing phase.

// below are the example of capture phase
const outer = document.getElementById("outer").addEventListener(
  "click",
  (e) => {
    console.table([
      {
        description: "i am outer one",
        target: e.target,
        CurrentTarget: e.currentTarget,
      },
    ]);
  },
  { capture: true } // in addEventListener you have to third parameter capture: true as an object 
);

const middle = document.getElementById("middle").addEventListener(
  "click",
  (e) => {
    console.table([
      {
        description: "i am middle one",
        target: e.target,
        CurrentTarget: e.currentTarget,
      },
    ]);
  },
  { capture: true } // in addEventListener you have to third parameter capture: true as an object 
);

const inner = document.getElementById("inner").addEventListener(
  "click",
  (e) => {
    e.stopPropagation()  
    console.table([
      {
        description: "i am inner one",
        target: e.target,
        CurrentTarget: e.currentTarget,
      },
    ]);
  },
  {
    capture: true,  // ine addEventListener you have to third parameter capture: true as an object 
  }
);



//?  if there is any way to stop this bubbling ?
// So stop the bubbling and capturing you have to use the event.stopPropagation method and inside the event or callback function
//! So by default is the bubbling process when we click on the button so way to do that called stop propagation
// I.e when we click on the button only button event executed and another event stop the propagation


