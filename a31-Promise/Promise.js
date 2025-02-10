//? What is promise in javascript
// Promise is good way to handle asynchronous operation
// promise is like a placeholder for the result of an asynchronous operation
// - promise in javascript is an object that represent the eventual completion or failure of an asynchronous operation and with it resulting value
// - Promises provide a structured way to handle asynchronous tasks and offer significant advantages over traditional callbacks.
//  Here's they are cleaner and structured way to help avoid "callback hell":
// Promises provide a cleaner way to chain asynchronous tasks, reducing nesting.
// A promise is javascript object that like producing code and consuming code (Producing code means that code take some time)(Consuming code means code that must wait for a result)
//  Promise basically represented the upcoming completion or a failure of an asynchronous event and its resulting value.
// in javascript promise is an objects that encapsulates the result of an Synchronous operation

// 5.Promised having 3 conditions or state.
//  Pending
// Fulfilled with value (resolved)
// Rejected. For a reason
//- promise have built in method like then and catch to handle the result of asynchronous operation when they complete or encounter the error
// .you must need used promise method to handle promise.then (dot then used to handle promise)
// Promise.then() method with two arguments: one for success and one for failure.

//? How .then() Works
// Promise.then(onFulfilled, onRejected):
// First argument: A function to handle the success (fulfilled value).
// Second argument (optional): A function to handle the failure (rejected reason).
// .catch():
// If you want to handle failures separately, you can also use .catch().

//- NOTE
// In the beginning  the state of the promise is pending, indicating the asynchronous operation is in process. (promise object is pending  → result is undefined)
//  depending upon the result of the asynchronous operation state change either fulfilled or rejected.
// So the fulfilled state indicates that asynchronous operation was completely successful.(When the promise object is fulfilled → result is value)
// So the rejected state indicates that the asynchronous operation failed (When the promise object is rejected the result → is an error object )

//- CREATE PROMISE
// create promise object used Promise() constructor
// this involves creating a new instances of the promise class, which take function often referred to as the execution function
//  Promise constructor accept the callback function(with 2 argument resolved and rejected) that typically perform asynchronous operation (callback function often referred as executer)
// In a Promise object, resolve and reject are functions used to determine the final state of the promise:
// resolve(value) – Marks the promise as fulfilled and returns the provided value to the .then() method.
// reject(error) – Marks the promise as rejected and passes the error to the .catch() method for handling.
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
//- Note :
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

// ? you can also create a promise by defining a function that return a promise this function usually encapsulate some asynchronous operation inside this function you manually create a promise and resolve or reject it based on the result of asynchronous operation

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
}).then((result)=>{
  console.log(result)
}).catch((error)=>{
  console.log(error)
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

//- NOTE :
// 1. Promises can not go from fulfilled state to the rejected state and vice versa  and it can not go back from fulfilled or rejected state to the pending state.
// 2. Once new promise object created it state is pending
// 3. If promise reaches state is fulfilled or rejected, state if resolved

//? How to consuming the promise :
// then() Method:
// The then() method is used to handle the result of a Promise once it has been fulfilled (resolved) or rejected.
// Syntax: Promise.then(onFulfilled, onRejected)
// then() accepts two callback functions:
// onFulfilled: This function is called when the promise is fulfilled (resolved).
// onRejected: This function is called when the promise is rejected.
// Both callbacks are optional, meaning you can provide either or both of them.

// 2. catch() Method:
// The catch() method is used to handle errors when a promise is rejected.
// Syntax: Promise.catch(onRejected)
// catch() is essentially shorthand for then(undefined, onRejected).
// It is used when you are only interested in handling the rejection and not the fulfillment of the promise.

// 3. finally() Method:
// The finally() method is used to execute a block of code after the promise has settled, regardless of whether it was fulfilled or rejected.
// Syntax: Promise.finally(onSettled)
// The code inside finally() will run after the promise settles, and it will run regardless of whether the promise was fulfilled or rejected.



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


//# Summary
// Promise is an object then encapsulate the result of an synchronous operation
// promise give trust and garrunty for your whole transaction
// promise object are immutable (Yes, Promise objects are immutable, meaning that once a Promise is settled (resolved or rejected), its state cannot change) also The .then(), .catch(), and .finally() methods allow you to handle the result, but they don’t change the original Promise.
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

// =================================================== callback concept ===========================================================


//? example  of call back and how to occurred callback hell 
// first :
//-why Callbacks are essential in JavaScript (and other asynchronous programming languages) because they allow you to handle asynchronous operations efficiently without blocking the main execution flow of your program. Here's why callbacks are needed:
// 1. Handling Asynchronous Operations:
// JavaScript is single-threaded, which means it can only execute one task at a time. Many tasks (like reading files, making API requests, or waiting for user input) take time to complete. 
// Instead of blocking the entire program while waiting for these tasks to finish, you use callbacks to specify what should happen once the operation is complete.

//- Without a callback: The program would halt and wait for the API request to return.
// When you write synchronous code, the program executes each statement one after the other in a linear fashion. If there's a time-consuming task, like an API call, the program will pause at that line and wait until it gets the result. Once the result is returned, it moves on to the next line of code.
Example: function fetchUserData() {
  const userData = { name: "John", age: 30 }; // Imagine this data comes from an API
  console.log("User data fetched:", userData);
  return userData; // Returning data after processing
}

console.log("Start fetching user data...");
const user = fetchUserData(); // This is a synchronous call
console.log("Fetched user:", user); // This line is waiting for the function to complete
console.log("End of program...");

//- With a callback: The program continues executing other code while the API request is being processed. Once the request finishes, the callback is executed with the result
function fetchUserData(callback) {
  setTimeout(() => {
    const userData = { name: "John", age: 30 }; // Imagine this data comes from an API
    callback(userData); // Call the callback with the fetched data
  }, 2000); // Simulating a 2-second delay to mimic an API call
}
console.log("Start fetching user data...");
// Function with a callback
fetchUserData((user) => {
  console.log("User data fetched:", user); // This logs once the data is ready
});
console.log("End of program...");

//#
// so here callback are used to handled the asynchronous operation in your code.
//  but Multiple Asynchronous Operations Depend on Each Other: 
// If you have several asynchronous operations that need to run in sequence and each one depends on the result of the previous operation,
// so you end up nesting callbacks within each other, which makes the code difficult to follow.
// so Callback hell occurs when you have multiple nested callbacks, especially in asynchronous code, and the code becomes hard to read, maintain, and debug. It usually happens when:

console.log("start");

function importantAction(username, callback) {
  setTimeout(() => {
    console.log(`Starting action for ${username}`);
    callback(username); // Pass the result to the next callback
  }, 1000);
}

function likeTheVideo(username, video, callback) {
  setTimeout(() => {
    console.log(`Liking video: ${video} for ${username}`);
    callback(username, video); // Pass the result to the next callback
  }, 500);
}

function shareVideo(username, video, callback) {
  setTimeout(() => {
    console.log(`Sharing video: ${video} for ${username}`);
    callback(username, video); // Final callback
  }, 300);
}

// Chain the asynchronous calls, passing the result from one function to the next.
importantAction("vishal", function (username) {
  likeTheVideo(username, "javascript", function (username, video) {
    shareVideo(username, video, function (username, video) {
      console.log(`All actions completed for ${username} with video ${video}`);
    });
  });
});

// 1 Callback hell refers to a situation in programming where callbacks are nested within each other, creating a deep, pyramidal structure. This makes the code harder to read, understand, maintain, and debug. 
// It is especially common in JavaScript, where asynchronous operations (like handling network requests, timers, or file I/O) require callbacks to handle the results.

//? so call back face the issue of callback hell
// Issues with Callback Hell:
// 1. Indentation and Readability (it create nested structure): As the level of nesting increases, the code becomes more difficult to read and maintain.
// 2. Error Handling: Managing errors at every level of nesting becomes complicated
// 3. Reusability: The functions are tightly coupled, making them difficult to reuse in different contexts.
// 4. Readability: The code is difficult to read because of the deep nesting.
// 5. Maintainability: As more features are added, maintaining the code becomes complicated due to the complex structure.
// 6. Reusability: It's harder to reuse functions, as the logic is tied up in deeply nested callbacks.
//   ||
//   ||
// convert into the promise :
console.log("start");
//- remove the callback and defined the promise and inside the settimeout resolved the promise.
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

//- here we have to handled the promise
importantAction("vishal")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

likeTheVideo("vishal")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

shareVideo("vishal")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
// 1. While your approach works fine for independent promises, 
// 2. handling the promises separately in the current code. 
// 3. Each function (importantAction, likeTheVideo, and shareVideo) returns a promise, and then you use .then() and .catch() to handle the resolved or rejected values independently for each one.

// ? if i want to run these promises in a sequential manner,
// 1.  meaning you want to wait for one promise to complete before starting the next one, you can chain the promises like this:
// 2. the approach you've shared is running the promises sequentially by chaining .then() calls. This way, each promise waits for the previous one to complete before starting the next one.
// - approach 2
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
  // 1. However, this approach can become difficult to maintain and read as the number of chained promises grows, which is often referred to as "callback hell" or "promise hell." 
// 2.  which happens when you nest multiple .then() then and catch calls within each other. 
// 3. This makes the code harder to maintain and debug. create pyramid like structure.
// 4. so above code you also defined in a following way both are same but just instead of each and every function return catch block you have return common catch block for all promise or function
// 5. this is much cleaner and structured approach here we are not pass (callback) function as an argument here we can do just .then() and pass next another action and at the end we have error handling
//solution 3
importantAction("vishal")
  .then((res) => {
    console.log(res);
    likeTheVideo("like javascript interview").then((res) => {
      console.log(res);
      shareVideo("javascript interview video").then((res) => {
        console.log(res);
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });
//- explanation :
// 1. importantAction('vishal') resolves, and its result is logged.
// 2. Once importantAction resolves, you call likeTheVideo('like javascript interview') in the next .then(), 
// 3. and once that resolves, you call shareVideo('javascript interview video').
// 4. Each .then() returns a promise and, upon resolution, logs the result.
// 5. but it still uses nested .then() blocks, which can quickly become harder to manage and read as more asynchronous tasks are added.
// 6. so in above code show the pyramid like structure then why we deal with promise facing again pyramid like structure or promise hell issue here we have nested promise make code more hard to understand
// 7. This works fine for small tasks, but as the complexity increases (more tasks or nested functions), the nesting could get deep, which might lead to harder-to-read and maintain code
// 8. don't worry we have more then one approach in promises to do this in for promise chaining
// 9. first we have to call the first promise so this first promise return new promise (which is next promise) once we return new promise then we chaining the another .then() to resolved the promise
//  - cleaner approach (avoiding deep nesting):
//- You can flatten the promise chain to avoid nesting:
importantAction("vishal")
  .then((res) => {
    console.log(res);
    // here it return new promise like
    return likeTheVideo("javascript interview question");
    // then we chaining another then() to resolved the promise
  })
  .then((res) => {
    console.log(res);
    // then this return another new promise like
    shareVideo("javascript interview question");
    // then we chaining the another then to resolved the promise
  })
  .then((res) => {
    console.lot(res);
    // then at the end we have handled the error using catch
  })
  .catch((err) => {
    console.log(err);
  });
//!- execution flow of above code
// . Initial importantAction Promise:
// 1. importantAction('vishal')
// The function importantAction('vishal') returns a Promise.
// This promise is asynchronous and takes some time to resolve or reject.
// The then() method attaches a callback function to be executed when the promise is resolved (i.e., when importantAction completes its task).
// 1. First .then() Call:
// After the importantAction promise resolves, the result (res) is passed to this .then() callback.
// The console.log(res) will print the result of importantAction('vishal') (e.g., something like "subscribed to vishal").
// Once console.log executes, it proceeds to the next asynchronous task: likeTheVideo('like javascript interview').
// 2.  Second likeTheVideo Promise:
// After importantAction completes, likeTheVideo is called, which also returns a Promise.
// Since likeTheVideo is asynchronous, it will be executed in the background and the code continues executing until it resolves.
// Once likeTheVideo resolves, the result is passed to the next .then() block.
// 2. Second .then() Call:
// When the likeTheVideo promise resolves, its result (res) is passed to this .then() callback.
// The result (e.g., "liked the given like javascript interview video") will be logged using console.log(res).
// Once this completes, it proceeds to the next asynchronous task: shareVideo('javascript interview video').
// 3. Third shareVideo Promise:
// The function shareVideo is called, which also returns a Promise.
// This promise will be resolved once the asynchronous operation inside shareVideo completes.
// 3. Third .then() Call:
// After shareVideo resolves, its result (res) is passed to this .then() callback.
//  The result (e.g., "shared the given javascript interview video") will be logged using console.log(res).
// -  Catching Errors with .catch():
// 1. if any of the promises (importantAction, likeTheVideo, or shareVideo) are rejected (i.e., they throw an error), the error will be passed to the .catch() block.
// 2. catch() will log the error using console.log(err).
// This ensures that if there’s an issue with any of the promises (e.g., network error, invalid data, etc.), you can handle it gracefully and prevent unhandled promise rejection errors

//? Why Use .then() Chaining?
//- Sequential Execution: Each task (e.g., likeTheVideo, shareVideo) starts only after the previous task has completed.
// This ensures tasks are executed in the desired order.
//- Asynchronous Nature:
// Even though tasks are executed one after another, the asynchronous operations (e.g., network requests, timeouts) don’t block the main thread, allowing the application to remain responsive.
//- Error Handling:
//  Using .catch() at the end of the chain allows you to handle errors from any of the promises in a single place. This prevents the need for multiple .catch() blocks nested inside each .then().

//? Chaining: You chain .then() calls to execute asynchronous tasks one after another:
// 1. First, importantAction('vishal') is called, then the .then() callback executes.
// 2. Then likeTheVideo is called in the first .then(), and its result is passed to the next .then().
// 3. Finally, shareVideo is called, and the result is logged in the final .then().
// - so above concept is call as promises chaining
// Cleaner Structure: The promise chain is flatter,  making it easier to read.
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

// 1. importantAction('vishal') resolves first with "subscribed to vishal", and this value is passed to likeTheVideo.
// 2. likeTheVideo('like javascript interview') resolves with "liked the given javascript interview video", and this value is passed to shareVideo.
// 3. shareVideo('javascript interview video') resolves with "shared the given javascript interview video", and this value is logged.
// 4. Each promise passes its result to the next promise in the chain.

//? What happen any promise in a promise chain is rejected,:
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
//       
//                                                                                 └──> Goes to .catch() → logs "Error caught: Video not found"


//? why we are calling the promise chaining ?
// 1. We use Promise chaining to handle multiple asynchronous operations in a sequential manner while maintaining readability and avoiding deeply nested callbacks (callback hell).
// Why Use Promise Chaining?
// 1. Sequential Execution
// Ensures that one asynchronous operation completes before the next one starts.
// Example: Fetch user details → Get user orders → Process order payments.
// 2. Avoid Callback Hell
// Without chaining, nested callbacks can become hard to read and maintain.
// Promise chaining keeps code flat and structured.
// 3. Error Handling Simplification
// A single .catch() at the end of the chain can handle errors for all previous promises.
// 4. Improved Readability
// Code flows top to bottom, making it easier to understand.

// 1. so the when chaining this promises returning the new promise and then we are chaining another promise one after the another as we return the value for the previous promise then we pass result to the next promise so each promise depends upon each other.
// 2. Promise chaining refers to the way promises can be linked together, one after another.
// 3. Each .then() or .catch() method attached to a promise returns a new promise,
// and that returned promise can be chained with the next .then() call to continue the sequence of asynchronous operations
//- so also you this about you code this is pretty lengthy way of doing it so here we have one approach is call as promise combinator. which are make our work super easy
// different promises, the code can become lengthy and harder to maintain. The code becomes more verbose, especially when you have several asynchronous operations that depend on each other. This is where combinator (such as Promise.all(), Promise.allSettled(), Promise.race(), or async/await) can be helpful, making the code shorter, cleaner, and more readable.


//? what are the advantages of the promise:
// -Promises in JavaScript provide asynchronous execution, improved readability, better error handling, chaining for sequential operations, and avoidance of callback hell.

// Here are the advantages of Promises in JavaScript, each explained separately:
// 1. Asynchronous Execution – Promises allow non-blocking code execution, enabling the program to continue running while waiting for an operation to complete.
// 2. Improved Readability – Promises make asynchronous code more readable and structured compared to nested callbacks.
// 3. Better Error Handling – Errors can be caught using .catch(), making debugging and handling failures easier.
// 4. Chaining for Sequential Operations – Multiple asynchronous tasks can be executed in a sequence using .then(), avoiding deeply nested callbacks.
// 5. Avoidance of Callback Hell – Promises prevent excessive nesting of callbacks, making the code cleaner and more maintainable.
// 6. solved the issue of the inversion of control 








// ==================================================================================================================================
// # promise combinator. (promise Api)
// ==================================================================================================================================
// ? what is promise combinator in javascript or what is promise api ?
// The Promise API in JavaScript provides methods to work with multiple Promises efficiently. Promises help manage asynchronous operations and avoid callback hell.

// - A promise combinator is a function or method in JavaScript that allows you to work with multiple promises simultaneously, combining their results or handling their outcomes collectively (They help in running multiple asynchronous tasks in parallel or managing their results efficiently.)
//- Promise combinator :
// 1. These combinator make it easier to manage multiple asynchronous operations and control how you handle their results or failures.
// 2. In JavaScript, a promise combinator is a pattern or function used to combine multiple promises, allowing you to handle the resolution or rejection of all or some of those promises in a structured way.
// 3. Promise combinator are especially useful when you need to work with multiple asynchronous operations and want to control how they resolve or reject.

// 1. Promise.all() :
// Runs multiple promises in parallel.
// Resolves when all promises succeed.
// Rejects immediately if any promise fails

// 2. Promise.allSettled():
// Waits for all promises to settle (resolve or reject).
// Returns an array of objects { status, value/reason } for each promise.

// 3. Promise.race()
// Resolves or rejects as soon as one promise settles.

// 4. Promise.any():
// Resolves with the first fulfilled promise.
// Ignores rejections unless all promises fail. (if reject all promise it return aggregation error)

// ? why was the promise api (or combinator ) introduced 
// before the promise javascript handled the asynchronous operation using callback so callback had several problem leading to the introduction of promises and later the promise api 

// while basic promise solved many issues handling multiple efficiently still needed improvement the promise api was introduce 
// 1. handle multiple promise at once
// 2. Handle bot success and failure cases
// 3. Get the first resolved promise
// 4. Get the first successful promise
