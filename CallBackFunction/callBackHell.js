//  WHAT IS CALLBACK HELL ?
// callback hell is occure when multiple callback are nested  inside each other 
//  callback hell leads to create a compleate and hard-to-maintain code.

// callback hell are phenomenon that happen when multiple callback are nested on top of each other.
// callback Hell is also know as Pyramid of dom

// when callback Hell occure >
// when you are dealing with series of asynchronous operation like reading the file , making the api request, handling the event  that depends on each other and where you need to wait for  response before  executing next part of code so  handled them using the callback function 


setTimeout(()=>{
    console.log('work 1 is done')
    setTimeout(()=>{
        console.log('work 2 is done')
        setTimeout(()=>{
            console.log('work 3 is done')
        })
    })
    
})


// How the callback hell are probalmetic :
// 1. Nested Callback: Where you have multiple asynchronous operation that depends on each other you might end up nesting callback with each other the code indentation depends and creating pyramid like structure 
// 2.Readability : Callback hell make you code less readable and harder to understand  because it introduce the lot of indentation and visual noise
// 3 Error Handalling : Handling the in nested callback structure can be complex you need to ensure that you handle the error at the appropriate level and propagate them correctly 
// This can lead to error-porn code especially dealing with different error scenario  in different layer of nesting 
// 4. Maintenances: When you need to modify or extend your code so callback hell it more porn to introducing the bug 
// 5 Debugging :Debugging the code with deep nested callback can be frustrating 
// Identifying the source of issue , setting the breakpoint and inspecting the variable more challenging due to more complex structure of the code

// 
// To addressed the issue associated with the callback Hell  javascript introduce the several technique and pattern 

// 1. Promise:
// Promise are more structure way to handaled the asynchronous operation making code more readable and maintainable 
// Promise allow us to chain operation and handled error more gracefully 
// So promise also enable us to used async/await syntax which make synchronous code more look like synchronous code 

//2. async/ await 
// A async /await syntax built on the top of the promise and provide a more natural way to write asynchronous code that resemble synchronous code 
// It reduce the nested callbacks 

// 3. Modularization 
// Breaking you code into smaller
// Modular function can help you to reduce the depth of callback nesting 
// This make the code more organized and easier to manage 

// 4 Named function 👍
//  Instead of using anonymous function as callback function using name function make you code more readable and reduce the indentation level 
 
// NOTE
// By using the promise and async/await approach allow us to write asynchronous code is more linear and structured fashion reducing the nesting and making it easier to manage complex asynchronous flow 













