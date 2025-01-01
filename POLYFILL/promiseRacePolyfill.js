//| promise polyfill promise.race

// Promise.race() is a method in JavaScript that takes an iterable (like an array or any other object with an iterator) of promises and returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects. It doesn't wait for the others to complete. It is often used when you need the result of the first completed promise, whether it's resolved or rejected

function myPromise(executer) {
  let onReject;
  let onResolved;
  let value;
  let error;
  let isFulfilled = false; // used to track resolved is call
  let isRejected = false; // used to track reject is call
  let isCalled = false; // prevent the multiple call to handlers

  // first we need to register the resolve and reject handler
  // then we have to defined the variable onResolved and onReject to hold the callback function pass to the .then() to handle the resolved and reject callback function
  this.then = function (callback) {
    onResolved = callback;
    if (isFulfilled && !isCalled) {
      resolved(value);
      isCalled = true;
    }
    return this;
  };
  this.catch = function (callback) {
    onReject = callback;
    if (isRejected && !isCalled) {
      onReject(error);
      isCalled = true;
    }
    return this; // return this for chaining
  };

  // then defined the resolved and reject function to handled the successful and failure promise result

  // then defined variable value and error to stored the fulfilled  and error vale
  function resolved(val) {
    if (typeof onResolved === "function" && !isCalled) {
      onResolved(val);
      isCalled = true;
    } else {
      value = val;
      isCalled = true;
    }
  }

  function reject(err) {
    if (typeof onReject === "function" && !isCalled) {
      onReject(err);
      isCalled = true;
    } else {
      error = err;
      isCalled: true;
    }
  }
  try {
    executer(resolved, reject);
  } catch (error) {
    reject(error);
  }
}

// const promise10 = new Promise((resolved, reject)=>{
//     setTimeout(()=>{
//         resolved('welcome to promise')
//     })
//     }).then((res)=>{
//         console.log(res)
//     }).catch((error)=>{
//         console.log(error)
// })

myPromise.race = function (promises) {
  return new myPromise((resolved, reject) => {
    promises.forEach((promise) => {
      promise
        .then((res) => {
          resolved(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

promise1 = new myPromise((resolved, reject) => {
  setTimeout(() => {
    resolved("first resolved");
  }, 1000);
});

promise2 = new myPromise((resolved, reject) => {
  setTimeout(() => {
    resolved("second resolved");
  }, 100);
});

myPromise
  .race([promise1, promise2])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
