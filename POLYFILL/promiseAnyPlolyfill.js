//| promise.any polyfill 

//* myPromise.any resolves as soon as any one promise in the input array resolves.
// If all promises reject, it rejects with an AggregateError containing all the rejection reasons.


function myPromise(executer){
let isRejected = false , isResolved=false , onResolved, onReacted, value, error , isCalled = false

this.then = function(callback){
    onResolved = callback;
    if(isResolved && !isCalled){
        resolved(value)
        isCalled = true
    }
    return this
}
this.catch = function(callback){
    onReacted = callback;
    if(isRejected && !isCalled){
        rejected(error);
        isCalled = true
    }
    return this
}
function resolved(value){
    if(typeof onResolved === 'function' && !isCalled){
        onResolved(value);
        isCalled = true
    }
    else{
        value = value;
        isResolved = true
    }
}

function rejected(error){
    if(typeof onReacted === 'function' && !isCalled){
        onReacted(error);
        isCalled = true
    }else{
        error = error;
        isRejected = true
    }
}
executer(resolved, rejected)

}


// myPromise.any = function(promises){
//     return new myPromise((resolved, reject)=>{
//         let result = [];
//         let promiseCount = 0
//         promises.forEach((promise, index)=>{
//             promise.then((result)=>{
//                 resolved(result)
//                 promiseCount++;
//             }).catch((error)=>{
//                 result.push(error);
//                 promiseCount++
//                 if(promiseCount === promises.length){
//                     reject(new AggregateError(error, 'all promise were rejected'))
//                 }
//             })

//         })
//     })
// }


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

const newPromise = new myPromise((resolved, reject)=>{
    setTimeout(()=>{
        reject('fulFilled')
    },500)
})

// .then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })

const newPromise1 = new myPromise((resolved, reject)=>{
    setTimeout(()=>{
        reject('rejected')
    },300)
})

const newPromise2 = new myPromise((resolved, reject)=>{
    setTimeout(()=>{
        reject('fulFilled')
    },1000)
})

myPromise.any([newPromise,newPromise1, newPromise2]).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})