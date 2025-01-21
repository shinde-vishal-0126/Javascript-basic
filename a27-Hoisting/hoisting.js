//? Hoisting
// When the JavaScript engine executes code, it does so in an execution context.
//  At the top level, this is called the Global Execution Context (GEC).
//  Every function call also creates its own Function Execution Context (FEC).

// Each execution context has two main phases:
// Creation Phase
// Execution Phase

//! Creation Phase
// During the creation phase, the JavaScript engine performs the following tasks:
//-Create the Global Object (window in browsers, global in Node.js):
// In the browser, this is the window object.
// In Node.js, it's the global object.
// - Set up the this binding:
// In the global execution context, this refers to the global object.
// Allocate memory for variables, functions, and objects in the Memory Heap:
// - Function Declarations: 
// These function are stored fully in memory, 
// meaning the entire function is available for use before the code executes.
// - Variables (var, let, const): These are declared in memory:
// - var variables are initialized with undefined.
// - let and const are declared but not initialized (remain in the temporal dead zone (TDZ) until the code assigning them a value is executed).

// 2. Execution Phase
// During the execution phase, the JavaScript engine:
// Runs the code line by line.
// Assigns values to variables, executes functions, and performs operations as instructed.

//! function Declarations:
// Entire function definitions are hoisted to the top of their scope.

//! variable declaration
// Variables:
// var: The declaration is hoisted and initialized as undefined.
// let and const: The declaration is hoisted, but they are not initialized. Accessing them before initialization throws a ReferenceError.

// Example :
var a =10;
function multiply(x){
    return x * 10
}
let b = multiply(3);
console.log(b);


// 1. in creation phase 
a = undefined
multiply()
b = undefined
//so function declaration take whole or compleat function between here and stored inside the window object
// 2. The next happen in execution phase
// During execution phase javascript execute the code line by line and assign value to variable and execute the function call
 a=10;
//  b(execute the function and return the result stored in b)
// then print the
console.log(b)
// also in every new function created in javascript engine created new execution context all together.

//? How does the function work with execution context ?
// in execution phase assigned value to the variable and execute code line by line and execute the Function and stored the value in variable and then print the output 
// also in javascript used call stack is mechanism to keep track of all the function call,


//? what is  HOISTING  
// Hoisting is default behavior in javascript 
// This is a process During the creation phase the javascript engine move the variable and function declaration to the top of the code before code execution this is known as hoisting in javascript 

// Another delineation:
// Hoisting in javascript is mechanism or default behavior where variable and function declaration are move to the top of their scope before the code execute.

// this means that no matter where function and variable are declared they are move to the top of their scope regardless of weather their scope it global or local


// Example
console.log('count',count);
var count;
// you think here give error like variable not declared yet but it show the undefined 
// it declared all of this variable and function at the top of the code during the creation phase and then in execution phase applied it value then execute
// it check if the variable already exist during creation phase or not so it exists so it is undefined
// so in this case variable are hoisted.

// javascript Hoisting allows you to use function and variable before they are declared.
console.log('my-Name',myName);
var myName; // declared variable
myName = 'vishal shinde' // initialize its value
// here References the myName variable before the declaration
// so first line of code does not case the error the reason the javascript engine moves the variable and declaration to the top of the script 
// So typically code look like in execution phase  but during the execution phase of the global execution context the javascript engine place the variable myName in the memory and initialize its value as undefined.


// ?  so in var cases variable are Hoisted but what is let and constant case
// let and const: Variables declared with let and const are also hoisted to the top of their scope, but they are not initialized.
//  They remain in a "temporal dead zone" (TDZ) from the start of the block until the declaration is encountered.
//  Accessing them before their declaration results in a ReferenceError.

// javascript hoisting does not deal with let and constant it show the references error
console.log('counter : ', counter) //ReferenceError: Cannot access 'counter' before initialization
let counter;

// It shows the reference error : can not access ‘counter ’, before initialization.
// It show counter variable already in memory, however it has not been initialized
// behind the sense javascript engine hoists the variable declaration that used the let keyword it does not initialize with let variable 
//  here we have to say let and const are not hoisted before it initialization.
//  but in let and const case let and const are hoisted in the ‘TEMPORAL DEAD ZONE’


//? what is temperal dead zone:
// - Temporal Dead Zone (TDZ) is a concept in JavaScript that refers to the time period between the start of a block and the point at which a declared variable is initialized.
// (the period between when a variable is declared and when it is initialized with a value)
// 1. So Temporal Dead Zone is nothing but is the time between the declaration and the initialized with value of let and const variable 
// 2 Temperal dead zone is specific region within scope were variable exit but can not access util the are assigned value 
// The Temporal Dead Zone refers to the period where a variable exists in a scope but cannot be accessed until it is initialized. The TDZ starts from the beginning of the block until the variable is declared and initialized
// Temporal Dead Zone (TDZ):
// The TDZ starts at the beginning of the block where the variable is declared and ends when the variable is initialized.
// Accessing the variable in the TDZ will result in a ReferenceError.


//? Use of the Hoisting 
// Hoisting is a concept that enables us to extract values of variables and functions even before initializing/assigning value
//without getting errors and this is happening due to the 1st phase (memory creation phase) of the Execution Context.

//? when occurred the hoisting 
// Hoisting occurs during the creation phase of the JavaScript execution context, before the code is executed.

//! Conclusion 
// Javascript hoisting occurs during the creation phase of the execution context that moves the variable and function declaration to the top of the script.
// Javascript hoisted the variable declared using the let keyword but does not initialize them at the variable declared  with var keyword 
// Javascript engine does not hoist the function expression and arrow function.



