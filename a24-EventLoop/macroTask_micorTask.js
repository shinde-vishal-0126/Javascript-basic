// what is difference between the macro task and micro task 

// In JavaScript, microtasks and macrotasks are two types of tasks used in the event loop 
//to manage asynchronous operations and ensure efficient execution of the program. 


// Macro Task (Task Queue)
// A macro task (also called a task or macrotasks) is any task that is scheduled to run in the task queue. Examples of macro tasks include:

// setTimeout
// setInterval
// I/O tasks (like file reading, network requests via fetch)
// UI rendering events
// DOM events (clicks, scrolls, etc.)

// Characteristics of Macro Tasks:
// The macro task queue holds tasks that need to be executed after the currently executing code has completed.
// The JavaScript engine processes one macro task from the task queue at a time after the current stack of synchronous code has finished.
// After a macro task is processed, the JavaScript engine will process all pending microtasks before picking the next macro task.



// Micro Task (Microtask Queue)
// A microtask is a smaller, more immediate task that is placed into the microtask queue. Microtasks are usually triggered by:

// Promises (Promise.then, Promise.catch, Promise.finally)
// MutationObserver (a DOM change observation mechanism)
// queueMicrotask (explicitly queues a microtask)

// Characteristics of Microtasks:
// Microtasks are executed immediately after the current task (whether it's synchronous code or a macro task) finishes, but before any new macro tasks.
// The microtask queue has higher priority than the macro task queue.
// The JavaScript engine processes all microtasks in the queue before moving to the next macro task.

// Event Loop and Task Prioritization
// The event loop in JavaScript manages the execution of tasks. Here's how it works:

// Execution of Synchronous Code:
// JavaScript starts by running all the synchronous code on the call stack.
// Macro Tasks: When a macro task (like setTimeout) is scheduled, it is added to the task queue.

// Micro Tasks: When a microtask (like a Promise) is scheduled, it is added to the microtask queue.

// Microtask Queue Processing: After synchronous code finishes executing (the call stack is empty), the event loop first checks the microtask queue and processes all the microtasks before moving on to the task queue.

// Macro Task Queue Processing: Once all microtasks have been processed, the event loop picks the next macro task from the task queue and executes it.

// whatEver  callback function are present in web api or host
// so this callback function task may be 
// 1. Macro Task 
// 2. Micro Task

// 1 MACRO TASK
// SetTimeOut();
// setTimeinterval()
// fetchApi()
// user interactions like click event

// 2 Micro task 
// promises/callback
// async/await

// so this microtask and macrotasks ultimately need to execute by javascript runtime 
// so microTask tack the precedence(or higher propriety)
// event loop first pick the microtask and place on the stack before macro task pickup 



// What is the difference between the macro task and micro task in the event loop context ?
// What are macro tasks and micro tasks ?

// microTask and macroTask are concept used in the context of task scheduling and execution in programming 
// Both refer to different level of Granularity when it come to managing prioritizing tasks

// Macro Task 
// Task Granularity

// A macro task is a higher-level task or job that represent a substantial unit of work
// Typically it involved a significant amount of computation or an operation that takes a noticeable amount of time to complete
// Execution order 
// Macro task are typically executed in first come first served order 
// They are after scheduled and executed sequentially one after the other 

// useCase 
// Macro task are used for operation that are relatively time consuming such as i/o operation (reading a file or making network request , rendering Graphics or handling the user interaction)

// Event loop 
// Macrotasks are part of the event loop are processed in main thread 
// They are responsible for keeping the application responsive and performing significant work 

// Example 
// Macro task loading a large dataset from a database , performing the complex data , rendering a complex user interface are example of macrotasks 



// MicroTask 
// Task Granularity 
// A microTask on the other hand is a small, fine grained task that can be executed very quickly.
// After in a matter of microsecond or less 
// Micro task are basically used for  lightweight operation or callback
// Execution order 
// Microtask are typically executed immediately after the current macrotasks has finished executing but before the next macro task start
// I.e that micro task have higher priority and are executed before macro task in event loop

// useCase 
// Microtask are commonly used for task that need to performed as soon as possible and do not involved heavily computation
// Such as handling promise, event listener or scheduling asynchronous operation
// Event loop 

// Micro task also part of event loop but have higher priority 
// They are processed before the next macrotasks in the queue 
// Example 

// Resolving the promise executing a callback function or updating the ui in responsive to user action can be considered microtask 

// Example of macro task and micro task 
// Macrotasks and micro task having the different type of Granularity su 
// Macrotasks  represent larger and more time consuming task 
// Microtask represent small, and quick task that has higher priority 


// Macrotasks 
// are higher level task that are executed by the javascript runtime 
// Like setTimeout and setInterval ) and event from the dom 
// So Macro task added to the task queue when the Browser or javascript runtime encounter them 
// The event loop take  care of execution this task one at a time in first - in - first-out
// In javascript divide the async task in macro task and micro task 
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

// MicroTask 
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

// Microtasks are tasks that are executed in the microtask queue of the JavaScript event loop. They are typically used for asynchronous operations that need to be prioritized and executed before the next macro task.
// Note about micro task and macro task 
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
//  then callback of setTimeout function add into a macro task queue the first element
//  next resolved the promise and add then() method into micro task queue and evaluate the time id and print 2 
//  so synchronous code done the execution complete then the js engine will go to the micro task queue and cleared 
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


