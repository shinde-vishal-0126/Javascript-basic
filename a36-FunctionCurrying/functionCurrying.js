//? 1. What is function currying ?
// Def:
//!  function currying is a technique in javascript for evaluating a function with multiple arguments transformed into a sequence of functions with a single argument.

// Currying creates a chain of functions, each handling a single argument.

//! currying is function that take one argument at time and return new function expecting the next argument 

//? how to constructed the currying ?
// also currying function are constructed by chaining closure by immediately returning there inner function symaltaniosuly

// In other word : 
// When function instead of taking all arguments at one time, take the first one and return a new function, that takes the 2nd one argument and return a new function, which takes third and so forth until all arguments have been fulfilled.

// function currying happen in 2 way : 
// 1. using bind() function
// 2. using the concept of closure


//! example: following example based on the concept of the closure
function sum(num1){
    return function(num2){
        return function(num3){
            console.log(num1 + num2 + num3)
        }
    }
}
sum(2)(3)(4)
// Here inner child or inner function access parent functions parameter or argument so we will see in closure.

// Another way..
//* In function currying where a function with multiple arguments is transformed into a series of nested function ,and each function tacking a single argument 

// This allow you to create new function by partially applying the original function with some of its arguments 
// Leaving the rest to be supplied later 
 
//? 2. what is used of the function currying // why should currying be used ?
// using currying to make function more versatile and reusable

//*when the function currying is very useFul in senario where you want to reused the function with some fixed argument and the provided the remaining argument later

// Reusability: It allows creating specialized functions by pre-filling some arguments.

// Readability: Helps in breaking down complex functions into simpler parts.

// currying used to avoid same variable again and again 

// to create higher order function 

//to maker your function pure and less pones to error 

// it divides one function into multiple function so that one handle one set of responsibility


//! function currying with arrow function
const sum1 = (num1)=> (num2) =>(num3)=> console.log(num1+num2+num3);
// sum1(1)(2)(3);
// also you have used currying function like this 
const add = sum1(2); // partially applied sum1 as 2
add(3)(4); // finish applying add2 with 3 and 4
// when the function currying is very useFul in senario where you want to reused the function with some fixed argument and the provided the remaining argument later
// also lead to more modular and cleaner code in some senario


//! example 3
// now here we have to create curried version of the calculate rectangle area
function calculateRectangularArea(length){
    return function(hight){
        return length * hight
    }
}
const area = calculateRectangularArea(10);
const data = area(10);
console.log(data);


//? 3. 2nd approach using the bind() method 
//! so bind() method return new function with specified this value and optionally pre-filled argument 
//!  but does not invoke immediately return new function are call in later

// by using bind() method achieved the function carrying
// this is function execute with multiple argument 
let multiply = (x,y,z)=>{
    console.log( x*y*z)
}
// console.log(multiply(3,4));

// here we have to create version of currying function using bind() method
// so bind() method essentially create copy of this multiply method and we pass some optionally pre-filled argument
const multiplyByTwo = multiply.bind(this,2)
//* behind the senses it work like following way set the x value as 2 and pass 2nd argument to the next function call
// let multiplyByTwo = (x,y)=>{
//     let x =2
//     console.log( x*y)
//* and here we  have to execute multiplyByTow method this method behave like multiply method and pass the argument 
// multiplyByTwo(3,4)
// when we call the bind method it return new function (i,e give copy of the multiply method) does not invoke directly it call later

// also you have do in following way    
const multiplyByThree = multiplyByTwo.bind(this,3)
multiplyByThree(4)


//! example
const addition = (a) =>{
    return (b) =>{
        return (c) =>{
            return a+b+c;
        }
    }
}
let res = addition(10);
console.log(res(3)) // here return function which expect next argument 

//! example
// evaluate("sum")(4)(2)
// evaluate("sub")(4)(2)
// evaluate("mul")(4)(2)
// evaluate("div")(4)(2)

function evaluate(operator){
    return function(a){
        return function(b){
            if(operator === "sum"){
                return a+b
            }else if(operator === "sub"){
                return a-b
            }else if(operator === "mul"){
                return a*b
            }else if(operator === "div"){
                return a/b
            }else{
                return 'invalid operator'
            }
        }
    }
}
console.log(evaluate("sum")(4)(2))
console.log(evaluate("sub")(4)(2))
console.log(evaluate("mul")(4)(2))
console.log(evaluate("div")(4)(2))


//? how to create infinite currying 

// i.e you have to pass n number of parameters (1)(2)........ 
// write a function which having n number of parameter
// The outer function takes one argument `a`
function addMore(a) {
    // Returns an inner function that takes another argument `b`
    return function (b) {
        // here check if the value of b is present then again call addMore() function 
        // If `b` is provided (truthy value), recursively call `addMore` 
        // with the sum of `a` and `b`
        if (b) return addMore(a + b);
        // if the value of b is not found or undefined it return the value of a
        // If `b` is not provided (falsy value), return the accumulated sum `a`
        return a;
    };
}
// Testing the function
console.log(addMore(5)(4)(4)()); // Output: 13



//? what is differences between the partial application and currying ?
//! 1. partial application :
//The Fixes a specific number of arguments and generates a new function. 
// The Returns a new function that expects remaining arguments to be passed later.
// may take multiple argument at once 

//! 2. currying :
// break a function into a chain of unary or nested function
// create series of nested function for each argument 
// always take one argument at a time 


// currying vs partial application


//? what is Partial application in javascript or currying concept 
//! partial application :

//* number of nested function are curried function has depends on number of arguments its received 

// Partial application transforms a function into a new function that takes fewer arguments by "pre-filling" some of the arguments.

//  This process creates a function with a smaller arity (the number of arguments the function takes).

//  Partial application refers to the process of fixing a few arguments of a function, creating a new function with fewer parameters.

//  This allows you to "pre-fill" certain arguments and reuse the partially applied function for specific tasks.

function sumAll(a){
    return function(b,c){ // Partial application refers to the process of fixing a few arguments of a function
        return a+b+c
    }
}
// here number of nested function are curried function has depends on number of arguments but in above example number of argument are 3 but returning nested function are 2 

// so above not currying function we did partial application for this samAll function 

//? what does the partial application 
// partial application transform a function with another function with small arity (arity meas number of arguments are function receive )

let r = sumAll(5);
console.log(r(5,5))
console.log(r(20,9))
// or
console.log(sumAll(20)(5,5))

// Partial application reduces the arity of the original function by fixing some of its arguments,returning it into a function with a smaller arity.

//! here example real time used  the partial application
function applyDiscount(discount) {
    return function(price) {
        return price - (price * (discount / 100));
    };
}
// Fix the discount to 10% for all products in a category
const apply10PercentDiscount = applyDiscount(10);
console.log(apply10PercentDiscount(100));  // Output: 90
console.log(apply10PercentDiscount(200));  // Output: 180
// suppose you want to fix the discount at 10% for all products in a certain category, but still pass the price dynamically.



//? write a curry function to convert the f(a,b,c) function into the f(a)(a)(c) currying function

// `curry` function takes a function `fun` as input and returns a curried version of it.
function curry(fun) {
    // `curriedFun` is the function that will handle the arguments in a curried manner.
    return function curriedFun(...args) {
        // Check if the number of arguments passed so far (`args.length`) 
        // is equal to or greater than the number of arguments the original function (`fun`) expects.
        if (args.length >= fun.length) {
            // If we have enough arguments, call the original function (`fun`) 
            // with the collected arguments and return the result.
            return fun(...args);
        } else {
            // If we do not have enough arguments, return a new function
            // that will collect more arguments.
            return function (...next) {
                // This new function will call `curriedFun` recursively,
                // combining the arguments already collected (`args`) with the new ones (`next`).
                return curriedFun(...args, ...next);
            }
        }
    }
}

// Example usage of the `curry` function with an `add` function that takes 3 arguments.
function add(a, b, c) {
    return a + b + c;
}

// now lets used curry function 
const curriedAdd = curry(add);
// Calling with all arguments at once:
curriedAdd(1, 2, 3); // Output: 6


// Partial application:
const add1 = curriedAdd(1);  // Returns a new function waiting for the next arguments
const add2 = add1(2);        // Again returns a new function waiting for one more argument
const result = add2(3);      // Now it has all three arguments, so it returns 6


// Understanding the curry function:
// Input function (fun): This is the original function that takes multiple arguments.

// Curried Function (curriedFun): This inner function collects the arguments provided.

// Checking Argument Length: If the number of arguments collected is greater than or equal to the number of parameters the original function expects (fun.length), it calls the original function with all collected arguments.

// Recursive Call: If the number of arguments is less, it returns another function that continues to collect more arguments. This allows partial application of arguments until all required arguments are collected.