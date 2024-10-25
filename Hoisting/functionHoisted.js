// FUNCTIOH HOISTING

// function hoisting is a behaviour in javascript where function declaration are move to the top of thering containing scope during the compilation phase before the code is executed this means you can all a function before it is defined in the code 

sayHello() // Even though the sayHello function is defined after the call, it works because of function hoisting.
function sayHello(){
    console.log('sayHello')
}

// KEY POINT :
// Entire function declaration are hoisted (not just name) so you call call the function anywhere within the scope 
// The entire function is available before where it is defined
//But in function case the complete function copied into the scope

// Like variable javascript engine also hoisting the function declaration  that means javascript engine also move the function declaration to the top of the script 
// So during the creation phase of the execution context javascript engine places the  function declaration to the heap memory
//  to be precise the javascript engine creates an object of the function type and function references call add that refers to the function object.

// ------------------------------------------------------

// FUNCTION EXPRESSION
// Function expression are not hoisted tha same way
// function assigned to the variable are not hoisted  only the variable hoisted but not it value
// if you try to call a function expression before its defined you will get an error. TypeError

console.log(sayHi) // sayHello is hoisted but hoisted as undefined becasue it varaible declaration
// so actual valur assign later so calling it before assignment resutl is an error
// sayHi()
var sayHi = function(){
    console.log('sayHi')
}

// So execute the above code uncaught references Error occur: sayHi is not defined 
// So if you define any function as a function expression, during the creation phase of the global execution context javascript engine creates the add variable in the memory and initializes its value to undefined.
// When execution code like let var sayHi = function(){efined hence is not a function.
//  So the sayHi variable is assigned to an anonymous function only during the execution phase of the global execution context.

// ---------------------------------------------------------------

// ARROW FUNCTION
//Arrow function are not hoisted 
// arrow function like function expression are treated as variable 
// this means they follow the same hoisting rule as variable declared with let and cosnt, the variable it slef hoisted but the assignment is not

// if you try to use arrow function before it is assigned you will get an Refrencess error or typeError depending upon how the variable are declared

// example using const
console.log(add);// it return undefined  is hoisted but hoisted as undefined becasue it varaible declaration
// console.log(add(2,3));Cannot access 'add' before initialization
const add = (a, b)=> a+b;

// In this case, the add function is not hoisted like regular function declarations. The declaration is hoisted but remains in the Temporal Dead Zone until the code reaches the assignment.

// example using var 
console.log(add1(2, 3)); // TypeError: add is not a function
var add1 = (a, b) => a + b;
// Here, add is hoisted and initialized as undefined, but since the arrow function is assigned to it later, calling it before assignment results in a TypeError.
// they behave like variables, so the declaration is hoisted, but the actual function definition is not available until the code reaches the assignment.

// Why function expression and arrow function are not hoisted 
// When you defined the arrow function or function expression you have to store in variable when the 
// In creation phase javascript engine create the variable and add into memory so it is undefined so at the time 
// Execution it shows add not defined (uncaught Reference error .)

