//! Function

// ?What is a function in java ?

// Def : function in javascript  block of reusable that to perform a particular or specific task or set of task
// Function are used to organize code into modular and manageable pieces and promote code reuse and make program more readable
// Before we used function we need to defined it
// Using function you have to organized your code  (or separation of login)
// Avoid the separation of task

//? Function java script  we have to learn

// Function definition
// Calling a function
// Function parameter
// Function Argument
// Function expression
// Return keyword
// Anonymous function

//?  Function definition/declaration

// Declare a function using the function keyword followed by the function name, parameter(if any ) and the function body.
// A list of  parameter to the function enclosed in parentheses
// The javascript defined the function enclosed in curly brackets {   }
// Example :
// function definition called as function declaration
//function keyword and sum as function name() inside parenthesis you have to pass list of parameter
// following steps defined the function and specifiers what code should be executed when the function is called

// function declaration
function sum() {
  var a = 10;
  var b = 20;
  const total = a + b;
  console.log(total);
}
// this is call as function calling or function invocation

sum();
// Function calling with function name ad parenthesis
// Defining a function does execute it
// A  javascript function is executed when something invoked it (call it);

//! What is function parameter and function argument ?
//? Function Parameter :
// Function parameter are the name listed in the function definition or declaration
// So whatever value pass as an as an function call so receive this value inside our function this called as parameter

// ?Function argument
// Function arguments are the real value passed to the function  at  the time of calling a function .
// Where we call the function and pass the value inside that this is called as argument

// Example : 
//function keyword and sum as function name() inside parenthesis you have to pass list of parameter

function sum(a, b) {
  // what ever list of of name we have to pass into the function declaration that is call as function parameter
  const total = a + b;
  console.log(total);
}
// this is call as function calling
sum(20, 30); // function argument are real value passed to the function(or received by the function)

//?  What is the Default argument ?
// Default function parameters allow name parameters to be initialized with default value.
//(i.e at the time fo function declaration you have to initialize the parameter with default value this called as default value)
// If no value or undefined passed.
// : A default argument is a parameter that has been assigned a default value in the function definition.
// ES6 default parameter were introduced providing a more concise way to handle function parameter default.
// default parameter allow you to specify the default value for function parameter in the function declaration it-self
// if a parameter in not provided then function is called the default value.
// default function parameter allow named parameter to be initialized with default value if no value or undefined is passed 
// Example
//here we have to passed the two parameter so we need to pass default argument like
//so here we have to add default argument
function sum(a, b = 30) {
  const total = a + b;
  console.log(total);
}
sum(20);

//? Why do we use functions ?
// By using function you can reused code, i.e defined code once and used it many time
// You can used the same code many time with different argument to produce different result
// A function is Group of reusable code which can be call anywhere in you program
// This eliminates the need of writing the same code again and again.
// (Dry : do not repeat yourself)

//? What is function declaration ?
// I.e how to define a function is called function definition declaration. It's called a function expression or function statement .



//?  What is called function expression ?
// a function expression is a way to defined a function as part of an expression it can be either named or anonymous it is;s name it become named function expression

// Function Expression  (when you stored a function inside a variable its called as a function expression)
//*  Function expression simply means create function and put it into the variable .called as function expression
// * In function expression we need to return keyword
// Example
//function expression is know as you have to create function and put it into variable

function sum(a, b = 20) {
  // this is called as anonymous function because this function does not have any name
  //if you defined the function expression so you need to return keyword
  return a + b;
}
const Total = sum(20);
//this is function expression called just normal function like
// This anonymous function is assigned to the variable or pass as a callback function.
console.log(Total);



//? Return keyword
// When javascript reaches a return statement , the function will stop executing
// once reach return keyword after that does not execute anything
// Function often compute a return value
// The return value is returned back to the callers
// In function you have to used the return keyword
// It stop  the execution of function and return value and that return value pass to the callers
Example;
function mul(a, b) {
  return a * b;
  //when javascript reach the return statement it stop the execution and return value and this return value pass to the caller
}
const result = mul(20, 30);
console.log("result");

//! JavaScript Functions as Objects

//* 1. Functions are Objects:
// Functions in JavaScript are first-class objects.
//  They have properties and methods like other objects. These properties include length and prototype.

// ! length Property:
// The length property of a function indicates the number of named parameters in the function declaration.
// It does not count rest parameters or parameters with default values
// The number of excludes the rest parameter and only include  parameter before the first one with a default value
// function add(x, y) {
//     return x * y;
// }
// console.log(add.length); // Output: 2

// ! prototype Property:
// The prototype property is an object that is used when the function is used as a constructor.
//  It references the function itself when used with new.
// property references the actual function objects

// function add(x, y) {
//     return x * y;
// }
// console.log(add.prototype); // Output: {}

//!Calling Functions:
//Functions can be called normally or using the new keyword to invoke them as constructors:
// const total = add(10, 20);  // Normal call
// console.log(total);  // undefined because no return value

// obj = new add(10, 20);  // Called using the `new` keyword
// console.log(obj);  // Output: an instance created by the function

// ! new.target Property
// The new.target property allows you to detect whether a function was called with new.
// If new is not used, new.target is undefined. If new is used, it returns the constructor function itself.

// function add(x, y) {
//     console.log('hi', new.target);
//     return x + y;
//  }

//  const result = add(20, 30); // Output: hi undefined
//  console.log(result); // 50

//  const obj = new add(10, 20); // Output: hi [Function: add]

// ! Function name Property:
// The name property of a function holds the name of the function as it was declared. It is read-only.
const func1 = function () {};
const object = {
  fun2: function () {},
};

console.log(func1.name); // Output: func1
console.log(object.fun2.name); // Output: fun2
