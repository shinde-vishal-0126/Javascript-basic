//? Closure in javascript :
//# def:
// A closure is a function that "remembers" the variables from its outer lexical scope even when the function is executed outside that scope. 
//  This allows the inner function to access variables defined in its outer function after the outer function has finished executing.
// - Closure is the combination of the function bundled together (enclosed) with references to its surrounding state (The lexical environment).so in other word a closure give you access to an outer function scope form an inner scope
// Closure is nothing  but an ability of a function to access variables and functions that are lexically out of its scope; this is called closure (So the inner function has the  references of its outer function.)

//? when closure is created ?
//  closure is created when an inner function has access to the variable of its outer function even after the outer function has finished execution
// When a function is defined inside another function, it gets access to the outer function's variables. 
// Even when the outer function has finished executing, the inner function retains access to those variables, creating a closure.
//  A closure in JavaScript is a function that retains access to variables and functions in the outer (enclosing) scope, even after the outer function has finished executing.
// Closures allow you to create private data and encapsulate functionality within a function, making it a powerful and essential concept in JavaScrip
// In javascript closure are created every time a function is created at function creation time. ( Closure created when ever new function created because this function have references to its outer function)
// Closures are a key feature in JavaScript, enabling powerful patterns like data encapsulation, currying, and function factories.

//? what is differences between closure and scope
// closure:
// whenever you have to create function within another function so inner function is closure function which can access all the variable and function inside the outer function when the outer function are lexically out of scope
// Definition: A closure is a function that remembers and can access variables from its lexical scope (the scope in which it was created) even after that outer scope is no longer active.
// Key Feature: Closures "close over" their environment, meaning they capture the variables and functions of their enclosing scope.

// Scope in Closure:
// Local Scope: Variables declared inside the closure.
// Outer Function Scope: Variables from the function where the closure is defined.
// Global Scope: Variables accessible globally.

// scope:
// scope defined what variable you have to access 
// Definition: Scope refers to the accessibility and visibility of variables and functions in a specific part of the program.
// Key Feature: Scope determines where you can access a variable or function.

// Types of Scope:
// Local Scope: Variables defined within a specific function or block.
// Global Scope: Variables accessible throughout the program.
// Block Scope (introduced with let and const): Variables confined to a block (e.g., inside an if or for block).

//! ex.
// example of lexical scope
function subscribed() {
  // this variable are outside the this scope
  var name = "vishal shinde";

  //inner scope
  function displayName() {
    // display Name in closure function because it access the outer function variable after the function has finished execution
    // inner function
    console.log(name);
    //   alert(name)   // the inner function access s the 'Name' variable from its outer function
  }
  displayName(); // calling the inner function
}
subscribed(); // calling the outer function

// ex.2
function makeFun() {
  // variable outside the function
  var name = "vishal";
  function display(num) {
    // This is closure function that retains the access of its variable after the outer function are already out of lexically
    console.log(name, num);
  }
  return display;
}
// const fun = makeFun();
// fun();
// fun();

// also you have to defined the function in following way
makeFun()(26);
// here it log the vishal so in javascript every time we create new function it bind itself to its environment or its  lexical scope
// In closure you have to access the parent functions argument as well as variables

// example 2
const outerFunction = (a) => {
  let b = 10;
  function innerFunction() {
    console.log(a + b);
  }
  innerFunction();
};
outerFunction(10); // 20
// Closures help in maintaining the state between function calls without using a global variable
//! Closure in JavaScript is a form of lexical scoping used to preserve variables from the outer scope of a function in the inner scope (retain the access of variable and function of its outer function)

// in closer function we have to access variable and function which we have to defined in the outer function ex.
function outerFunction1() {
    const outerVariable = 'i am from the pune'; 
    function outerFunction2() {
        return 'vishal shinde';  // Return 'name' from outerFunction2
    }
    function innerFunction() {
        const name = outerFunction2();  // Call outerFunction2 to get 'name'
        console.log(`${name} and ${outerVariable}`);
    }
    return innerFunction;
}

const closureFunction = outerFunction1();
closureFunction();  // Logs "vishal shinde and i am from the pune"


// example 3
const outerFun = (a) => {
  let b = 10;
  function innerFun() {
    let sum = a + b;
    console.log("sub of the element", sum);
  }
  return innerFun;
};
let checkCloser = outerFun(5);
checkCloser()
// Since innerFun doesn't have a return statement, it implicitly returns undefined
// Then, console.log attempts to print the return value of checkCloser(), which is undefined.
console.log(checkCloser()); // return undefined
outerFun(10)(); // it return the innerFun  [Function: innerFun]
// So if you return a function but it preserves the data of the parent function and when you execute it show.
// Each and every function has an execution context. 
// When execution context is done the store the value of a and b in execution context and return function like innerFunction and exit execution context.
// The artery that you have to call inner Function the he get value from closure which is stored in the execution context.

// Closure in javascript 
// write a function that would allow you to do this
function createBase(a){
    console.log(a)
return function addBase(b){
       console.log( a+b)
    }
}
var addSix = createBase(6)
addSix(10);
addSix(21)


// example 4
function greeting() {
  let message = "sayHi";
  function sayHi() {
    console.log(message);
  }
  sayHi();
}
greeting();
greeting();

//So sayHi() is inner function that is available only whitening the body of the greeting function
// sayHi() function can access the variable of the outer function such as the message variable of the greeting function.
// It possible in normal way but

// in javascript closure function
function greeting() {
  let message = "welcome";
  function sayHii() {
    console.log(message);
  }
  return sayHii;
}
const data = greeting();
data();
data();
// Now instead of executing sayHi() function inside the greeting function the greeting function return sayhi() function object
// So closure is function that preserve the outer scope  in its inner scope

// example 5
function message(message) {
  return function (name) {
    return message + "" + name;
  };
}
let say = message("hi");
let sayHello = message("sayHi");
console.log(say("vishal"));
console.log(sayHello("shinde"));


//! CLOSURE IN LOOP
// variable i is shared across all iteration of the loop; 
// by the time the setTimeout callback function execute after  1 sec the loop already finished and the value of i reached 5
for (var i = 0; i <= 4; i++) {
  setTimeout(function () {
    console.log("after " + i + "second " + i);
  }, 1000);
}
// output
// after 5second 5
// after 5second 5
// after 5second 5
// after 5second 5
// after 5second 5
//var and Function Scope: 
//  variable i is declared using var, which has function scope (not block scope).
//  This means that the variable i is shared across all iterations of the loop. 
// By the time the setTimeout callback function executes (after 1 second), the loop has already finished running, and the value of i has reached 5.
//Asynchronous Behavior of :  
// setTimeout: The setTimeout function schedules the execution of the callback function after 1 second, but by the time the timer fires, the for loop has already finished and i is 5.
//  As a result, when the callback is executed, it always prints the final value of i, which is 5.

//! also i want to solve this issue type of i is always var
// to solved this issue used the closure():
for(var i=0;i<=4;i++){
     function inner (i){
        setTimeout(() => {
            console.log(i)
        }, i * 1000);
    }
   inner(i);
}
// To fix this issue and capture the correct value of i at each iteration, you need to use a way to create a new scope for each iteration. There are two common solutions:

// use let instead of var
// let having the block scope meaning a new i created for each iteration and each settimeout function will correctly capture the current value of i
// Which means each iteration of the loop has its own separate i variable and so settimeout callback logs the value of i as it was during its respective iteration of the loop
// If you used let keyword in for-loop it will create new lexical scope in each iteration in other word you will have new index in each iteration

for (let i = 0; i <= 4; i++) {
  // let having block scope new i created for each iteration and settimeout function call correctly capture the current value of i
  setTimeout(function () {
    console.log("after " + i + "second " + i);
  }, 1000);
}

//! 2nd approach  using iife
// Using this solution you used an immediately invoked function expression because iife create new scope by declaring a function and immediately execute.
// ou can wrap the setTimeout in an immediately invoked function expression to create a new scope for each iteration.
for (var i = 0; i <= 4; i++) {
  (function (i) {
    //iife function expression because it create new scope by declaring a function and immediately execute.c c
    setTimeout(function () {
      console.log("after " + i + "second " + i);
    }, 1000);
  })(i);
}
// When using var, the variable i is hoisted and shared across all iterations, so all callbacks access the final value of i.
//Using let creates a new i for each iteration (block scope), so each setTimeout captures the correct value of i.
// IIFE can be used to create a new scope for each iteration and pass the current value of i to the function.

//? how to fined closure to optimized time of your application
function find() {
  let a = [];
  for (let i = 0; i < 1000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    // This is closure function used for time optimization
    console.log(a[index]);
  };
}

console.time("50")
const closure = find();
closure(50)
console.timeEnd("50")

// console.time("6");
// find(10);
// console.timeEnd("6");

// console.time("12");
// find(50);
// console.timeEnd("12");

//? HOW WOULD YOU USED CLOSURE TO CREATE PRIVET COUNTER
function counter() {
  var _counter = 0; 
  // underscore is conversion to create private variable
  // here we can access the var_counter because it having block scope
  // to access this counter we need to create another function
  function add(increment) {
    // here we an not directly manipulate the counter
    _counter += increment;
  }
  function retrieve() {
    return "_counter = " + _counter;
  }
  return {
    add,
    retrieve,
  };
}
const c = counter();
c.add(5);
// c.add(10);
console.log(c.retrieve());

//? what is module pattern 
var module  = (function(){
    function privateMethod(){
        
    }
    return {
        publicMethod: function() {

        }
    }
})()



//! make this run only once
// let view
// function likeTheVideo(){
//     view="Roadside Coder"
//     console.log( "Subscribe to", view)
// }

// likeTheVideo(); // Subscribe to Roadside Coder
// likeTheVideo(); // Subscribe to Roadside Coder
// likeTheVideo(); // Subscribe to Roadside Coder
// likeTheVideo(); // Subscribe to Roadside Coder

// solution
let view;
function likeTheVideo(){
    //here defined the flag to track is function is called or not
    let isCalled = 0
 function count(){
        if(isCalled > 0){
            console.log('already subscribed')
        }else{
            view = 'RoadSide Coder';
            console.log('subscribe to ', view )
            isCalled ++
        }

    }
return count;     
}

const cont = likeTheVideo()
cont()
cont()
// likeTheVideo()
// likeTheVideo()


//? create the polyfill of the once function
// (the function which run only once);

function once(fun, context){
    let run;
    return function(...args){
        if(fun){
            run = fun.apply(context || this, args);
            fun = null
        }
    }
}
const hello = once((a,b)=>{
    console.log("hello", a, b)
})
hello(1,2);
hello(2,4)