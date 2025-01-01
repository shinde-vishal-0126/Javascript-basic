// promise.race()
// 1. Promise.race() is a method in JavaScript that returns a promise which resolves or rejects as soon as any one of the promises in the iterable (array or collection) resolves or rejects.
// 2. It "races" the promises against each other, and the one that settles (resolves or rejects) first is the result.
// - If the first promise to settle is resolved, Promise.race() resolves with that value.
//- If the first promise to settle rejects, Promise.race() rejects with that reason.
//- The remaining promises are ignored once the first one settles (resolves or rejects).

console.log('start');
function importantAction(user_name){
    return new Promise((resolved, rejected)=>{
        setTimeout(()=>{
            resolved(`${user_name}`)
        },2000)
    })
}

function likeVideo(video){
    return new Promise((resolved, reject)=>{
        setTimeout(() => {
            resolved(`${video}`)
        },1000);
    })
}
function sharedVideo(shared){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject(`${shared}`)
        },500)
    })
}

Promise.race([importantAction('vishal'),likeVideo('node js'), sharedVideo('javascript')]).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log('error :',error)
})
// No matter if any one promise is fulfilled or resolved or any one promise is rejected first the only one promise is rejected first then it returns that promise.
// 1 .Purpose: Promise.race() returns the first settled promise, whether resolved or rejected.
// 2. Behavior: If one promise resolves or rejects, Promise.race() settles with that result immediately and ignores the remaining promises.


// Promise.race() takes an array of promises and returns a new promise that resolves or rejects as soon as any one of the promises resolves or rejects. It doesn't wait for all promises to settle.
// If the first promise resolves, the resulting promise resolves with that value.
// If the first promise rejects, the resulting promise rejects with that reason.