//? what is difference between the macro task and micro task 
// In JavaScript, microtasks and macrotasks are two types of tasks used in the event loop 
// to manage asynchronous operations and ensure efficient execution of the program. 

// - Macro Task (Task Queue)
// A macro task (also called a task or macrotasks) is any task that is scheduled to run in the task queue.
//  Examples of macro tasks include:
// setTimeout
// setInterval
// I/O tasks (like file reading, network requests via fetch)
// UI rendering events
// DOM events (clicks, scrolls, etc.)

// - Characteristics of Macro Tasks:
// The macro task queue holds tasks that need to be executed after the currently executing code has completed.
// The JavaScript engine processes one macro task from the task queue at a time after the current stack of synchronous code has finished.
// After a macro task is processed, the JavaScript engine will process all pending microtasks before picking the next macro task.

// - Micro Task (Microtask Queue)
// A microtask is a smaller, more immediate task that is placed into the microtask queue.
//  Microtasks are usually triggered by:
// Promises (Promise.then, Promise.catch, Promise.finally)
// MutationObserver (a DOM change observation mechanism)
// queueMicrotask (explicitly queues a microtask)
// - Characteristics of Microtasks:
// Microtasks are executed immediately after the current task (whether it's synchronous code or a macro task) finishes, but before any new macro tasks.
// The microtask queue has higher priority than the macro task queue.
// The JavaScript engine processes all microtasks in the queue before moving to the next macro task.

// - Event Loop and Task Prioritization
// The event loop in JavaScript manages the execution of tasks. Here's how it works:

// - Execution of Synchronous Code:
// JavaScript starts by running all the synchronous code on the call stack.
// Macro Tasks: When a macro task (like setTimeout) is scheduled, it is added to the task queue.
// Micro Tasks: When a microtask (like a Promise) is scheduled, it is added to the microtask queue.
// - Microtask Queue Processing: 
// After synchronous code finishes executing (the call stack is empty), the event loop first checks the microtask queue and processes all the microtasks before moving on to the task queue.

// - Macro Task Queue Processing:
//  Once all microtasks have been processed, the event loop picks the next macro task from the task queue and executes it.

// - whatEver callback function are present in web api or host
// so this callback function task may be 
// 1. Macro Task 
// 2. Micro Task

// - MACRO TASK
// SetTimeOut();
// setTimeinterval()
// fetchApi()
// user interactions like click event

// - Micro task 
// promises/callback
// async/await

// so this microtask and macrotasks ultimately need to execute by javascript runtime 
// so microTask tack the precedence(or higher propriety)
// event loop first pick the microtask and place on the stack before macro task pickup 


// - Macro Task:
// Granularity: A macro task is a large, high-level task that involves significant operations, such as computations or time-consuming actions.
// Execution Order: Macro tasks are executed in the order they are scheduled, one after the other.
// Use Case: Used for operations like I/O tasks (file reading, network requests), rendering graphics, or handling user interactions.
// Event Loop: Macro tasks are processed in the main thread, helping maintain application responsiveness while performing substantial work.
// Examples: Loading large datasets, complex data processing, rendering a complex user interface.

// - Micro Task:-
// Granularity: A micro task is a smaller, quicker task that is typically executed in microseconds or less.
// Execution Order: Micro tasks are executed immediately after the current macro task finishes, but before the next macro task starts. Micro tasks have higher priority than macro tasks.
// Use Case: Used for lightweight tasks like handling promises, event listeners, or scheduling simple asynchronous operations.
// Event Loop: Micro tasks also belong to the event loop but are processed before the next macro task in the queue.
// Examples: Resolving a promise, executing a callback function, or updating the UI in response to user actions.

// - Macrotasks  represent larger and more time consuming task   
// Macro Tasks: Larger, time-consuming tasks (e.g., I/O operations, rendering) that run sequentially in the event loop.
// - Microtask represent small, and quick task that has higher priority 
// Micro Tasks: Smaller, lightweight tasks (e.g., promises, callbacks) that run immediately after the current macro task and before the next one

// - Macrotasks 
// are higher level task that are executed by the javascript runtime 
// Like setTimeout and setInterval ) and event from the dom 
// So Macro task added to the task queue when the Browser or javascript runtime encounter them 
// The event loop take  care of execution this task one at a time in first - in - first-out
// - In javascript divide the async task in macro task and micro task 
// Macro task are generally slower and have a lower priority as compared to microtask
Example

// example of macro task
console.log('start');
setTimeout(function(){
    console.log("inside the time out whatever task are present this task are macro task")
},0);
console.log('end of the script '); 

//output
// start
// end of the script 
// inside the time out whatever task are present this task are macro task
// message will be print logged after the end of script so macro task processed after the current script execution is finished 


// - MicroTask 
// Lower level task that also execute by javascript runtime
// They are used handling promise (.then() and async/await)
// Micro task are added to separate queue called the microtask queue and have higher priority then macro task
// The event loop process the micro task before moving to the next macro task 
// Micro task are used for more immediate and finger grained asynchronous operations 

// Example 
console.log('start');
Promise.resolve().then(function() {
    console.log('whatever is inside the promise is a micro task');
});
console.log('end');
// output
// start
// end
// whatever is inside the promise is a micro task


// - Microtasks are tasks that are executed in the microtask queue of the JavaScript event loop. They are typically used for asynchronous operations that need to be prioritized and executed before the next macro task.

// ! Note about micro task and macro task 
// So both macro and micro tasks have separate queues so the micro  task queue has higher priority and completes first. 
// So javascript executed the js program in event loop depending or programming design 
// Complete execution of program maintain several round of loop 
// So event loop state the execution for first synchronous task in the current scope and the end with clear the micro task in queue 
// Example 

// this is macro task added into the macro task queue 

let timer1 = setTimeout(() => {
    console.log('macro task');
}, 0);

Promise.resolve(3).then((v) => {  // →  this task are micro task added into the micro task queue
    console.log('timer id ' + timer);
});
// this is a synchronous code so in javascript synchronous code execute first  then state the next execution
console.log(2);
//output
// 2
// timer id 2
// macro task

// in this example event loop state execution setTimeout() and assign timer to id as variable timer
// then callback of setTimeout function add into a macro task queue the first element
// next resolved the promise and add then() method into micro task queue and evaluate the time id and print 2 
// so synchronous code done the execution complete then the js engine will go to the micro task queue and cleared 
// then() method will executed and offered success value  output will get 2  so the first round of the event loop is complete 
// Then javascript engine check the macro task queue if the macro task queue is empty the entire program will complete 
// But here the macro task queue is not empty; the callback of the setTimeout function is stored in the second round of the event loop.
// And executing the callback function will get the output  so the callback function will be used quite simply with only one console log statement so no more micro or macro tasks will be added in the queue until the second round of the event loop completes.
// Complex example : 

// Example 
let timer = setTimeout(()=>{ // add to the macro task
   Promise.resolve(3).then((v) => {
    console.log('timer id ' + timer);
});
})
setTimeout(()=>{
    console.log('settimeout in setTimeout')
},0)

setTimeout(()=>{ // added into macro queue as second element
    console.log('2nd timeout function')
},0)
console.log('2')
// output 
// 2
// timer id 2
// settimeout in setTimeout
// 2nd timeout function

// in this code javascript start the synchronous code execution first then state the micro tas which have highest priority the execute the macro task 




// ? differences between the micro tack and macro task .
// microTask :
// Tasks scheduled to run after the current script, before the next event loop iteration.
// Execution Order: Executed before macrotasks, after the synchronous code finishes.
// Queue Priority:Higher priority. Executed before macrotasks in the event loop.
// Examples - Promise.then/catch
// queueMicrotask()
// MutationObserver callbacks
// Handling promises and async tasks  Running code after the current task without delays
// Schedules after the current synchronous code, before macrotasks.
// Executed before macrotasks even if both are scheduled in the same cycle.
// Microtasks are executed as soon as possible, without delay after the current task.

// Macrotasks
// Tasks scheduled to run after the current script, usually for I/O operations or timers.
// Executed after microtasks and any rendering is done.
// Lower priority, executed after all microtasks are processed.
// ex : - setTimeout()
//  setInterval()
//  DOM events like click, keydown
//  I/O operations
//  Delayed execution (e.g., timers) Event handling (e.g., UI events, network requests)
// Schedules after microtasks, and typically after rendering.
// Executed in the next event loop iteration after microtasks.
// Macrotasks are queued for the next event loop cycle, possibly after UI rendering.