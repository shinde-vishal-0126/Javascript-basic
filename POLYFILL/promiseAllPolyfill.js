//| promise all polyfill

// promise.all return the resulting array with all the fulfilled promises
//*  Promise.all takes an array of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises.


// first here create promise constructor
function myPromise(executer) {
  let onResolved; // used to hold callback for resolved handler
  let onRejected; // used to hold callback for reject handler
  let isFulfilled = false; // used to track to resolved is call or not
  let isRejected = false; // also used to track rejected is call or not
  let isCalled = false; // prevent to the multiple call handler
  let value; // used to stored the resolve value
  let error; // used to stored the reject value

  // here we need to register resolved and reject handler like .then and .catch
  this.then = function (callback) {
    // here we have to assign callback to onResolved to pass the resolved into the .then
    onResolved = callback;
    // check it is promise is fulfilled the immediately call the orRemoved handler
    if (isFulfilled && !isCalled) {
      onResolved(value);
      isCalled = true;
    }
    return this; // basically it returning same promise object to chaining
  };

  this.catch = function (callback) {
    onRejected = callback;
    if (isRejected && !isCalled) {
      onRejected(error);
      isCalled = true;
    }
    return this; // also this used to return same promise object to chaining
  };

  // create resolve function to handle the success or fulfilled result
  function resolve(value) {
    if (typeof onResolved === "function" && !isCalled) {
      onResolved(value);
      isCalled = true;
    } else {
      value = value;
      isFulfilled = true;
    }
  }

  function reject(error) {
    if (typeof onRejected === "function" && !isCalled) {
      onRejected(error);
      isCalled = true;
    } else {
      error = error;
      isRejected = true;
    }
  }
  try {
    executer(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

// const newPro = new myPromise((resolved, reject )=>{
//     setTimeout(()=>{
//         reject(2)
//     },500)
// }).then((res)=>{
//     console.log('promise successful',res)
// }).catch((error)=>{
//     console.log('promise rejected',error)
// })
// console.log(newPro)

// promise.all return the resulting array with all the fulfilled promises
// Promise.all takes an array of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises.

myPromise.all = function (promise) {
  return new myPromise((resolved, reject) => {
    let result = [];
    let completePromise = 0;
    promise.forEach((pro, index) => {
      pro
        .then((res) => {
          result[index] = res;
          completePromise++;
          if (completePromise === promise.length) {
            resolved(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

const promise1 = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(4);
  }, 100);
});

const promise2 = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 300);
});

myPromise
  .all([promise1, promise2])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
