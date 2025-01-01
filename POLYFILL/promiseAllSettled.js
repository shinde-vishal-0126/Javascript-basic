//| polyfill of the promise.allSettled

// Custom implementation of a Promise-like object
function myPromise(executer) {
  let onResolved; // Holds the callback for the "then" method
  let onRejected; // Holds the callback for the "catch" method

  // Flags to maintain the state of resolution or rejection
  let isFulfilled = false;
  let isRejected = false;

  // Variables to store the result or error of the promise
  let value;
  let error;

  let isCalled = false; // Prevents multiple executions of resolution/rejection handlers

  // Registers the resolved handler (for "then" chaining)
  this.then = function (callback) {
    onResolved = callback; // Store the callback function
    if (isFulfilled && !isCalled) {
      // If already resolved, execute the callback
      resolved(value);
      isCalled = true; // Ensure it's only called once
    }
    return this; // Enables chaining by returning the same promise object
  };

  // Registers the rejected handler (for "catch" chaining)
  this.catch = function (callBack) {
    onRejected = callBack; // Store the callback function
    if (isRejected && !isCalled) {
      // If already rejected, execute the callback
      reject(error);
      isCalled = true; // Ensure it's only called once
    }
    return this; // Enables chaining by returning the same promise object
  };

  // Resolves the promise and executes the "then" callback if registered
  function resolved(value) {
    if (typeof onResolved === "function" && !isCalled) {
      // If a handler is registered and not called yet
      onResolved(value); // Call the "then" handler with the resolved value
      isCalled = true; // Mark as called
    } else {
      value = value; // Store the resolved value for future execution
      isFulfilled = true; // Mark as fulfilled
    }
  }

  // Rejects the promise and executes the "catch" callback if registered
  function reject(error) {
    if (typeof onRejected === "function" && !isCalled) {
      // If a handler is registered and not called yet
      onRejected(error); // Call the "catch" handler with the error
      isCalled = true; // Mark as called
    } else {
      error = error; // Store the error for future execution
      isRejected = true; // Mark as rejected
    }
  }

  // Call the executor function, passing the "resolved" and "reject" functions
  executer(resolved, reject);
}


myPromise.allSettled = function (promises) {
  return new myPromise((resolve) => {
    let results = [];
    let completedCount = 0;

    promises.forEach((promise, index) => {
      promise
        .then((value) => {
          results[index] = { status: "fulfilled", value };
          completedCount++;
          if (completedCount === promises.length) {
            resolve(results);
          }
        })
        .catch((reason) => {
          results[index] = { status: "rejected", reason };
          completedCount++;
          if (completedCount === promises.length) {
            resolve(results);
          }
        });
    });
  });
};

// myPromise.allSettled = function (promises) {
//   return new myPromise((resolve) => {
//     let results = Array(promises.length); // Preallocate results array
//     let completedCount = 0;

//     promises.map((promise, index) => {
//       promise
//         .then((value) => {
//           results[index] = { status: "fulfilled", value };
//         })
//         .catch((reason) => {
//           results[index] = { status: "rejected", reason };
//         })
//         .finally(() => {
//           completedCount++;
//           if (completedCount === promises.length) {
//             resolve(results);
//           }
//         });
//     });
//   });
// };

// promiseAllSettled

let promise1 = new myPromise((resolved, reject) => {
  setTimeout(() => {
    resolved("fulFiled...");
  }, 300);
}).then((res) => {
  console.log(res);
});

let promise2 = new myPromise((resolved, reject) => {
  setTimeout(() => {
    reject("second rejected");
  }, 100);
});
let promise4 = new myPromise((resolved, reject) => {
  setTimeout(() => {
    resolved("third resolved");
  }, 500);
});

myPromise
  .allSettled([promise1, promise2, promise4])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
