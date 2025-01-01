// promise combinator
// in promise chaining also we have the lengthy code so we have to used the another approach like promise combinator

// What are promise combinator ?
// Promise combinator help  us to execute more than one or multiple  promise at one time and return the result accordingly. 

// There are 6 promise combinator available in JavaScript:
// 1. Promise.all
// 2. Promise.allSettled
// 3. Promise.race
// 4. Promise.any


// what is resolved and reject in promise ?
// Promise.resolve()
// Promise.resolve() is a method that returns a resolved promise. It is not used for combining multiple promises but rather for converting a value into a promise that resolves with that value.
// If you pass a non-promise value to Promise.resolve(), it returns a promise that resolves to that value.
// If you pass an already resolved promise, it just returns that promise.


// Promise.reject()
// Promise.reject() is a method that returns a rejected promise. It is used when you want to immediately return a promise that is rejected with a specific reason.
// The provided reason will be the rejection reason of the returned promise.


// Why they're not considered combinators:as resolved and reject
// Promise combinator like Promise.all(), Promise.race(), Promise.any(), and Promise.allSettled() are used to combine multiple promises and manage their resolutions or rejections in different ways.
// Promise.resolve() and Promise.reject() simply create single promises that are already resolved or rejected. They don’t combine multiple promises or manage multiple async operations in one go.
// So, while Promise.resolve() and Promise.reject() are important for handling promises, they are not classified as "combinator" because they don't combine multiple promises into one.


// 1. Promise.all
//   Def : Run all of the  promises parallel at the end and return an array with all of the fulfilled promised
//  - If any one of the promise failed then it failed complete promise.all
// - promise.all method to aggregate result form multiple asynchronous operation
// -  promise.all waits for all the input promises to be resolved and returns a new promise that resolves to an array containing the result of the input promise
//-  Promise.all() is a method in JavaScript that allows you to execute multiple promises in parallel and wait for all of them to be resolved (or for any of them to be rejected).
// - It takes an array (or iterable) of promises as input and returns a single promise that resolves when all the input promises have resolved, or rejects as soon as any one of the input promises rejects.
// - If the one of the promise rejected the promise.all()  method immediately (returns  a promise that reject with an error of the first rejected promise.)  return a new promise that immediately reject with the same error also promise.all doesn't care other input promised where they are resolved or rejected 

// example 1 :
console.log('start');
function importantAction(user_name){
    return new Promise((resolved, rejected) => {
        setTimeout(() => {
            if (user_name === 'invalid') {
                rejected('Error: Invalid user name');
            } else {
                resolved(`${user_name}`);
            }
        }, 0);
    });
}

function likeVideo(video){
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            if (!video) {
                reject('Error: No video specified');
            } else {
                resolved(`${video}`);
            }
        }, 1000);
    });
}

function sharedVideo(shared){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!shared) {
                reject('Error: No video shared');
            } else {
                resolve(`${shared}`);
            }
        });
    });
}
// promise.all take as an array of all promised 
// this return us promise.all of the fulfilled promised as inside of an array

Promise.all([importantAction("vishal"), likeVideo('javascript video'), sharedVideo('node.js')])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log('error:', error); // this will catch the rejection from sharedVideo
  });

  // - If all promises resolve, the result will be an array of all the resolved values, preserving the order of the input promises.
  // - If any one promise rejects, the entire Promise.all() rejects with the reason for that rejection.


  
  // example 2:
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const shouldReject = false; // Set to true to trigger rejection
        if (shouldReject) {
            reject('Error in p1');
        } else {
            resolve(10);
        }
    }, 1 * 100);
});

const p2 = new Promise((resolved, rejected) => {
    setTimeout(() => {
        const shouldReject = true; // Set to true to trigger rejection
        if (shouldReject) {
            rejected('Error in p2');
        } else {
            resolved(20);
        }
    }, 1 * 200);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const shouldReject = false; // Set to true to trigger rejection
        if (shouldReject) {
            reject('Error in p3');
        } else {
            resolve(30);
        }
    }, 1 * 300);
});
//  accepted the list of the promised and return new promise that resolved an array of result of the input promises if the all input promised are resolved or reject with an error of the first rejected promise
