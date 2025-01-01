
//| Closure Scope chain

// ? what is scope chain ?
//! The scope chain is the hierarchy of variable scopes that JavaScript uses to resolve variable references. 
//! Every time a function is invoked, a new scope is created. When a function is executed, JavaScript first looks for the variable within the local scope. If the variable is not found there, it looks in the outer scope, and then continues looking in the next outer scopes until it reaches the global scope.

// The closure and scope chain are fundamental concepts in JavaScript that determine how variables and functions are accessed in nested environments.
// The closure scope chain is the mechanism JavaScript uses to find variable references by searching in a series of nested scopes (starting from the innermost scope and going outward).

//! every closure having three scope
// 1. local scope (own scope);
// 2. outer function scope
// 3. global scope 


// global scope
var userName = 'vishal'
function makeFum(){
    // outer function scope
    var name = 'welcome';
    function displayName(num){
        // Local scope (own scope)
        console.log(name, num, userName)
    }
    return displayName;
}
// makeFum()(26)
// also defined in following way 
const fun = makeFum()
fun(26)


//! Scope Chain Resolution:
// When innerFunction is executed, it has access to variables in its local scope (e.g., innerVar).
// If a variable is not found in the local scope, JavaScript looks for it in the outer scope (e.g., outerVar).
// If it's not found in the outer scope, JavaScript continues searching in the global scope (e.g., globalVar).

