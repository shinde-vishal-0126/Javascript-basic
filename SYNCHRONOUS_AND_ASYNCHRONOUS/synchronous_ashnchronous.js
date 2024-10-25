
//WHAT IS SYNCHRONOUS AND ASYNCHRONOUS

// synchrnous
// 1. code executed line by line
// 2. synchronous are Blocking architecutre
// 3. so the execution of each task is depends on the complemtion of the one before it
// 4 task can be run serial
// i.e each instruction wait for previous instruction to be compleate its execution
// Due to nature of synchronous programming some time important instruction get blocked due to some pervious instruction which case dealy the user interface.

// Example 1
console.log('start');
console.log('subcribed to the coder')
console.log('end');

// Example 2 
const fun2 = ()=>{
    console.log('function two is called')
}
const fun1 = () =>{
    console.log('function one is called...')
    fun2()
    console.log('function one is end....')
}
fun1()


// Asynchrous 
// code executed parallel
// asynchronous are non-blocking architecture
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
// Asynchronous means javascript engine execute other task while waiting for another task to be completed
// Javascript engine can request for data from a remote server 
// Display spinner
// When the data is available , display it on the webpage
// So to do this above things javascript engine used an event loop.


// usefull
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