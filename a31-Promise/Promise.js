//? What is promise in javascript
// Promise is good way to handle asynchronous operation
// promise is like a placeholder for the result of an asynchronous operation
// promise in javascript is an object that represent the eventual completion or failure of an asynchronous operation and  it resulting value
// Promises provide a structured way to handle asynchronous tasks and offer significant advantages over traditional callbacks.
//  Here's they are cleaner and structured way to help avoid "callback hell":
// Promises provide a cleaner way to chain asynchronous tasks, reducing nesting.
// A promise is javascript object that like producing code and consuming code (Producing code means that code take some time)(Consuming code means code that must wait for a result)
//  Promise basically represented the upcoming completion or a failure of an asynchronous event and its resulting value.
// in javascript promise is an objects that encapsulates the result of an Synchronous operation

// 5.Promised having 3 conditions or state.
//  Pending
// Fulfilled with value (resolved)
// Rejected. For a reason
//! promise have built in method like then and catch to handle the result of asynchronous operation when they complete or encounter the error
// .you must need used promise method to handle promise.then (dot then used to handle promise)
// Promise.then() method with two arguments: one for success and one for failure.

//? How .then() Works
// Promise.then(onFulfilled, onRejected):
// First argument: A function to handle the success (fulfilled value).
// Second argument (optional): A function to handle the failure (rejected reason).
// .catch():
// If you want to handle failures separately, you can also use .catch().

//! NOTE
// - In the beginning  the state of the promise is pending, indicating the asynchronous operation is in process. (promise object is pending  → result is undefined)
//  - depending upon the result of the asynchronous operation state change either fulfilled or rejected.
// - So the fulfilled state indicates that asynchronous operation was completely successful.(When the promise object is fulfilled → result is value)
// - So the rejected state indicates that the asynchronous operation failed (When the promise object is rejected the result → is an error object )

//| CREATE PROMISE
// create promise object used promise() constructor this involves creating a new instances of the promise class, which take function often referred to as the execution function
//  Promise constructor accept the callback function(with 2 argument resolved and rejected) that typically perform asynchronous operation (callback function often referred as executer)

const sub = new Promise((resolved, reject) => {
  setTimeout(() => {
    const result = true;
    if (result) {
      resolved("fetch the data");
    } else {
      // reject('error to fetching data')
      reject(new Error("why we are subscripted to the channel"));
    }
  }, 100);
});
// 1.to run or execute the promise using the .then()
// 2. then() means promise is fulfilled
// 3. if the fail then the promise is not fairfield then we can get the result in catch
sub
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

console.log(sub);

// Note :
// then() used to get result when the promise fulfilled
// cath() used the get the error when failed the promise

//? how you have defined the promise directly resolved or rejected
const data = Promise.resolve("welcome to the javascript promise");
data
  .then((res) => console.log(res))
  .catch((err) => {
    console.log(err);
  });

const data1 = Promise.reject("data are rejected");
data1
  .then((res) => console.log(res))
  .catch((err) => {
    console.log(err);
  });

//! you can also create a promise by defining a function that return a promise this function usually encapsulate some asynchronous operation inside this function you manually create a promise and resolve or reject it based on the result of asynchronous operation

// example 2
function importantAction(uses_name) {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      resolved(`${uses_name}`);
    }, 0);
  });
}
function likeVideo(video) {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      resolved(`${video}`);
    });
  }, 1000);
}

function sharedVideo(shared) {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      resolved(`${shared}`);
    });
  });
}
importantAction("vishal").then((action) => {
  console.log(action);
});
likeVideo("javascript interview video").then((res) => {
  console.log(res);
});
sharedVideo("javascript video")
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

// NOTE :
// 1. Promises can not go from fulfilled state to the rejected state and vice versa  and it can not go back from fulfilled or rejected state to the pending state.
// 2. Once new promise object created it state is pending
// 3. If promise reaches state is fulfilled or rejected, state if resolved

//? How to consuming the promise :
// 1. Then :
// 1. Get the value of promise when it fullfil you can call then() method of the promise object
// 2. Promise.then(onFulfilled, onReacted)
// 3. then method accept 2 callback function first one is onFullFiled and second one is onRejected
// 4. then method call onFullFilled callback function with value when the promise is fulfilled, on rejected with an error if the promise rejected
// 5. both the argument are optional.
// 2. catch
// 1. If you want to get an error only when the state of the promise is rejected you can use the catch() method of the promise object.
// 2. Promise.catch(onRejected); (The catch method invokes the then(undefined, onRejected)  method.)
// 3 finally
// 1. Sometimes you want to execute the same pieces of code whether the promise is fulfilled or rejected.
//  2. To implement the finally method, which is called after the promise has been settled (whether it was fulfilled or rejected), you can simply add the .finally() method after the .then() chain.

// example
let success = false;
function getUser() {
  return new Promise((resolved, reject) => {
    if (success) {
      setTimeout(() => {
        resolved([
          {
            username: "vishal",
            email: "shindev05@gmail.com",
          },
          {
            username: "shinde",
            email: "test@gamil.com",
          },
        ]);
      });
    } else {
      reject("failed to load data");
    }
  });
}

function onFulfilled(user) {
  console.log(user);
}

function onRejected(error) {
  console.log("error", error);
}

// getUser().then((onFulfilled)=>{
//     return onFulfilled.map((ele, index)=>{
// console.log("ele", index, ele);
//     })
// })
getUser()
  .then(onFulfilled, onRejected)
  .finally(() => {
    console.log(
      "Promise settled (fulfilled or rejected). Cleanup actions can be performed here "
    );
  });
// First define the onFulfilled function to be called when a promise is fulfilled
// Second  call the getUsers () function to get promise object
// Third, call the method of the promise object and output the user list on the console.

//| Summary
// Promise is an object then encapsulate the result of an synchronous operation
// A promise starts with a pending state and ends with either a fulfilled state or rejected state.
// Used then() method schedules or handles a promise by giving  a callback to be executed when the promise is fulfilled and catch method to schedule callback to be invoked when the promise is rejected.
// Place the code that you want to execute in the final method whether the promise is fulfilled or rejected .

//? how to solved promise recursively :

// 1. It's the process in which a function repeatedly calls itself until a condition is met that makes it stop.
// 2. Recursion is the technique of making a function call itself.  (A recursive function is a function that calls itself during its execution)

function importantAction(user_name) {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      resolved(`subscribed to the ${user_name}`);
    }, 500);
  });
}
function likeVideo(video) {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      resolved(`like the video ${video}`);
    }, 100);
  });
}
function sharedVideo(shared) {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      resolved(`share the video ${shared}`);
    }, 2000);
  });
}
// first you have to define function to handled the promises
promiseRecursively([
  importantAction("vishal"),
  likeVideo("node js"),
  sharedVideo("javascript"),
]);

function promiseRecursively(functionPromise) {
  if (functionPromise.length === 0) return;
  const currentPromise = functionPromise.shift(); // remove the first element form the array and return this element
  currentPromise
    .then((res) => {
      console.log("result", res);
    })
    .catch((error) => {
      console.log("error", error);
    });
  promiseRecursively(functionPromise);
}

//| here we demo-strate how to convert call back code into the promise
//! example  of call back hell

console.log("start");
function importantAction(username, callback) {
  setTimeout(() => {
    callback(`welcome ${username}`);
  }, 1000);
}
function likeTheVideo(video, callback) {
  setTimeout(() => {
    callback(`please like the video ${video}`);
  }, 500);
}
function shareVideo(videotaped, callBack) {
  setTimeout(() => {
    callBack(`please share the video ${videotaped}`);
  }, 300);
}

//! callback chaining
importantAction("vishal", function (username) {
  console.log(username);
  likeTheVideo("javascript", function (message) {
    console.log(message);
    shareVideo("node js", function (message) {
      console.log(message);
    });
  });
});


// so call back face the issue of callback hell 


//   ||
//   ||
// convert into the promise :
console.log("start");
//! remove the callback and defined the promise and inside the settimeout resolved the promise.
function importantAction(userName) {
  return Promise((resolved, reject) => {
    setTimeout(() => {
      resolved(`subscript to the ${userName}`);
    }, 0);
  });
}

function likeTheVideo(video) {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      resolved(`like the Given ${video} video`);
    }, 0);
  });
}

function shareVideo(video) {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      resolved(`share the give ${video}`);
    }, 0);
  });
}
console.log("stop");

// here we have to handled the promise 

importantAction('vishal').then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})

likeTheVideo('vishal').then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})

shareVideo('vishal').then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})

// While your approach works fine for independent promises, if you want to run these promises in a sequential manner, meaning you want to wait for one promise to complete before starting the next one, you can chain the promises like this:

// ----------------------------------------------------------------------------

// approach 2
importantAction("vishal")
  .then((res) => {
    console.log(res);
    likeTheVideo("javascript")
      .then((res) => {
        console.log(res);
        shareVideo("node js")
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });

  // which happens when you nest multiple .then() then and catch calls within each other. This makes the code harder to maintain and debug.
// or create pyramid like structure.

//  so above code you also defined in a following way both are same but just instead of each and every function return catch block you have return common catch block for all promise or function
// so 
// this is much cleaner and structured approach here we are not pass (callback) function as an argument here we can do just .then() and pass next  another action and at the end we have error handling
//solution 3
importantAction('vishal').then((res)=>{
    console.log(res);
    likeTheVideo('like javascript interview').then((res)=>{
        console.log(res);
        shareVideo('javascript interview video').then((res)=>{
            console.log(res)
        })
    })
}).catch((err)=>{
    console.log(err)
})
//!explanation :
// importantAction('vishal') resolves, and its result is logged.
// Once importantAction resolves, you call likeTheVideo('like javascript interview') in the next .then(), and once that resolves, you call shareVideo('javascript interview video').
// Each .then() returns a promise and, upon resolution, logs the result.
// but it still uses nested .then() blocks, which can quickly become harder to manage and read as more asynchronous tasks are added.
// so in above code show the pyramid like structure then why we deal with promise facing again pyramid like structure  or promise hell issue here we have nested promise make code more hard to understand 
// This works fine for small tasks, but as the complexity increases (more tasks or nested functions), the nesting could get deep, which might lead to harder-to-read and maintain code
// don't worry we have more then one approach in promises to do this in for promise chaining 
// first we have to call the first promise so this first promise return new promise (which is next promise)  once we return new promise then we chaining the another .then() to resolved the promise

// cleaner approach (avoiding deep nesting):
//! You can flatten the promise chain to avoid nesting:
importantAction('vishal').then((res)=>{
    console.log(res);
    // here it return new promise like 
    return likeTheVideo(('javascript interview question'))
    // then we chaining another then() to resolved the promise
}).then((res)=>{
    console.log(res);
    // then this return another new promise like 
    shareVideo('javascript interview question')
    // then we chaining the another then to resolved the promise
}).then((res)=>{
    console.lot(res);
    // then at the end we have handled the error using catch
}).catch((err)=>{
    console.log(err)
})

//! execution flow of above code 
// . Initial importantAction Promise:
// importantAction('vishal')
// The function importantAction('vishal') returns a Promise.
// This promise is asynchronous and takes some time to resolve or reject.
// The then() method attaches a callback function to be executed when the promise is resolved (i.e., when importantAction completes its task).

//! First .then() Call:
// After the importantAction promise resolves, the result (res) is passed to this .then() callback.
// The console.log(res) will print the result of importantAction('vishal') (e.g., something like "subscribed to vishal").
// Once console.log executes, it proceeds to the next asynchronous task: likeTheVideo('like javascript interview').

//! Second likeTheVideo Promise:
// After importantAction completes, likeTheVideo is called, which also returns a Promise.
// Since likeTheVideo is asynchronous, it will be executed in the background and the code continues executing until it resolves.
// Once likeTheVideo resolves, the result is passed to the next .then() block.

//! Second .then() Call:
// When the likeTheVideo promise resolves, its result (res) is passed to this .then() callback.
// The result (e.g., "liked the given like javascript interview video") will be logged using console.log(res).
// Once this completes, it proceeds to the next asynchronous task: shareVideo('javascript interview video').

//! Third shareVideo Promise:
// The function shareVideo is called, which also returns a Promise.
// This promise will be resolved once the asynchronous operation inside shareVideo completes.

//! Third .then() Call:
// After shareVideo resolves, its result (res) is passed to this .then() callback.
// The result (e.g., "shared the given javascript interview video") will be logged using console.log(res).

//!  Catching Errors with .catch():
// f any of the promises (importantAction, likeTheVideo, or shareVideo) are rejected (i.e., they throw an error), the error will be passed to the .catch() block.
// .catch() will log the error using console.log(err).
// This ensures that if there’s an issue with any of the promises (e.g., network error, invalid data, etc.), you can handle it gracefully and prevent unhandled promise rejection errors

//? Why Use .then() Chaining?
//! Sequential Execution: Each task (e.g., likeTheVideo, shareVideo) starts only after the previous task has completed. 
// This ensures tasks are executed in the desired order.
//! Asynchronous Nature: 
// Even though tasks are executed one after another, the asynchronous operations (e.g., network requests, timeouts) don’t block the main thread, allowing the application to remain responsive.
//! Error Handling:
//  Using .catch() at the end of the chain allows you to handle errors from any of the promises in a single place. This prevents the need for multiple .catch() blocks nested inside each .then().

//! Chaining: You chain .then() calls to execute asynchronous tasks one after another:
// First, importantAction('vishal') is called, then the .then() callback executes.
// Then likeTheVideo is called in the first .then(), and its result is passed to the next .then().
// Finally, shareVideo is called, and the result is logged in the final .then().

// so above concept is call as promises chaining 
// Cleaner Structure: The promise chain is flatter, making it easier to read.
// Simplified Flow: Each .then() simply returns the next promise, which helps keep things organized. so flattened promise chain improves readability and maintainability.
// Single Error Handler: With a flat structure, you only need one .catch() to handle any errors from the entire chain.


// importantAction('vishal')  ──> Resolves with: "subscribed to vishal"
//     │
//     └─> passes to .then() ──> likeTheVideo('like javascript interview')
// .then() (res = "subscribed to vishal")
// │
// └─> passes to likeTheVideo('like javascript interview') ──> Resolves with: "liked the given javascript interview video"
//        │
//        └─> passes to .then() ──> shareVideo('javascript interview video')
// .then() (res = "liked the given javascript interview video")
// │
// └─> passes to shareVideo('javascript interview video') ──> Resolves with: "shared the given javascript interview video"
//        │
//        └─> logs result: "shared the given javascript interview video"

// importantAction('vishal') resolves first with "subscribed to vishal", and this value is passed to likeTheVideo.
// likeTheVideo('like javascript interview') resolves with "liked the given javascript interview video", and this value is passed to shareVideo.
// shareVideo('javascript interview video') resolves with "shared the given javascript interview video", and this value is logged.
// Each promise passes its result to the next promise in the chain.


//! When any promise in a promise chain is rejected,:
// any promise in a promise chain is rejected, it immediately skips all subsequent .then() handlers and jumps to the nearest .catch() block that handles the error.
// Start
// │
// V
// importantAction('vishal') ───> Resolves with: "subscribed to vishal"
//                                  │
//                                  └──> passes to .then() → likeTheVideo('like javascript interview')
//                                                               └──> Rejects with: "Video not found"
//                                                                                   │
//                                                                                   └──> Skips further .then() calls
//                                                                                       │
//                                                                                       └──> Goes to .catch() → logs "Error caught: Video not found"


//? why we are calling the promise chaining ?
// so the when chaining this promises returning the new promise and then we are chaining another promise one after the another as we return the value for the previous promise then we pass result to the next promise so each promise depends upon each other.
// Promise chaining refers to the way promises can be linked together, one after another. 
// Each .then() or .catch() method attached to a promise returns a new promise, 
// and that returned promise can be chained with the next .then() call to continue the sequence of asynchronous operations

//! so also you this about you code this is pretty lengthy way of doing it so here we have one approach is call as promise combinator. which are make our work super easy 
// different promises, the code can become lengthy and harder to maintain. The code becomes more verbose, especially when you have several asynchronous operations that depend on each other. This is where combinator (such as Promise.all(), Promise.allSettled(), Promise.race(), or async/await) can be helpful, making the code shorter, cleaner, and more readable.




//! Promise combinator ""

// These combinator make it easier to manage multiple asynchronous operations and control how you handle their results or failures.
// In JavaScript, a promise combinator is a pattern or function used to combine multiple promises, allowing you to handle the resolution or rejection of all or some of those promises in a structured way. 
// Promise combinator are especially useful when you need to work with multiple asynchronous operations and want to control how they resolve or reject.
// Promise.all()
//Promise.allSettled()
// Promise.race()
// Promise.any()

//Promise combinator in JavaScript allow you to:
// Handle multiple promises in parallel with Promise.all().
// Get results for all promises, even if some reject, with Promise.allSettled().
// Resolve as soon as the first promise resolves or rejects with Promise.race().
// Resolve when any promise succeeds, but reject if all fail with Promise.any().