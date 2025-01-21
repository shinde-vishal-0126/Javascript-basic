//! polyFill related questions 

//? 1: what is polyfill in javascript ? 
// piece of javascript code that provide the modern functionality on older environment that is not natively support.

//? 2: write the polyfill of the promise?

//? 3: write the polyfill of the promise.all  (return all the promise are resolved if any one reject then return rejected promise with reason and will not be processed another promise)?
// Promise.all takes an array of promises (or values) as input and returns a single promise. This returned promise resolves once all of the input promises have resolved successfully. It resolves to an array of the resolved values from the input promises in the same order.
// If any of the promises are rejected, the returned promise will immediately reject with the reason of the first rejected promise, and the remaining promises will not be processed.

//? 4: write the polyfill of the promise.allSettled  (return all promise with resolved or reject with message)?
// Promise.allSettled takes an array of promises (or values) as input and returns a single promise. This promise resolves once all of the input promises have settled, meaning they have either been fulfilled or rejected. The resulting promise resolves to an array of objects, where each object describes the outcome of each promise.

//? 5: write the polyfill of the promise.race (return first promise which is resolved or reject)
// promise.race task an array of promises  as input and return single promise.Promise.race returns a single promise that settles (resolves or rejects) as soon as the first promise in the provided iterable settles.
// returns a promise that resolves or rejects as soon as one of the input promises resolves or rejects. It does not wait for all promises to settle like Promise.all or Promise.allSettled.

//? 6: write the polyfill or the promise.any  (return any first successful promise) ? 
//Promise.any is a relatively newer addition to JavaScript (available from ES2021) that takes an array of promises (or other iterable) and returns a single promise that resolves as soon as any one of the input promises resolves successfully. If all input promises are rejected, the returned promise will reject with an AggregateError, which is a special error that contains all rejection reasons from the failed promises.


//? 7 write the polyfill of once function (i.e if you called function multiple time it called only one time) 
// tip : it take  argument as fun and context and return new function with argument and used apply method on given fun with context and argument
//

//? 8 write the polyfill of the map method in javascript 

//? 9 write the polyfill ot the filter method in javascript

//? 10 write the polyfill of the reduce method in javascript 

//?  11 what is differences bet map() method and filter() method:



//! memoization related question 

//? 1. what is memoization ? () 
// to implement the memoize function used the apply method also 

//? 2 How memoize work ? and why we used.



//! async-wait

//? what is async-await in javascript ?
// it is way to handled the asynchronous operation in more concise and readable way
// 

 //? How to handled the error in async-wait
 // async-wait handled the error by using the try and catch block

 //? what is advantages of the async-await
 // simplicity and readability , better error handling, combining the async task (run sequential and parallel task )

 //? what is difference between async await  and promise ?
 // syntax, error handling,  promise require chaining for sequential operation in async await allow to write a sequential code

 
//? Why used the async/ await instead of promise :

//? explain about await keyword :

//? explain about async keyword :



//! Computed property:

//? what is computed property ?
//(refer to ability to dynamically defined the object property name using expression) 


//! instances of operator

//? what is instances of operator ?
// check if the give object is an an instances of perticular call or constructor

//? what is singleTone class in javascript 
// limiting the instantiation of the class to single instances
// to create calling the class constructor immediately 


//! currying question:

//? 1 what is curring with example

//? 2 how to construct the curring  (constructed using the closure chaining)
// (currying are constructed by chaining  closure by immediately returning inner function simultaneously )

//? 3 what is used of function currying or why should we used function currying :

//? 4 How many way to currying happen ?
// 2 way to currying happen in javascript (using closure and using bind() method)

//? 5 Give the example fo currying using the bind() method approach

//? 6  how to create infinite currying x   
// (i,e take infinite number of arguments.)

//? 7 what is difference between the function currying and partial application 

//? 8 what is partial application in javascript or function currying?

//? 9 what does the partial application 
// it transform function in to another newer function with few argument (or small arity) by pre-filling of fixing some number of argument 
// also partial application reduce the arity of original function by fixing the some of its argument and returning new function with smaller arity 

 //? 10 write a curry function to convert the f(a,b,c) function into the f(a)(a)(c) currying function


 //! apply call and bind() method 

//? 1.what is used of the apply() call() and bind() method in javascript 
// used to done explicit binding with this keyword
// used to explicitly set the value of this when invoking the function also control this value within a function or execution context of function
// also borrow the method form an object and used them into another object 
// tie a function with object and this function used with that object 
// this method are used the manipulation of this keyword in javascript function


//? 2.what is call method ?
// invoke the function with specified this value and argument pass as individually

//? 3 what is apply method?
// apply() method invoked the function with specified this value and pass argument as an array or array like object

//? 4 what it bind() method 
// bind() method return new function with specified this value and optionally pre-set or pre-filled argument  but unlike call and apply() method it does not invoke immediately
// but create bind function that can be call later. 

//? create the polyfill of the call() apply() and bind() method ;

//? what is differences between all() apply() and bind() method :

//? it is possible to do call(), apply() and bind() method with arrow function
// it is not possible because the call() apply() and bind() method allow use to  bind the explicitly this keyword in function execution context
// so arrow function does not have its own this it refer to the window object so this why it is not possible 


//! Debouncing related question 

//? what is debouncing explain with example  

//? which is better to used debouncing or throttling 

//? what is differences between debouncing or throttling 

//? write the polyfill of the debouncing 

//? write the polyfill of the throttling

//? what is throttling explain with example 


//! promise 

//? what is promise explain

//? how to consume the promise

//? How to create promise 

//? what are the states are present in promise 

//? it is possible to create the promise by defining the promise (yes you have to defined a function that return the promise because this function encapsulate some asynchronous operation so create promise and handled the promised)

//? how to call promise recursively 