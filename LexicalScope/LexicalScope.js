//  A lexical scope is nothing but a scope refers to the current context of your code either globally or locally defined.

//  lexical scope in javascript is ability for a function scope to access the  variable  or function from parent scope.(but vices versa not true)

//  lexical scope in javascript means that a variable can be defined outside the function can be accessible in side of another function defined after a variable declaration but the opposite it not true the variable defined inside the function will not be accessible outside the function

//Lexical scope refers to the scope or visibility of variables and functions based on their position in the code, 
// specifically where they are defined within the source code structure. 
//The term "lexical" means that the scope is determined by the physical placement of the code in the source.

//  Lexical scope is process used to defined the scope of variable  and function  by its position in the source code

// Lexical scoping means now the inner function can get access to their parent function or outer function variable but ,(vices versa is not true)

// Parent functions can not get access to their child function variable

//when executeion environment is create then also lexical environment is created 
// lexical enviornment is local memory along with the lexical environment of its parent

// ----------------------------------------------------

// example of lexical scope
function subscribed() {
  // outer function
  var Name = "vishal shinde"; // variable in the outer function's scope
  function displayName() { // display Name in closure function
    // inner function
    console.log(Name); // the inner function accesse   s the 'Name' variable from its outer function
  }
  displayName(); // calling the inner function
}
subscribed(); // calling the outer function

// ----------------------------------------------------------

// example 2
let a = 'hello Gyes';
const first =()=>{
    console.log(c); // so here parent function can not access the child function variable.
    let b = 'How are you'
    const second = ()=>{
        let c = 'i am fine thank you !'
        console.log(a + "" + b  + "" + c)
    }
    second()
}
first()

// -----------------------------------------------------------

// Lexical scoping described how the javascript engine used the location of the variable in the code to determine where that variable available
// The closure is a combination of function and its ability to remember variables in outer scope.
// The use of the closure gives the access of the outer scope variable and function  after the outer function execution complete


