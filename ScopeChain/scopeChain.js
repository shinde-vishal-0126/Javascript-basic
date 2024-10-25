//Scope means where you can access variable and function  in our code 
// (scope is nothing but visibility and accessibility of the variable and function in our code )

// scope ditectely dependent on lexical environment

// What is a scope chain ?
// So javascript engine use a scope to find out the exact location or accessibility of the variable and function and that particular process is know as scope chain
//  scope chain refers to the mechanism that determines how variables are resolved in nested functions

// Scope chain help us to manage variable and function naming without causing conflict between the different part of the code 

// Scope chain in closure  so every closure has three scope
// Local scope
// Global function scope
// Outer function scope

// example 1
var e = 10;
function sum(a){
    return function(b){
        return function(c){
            return function(d){
                return a+b+c+d
            }
        }
    }
}
const add = sum(1)(2)(3)(4);
console.log(add);
//(explanation  above example contain the access of all its outer function so in above example there are series of nested function all which have access of its outer function scope so in this context so you can say that closure have access to all router function scope

// --------------------------------------------

// example 2
let count = 0;
(function printCount(){
    if(count === 0){
        let count =1
        console.log(count)
    }
    console.log("count",count);
})()

// scope chain is hieraschical structure that determine how access it resolved within the program.
// in scope chain When variable is referred javascript look it into a current scope if don't find the variable there it continue look into the outer scope in a chain until either it find variable there or reached the global scope if the variable not found in global scope the references error occurs 

// The scope chain is used to resolve the value of the variable name in js.
//Scope chain in javascript is lexically defined which means that we can see what the scope chain will be looking at the code 


// example 3
var message = 'hi';
function say(){
    console.log(message);
}
say();
// So references the variable message inside the say function so behind the sense javascript perform 
// Look up the variable message in current context (i.e function execution context ) of the say function so it can not find any
// So find the variable message in the outer execution context which is global execution context,
// So it find the variable message


// Defination of the scope chain
// scope chain is way that javascript resolve is by done looking as an it current scope if it can not fined the variable it goes to its outer scope which is called scop chain

// ------------------------------------ 

//WHAT IS GLOBLA VARIABLE LEADK 
// example
function getCounter(){
    // Here you have assigned 10 to the counter variable without the var, let, or const  keyword and return it 
    counter = 10
    return counter
}
console.log(getCounter()); // 10 // called the function and it show the result 
// This issue is known as leak of the global variable.
// Under the hood the javascript engine first look up the counter variable in the local scope of the getCounter() function  because there is no var, let and const keyword  so couter variable not created in local scope so it has not been create, 
// So javascript engine follow the scope chain and look up counter variable in 	 the global scope also doesn't have the counter variable in global scope so javascript engine create counter variable in global scope. 
// So fix this weird behavior  you used the use Strict top of the script 



