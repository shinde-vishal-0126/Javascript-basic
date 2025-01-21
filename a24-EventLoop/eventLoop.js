//# event loop : runTime model
//? what is event loop ?

// event loop a tiny component within the javascript runtime.
// the event loop is mechanism javascript that handled asynchronous operation ensuring that non-blocking task are executed efficiently
// javascript event loop constantly running processes that coordinate tasks between the call stack and callback Queue to achieve concurrency.
// event loop continuously check the call stack and callback Queue or (monitoring both call stack and callback queue)
// if there is callback function waiting in callback queue to be execute then event loop will check call stack is empty or not
// as soon as stack is empty it will take that callback function from callback queue and push into the callstack to be executed so continue this process called as event loop
// event loop specially for understanding how asynchronous code execution work
// (it is heart of the javascript concurrency model and play a significant role in event handling , callbacks, and non-blocking operation)
// javascript is single thread language that means javascript can do one thing at a single point of time.


//? what is call Stack
// The call stack is a special data structure in programming that keeps track of function calls in the order they are executed.
//- The call stack is a fundamental mechanism that keeps track of function calls and ensures that functions are executed in the correct order, and it follows a "Last In, First Out" (LIFO) principle.
// Call stack work on LIFO manner like last-in-first-out(last function called is the first one to be resolved.)
// JavaScript uses a single thread to execute code, meaning only one function can be executed at a time. The call stack keeps track of which function is currently running.
// - How It Works:
// Function Invocation: When a function is called, a new execution context is created. 
// This context contains information about the function's execution, such as the values of its parameters and variables.
// - Push onto the Stack: 
// The execution context of the called function is added (or "pushed") onto the top of the call stack.
// - Function Execution: 
// The JavaScript engine executes the code within the function's execution context.
// - Return: 
// Once a function finishes execution, its execution context is removed (or "popped") from the top of the call stack, and the control is returned to the calling function.

//? What is stack OverFlow
// The call stack has fixed size , depends on the implementation of the host environment,either the web browser or node.js
// So number of execution context exceeds the size of the stack a stack overflow error will occur.
// his usually happens due to excessive or infinite recursion, where a function keeps calling itself without an exit condition.


//? what is Global execution context in javascript  (GEC):
// The global execution context is the default context in which any JavaScript code runs outside of functions
// It is the first context that is created when a JavaScript program is executed
// and it serves as the environment for all global code, variables, and functions.
// - The Two Phases of the Global Execution Context:
// * Creation Phase:
//  When the JavaScript engine starts executing code, it creates a global execution context. During this phase, the engine does the following:
// Creates a global object (e.g., window in browsers, global in Node.js).
// Sets up the this keyword to refer to the global object.
// Initializes all declared variables (but they are not assigned values yet) and functions.(i,e Memory Allocation: The JavaScript engine allocates memory for variables and functions declared in the global scope.)
// * Execution Phase:
//  The JavaScript code is executed line-by-line:
// Variables and functions are assigned their respective values.
// The this keyword continues to refer to the global object

// The global execution context is the first context to be created when a JavaScript program starts.
// After the global context is created, other execution contexts are created for any functions called, and they are pushed onto the call stack.
// The global execution context stays at the bottom of the call stack throughout the program’s execution.



//? what is execution context :
//  the execution is an abstract concept of an environment were the  javascript code is evaluated and executed.(or An execution context in JavaScript refers to the environment in which a piece of code is evaluated and executed)
// It is a container for all the information that the JavaScript engine needs to execute a function or evaluate a block of code.
// if you call any function it create execution context of that function
// - There are three types of execution contexts in JavaScript:
// Global Execution Context
// Function Execution Context
// Eval Execution Context (rarely used in modern JavaScript)

//? explain execution stack or call stack
// The execution stack, also known as the call stack, is a data structure used by JavaScript to manage the execution of function calls
// t keeps track of the functions that are called during the execution of a program, and it follows a Last In, First Out (LIFO) order.
// When a function is called, create new function execution context and its execution context is pushed onto the call stack.
// When the function finishes execution, its context is popped off the stack. 
// The call stack ensures that JavaScript executes functions in the correct order and maintains proper scope and execution context.

// Key Concepts in the Call Stack:

// - Global Execution Context (GEC):
// This is the default execution context where the global code runs.
//  When the program starts, the global execution context is pushed onto the call stack.
// It remains there until the script finishes execution.

// - Web APIs:
// Web APIs refer to browser APIs or environments like Node.js 
// that allow JavaScript to interact with the web, perform AJAX calls, or handle asynchronous tasks like setTimeout(), DOM manipulation, or HTTP requests.
// These tasks are non-blocking and run asynchronously.
//  They do not execute directly in the call stack. Instead, they are handled by the web browser or Node.js environment.

// Message Queue (Task Queue):
// The message queue is where asynchronous tasks are placed after being executed by the web APIs.
//  Tasks in the queue are categorized into:
// -Microtasks:
//  These include tasks like promises or MutationObserver callbacks.
//  Microtasks have a higher priority than macro tasks and are executed after the current script completes, before the next event loop tick.
// - Macro tasks: 
// These include tasks like setTimeout(), I/O tasks, setInterval(), or AJAX callbacks. 
// They are placed in the message queue after the execution stack is empty.

// Event Loop:
// The event loop is responsible for managing the execution of tasks. 
// It checks whether the call stack is empty. 
// If the stack is empty, it pushes the tasks from the message queue (starting with microtasks) onto the call stack for execution.

console.log("Start");

setTimeout(() => {
    console.log("Inside setTimeout");
}, 2000);

Promise.resolve().then(() => {
    console.log("Inside Promise");
});

console.log("End");

//! Step-by-Step Execution:
// - Global Execution Context:
// The program begins executing and enters the global execution context.
// The first statement console.log("Start") is executed, and "Start" is logged.

// - setTimeout():
// The setTimeout() function is called. This is a web API call.
// The JavaScript engine passes the setTimeout callback function to the Web API (browser or Node.js), which will execute it after 2000ms (2 seconds).
// The callback is not executed immediately. Instead, it is placed in the message queue after the delay.

// - Promise:
// The Promise.resolve().then() is called. This creates a microtask.
// The microtask is added to the microtask queue, which is part of the message queue but has a higher priority than the macro task (like setTimeout).

// - console.log("End"):
// The next statement console.log("End") is executed, logging "End" to the console.

// - Call Stack is Empty:
// At this point, all synchronous code is executed, and the call stack is empty.

// - Event Loop:
// The event loop checks the call stack.
// Since the stack is empty, the event loop moves to the message queue.
// First, the event loop checks the microtask queue. The Promise callback is executed, and "Inside Promise" is logged.
// Then, the event loop moves to the macro task queue. The setTimeout callback is executed, and "Inside setTimeout" is logged after the specified delay.



// Example

const fun2 = () => {
  setTimeout(() => {
    console.log("function 2 is running...");
  }, 3000);
};

const fun1 = () => {
  console.log("function 1 is starting");
  fun2();
  console.log("function 1 end the execution");
};
fun1();

// if you call any function it cerate execution context
// Execution contest having two phase
// 1 creation Phase
// 2. Execution Phase

// CREATION PHASE
// when the javascript engine execute function first time it create global execution context so during this phase javascript engine perform following task
// 1. create global object :  widows in the browser
// 2. create this object and bind with Global object
// 3 setup Memory for strong variable and function references
// 4. stored the function declaration in heap memory and variable within the global execution context with the initial value as undefined

// EXECUTION PHASE
// after creating the global execution context move to the execution phase
// During the execution phase, the javascript engine executes the code line by line, assigns a value to the variable and executes the function call.
// Each function call creates a new function execution context. An object that is a reference to all the parameters of the function.

// in above example
// 1.you call fun1() it has fun1() execution context.

// 2.Then execute this console.log execution part and print whatever it writes.
//  And remove its execution context  from the execution stack.

//3.Then execute next line it having the function call of fun2()
// If you call any function it has its execution context like  fun2() execution context.

// 4 So in function 2 the first execution line having setTimeout() function also has its execution context. Like setTimeout() execution context.
// 5. So setTimeout() comes under the webApi part
// Inside the setTimeout having console.log(‘function 2 called’) but waiting for 3 millisecond so console.log()
// does not create its execution context because it time base event its set time for 3 millisecond. And it callback function wait  for 3 millisecond

//6. And we can pass this callback function inside the web api for 3 millisecond and if it pass to web-api then vanish  or remove its execution context form execution stack

// 7 So in the execution stack having fun2 context so fun2 checks if it's having any more execution if not any execution so fun2 also vanishes or removes its execution context from execution stack.

// 8 So in execution stack it having fun1() context so its check it having any execution or not it its having execution of console.log so its having it execution context and its execute remove the execution context of console.log in execution stack

//9 The fun1() execution context  in the execution stack checks if it has any execution or not if not it vanishes or removes fun1() execution context from the execution stack.

// 10 Now the execution stack is empty.

// 11 When a web api has a callback function it waits for 3 millisecond once it completes 3 sec web api passes this callback function in the message queue.

// 12 So if  callback function comes under message queue it check if execution stack is empty or not it its empty then it move from message queue to global execution context in execution stack.

//! NOTE:
//when whatever present in web Api pass to the message queue
// and event loop used to whatever pass web api in message queue, when execution stack is empty the event loop pass whatever present in message queue,
//it moves to the execution stack and gives its position in the execution stack to execute and get its execution context and once its execute and print then it removes its execution context.


// deflation of event loop :
//  Event loop is a process that waits for the call stack to be clear before pushing callbacks from the MESSAGE queue to the call stack OR execution stack.
// Once the execution of call stack clear the event loop triggers and checks the MESSAGE queue for available callbacks
// Def: javascript has a runtime model based on that event loop which is responsible for executing the code, collecting and processing the event and executing queued sub tasks.
// If the call stack is empty and there is a callback function in the task queue then they will be dequeued from the task queue and run by them pushing them into the call stack.
//javascript event loop constantly running processes that coordinate tasks between the call stack and callback Queue to achieve concurrency.


//? What is benefits of event loop
// We are using single threaded event loop it make very easy to access and modify mutable state between requests
// Also The event loop is constantly running process that monitor both call stack and callback Queue , so callback stack is not empty, the event loop wait until it is empty and place the next function from callback queue to the call stack,
// If the callback queue is empty, nothing will happen.


// - Call Stack, Web API, and Message Queue Summary:
// The call stack executes synchronous code.
// Web APIs handle asynchronous tasks and move them to the message queue.
// The message queue holds tasks that are ready to run (both microtasks and macro tasks).
// The event loop manages the order in which tasks are processed, executing microtasks first and then macro tasks.


// 
//? what is web api and Browser Environment
// A Web API (short for Application Programming Interface) refers to a set of functions or protocols provided by the browser environment or the web platform (like Node.js in server-side JavaScript) that allows JavaScript to interact with the browser and perform various tasks
// These tasks include interacting with the DOM, handling events, making network requests, accessing storage, managing timers, and much more.
// In JavaScript, Web APIs are provided by the browser to handle asynchronous tasks, offloading them from the call stack to the task queue. 
// These APIs handle long-running tasks asynchronously, allowing the main thread (JavaScript's call stack) to remain non-blocking while waiting for responses or performing tasks.
// - 1. Fetch API:
// The Fetch API is used for making network requests asynchronously. It allows you to fetch resources from a server, such as making AJAX calls or fetching data from APIs.
// It returns a Promise, which resolves once the network request completes
// - Timers API (setTimeout, setInterval):
// setTimeout() allows you to execute a function after a specified delay.
// setInterval() repeatedly executes a function at specified intervals
// -Console API:
// The Console API provides methods for logging information to the browser’s console. Common methods include console.log(), console.error(), and console.warn().
// - Geolocation API:
// The Geolocation API allows you to get the geographical location of a device, such as the user's latitude and longitude.
// This API is useful for location-based features like maps or nearby places.
// - Web Storage API (LocalStorage, SessionStorage):
// The Web Storage API provides two types of storage for the browser:
// LocalStorage: Stores data persistently across sessions (until manually deleted).
// SessionStorage: Stores data for the duration of a session (until the browser tab is closed).
// URL API:
// HTML DOM API
// Performance API:
// File API: