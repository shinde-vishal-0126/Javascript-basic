//| polyFill related questions 

//? 1: what is polyfill in javascript ? 
// piece of javascript code that provide the modern functionality on older environment that is not natively support.

//? 2: write the polyfill of the promise?

//? 3: write the polyfill of the promise.all ?
// Promise.all takes an array of promises (or values) as input and returns a single promise. This returned promise resolves once all of the input promises have resolved successfully. It resolves to an array of the resolved values from the input promises in the same order.
// If any of the promises are rejected, the returned promise will immediately reject with the reason of the first rejected promise, and the remaining promises will not be processed.

//? 4: write the polyfill of the promise.allSettled ?
// Promise.allSettled takes an array of promises (or values) as input and returns a single promise. This promise resolves once all of the input promises have settled, meaning they have either been fulfilled or rejected. The resulting promise resolves to an array of objects, where each object describes the outcome of each promise.

//? 5: write the polyfill of the promise.race
// promise.race task an array of promises  as input and return single promise.Promise.race returns a single promise that settles (resolves or rejects) as soon as the first promise in the provided iterable settles.
// returns a promise that resolves or rejects as soon as one of the input promises resolves or rejects. It does not wait for all promises to settle like Promise.all or Promise.allSettled.

//? 6: write the polyfill or the promise.any ?
//Promise.any is a relatively newer addition to JavaScript (available from ES2021) that takes an array of promises (or other iterable) and returns a single promise that resolves as soon as any one of the input promises resolves successfully. If all input promises are rejected, the returned promise will reject with an AggregateError, which is a special error that contains all rejection reasons from the failed promises.


//? 7 write the polyfill of once function (i.e if you called function multiple time it called only one time)
//