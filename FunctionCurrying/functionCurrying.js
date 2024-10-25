//What is function currying ?

// Def : function currying is a technique in javascript  for evaluating a function with multiple arguments transformed  into a sequence of functions with a single argument.

// In other word : 
// When function instead of taking all arguments at one time take the first one and return a new function that takes the 2nd one argument and return a new function which takes third and so forth until all arguments have been fulfilled.

// example:
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
// In function currying where a function with multiple arguments is transformed into a series of nested function , and each function tacking a single argument 
// This allow you to create new function by partially applying the original function with some of its arguments 
// Leaving the rest to be supplied later 

// -----------------------------------------------

// what is used of the function currying
// useing currying to make function more versatile and reusable

const sum1 = (num1)=> (num2) =>(num3)=> console.log(num1+num2+num3);
// sum1(1)(2)(3);
// also you have used currying function like this 
const add = sum1(2); // partially applied sum1 as 2
add(3)(4); // finish applying add2 with 3 and 4
// when the function currying is very useFul in senario where you want to reused the function with some fixed argument and the provied the remaining argument later
// also lead to more modulare and cleaner code in some senario

// ---------------------------------------------------------

// example 3
// now here we have to create curried version of the calculate rectangle area
function calculateRecangularArea(length){
    return function(hight){
        return length * hight
    }
}
const area = calculateRecangularArea(10);
const data = area(10);
console.log(data);
