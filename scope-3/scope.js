//  Scope  ( determine the accessibility and the visibility of the variable)

// 1.@ What is the scope of the program ? OR variable scope 
// 1. Certain regions in the program where a defined variable exists and recognised or can not recognised. Or
// 2. So scop determine the accessibility and visibility of the variable in program

// 2.@ Waht are the type of the scope ?
// three type of the scope
    // 1. Global scope (function scope)
    // 2. Local scope
    // 3. block scope


    // 1. GLOBAL scope :
    // - so javascript enging execute the script it create the Global execution context.
    // - and assing varialbe in Global execution context that you declare outside the function (so this variable having the Global scope or called global variable)
    // - Global scope variable it can accessible everywhere in the script

    // 2. LOCAL scope :
    // - variable are declare inside the function call local variable:


    // 3. BLOCK scope :
    // - let and const keyword that allow to to declare variable in block scope
    // - whenever you see a curly bracket {} it is blocked it can be an area within the if, else, switch, condition or for, do, while, loops.


    // 3.@ what is Gobla scope and script scop in broser when the run the script ?
    // -  Global scope :
    //     - if you create variable using var it create inside the Global scope in browser
    //- Script scope :(specified to the javascipt file that are loaded into html ducument vai script tag:)
    //     - if you create varaibale using const and let it locationd inside the script scope in brower (it also type of another global scope)
    //     - Script scope is specific to JavaScript files that are loaded into an HTML document via the script tag. 
    //     - Each script loaded into the page gets its own scope, meaning variables and functions declared within a script are only available within that script, unless they are explicitly declared as global.


