// event loop : runTime model

 // javascript event loop constantly running processes that coordinate tasks between the call stack and callback Queue to achieve concurrency.


// 1.event loop continuosuly check the call statck and callback Queue or (monitoring both call stack and callback queue)
// 2.if there is callback function waiting in callback queue to be execute then event loop will check call stack is empty or not
// 3. as soon as stack is empty it will take that callback function from callback queue and push into the callstack to be executed so continue this process called as event loop 
// event loop specially for understanding how asynchrous code execution work 
// (it is heart of the javascript concurenty model and play a significent role in event handallling , callbacks, and non-blocking operation)

// javascript is single threade language that means javascript can do one thing at a single point of time.


// JAVASCRIPT CALL STACK :
// call stack is mechanism to keep track of the function  executon call in the program 
// Call stack work on LIFO manner like last-in-first-out(last function called is the first one to be resolved.)



// What is stack OverFlow 
// The call stack has fixed size , depends on the implementation of the host environment,either the web browser or node.js
// So number of execution context exceeds the size of the stack a stack overflow error will occur
// his usually happens due to excessive or infinite recursion, where a function keeps calling itself without an exit condition.


// WHAT IS GLOBAL EXECUTION CONTEX (GEC):
// Global execution context so this is defualt executioin context
// in which js code start its execution when the file first load in the browser

// WHAT IS EXECUTION CONTEXT
//  the execution is an abstract concept of an environment were the  javascrpt code is evaluated and executed.
// if you call any function it create execution context of that function


// EXECUTION STACK OR STACK CALL 
// 1.in execution stack you have Global execution context 
// 2 Web api --> web api having  setTimepOut(), Dom, ajix/api or 
// 3. message queue

// Example 

const fun2 = () =>{
    setTimeout(()=>{
        console.log('function 2 is running...')
    }, 3000)
}

const fun1 = () =>{
    console.log('function 1 is starting');
    fun2()
    console.log('function 1 end the execution')
}
fun1();

// if you call any function it ceate execution context 
// Execution contest having two phase
// 1 creation Phase
// 2. Execution Phase


// CREATION PHASE
// when the javascript engine execute funtion first time it create global execution context so during this phase javascript engine perform following task 
// 1. creae global object :  widown in the browser
// 2. create this object and bind with glboal object 
// 3 setup memorty for strong vriable and function refrences
// 4. stored the function declaration in heap memory and varialbe within the gobal execution context with the initial value as undefined 

// EXECUTION PHASE
// after creating the global execution context move to the execution phaes
// During the execution phase, the javascript engine executes the code line by line, assigns a value to the variable and executes the function call.
// Each function call creates a new function execution context. An object that is a reference to all the parameters of the function.


// in above example
// 1.you call fun1() it has fun1() execution context.
// 2.Then execute this console.log execution part and print whatever it writes.
//  And remove its execution context  from the execution stack.

//3.Then execute next line it having the function call of fun2()
// If you call any function it has its execution context like  fun2() execution context.
// 4 So in function 2 the first execution line having setTimeout() function also has its execution context. Like setTimeout() execution context.

// 5. So setTimeout() comes under the webApi part 
// Inside the setTimeout having console.log(‘function 2 called’) but waiting for 3 millisecond so console.log()
// does not create its execution context because it time base event its set time for 3 millisecond. And it callback function wait  for 3 millisecond

//6. And we can pass this callback function inside the web api for 3 millisecond and if it pass to web-api then vanish  or remove its execution context form execution stack

// 7 So in the execution stack having fun2 context so fun2 checks if it's having any more execution if not any execution so fun2 also vanishes or removes its execution context from execution stack.

// 8 So in execution stack it having fun1() context so its check it having any execution or not it its having execution of console.log so its having it execution context and its execute remove the execution context of console.log in execution stack 

//9 The fun1() execution context  in the execution stack checks if it has any execution or not if not it vanishes or removes fun1() execution context from the execution stack.

// 10 Now the execution stack is empty.

// 11 When a web api has a callback function it waits for 3 millisecond once it completes 3 sec web api passes this callback function in the message queue.

// 12 So if  callback function comes under message queue it check if execution stack is empty or not it its empty then it move from message queue to global execution context in execution stack.

// NOTE:

//when whatever present in web Api pass to the message queue 
// and event loop used to whatever pass web api in message queue, when execution stack is empty the event loop pass whatever present in message queue,
 //it moves to the execution stack and gives its pisIton in the execution stack to execute and get its execution context and once its execute and print then it removes its execution context.


 // DEFINATION OF EVENT LOOP :
//  Event loop is a process that waits for the call stack to be clear before pushing callbacks from the MESSAGE queue to the call stack OR execution stack.
// Once the execution of call stack clear the event loop triggers and checks the MESSAGE queue for available callbacks
// Def: javascript has a runtime model based on that event loop which is responsible for executing the code, collecting and processing the event and executing queued sub tasks.
// If the call stack is empty and there is a callback function in the task queue then they will be dequeued from the task queue and run by them pushing them into the call stack.

//javascript event loop constantly running processes that coordinate tasks between the call stack and callback Queue to achieve concurrency.



// What is benefits of event loop 👍
// We are using single threaded event loop it make very easy to access and modify mutable state between requests 
// Also 	The event loop is constantly running process that monitor both call stack and callback Queue , so callback stack is not empty, the event loop wait until it is empty and place the next function from callback queue to the call stack,
// If the callback queue is empty, nothing will happen.

