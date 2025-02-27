- async-await :
=====================================================================================================
1. async/await is a modern way to handle asynchronous operations, making code more readable compared to Promises or callbacks.
2. async defines an asynchronous function, which always returns a Promise.
3. If an async function returns a value, JavaScript automatically wraps it in a resolved Promise.
4. If an error is thrown, it returns a rejected Promise.
5. await pauses execution until the Promise resolves, making async code look synchronous.
6.This approach simplifies code structure and improves readability.
7. async and await is used to handle the Promises (await keyword only used inside the async function) 

# How It Works
-async Function
1. A function declared with async automatically returns a Promise.
2. Inside an async function, you can use await to pause execution until a Promise resolves.

- await Keyword
1. Used inside async functions to wait for a Promise to resolve.
2. It makes asynchronous code look more like synchronous code.


//Example:
console.log('start');
function importantAction(user_name) {
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            resolved(`subscribed to the ${user_name}`)

        }, 500);
    })
}
function likeVideo(video) {
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            resolved(`like the video ${video}`)
        }, 100);
    })
}
function sharedVideo(shared) {
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            resolved(`share the video ${shared}`)
        }, 2000);
    })
}

1. asynchronous function which we can used do adding async keyword before function
2. Here we have to create function and call the promise here like important action
3. here promise we can not gone used .then() then it return the promise object but we don't want we want result

const result = async () =>{
    // it gone wait until the this promise return us a fulfilled or rejected whatever state and we can get value provided
    const message1 = await importantAction('vishal');
    const message2 = await likeVideo('whatsapp')
    const message3 = await sharedVideo('javascript video')
    console.log(message1 + " " + message2 + " " + message3)
}
result();


# How to handled the error in async-wait
- handled error using try, catch, and finally block

const res = async () =>{
    try{
        const msg1 =await importantAction('vishal');
        const msg2 = await likeVideo('shinde');
        const msg = await sharedVideo('hi')
        console.log(msg + msg2 + msg1)
    }catch(error){
        console.log('promised failed', error)

    }
}
res()


# output based question
- 1
const promise = new Promise((res, rej)=>{
    console.log(1) // 
    res(2)// 2
})
promise.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log('error', error);
    
})
- javascript inside the asynchronous function find if there is any synchronous function then it execute first then asynchronous


- 2
console.log('start'); //start
const promise1 = new Promise((resolved, reject)=>{
    console.log(1);
    resolved(2)//1
    console.log(3); // 3
})
promise1.then((res)=>{
console.log('result :' , res)
});
console.log('end'); 


- 3
console.log('start'); //start
const fn = () => {
    return new Promise((resolve, reject) => { // Return the Promise here
        console.log(1);
        resolve("success");
    });
};
console.log("middle");

fn().then((res) => {
    console.log(res);
});
console.log("end"); 

==================================================================================================
# Advantages of async and await

- Improved Readability: 
Makes asynchronous code easier to read and maintain. compared to traditional callback-based or promise-based approaches.
- Sequential Flow: 
Helps write asynchronous code in a way that resembles synchronous code.
- Error Handling:
 async/await works seamlessly with try/catch blocks for error handling, providing a more intuitive way to manage errors in asynchronous code.
1. This is much simpler and cleaner than chaining .catch() in promise chains.
2. Combining Async Tasks: Easily combine sequential and parallel tasks.
- Sequential Execution: 
With async/await, asynchronous operations can be written sequentially, avoiding deeply nested callbacks. However, each await waits for the previous one to resolve before moving on.
3. Parallel Execution: 
You can still run asynchronous operations in parallel by using Promise.all with async/await, improving performance when tasks are independent

==================================================================================================
# What is differences between promise and async / wait 

-Both are used for the handling the asynchronous operation in javascript

- Promise 
1. Basically promise used chaining syntax with .then() and .catch() to handled the asynchronous operation
2. You defined a function that return a promise and then you chain  .then() callback to handled successful result 
 And .catch() when the promise are rejected then used to handle error 

someAsyncFunction()
    .then((result)=>{
        // handled success
    }).catch((error)=>{   
    })

- Error Handling 
1. So error handling in promise are typically handled using the .catch() method or by changing the second .then() callback for error handling
2. So this can be lead to callback hell if you have multiple asynchronous operation 
- Readability
1. Promise can nested and harder to read when dealing with multiple asynchronous operation 
- Error propagation :
1. Error in promise chain need to explicitly passed using return promise.reject(error) which an be porn to omission 
- Compatibility :
1. so promise available in most modern javascript environment and it can be used in older environment with the help of polyfill


- Async/wait :
1. async/  it is more synchronous looking syntax for handling promise
2. So you make function as async and used await keyword inside it to wait for a promise to resolved 
- And handled the error using the try-catch block
- make function as async
async function Function(){
    // handled the error try catch block
    try{
        const result = await someAsyncFunction();
        //handled the success
    }catch(error){
        console.log(error);
    }
}

- Error Handling 
1. In async/await handle the error using traditional way by using the try catch () block 
2. Making error handling more intuitive and similar to synchronous code 
- Readability
1. Can significantly improve the code readability and maintainability especially dealing the more complex asynchronous code 
- Error propagation
1. In async await error are automatically propagated up to call stack making it easier to tracking and handled them  
- Compatibility :
1.relies on promises so it is not available in the environment it did not support, only support in the modern environment. 

# differences in short!
- promise
1. Basic Syntax with .then() and .catch()
2. A promise is created using the new Promise() constructor.
3. You handle the result or error using .then() for success and .catch() for errors.
-error-handling :
4. In Promises, you use .catch() for handling errors.
5. Promises often require chaining .then() calls for sequential operations, which can get cumbersome.
6. in javascript engine not wait for the promise to be resolved 
- ex const p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolved("promise resolved value")
    },10000)
})

function getData(){
    p.then((res)=>{
        // here javascript engine is not wait for promise to resolved it start the continue execution of next code.
        console.log(res);
        console.log('welcome to react js')
    })
}
getData()

- async-await
1. Basic Syntax with async and await
2.async is used before a function definition to indicate that the function contains asynchronous operations.
3. await is used inside an async function to wait for the resolution of a promise, simplifying the syntax.
- error handling :
4. in async-await used the try and catch block for handling error
5. async/await allows you to write sequential code, making it easier to follow.
6. in async/wait javascript engine wait for the promise to be resolved.
- ex const p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolved("promise resolved value")
    },10000)
})

async function handlePromise(){
    console.log('start...')
    // javascript engine is wait for promise to resolved it does not execute next line of code unit promise are not resolved 
    const value = await p;
    console.log('welcome to react js')
    console.log(value)
}

 ===================================================================================================

 # Why used the async/ await instead of promise 
1. Async / await can greatly improve the readability of the asynchronous code compared to using callback and .then chaining when dealing with promise
2. So async/await allow you to write asynchronous more synchronous style making it easier to understand and maintain

- Problems with Promises:
1. Chaining Can Get Messy: 
- When you have multiple Promise calls, it’s easy for the code to become deeply nested, and that makes it hard to read and follow. This is called "callback hell."
2. Error Handling Is Tricky: 
- In promises, you need to handle errors with .catch() at the end of each chain. This can get confusing when there are many steps in your code.

- sync/await is like fixing the messiness and confusion of promises, making your code simpler and more manageable. because of  No need for chaining .then() and .catch(), also - Error Handling: Just use try/catch blocks, making it much simpler, Easier to Read: Looks like regular code and not a bunch of nested callbacks.


# Summary about Async await 
1. Async await makes promises easier to write and makes complexity simple.
2. Async make a function return promise 
3. Await makes a function wait from promise are settled to be resolved or rejected .
4. If you used fetch method it always async await return promise
5. If you define an async function it always contains await.
6. If you used async and await by default provided error handling.
7. So each and every code you have to write inside the try catch block.



# Error Handling in await / async 
- A promise resolve the await promise return the result if a promise rejected await/async throw an error so if there were throw statement
async function getUser(userId){
    await Promise.reject (new Error('invalid user Id'))
}
async function getUser(userId){
    throw new Error('invalid user id')
}

async function getUser(userId){
    try{
        const user = await Promise.reject(new Error('invalid user id '));
    }catch(error){
        console.log(error)
    }
}
- it possible to catch error caused by one or more await promise

async function showServices(){
    try{
        let user = await getUser(100);
        let services = await getServices(user);
        let cost = await getServiceCost(services);
        console.log('the services cost is ${cost}')
    }catch(error){
        console.log(error)
    }
}



# Await keyword 
1. Used the await keyword to wait for the promise to stalled either in resolved and rejected state 
2. And you can used await keyword inside async function only
3. It used before the promise and it pause the function execution until the promise is resolved (fulfilled or rejected )
4. If the promise is fulfilled the result is return and if promise rejected and exception is throw which you can catch using try catch block
async function example(){
    try{
        const result = await someAsyncfunction();
        console.log(result);
    }catch(error){
        console.log(error)
    }
}
- Now in this above example await keyword instructs the javascript engine to wait for the sayHi() function to complete before displaying the message.
- If you use the await operator outside the async function it gets an error.


# The async keyword : 
1. The async keyword allow you to defined a function that handled asynchronous operation
2. To defined the async function you place the async keyword in front of function keyword as follow
3. When you declare a function as async it means that function always return the promise either explicitly or implicitly 
4. So inside the async function you have used the await keyword to pause the execution of the function until the promise is resolved; this allows you to write asynchronous code in a more sequential and readable manner.

async function fetchData(){
    const response = await fetch('https://api.google.com');
    const data = await response.json();
    return data;
}

# New example explanation
async function  sayHi(){
   return Promise.resolve ('hi');
}
// here sayHi function return the promise you can consume it
sayHi().then((console.log))
// Asynchronous functions execute asynchronously vai the event loop
// It alway returns a promise.


- Example : 
 sayHi()  function returns the promise  you can consume it .
async function  sayHi(){
   return Promise.resolve ('hi');
}

// Beside the regular function you can used async keyword in function expression
let sayHi = async function(){
    return 'hi'
}

// arrow function
let sayHi = async () => 'Hi'


 # Why introduced the async await in javascript instead of the promise ?
1. Promise chaining is the technique  for handling the asynchronous operation sequentially using promise 
2. While its a powerful and versatile approach there are some common problem and challenges associated with it 
3. Callback Hell (Pyramid of Doom ):
- If you have multiple asynchronous operation to perform sequentially, chaining promises can be lead to deeply nested code structure which can be hard to read this is often referred as callback hell or the pyramid of the Doom 

asyncFunction().then((result1)=>{
    return asyncFunction2(result1);
}).then((result2)=>{
    return asyncFunction3((result2)=>{
    }).then((result3)=>{
        return asyncFunction4(result3)
        })
    })
    

- Error Handling 
 1. Proper error handling in promise chain can be challenging error that occur at any stage in the chain can be caught in the .catch() block at the end making it difficult to pinpoint where the exactly error occurred 
- Readability and maintainability 
1. Promise chain can be difficult to read and maintain as they grow in length 
2. It easy to lose the track of the flow of the code especially you have multiple .then() block
- Inflexibility 
1. Changing the order or adding new step to sequence of asynchronous operation  can require significant modification to the existing promise chain  ao potentially introducing the bug 
-  Limited parallelism 
1.  Promise chaining is inherently sequential which means that operation in the chain are executed one after the another if you have independent synchronous task that could be run in parallel so promise changing is not be the most efficient approach  
2. So conclusion is the address this challenges and make code more readable and maintainable modern javascript introduced the async/await 
3.  So async wait provide better error handling, improve the readability and greater flexibility in managing the asynchronous operation 


	
# async/await:
1. Learn how to write asynchronous code using javascript async and await.
2. In the past you deal with asynchronous operation you often used callback function 
3.  However when you nested many callback functions the code will be more difficult to maintain and you end up with a notorious issue known as call back hell.
- Example : if you perform three synchronous operation in following way
- Select user from a database
- Get the services of user from an api
- Calculate the services cost based on the services from the server.
- So the following function illustrate the three task note that we used setTimeout() function to simulate the synchronous operation

function getUser(userId, callback){
    console.log('Get user from the database');
    setTimeout(()=>{
        callback({
            userId: userId,
            username : 'vishal'
        })
    },1000);
}

function getServices(user,callback){
    console.log(`get services of ${user.username} from the api`);
    setTimeout(()=>{
        callback(['Email', 'Vpn', 'Cdn'])
    },2 * 1000);
}

function getServicesCost(services, callback){
    console.log(`calculate services cost of ${services}`)
    setTimeout(()=>{
        callback(services.length * 100)
    },3 * 1000)
}

- here following are the nested callback function
getUser(100,(user)=>{
    getServices(user,(services) => {
        getServicesCost(services,(cost)=>{
            console.log(`the services const is ${cost}`)
        })
    })
})

// output
// Get user from the database
// async.js:12 get services of vishal from the api
// async.js:19 calculate services cost of Email,Vpn,Cdn
// async.js:29 the services const is 300

- To avoid this callback hell issue ES6 introduced the promise that allows you to write asynchronous code in a more manageable way.
// First we need to return promise in each function  
function getUser(userId){
    return new Promise((resolve, reject)=>{
        console.log(`get user form the database`);
        setTimeout(() => {
            resolve({
                userId:userId,
                username:'vishal'

            })
        },1000);
    })
}

function getServices(user){
    return new Promise((resolve, reject)=>{
        console.log(`get The services of ${user.username} from the api`)
    setTimeout(()=>{
        resolve(['Email','vpn','Cdn'])
    },2 * 1000)
    })
}

function getServicesCost(services){
    return new Promise((resolve, reject)=>{
        console.log(`calculate services cost of ${services}`);
        setTimeout(()=>{
            resolve(services.length * 100)
        })
    },3* 1000)
}

// here you have to chain the promise
getUser(100).then(getServices).then(getServicesCost).then(console.log)

-  Es2017 introduced the async/await keyword that built on top of the promises allowing you to write asynchronous code that looks like asynchronous code and is more readable. 
-  Typically speaking the async/ await is syntactic sugar for promises
- If a function return a promise you can place the await keyword in the front of the function call like 
- Await will wait for the promise returned from the f() to settled 
- The await keyword used only inside the async function

function getUser(userId){
    return new Promise((resolve, reject)=>{
        console.log(`get user form the database`);
        setTimeout(() => {
            resolve({
                userId:userId,
                username:'vishal'

            })
        },1000);
    })
}

function getServices(user){
    return new Promise((resold, reject)=>{
        console.log(`get The services of ${user.username} from the api`)
    setTimeout(()=>{
        resolve(['Email','vpn','Cdn'])
    },2 * 1000)
    })
}

function getServicesCost(services){
    return new Promise((resolve, reject)=>{
        console.log(`calculate services cost of ${services}`);
        setTimeout(()=>{
            resolve(services.length * 100)
        })
    },3* 1000)
}
= here you have to chain the promise
// getUser(100).then(getServices).then(getServicesCost).then(console.log)
# Instead of that Following defined an async function that call the three asynchronous operation in sequence 
async function showServicesCost(){
    let user = await getUser(100);
    let services = await getServices(user);
    let cost = await getServicesCost(services);
    console.log(`the services cost is ${cost}`)
}
showServicesCost()
