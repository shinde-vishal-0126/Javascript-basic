// Hoisting
// 1. When javascript engine execute javascript code then javascript execution context  it create a global execution context
// 2.  And so Global execution context have two phase Like  we have 
        // 1. creation phase and 
        // 2.  execution phase 
// In Creation phase  Three things Happen  ➖
// - It create global or window object
// Setup a memory heap for storing variable and function references 
	// (i,e take all of the variable and function stored inside that window object ) 
    //stored function declration in heap memory and variable with Global execution with initial context 
// So During the creation phase the javascript engine moves the variable and function declaration to the top of the code or in window / global object 
// Third setup is that initialization of those functions and variable declaration are undefined.

// Example :
var a =10;
function multiply(x){
    return x * 10
}
let b = multiply(3);
console.log(b);

// 1. in creation phase 
a = undefined
multiply()
b = undefined
//so function declaration take whole or compleate function between here and stored inside the window object

// 2. The next happen in execution phase
// During execution phase javascript execute the code line by line and assign value to variable and execute the function call
 a=10;
//  b(execute the function and return the result stored in b)
// then print the
console.log(b)
// also in every new function created in javascript engine created new execution context all togather.


// How does the function work with execution context ?
// in execution phase assigned value to the variable and execute code line by line and execute the functioin and stored the value in variable and then print the outputt 
// also in javascript used call stack is mechanisum to keep track of all the function call,


// HOISTING 
// Hoisting is default behaviour in javascript 
// This is a process During the creation phase the javascript engine move the variable and function declaration to the top of the code this is known as hoisting in javascript 


// Another defincation:
// Hoisting in javascript is mechanism or default behaviour where variable and function declaration are move to the top of their scope before the code execute 

// Example
console.log('count',count);
var count;
// you think here give error like varialbe not declared yet but it show the undefined 
// it declared all of this variable and function at the top of the code during the creation phase and then in execution phase applied it value then execute
// it check if the variable alreay exist during creation pahse or not so it exists so it is undefined
// so in this case variable are hoisted.

// javascript Hoisting allows you to use function and variable before they are declared.
console.log('my-Name',myName);
var myName; // declared variable
myName = 'vishal shinde' // initialize its value
// here Refrences the myName variable before the declaration
// so first line of code does not case the error the reasion the javascript engine moves the variable and declaration to the top of the script 
// So typically code look like in execution phase  but during the execution phase of the global execution context the javascript engine place the variable myName in the memory and initialize its value as undefined.

// --------------------------------------------------------

// **  so in var cases variable are Hoisted but what is let and constant case
// javascript hoisting does not deal with let and constant it show the refrences error
console.log('counter : ', counter) //ReferenceError: Cannot access 'counter' before initialization
let counter;
 
// It shows the reference error : can not access ‘counter ’, before initialization.
// It show counter variable already in memory, however it has not been initialized
// behind the sence javascript engine hoists the variable declaration that used the let keywork it does not initialize with let  variable 

//  here we have to say let and const are not hoisted before it initialization
//  but in let and const case let and const are hoisted in the ‘TEMPORAL DEAD ZONE’



// what is temperal dead zone:
// 1. So Temporal Dead Zone is nothing but is the time between the declaration and the initialized with value of let and const variable 
// 2 Temparal dead zone is specific reagion whithin scope were variable exit but can not access util the are assigned value 





// Use of the Hoisting 
// Hoisting is a concept that enables us to extract values of variables and functions even before initializing/assigning value
//without getting errors and this is happening due to the 1st phase (memory creation phase) of the Execution Context.

// Conclusion 
// Javascript hoisting occurs  during the creation phase of the execution context that moves the variable and function declaration to the top of the script.
// Javascript hoisted the variable declared using the let keyword but does not initialize them at the variable declared  with var keyword 
// Javascript engine 	does not hoist the function expression and arrow function.



