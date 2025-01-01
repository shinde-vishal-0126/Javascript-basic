// fat arrow function :(arrow function)

// in ES6 arrow function also know as fat arrow function, where introduced as a concise way to write anonymous function
// It uses the => syntax and is especially useful for creating small, inline functions.  
// ex syntax :
const sum = (a,b)=>{
    console.log(a+b)
    return a+b
}
const result = sum(10,20);
console.log('result', result)

// if function body consist of a single expression the braces {} and the return keyword are omitted.
const sum1 = (a,b) => `the of teh numbers are ${a + b}`;
console.log(sum1);

// if there is only one parameter the parentheses () around the parameter list can be omitted.
const sum2 = a => `the value of a is ${a}`;
console.log(sum2)

// if there are not parameter use an empty set of parentheses.
// const sum = () => `if no parameter add empty set of parentheses`


// key characteristics of arrow function
// short syntax : cleaner and shorter syntax as compared to regular function.
// implicit return : for single expression function the return statement implicit
// No this Binging: arrow function do not have their own this: they inherit this from their enclosing context (lexical scope)
// can not be used as constructor : arrow function can not be used with new
// no argument object : arrow function does not have their own argument object 
function normalFunction() {// normal function 
    console.log(arguments); // [1, 2, 3]
}
const arrowFunction = () => {
    console.log(arguments); // ReferenceError
};
normalFunction(1, 2, 3);
arrowFunction(1, 2, 3);



// Differences between arrow function & normal function

// arrow function :
    // Use => syntax, making them shorter and cleaner. (They are inherently anonymous functions.)
    // this binding is lexical: it inherits this from the surrounding scope where the arrow function is defined.
    // Arrow functions do not have their own arguments object. (Use rest parameters (...args) instead to access arguments.)
    // single-line expressions, they return the value implicitly without needing the return keyword.
    // Arrow functions cannot be used with the new keyword and do not have a prototype property.
    // Suitable for callbacks, one-liner expressions, and scenarios where this inheritance is needed.


// normal function:
    // Use the function keyword, making them more verbose than arrow functions.(They can be either named or anonymous.)
    // this binding is dynamic: it depends on how the function is called (e.g., as a method, globally, or with call, apply, or bind).
    // Normal functions have an arguments object that contains all passed arguments.
    // Explicit Return:For all cases, you must use the return keyword to return a value.
    // Normal functions can be used with the new keyword to create new objects
    // Suitable for methods, object definitions, and scenarios where dynamic this binding is required.


    // 1- syntax normal function with function name like verbose 
    function square(num){
        return num *num
    };

    // syntax of arrow function it does not have name keyword as well as function name it represent with the help of flat arrow
    const  square = (num) =>{
        return num * num
    }

    // 2 - implicit return keyword 
    const abc= (num) =>  num + num 
     
    // in normal function explicity keyword are required.
    function abcd (num ){
        return num * num
    }

    // 3. no argument object :
    const ab = (num) => {
        console.log(arguments) // not having argument object used spread operator to get the argument
    }
    
    // in normal function having the argument object 
    function add (num1, num2){
        console.log(arguments) // it return argument 
    }

    // this binding 
    // normal function having its own this binding

    let user = {
        name: 'vishal shinde',
        // arrow function refer to its lexical scope because it does not have own this
        rc1 :() =>{
            console.log(this.name)
        },

        // normal function having own this dynamic binding
        rc2(){
            console.log(this.name)
        } 
    }
    user.rc1();
    user.rc2()