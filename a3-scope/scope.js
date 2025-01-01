// ! Scope  ( determine the accessibility and the visibility of the variable)

//? 1.@ What is the scope of the program ? OR variable scope 
// 1. Certain regions in the program where a defined variable exists and recognized or can not-recognized. Or
// 2. So scop determine the accessibility and visibility of the variable in program
// 3. scope defines the context in which variables, functions, and objects are accessible or referenced.
// 4. scop defined visibility or lifespan of a variable or function within the code
// scope in javascript refer to the context in which variable are declared  and accessed. so its defined visibility and lifetime of variable.
//when variable is declared it is bound to specific scop and it accessibility is determined by the scope

//? 2.@ What are the type of the scope ?
// three type of the scope
    // 1. Global scope 
    // 2. Local scope (function scope)
    // 3. block scope


    //? 1. GLOBAL scope :
    // - so javascript engin execute the script it create the Global execution context.
    // - and assign variable in Global execution context that you //* declare outside the function (so this variable having the Global scope or called global variable)
    // - Global scope variable it can accessible everywhere in the script


    //? 2. LOCAL scope :
    // - variable are declare inside the function call local variable:
    //*- Variables declared inside a function using var, let, or const are confined to that function
    // -They cannot be accessed outside the function.


    //? 3. BLOCK scope :
    // - let and const keyword that allow to to declare variable in block scope
    // - whenever you see a curly bracket {} it is blocked it can be an area within the if, else, switch, condition or for, do, while, loops.
    //* - Variables declared with let or const inside a block ({}) are only accessible within that block.
    // - var does not support block scope and "leaks" into the surrounding function or global scope.


    //? 3.@ what is Global scope and script scope in browser when the run the script ?
    // -  Global scope :
    //     - if you create variable using var it create inside the Global scope in browser
    
    //- Script scope ://* (specified to the javascript file that are loaded into html document vai script tag:)
    //     - if you create variable using const and let it located inside the script scope in browser (it also type of another global scope)
    //     - Script scope is specific to JavaScript files that are loaded into an HTML document via the script tag. 
    //     - Each script loaded into the page gets its own scope, meaning variables and functions declared within a script are only available within that script, unless they are explicitly declared as global.


    //? Lexical Scope: 
    // A function's scope is determined by its location in the source code. Inner functions can access variables from their parent functions (even after the parent function has executed).
    // This concept enables closures.
    function outerFunction() {
        let outerVar = "I am outer";
        // inner function
        function innerFunction() {
            console.log(outerVar); // Accessible due to lexical scope
        }
        return innerFunction;
    }
    const inner = outerFunction();
    inner(); // Logs: "I am outer"
    

    //? Module Scope
    // Variables declared in a module (using import/export) are scoped to that module.
    // They are not added to the global scope.

    // module.js
    export const moduleScopedVar = "I am module-scoped";
    // main.js
    import { moduleScopedVar } from './module.js';
    console.log(moduleScopedVar); // Accessible here




//? Key Concepts Related to Scope:

// Variable Hoisting
    // Variables declared using var are hoisted to the top of their scope but remain undefined until the code assigns a value.
    // let and const are also hoisted but do not initialize until the line of declaration (temporal dead zone).
    console.log(hoistedVar); // undefined (hoisted)
    var hoistedVar = "I am hoisted";
    // console.log(notHoisted); // Error: Cannot access 'notHoisted' before initialization
    let notHoisted = "I am not hoisted";

// Closures 
    // A closure is when a function remembers its lexical scope even when executed outside that scope.
    function makeCounter() {
        let count = 0;
        return function() {
            count++;
            return count;
        };
    }

    const counter = makeCounter();
    console.log(counter()); // 1
    console.log(counter()); // 2



// Strict Mode
    // In strict mode, var declarations that leak into the global scope are restricted, making your code more secure.
    // Example: "use strict";

