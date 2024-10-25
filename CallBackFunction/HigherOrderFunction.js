// HIGHER ORDERED FUNCIOTN 
// Def:  function which takes another function as an argument is called as HOF (Higher order function )
// In javascript higher order function is super flexible function 
// It can do two special things 


// 1. Accept the another function as an argument 
// So just like regular function number or string take as input or as an parameter or argument so just like higher order function take another function as an argument  
// Think of it like a function that can invite another function to party.

// 2 .Return function 
// Higher order function also give you back new function 
// or higher order function it return result as new or antoher function


//So most real like example of the higher order function 
// map, filter, and reduce are higher-order functions that take callback functions to process arrays.

// ---------------------------------

//example in map higher order function
const number = [1,2,3,4,5]
function double(x){
    return x * 2
}
const doubleNumbers = number.map(double);
console.log(doubleNumbers);

// -----------------------------------------------

// exmpole with filter function
function isEven(x){
    return x %2 === 0
}
const evennum = number.filter(isEven);
console.log(evennum);

// So higher order function as function that can work with another function either by taking them as input or create the new function as output 
// They make your code more flexible and powerful by allowing you function to bundling a block to solved different kind of problem  
// Higher order function commonly used in javascript task such as array manipulation e.g map , filter, ) event Handling  , and asynchronous programing function  like setTimeout and  promise;
// Using higher order function you wire more maintainable and modular code  and prompt the separation of concern and reside te code block to perform specific task 

// ---------------------------------------------------


// What is the difference between Higher Order function and callback function ?
// 1.  callback function 
// Function which get pass as as an argument to another function is call as call back function
// 2 A callback function is a function that is passed as an argument to another function to be called back at a later time.
// Higher order function 
// Def:  function which takes another function as an argument is called as HOF or return function as result 

// example
function createAdder(x){

    // here creatAdder is higher order function it return function as result 
    return function(y){
        return x*y
    }
} 
const data = createAdder(5);
const result = data(5);
console.log('result', result)
