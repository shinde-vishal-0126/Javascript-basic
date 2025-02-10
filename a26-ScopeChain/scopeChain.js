// # scope chaining:
// ? What is a scope chain ?

// The scope chain is the hierarchy of variable scopes that JavaScript uses to resolve variable references. 
// Every time a function is invoked, a new scope is created.
//  When a function is executed, JavaScript first looks for the variable within the local scope. 
// If the variable is not found there, it looks in the outer scope, 
// and then continues looking in the next outer scopes until it reaches the global scope.


// - When trying to access a variable, JavaScript starts searching in the current scope.
//  If it doesn't find the variable there, it looks in the outer (parent) scope.
//  This process continues up through the chain of outer scopes until it reaches the global scope.
//  If the variable isn't found in the global scope, a ReferenceError is thrown.

// The chain starts from the current scope and moves outward until the global scope.
// - scope chain is hierarchical structure that determine how access it resolved within the program.
// scope chaining is the process by which javascript  when looking for the value of variable, check in the current scope if not found then it look in the outer scope(enclosing ) scopes until it find the variable or reaches to the global scope

// variable is inner scope have access to variable in their outer scope creating chain of accessible scope
// - So javascript engine use a scope to find out the exact location or accessibility of the variable and function and that particular process is know as scope chain
//  scope chain refers to the mechanism that determines how variables are resolved in nested functions
// Scop means where you can access variable and function  in our code
// (scope is nothing but visibility and accessibility of the variable and function in our code )
// scope detected dependent on lexical environment
// Scope chain help us to manage variable and function naming without causing conflict between the different part of the code

// ex
// Scope chain in closure so every closure has three scope
// Local scope
// Global function scope
// Outer function scope

// example 17S
var e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d + e;
      };
    };
  };
}
const add = sum(1)(2)(3)(4); // 20
console.log(add);
//(explanation 
//  above example contain the access of all its outer function so in above example there are series of nested function all which have access of its outer function scope so in this context so you can say that closure have access to all router function scope

 
// example 2
let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1; // here used concept of shadowing
    console.log(count); //1
  }
  console.log("count", count);//0
})();
// in scope chain When variable is referred javascript look it into a current scope if don't find the variable there it continue look into the outer scope in a chain until either it find variable there or reached the global scope if the variable not found in global scope the references error occurs
// The scope chain is used to resolve the value of the variable name in js.

//Scope chain in javascript is lexically defined which means that we can see what the scope chain will be looking at the code
// example 3
var message = "hi";
function say() {
  console.log(message);
}
say();
// So references the variable message inside the say function so behind the sense javascript perform
// Look up the variable message in current context (i.e function execution context ) of the say function so it can not find any
// So find the variable message in the outer execution context which is global execution context,
// So it find the variable message


//===========================================================================================================================================================================
// # Global variable leak:
//===========================================================================================================================================================================
// ? what is Global variable leak ?

// example
function getCounter() {
  // Here you have assigned 10 to the counter variable without the var, let, or const  keyword and return it
  counter = 10;
  return counter;
}
console.log(getCounter()); // 10 // called the function and it show the result
// - This issue is known as leak of the global variable.
// Under the hood the javascript engine first look up the counter variable in the local scope of the getCounter() function  because there is no var, let and const keyword  so counter variable not created in local scope so it has not been create,
// So javascript engine follow the scope chain and look up counter variable in the global scope also doesn't have the counter variable in global scope so javascript engine create counter variable in global scope.
// - So fix this weird behavior you used the use Strict top of the script

// ? Why does it happen?
// In non-strict mode (the default mode in JavaScript), 
// if you assign a value to a variable without declaring it (i.e., without var, let, or const), JavaScript will automatically create it in the global scope. 
// This behavior can lead to unintended bugs, especially in larger applications, where global variables are harder to track and can cause conflicts.