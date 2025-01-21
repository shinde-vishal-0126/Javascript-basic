
//? how javascript work ?
// when i write javascript code and run on browser 
// what happen in between running the code in browser and display the output on console

// - parsing  phase :
//  if you run  code it go to the parser :
// and parser having different step first step is 

// - lexical analysis:
// lexical analyzer is also know as lexer is the first step in the process of compiling a javascript program 
// it break the program down into token which are the basic building block of the language
//! (
// 1 lexical parser : convert your code in tokens like variable an operators
// 2. once tokes are created then this tokens are passed to the our syntax parser 
//! )


// - syntax analysis:
// Task the stream of token form lexical analysis and check them for correct syntax if the syntax is correct , syntax analysis generate a tree-like structure call as parse tree for abstract syntax tree
// AST - represent the hierarchical structure of the program
//!(
// 2 syntax parser : syntax parser check if all the syntax are correct or not  
// it it done it work i.e  if it check it is correct the it create AST(parse tree)
// AST tree for abstract syntax tree  and pass this AST tree to the compiler
//!)

// - compilation (JIT - just in time compiler);
// after ast is created the javascript engine typically goes through a compilation phase  in modern engines like v8 engine in chrome, spiderMonkey in in fireFox or javascriptCore in safari this compilation often involves a compilation of tow approaches
// 1 parse and compile : the engine parse the code and compiles it into an intermediate from such as bytecode or machine code 
// 2. just-in-time-compiler : some engine used jit compiler where the interpreter code compiled just before execution 
//this allow the engine to optimized the code based on runtime information , improving performance
// !( 
// 3 compiler : the main work of compilation phase what ever code i have write  convert this code with the help of JIT (just in time compiler)  into the machine code or/byte code once it done compilation then it goes to the execution phase
//!)
\
// just in time compiler just combination of compiler and interpreter 
    // (compiler run all code at time)
    // (but interpreter are run code line by lien )
    // so jit (just in time compiler run continuously)

// - Execution" 
// once the code is compiled the javascript engine execute it, during the execution the engine create execution context ,
//  manage the scope chain, 
// handled various assignment and 
// call function.
// the execution context consist 2 phase phase :
// -first is creation phase (where variable and function are hoisted)
// - execution phase :(where the code is actually run)
// the javascript engine use call stack to keep track the execution context when a function is called a new frame is added to the call stack and when the function is complete its frame is removed (basically it work last in first out)
//!(
// - 4 execution phase : 
// inside the execution phase we have to call stack 
// and inside the call stack we have  creation phase, execution context, and heap memory. 
// hoisting and scop chain are created in execution phase.
//!)

// more inside the execution phase 
//! call stack :
// in order to manage execution context the javascript engine use a call stack
// the call stack is data structure that keep track of the currently execution function in a program 
// it operate on the last in first out (LIFO) principle meaning that the last function added to the stack in the first one to be executed and completed
//
//! heap memory :
// the heap memory is where dynamically allocated memory residers.
//  this is where objects, closures and other dynamically allocated data are stored.
// while the call stack manage the flow of the execution and function context  
// the heap memory holds data that is referenced by these execution contexts.

//! during the execution of a javascript 
// the javascript engine goes through the creation phase before execution any code,
// during this phase it sets up global execution context ths global execution context is the first one to be created and pushed onto the call stack this happen when the javascript engine start executing the code 
// - key activities during the creation phase include
//  - creating the global object (window in browsers, global in node js)
// - setting up the this references
// - creating the outer environment references (which is null for the global context)
// creating the variable environment and allocating memory for global variable and functions
// Before execution our code javascript engine scans the code and create a property for each variable and function into code for variable it reserve space for them in memory and set an initial value of undefined, and for function also reserve space but sets initial value as a references to the actual function in memory thats why we can call a function but if we try to get variable it will get undefined 

//setting up scop chain which initially only the global scope
// - execution phase :
// after creation phase the actual code execution take place this is when the javascript code goes through the code line by lien 
// variable assign their value , function are executed and the programs logic is created 

// and then get final output
