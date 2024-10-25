// promise combinator
// in promise chaining also we have the length code so we have to used the another approach like promise combinator

// What are promise combinators ?
// Promise combinators help  us to execute more than one or multiple  promise at one time and return the result accordingly. 

// There are 6 promise combinators available in JavaScript:
// 1. Promise.all
// 2. Promise.allSettled
// 3. Promise.race
// 4. Promise.any
// 5. Promise.resolve
// 6. Promise.reject



// 1. Promise.all
//  - . Def : Run all of the  promises parallel at the end and return an array with all of the fullfield promised
//  - If any one of the promise failed then it failed complete promise.all
// - promise.all methos to arrgegate result form multiple asynchronous operation
// -  promise.all waits for all the input promises to be resolved and returns a new promise that resolves to an array containing the result of the input promise
//-  Promise.all() is a method in JavaScript that allows you to execute multiple promises in parallel and wait for all of them to be resolved (or for any of them to be rejected).
// - It takes an array (or iterable) of promises as input and returns a single promise that resolves when all the input promises have resolved, or rejects as soon as any one of the input promises rejects.
// - If the one of the promise rejected the promise.all()  method immediately (returns  a promise that reject with an error 	of the first rejected promise.)  return a new promise that immediately reject with the same error also promise.all doesn't care other input promised where they are resolved or rejected 


// example 1 :
console.log('start');
function importantAction(user_name){
    return new Promise((resolved, rejected)=>{
        setTimeout(()=>{
            resolved(`${user_name}`)
        },0)
    })
}

function likeVido(video){
    return new Promise((resolved, reject)=>{
        setTimeout(() => {
            resolved(`${video}`)
        },1000);
    })
}
function sharedVido(shared){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`${shared}`)
        })
    })
}
// promise.all take as an array of all promised 
// this return us promise.all of the fuilfield promised as inside of an array


Promise.all([importantAction("vishal"), likeVido('javascript video'), sharedVido('node.js')])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log('error:', error); // this will catch the rejection from sharedVido
  });

  // - If all promises resolve, the result will be an array of all the resolved values, preserving the order of the input promises.
  // - If any one promise rejects, the entire Promise.all() rejects with the reason for that rejection.


  
  // example 2:
  const p1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
       resolve(10) 
    },1 * 100);
  })
const p2 = new Promise((resolved, rejected)=>{
    setTimeout(() => {
        rejected(20)
    }, 1 * 200);
})

const p3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(30)
    }, 1 * 300);
})

Promise.all([p1,p2,p3]).then((result)=>{
    console.log('result :', result)
    const data = result.reduce((acc, pre)=>{
return acc + pre;
    })
    console.log('result data', data)
}).catch((error)=>{
    console.log('promise reject :', error);
})
//  accepted the list of the promised and return new promise that resolved an array of result of the input promises if the all input promised are resolved or reject with an error of the first rejected promise
