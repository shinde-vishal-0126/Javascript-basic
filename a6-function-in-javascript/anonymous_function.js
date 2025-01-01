//! Anonymous function 

    //* An anonymous function in JavaScript is a function that does not have a name. 
    // Instead of being declared with a specific identifier, it is typically assigned to a variable,
    // passed as an argument to another function,
    // or used as an inline function expression.

// Characteristics of Anonymous Functions
    //1. No Name: 
        // As the name suggests, anonymous functions do not have a name.
    //2, Function Expression:
        //  Anonymous functions are often defined as function expressions rather than declarations.
    // Assigned or Used Inline: 
        // These functions are commonly assigned to variables or used directly in places where a function is expected.

    const myFunction = function() {
        console.log("This is an anonymous function.");
    };
    // Here, function() is an anonymous function that is assigned to the variable myFunction.


//? just for information:   
//  A function expression is similar to and has the same syntax as function declaration; 
// one can define name function expression.(where the name of the expression might be used in the call stack for )
// We have to write a function Expression in another way by using an anonymous function. Expression

// Anonymous function means unknown or without identification
// Anonymous function means function has no name
// Example 
const x = function(a,b){
    return a *b
}
const mul = x(10,20); // call the anonymous function simply call the variable passing the required arguments.
console.log(mul);
// Above is also called an anonymous component.

//  To call the  Anonymous function, we simply call the variable passing the required argument, followed by the 
// Anonymous function is a function that does not have name instead of being  declare with name like regular function it defined inline regular function
// Anonymous  function some time referred function literal
// 
//instead of defending the regular function we have to defined inline regular function
// const myFunction = function(parameter){
    //function body
    //this is single statement or block of code
// };
// Anonymous function also defined as arrow function
// Anonymous function having multiple arguments 
// Anonymous function does not have any name associate with it 
// Normally we have to used function keyword without the function name

//  Anonymous function it not accessible after the initial creation it can only access by variable it is stored in as a function value

//? Why did we use the anonymous function in javascript ?

//1. As Callback Functions: Anonymous functions are often used as callbacks, where a function is passed as an argument to another function.
    // setTimeout(function() {
        // console.log("This message is delayed by 2 seconds.");
    // }, 2000);

//2.In Event Listeners: Anonymous functions are commonly used in event handling.
    //document.getElementById("btn").addEventListener("click", function() {
    // console.log("Button was clicked!");
    // });

//3. IIFE (Immediately Invoked Function Expressions): Anonymous functions are used in IIFEs to execute code immediately.
    // (function() {
    //     console.log("This is an IIFE.");
    // })();

// 4.Inline Operations: Anonymous functions are used in array methods like map, filter, and reduce.
    // const numbers = [1, 2, 3, 4];
    // const squared = numbers.map(function(num) {
    //     return num * num;
    // });
    // console.log(squared); // [1, 4, 9, 16]


//? Difference between name and anonymous function
// Name:
    // has name
    // easy to debug
    // reusable and accessible by name
    // it can be standAlone

// anonymous:
    // does not have name
    // used as expression
    // must be part of an expression and pass as value
    // Harder to debug deu to lack of name
    // typically used for single use

