//| call(), apply() and bind() method in javascript

//  In JavaScript, the call(), apply(), and bind() methods are used for explicit binding of the this keyword. 
// These methods allow you to explicitly set the value of this when invoking or defining a function
// In JavaScript, call(), apply(), and bind() are methods used to control the value of this when invoking a function. 
// These methods are particularly useful for borrowing methods from one object and using them with another object.
// call(), apply(), and bind() methods are used to control the value of this within a function, or the execution context of the function: 
// call(), apply() and bind() method are available for all javascript function 
// used to set this keyword independent how the function called 
// also used to tie a function to an object and call function as if it belongs to that object 

//? How to done explicit binding in javascript ?
// To done the explicit binding in javascript by using call() apply() and bind() method in javascript

// JavaScript provides the call(), apply(), and bind() methods for setting the this context within a function.
// These methods are especially useful when working with object-oriented code or handling different function contexts.
// The bind(), call(), and apply() methods are fundamental concept in JavaScript for controlling function execution contexts.

//! call(), apply(), and bind() methods allow you to manipulate the this keyword in JavaScript functions. 
//! The call() and apply() methods are used to immediately invoke a function with a specified this value and arguments,
//!  while the bind() method returns a new function with a specified this value that can be called later. 
// These methods are powerful tools for controlling the behavior of functions in JavaScript and offer flexibility, code reusability, and can make your code easier to read and maintain.
// These methods are essential for function borrowing, setting this context, and partially applying functions.

//! call(thisArg, arg1, arg2.....) method:

//* The call() method invokes a function with a specified this value and arguments provided individually.
// function.call(thisArg, argument1, argument2,...)
// so we can do function borrowing form other object and used it with data of some other object
// in javascript each and every method has access to this special function which is call with 2 arguments first one is references this object and second one is arguments
const person = {
    firstName:'vishal', 
    lastName:'shinde',
}
// also if you have parameter then you have pass 2nd argument in call() method like message
function fullName(message){
    console.log(`fullName is ${this.firstName} ${this.lastName} ${message}`)
}
console.log(fullName()) // it return fullName is undefined undefined 
// How to call this function are pointing to person object (How to call this fullName function inside the fullName object)
// call method come into picture
fullName.call(person, 'hello ') // here we have to pass the list of argument individually