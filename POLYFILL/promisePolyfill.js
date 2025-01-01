// polyfill of promise

function myPromise(executor) {
  // Variables to store success and failure handlers
  let onResolved; // Will hold the callback for the resolve case
  let onRejected; // Will hold the callback for the reject case
  let isFulfilled = false; // Tracks if resolve has been called
  let isRejected = false; // Tracks if reject has been called
  let isCalled = false; // Prevents multiple calls to handlers
  let value; // Stores the resolved value
  let error; // Stores the rejected error

  // Method to register the resolve handler
  this.then = function (callback) {
    // Assign the callback to onResolved
    onResolved = callback;
    // If the promise was already fulfilled, call the handler immediately
    if (isFulfilled && !isCalled) {
      isCalled = true;
      onResolved(value);
    }
    // Allow chaining by returning the same promise object
    return this;
  };

  // Method to register the reject handler
  this.catch = function (callback) {
    // Assign the callback to onRejected
    onRejected = callback;
    // If the promise was already rejected, call the handler immediately
    if (isRejected && !isCalled) {
      isCalled = true;
      onRejected(error);
    }
    // Allow chaining by returning the same promise object
    return this;
  };

  // Resolve function to handle successful async operation
  function resolve(result) {
    // If there's a registered success handler and it hasn't been called yet
    if (typeof onResolved === "function" && !isCalled) {
      onResolved(result);
      isCalled = true;
    } else {
      // If no handler is registered yet, store the result
      value = result;
      isFulfilled = true;
    }
  }

  // Reject function to handle failed async operation
  function reject(err) {
    // If there's a registered failure handler and it hasn't been called yet
    if (typeof onRejected === "function" && !isCalled) {
      onRejected(err);
      isCalled = true;
    } else {
      // If no handler is registered yet, store the error
      error = err;
      isRejected = true;
    }
  }

  // Immediately invoke the executor function with resolve and reject
  try {
    executor(resolve, reject);
  } catch (err) {
    // If an error occurs in the executor, reject the promise
    reject(err);
  }
}

// Example usage
const newPromise = new myPromise((resolve, reject) => {
  // Simulate an asynchronous operation
  setTimeout(() => {
    resolve(2); // Pass the resolved value to the promise
  }, 1000);
})
  .then((res) => {
    console.log("Resolved value:", res); // Logs: Resolved value: 2
  })
  .catch((error) => {
    console.log("Error:", error); // Handles any errors (not applicable in this example)
  });

//   Constructor myPromise :

//1. executor: The executor function is passed when creating a new promise. It receives resolve and reject functions as arguments.
//2. onResolved and onRejected: These are placeholders for the callbacks passed to .then() and .catch().
//3. isFulfilled and isRejected: Flags to indicate whether the promise has been resolved or rejected.
//4 isCalled: Ensures the callbacks are only called once.
//5 value and error: Store the resolved value or rejected error if handlers are not yet registered.

//1 then Method
// Registers a callback to handle the resolved value.
// If the promise is already resolved, calls the handler immediately.
// Returns the same promise object to enable chaining.

//2 catch Method
// Registers a callback to handle the rejected error.
// If the promise is already rejected, calls the handler immediately.
// Returns the same promise object to enable chaining.

//3 resolve Function
// Invokes the success callback if registered.
// Otherwise, stores the value and marks the promise as fulfilled.

//4 reject Function
// Invokes the failure callback if registered.
// Otherwise, stores the error and marks the promise as rejected.

//5 executor Call
// Immediately calls the executor with resolve and reject.
// Wraps the call in a try-catch to handle any synchronous errors.
//
// !Example Usage
// Creates a new myPromise and simulates an asynchronous operation using setTimeout.
// Resolves the promise with a value after a delay.
// Chains .then() and .catch() to handle the resolved value or errors.
