
//|WHAT IS SYNCHRONOUS AND ASYNCHRONOUS


// javascript execute synchronous code first and then execute asynchronous code


// ! synchronous code execute line by line, blocking further execution until each line is complected 
// while asynchronous code allow other code to continue executing while it wait for an asynchronous

//| synchronous :
//  code executed line by line
//! synchronous are Blocking architecture (Synchronous code blocks the execution of subsequent code until the current task is finished.)
//!  so the execution of each task is depends on the completion of the one before it
// 4 task can be run serial
// i.e each instruction wait for previous instruction to be complete its execution
// Due to nature of synchronous programming some time important instruction get blocked due to some pervious instruction which case delay the user interface.
//Tasks are executed one after another in a sequential manner. Each operation must complete before the next one begins.

//! Example 1
console.log('start');
console.log('subscribed to the coder')
console.log('end');

//! Example 2 
const fun2 = ()=>{
    console.log('function two is called')
}
const fun1 = () =>{
    console.log('function one is called...')
    fun2()
    console.log('function one is end....')
}
fun1()




//| Asynchronous 
// code executed parallel
//!Tasks can start but may not finish immediately, allowing other tasks to execute while waiting for slower tasks
//! asynchronous are non-blocking architecture ( Asynchronous code does not block the execution of subsequent code. Instead, it uses mechanisms like callbacks, promises, or async/await to handle completion.)
// execution of one task not dependent on another
// task can run simultaneously
// Javascript can start long-running tasks and continue running tasks in parallel.
// Asynchronous code execution allow to execution next instruction immediately and does not block the flow because of previous instruction
// Promises is asynchronous code 

// Example 2 
const fun3 = ()=>{
    setTimeout(()=>{
        console.log('function 3 is called')
    },2000)
    
}
const fun4 = () =>{
    console.log('function 3 is called...')
    fun3()
    console.log('function 4  is end....')
}
fun4()

// Javascript single threaded language and it can not execute this settimeout in parallel as our code being executed 
// So this go & execute all synchronous code then executed asynchronous code so setTimeout part of the weApis
// So we are using setTimeout to simulate an asynchronous process
// In javascript execute synchronous code first then asynchronous

// NOTE :
// Javascript is single threaded programming language
// This means that the javascript engine has only one call stack therefore it only can do one thing at time
// When execution a script the javascript engine execute code from top to bottom line by line in other word synchronous manner
// Asynchronous means javascript engine execute other task while waiting for another task to be completed (it can handle multiple operations concurrently, )
// Javascript engine can request for data from a remote server 
// Display spinner
// When the data is available , display it on the webpage
// So to do this above things javascript engine used an event loop.




// example :
console.log('start.....')
function importantAction(username){
    setTimeout(() => {
        return `subscribed to the ${username}`
    }, 1000);
}
const call = importantAction('vishal')
console.log(call) // it return undefined 
// also this is asynchronous function
console.log('stop')



// useful
// The method console. dir() displays an interactive list of the properties of the specified JavaScript object

const person = {
    name: "John",
    age: 30,
    greet() {
      console.log("Hello!");
    }
  };
  console.dir(person);
  console.log(person);