//CLOSURE IN JAVASCRIPT

// Closure is function that references  variable an function in the outer scope form its inner scope

// A closure in JavaScript is a function that retains access to variables and functions in the outer (enclosing) scope, even after the outer function has finished executing. Closures allow you to create private data and encapsulate functionality within a function, making it a powerful and essential concept in JavaScrip

// Closure is the combination of the function bundled together (enclosed) with references to its surrounding state (The lexical environment)

// Closure is nothing  but an ability of a function to access variables and functions that are lexically out of its scope; this is called closure

// So the inner function has the  references of its outer function.

// Closure created when ever new function created because this function have references to its outer function

// In other words a clouser gives you access to an outer function’s scope from an inner function

//  In javascript clouser are created every time a function is created at function creation time.

// Example 1
function makefun() {
  var name = "vishal";
  function display() {  // this are closre function
    console.log(name);
  }
  return display;
}
const fun = makefun();
fun();
fun();
// here it log the vishal so in javascript every time we create new function it bind itselt to its environment lexical scope
// In closure you have to access the parent functions argument as well as variables

// ------------------------------

// example 2
const outerFunction = (a)=>{
    let b =10;
    function innerFunction(){
        console.log(a+b)
    }
    innerFunction()
}
outerFunction(10)
// Closures help in maintaining the state between function calls without using a global variable
// Closure in JavaScript is a form of lexical scoping used to preserve variables from the outer scope of a function in the inner scope

// ------------------------------

// example 3
const outerFun = (a)=>{
    let b = 10;
    function innerFun(){
        let sum = a+b
        console.log("sub of the element", sum)
    }
    return innerFun
}
let checkCloser = outerFun(5);
// checkCloser()
console.log(checkCloser()) // return undefined
console.log(outerFun(10)); // it return the innerFun  [Function: innerFun]

// So if you return a function but it preserves the data of the parent function and when you execute it show.
// Each and every function has an execution context. When execution context is done the store the value of a and b in execution context and return function like innerFunction and exit execution context.
// The artery that you have to call inner Function the he get value from closure which is stored in the execution context.

// -----------------------------------------------

// example 4
function greeting(){
    let message = 'sayHi';
    function sayHi(){
        console.log(message)

    }
    sayHi()
}
greeting()
greeting()

//So sayHi() is inner function that is available only whitening the body of the greeting function
// sayHi() function can access the variable of the outer function such as the message variable of the greeting function.
// It possible in normal way but 

// ---------------------------------------------------

// in javascript closure function
function greeting(){
    let message = 'welcome'
    function sayHii(){
        console.log(message)
    }
    return sayHii
}
const data = greeting()
data()
data()
// Now instead of executing sayHi() function inside the greeting function the greeting function return sayhi() function object 
// So closure is function that preserve the outer scope  in its inner scope

// example 5
function message(message){
    return function(name){
        return message + "" + name
    }
}
let say = message('hi');
let sayHello =message('sayHi');
console.log(say('vishal'));
console.log(sayHello('shinde'))

// CLOSURE IN LOOP
// variable i is shared accross all iteration of the loop; by the time the setTimeout callback function execute after  1 sec the loop already finished and the value of i reached 5
for(var i=0;i<=4;i++){
    setTimeout(function(){
        console.log('after ' + i + 'second ' + i)
    }, 1000)
}
// output
// after 5second 5
// after 5second 5
// after 5second 5
// after 5second 5
// after 5second 5
//var and Function Scope:  variable i is declared using var, which has function scope (not block scope). This means that the variable i is shared across all iterations of the loop. By the time the setTimeout callback function executes (after 1 second), the loop has already finished running, and the value of i has reached 5.
//Asynchronous Behavior of :  setTimeout: The setTimeout function schedules the execution of the callback function after 1 second, but by the time the timer fires, the for loop has already finished and i is 5. As a result, when the callback is executed, it always prints the final value of i, which is 5.

// To fix this issue and capture the correct value of i at each iteration, you need to use a way to create a new scope for each iteration. There are two common solutions: 

// use let insted of var
// let having the block scope meaning a new i created for each iteration and each settimeout function will correctely capture the current value of i
// Which means each iteration of the loop has its own separate i variable and so  settimeout callback logs the value of i as it was during its respective iteration of the loop
// If you used let keyword in for-loop it will create new lexical scope in each iteration in other word you will have new index in each iteration

for(let i=0;i<=4;i++){
    // let having block scoep new i created for each iteration and settimeout function call correctely captuure the current value of i
    setTimeout(function(){
        console.log('after ' + i + 'second ' + i)
    }, 1000)
}


// 2nd approach  useing iife
// Using this solution you used an immediately invoked function expression because iife create new scope by declaring a function and immediately execute.
// ou can wrap the setTimeout in an immediately invoked function expression to create a new scope for each iteration.
for(var i=0;i<=4;i++){
    (function(i){
        //iife function expression because it create new scope by declaring a function and immeditely execute.c c   
        setTimeout(function(){
            console.log('after ' + i + 'second ' + i)
        },1000)
    })(i)
}
// When using var, the variable i is hoisted and shared across all iterations, so all callbacks access the final value of i.
//Using let creates a new i for each iteration (block scope), so each setTimeout captures the correct value of i.
// IIFE can be used to create a new scope for each iteration and pass the current value of i to the function.


// how to fined closure to optimized time of your application
function find(index){
    let a =[];
    for (let i=0;i<1000;i++){
        a[i] = i * i;
    }
    return function(index){ // This is closure function used for time optimization
        console.log(a[index]);
    }
}
console.time('6');
find(6)
console.timeEnd("6")
console.time("12")
find(50)
console.timeEnd("12")


// HOW WOULD YOU USED CLOSURE TO CREATE PRIVET COUNTER 

function counnter(){
    var _counter= 0 // underscore is conversion to create private variable
    // here we can access the var_counter because it haveing block scope
    // to access this counter we need to creaet another function
    function add(increment){
        // here we an not directely miniplate the counter 
        _counter += increment
        
    }
    function retrive(){
          return "_counter = " +  _counter  
    }
    return {
        add, retrive
    }

}
const c = counnter();
c.add(5);
// c.add(10);
console.log(c.retrive())



