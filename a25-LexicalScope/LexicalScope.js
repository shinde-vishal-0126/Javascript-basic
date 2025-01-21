//# lexical scoping:
// Lexical scope refers to the visibility of variables and functions based on their physical placement in the code. 
// A lexical scope is nothing but a scope refers to the current context of your code either globally or locally defined.
// lexical scope in javascript is ability for a inner function scope to access the variable or function from parent scope.(but vices versa not true)
// Lexical scope refers to the scope or visibility of variables and functions based on their position in the code, 
// -lexical scope in javascript means that a variable can be defined outside the function can be accessible in side of another function after a defined variable declaration but the opposite it not true the variable defined inside the function will not be accessible outside the function

var userName = 'vishal shinde';
// global scope 
function local(){
  // local scope
  console.log(userName); // here we have to access the userName variable inside the function
}
local(); 
// lexical scope is a way of managing variable access in javascript based on the physical structure.
// what is lexical The scope of variable is determine by its position in the source code specifically where it is declared 
// specifically where they are defined within the source code structure. (i.e exact the arability of the variable ) 
// The term "lexical" means that the scope is determined by the physical placement of the code in the source.
// Lexical scope is process used to defined the scope of variable  and function  by its position in the source code
// Lexical scoping means now the inner function can get access to their parent function or outer function variable but ,(vices versa is not true)
// Parent functions can not get access to their child function variable
//when execution environment is create then also lexical environment is created 
//lexical environment is local memory along with the lexical environment of its parent


// example of lexical scope
function subscribed() {
  // this variable are outside the this scope 
  var name = "vishal shinde";
  //inner scope
  function displayName() { // display Name in closure function
    // inner function
    console.log(name); 
    alert(name)   // the inner function access s the 'Name' variable from its outer function
  }
  displayName(); // calling the inner function
}
subscribed(); // calling the outer function


// example 2
let a = 'hello ';
const first =()=>{
    // console.log(c); // so here parent function can not access the child function variable.
    let b = 'How are you'
    const second = ()=>{
        let c = 'i am fine thank you !'
        console.log(a + " " + b  + " " + c)
    }
    second()
}
first()

// Lexical scoping described how the javascript engine used the location of the variable in the code to determine where that variable available
// The closure is a combination of function and its ability to remember variables in outer scope.
// The use of the closure gives the access of the outer scope variable and function  after the outer function execution complete
//Refers to the rule or mechanism that determines the visibility and lifetime of variables based on their physical location in the source code

//? what is difference between Lexical scope and  closure
// lexical scope :
//Defines where variables can be accessed based on code structure.
// determine by the The physical location of variables and functions in the code.
// access to the variable Inner functions can access outer scope variables.
// Does not retain variables after execution context is gone.
// A variable declared in a parent function is accessible to nested functions.
// Lexical Scope is the foundational concept that governs how variables are accessed based on their position in the source code.

// closure:
// A function that retains access to its outer scope after the outer function has finished executing.
// A function that "remembers" its environment or lexical scope.
//  access the Inner functions can access variables from the outer scope, even after the outer function has completed.
// Retains access to variables and functions in its lexical environment.
// A returned function (closure) can still access a variable from its parent function even after it has finished executing.
// A closure is a function that retains access to its lexical scope, even after the outer function has finished executing.