// =======================================================================================================================================
// # full example of all promise polyfill like promise.all, race, allSettled, any with finally block
// =======================================================================================================================================
// first write the code for the promise
// promise having the executer function which take resolve and reject function as an arguments.

function myPromise(executer) {
    // declare variable to hold the resolved , reject and tack the state of isFulField, or isNotFulFiled also store the resolved and reject value or result and also prevent the multiple call handlers
  
    let onResolved; // hold the resolve callback
    let onReject; // hold the reject callback
    let value; // hold resolve value
    let error; // hold the reject value
    let isCalled = false; // prevent the call multiple handler
    let isFulFilled = false; // track the resolve is called
    let isNotFulFiled = false; // track the reject is called or not
    let onFinally;
  
  // - first we need to register resolved handler
    this.then = function (cb) {
      onResolved = cb;
      if (isFulFilled && !isCalled) {
        isCalled = true;
        onResolved(value);
      }
      return this; // return same promise object for chaining purpose
    };
  

  // - then register the reject handler
    this.catch = function (cb) {
      onReject = cb;
      if (isNotFulFiled && !isCalled) {
        isCalled = true;
        onReject(error);
      }
      return this
    };
  
// - register the finally block if all the promise are rejector or not reject 
//  this.finally = function (cb) {
//       onFinally = cb;
//       // If the promise is already settled, call the finally block immediately
//       if (isCalled) {
//         onFinally();
//       }
//       return this;
//     };


this.finally = function(callback) {
  onFinally = callback;
  if (onResolved || onReject) {
      onFinally();
  }
  return this;
};
  
// - then defined the resolved function for fulFiled async operation
  function resolve(val) {
      if (typeof onResolved === "function" && !isCalled) {
        onResolved(val);
        isCalled = true;
      } else {
        value = val;
        isFulFilled = true;
      }
      if(onFinally){
          onFinally();
      }
    }
  
// - defined the function for isNotFulField async operation
  function reject(err) {
      if (typeof onReject === "function" && !isCalled) {
        onReject(err);
        isCalled = true;
      } else {
        error = err;
        isNotFulFiled = true;
      }
      if(onFinally){
          onFinally();
      }
    }
  
    try {
      executer(resolve, reject);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  }
  
// - polyFill of promise.all
  myPromise.all = function(promise){
      return new myPromise ((resolve, reject)=>{
          let result = [];
          let completePromise = 0;
           let hasFailed = false
  
          promise.forEach((pro, index)=>{
              pro.then((res)=>{
                  result[index] = res;
                  completePromise++;
                  if(completePromise === promise.length && !hasFailed){
                      resolve(result)
                  }
              }).catch((error)=>{
                hasFailed = true
                  console.log(error)
                  reject(error)
              })
          })
      })
  }
  
  
myPromise.allSettled = function(promise){
      return new myPromise((resolve, reject) =>{
          let result = [];
          let promiseCount = 0
  
          promise.forEach((pro, index)=>{
              pro.then((res)=>{
                  result[index] = {
                      status:'fullFiled', res
                  }
                  promiseCount++;
                  if(promiseCount === promise.length){
                      resolve(result)
                  }
              }).catch((error)=>{
                  result[index] = {
                      status:'rejected', error
                  };
                  promiseCount++
                  if(promiseCount === promise.length ){
                      resolve(result)
                  }
              })
          })
      })
  }
  
myPromise.race = function(promise){
      return new myPromise ((resolve,reject)=>{
          promise.forEach((pro,index)=>{
              pro.then((res)=>{
                  resolve(res)
              }).catch((error)=>{
                  reject(error)
              })
          })
      })
  }
  
  
 myPromise.any = function (promises) {
      return new myPromise((resolve, reject) => {
        let result = [];
        let settledPromises = 0;
    
        promises.forEach((pro) => {
          pro
            .then((res) => {
              resolve(res); // Resolve immediately with the first promise that resolves
            })
            .catch((error) => {
              result.push(error);
              settledPromises++;
    
              // If all promises have been processed (rejected), reject with AggregateError
              if (settledPromises === promises.length) {
                reject(new AggregateError(result, "All promises were rejected"));
              }
            });
        });
      });
    };
    
  const newPromise = new myPromise((resolve, reject) => {
    setTimeout(() => {
      reject("promise fullFiled");
    }, 1000);
  });
  
  const newPromise1 = new myPromise((resolve, reject) => {
    setTimeout(() => {
      reject("promise fullFiled1");
    }, 1500);
  });
  
  const newPromise2 = new myPromise((resolve, reject) => {
    setTimeout(() => {
      reject("promise reject");
    }, 15000);
  });
  
  const newPromise3 = new myPromise((resolve, reject) => {
    setTimeout(() => {
      reject("promise fullFiled3");
    }, 3000);
  });
  
  
   myPromise.any([newPromise, newPromise1, newPromise2, newPromise3])
    .then((res) => {
      console.log("Resolved:", res); // First resolved promise will be logged
    })
    .catch((error) => {
      console.log("All promises were rejected:", error); // Will not be triggered if any promise resolves
    })
    .finally(() => {
      console.log("Always called when resolved or rejected"); // Always called at the end
    });
  
  
  
 myPromise.all([newPromise, newPromise1, newPromise2, newPromise3])
    .then((res) => {
      console.log("Resolved:", res); // First resolved promise will be logged
    })
    .catch((error) => {
      console.log("All promises were rejected:", error); // Will not be triggered if any promise resolves
    })
    .finally(() => {
      console.log("Always called when resolved or rejected"); // Always called at the end
    });
  
  
  
myPromise.allSettled([newPromise, newPromise1, newPromise2, newPromise3])
    .then((res) => {
      console.log("Resolved:", res); // First resolved promise will be logged
    })
    .catch((error) => {
      console.log("All promises were rejected:", error); // Will not be triggered if any promise resolves
    })
    .finally(() => {
      console.log("Always called when resolved or rejected"); // Always called at the end
    });
  
  
   myPromise.race([newPromise, newPromise1, newPromise2, newPromise3])
    .then((res) => {
      console.log("Resolved:", res); // First resolved promise will be logged
    })
    .catch((error) => {
      console.log("All promises were rejected:", error); // Will not be triggered if any promise resolves
    })
    .finally(() => {
      console.log("Always called when resolved or rejected"); // Always called at the end
    });