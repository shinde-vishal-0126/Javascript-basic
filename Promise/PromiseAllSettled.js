// promise.allSettled() :

// -  Having the same syntax like Promise.all and promise.race but functionality is a bit different.

// - It work like exactly promise .all but even only one of the promise failed it gone return all of the promise that are fulfilled as well 
//-  In promise.all if any on of the Promise are failed then it filed all the promise.all()

// - Promise.allSettled() any one promise failed then it return all of these array item so like fulfilled or rejected

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
            reject(`${shared}`)
        })
    })
}

Promise.allSettled([importantAction('vishal'), likeVido('node js'),sharedVido('javascipt')]).then((result)=>{
    console.log(result)
}).catch((errr)=>{
    console.log('err', errr)
})

// Use Case: Useful when you need to handle a collection of promises and want the results of all of them, regardless of success or failure.

// Purpose: Promise.allSettled() is used to wait for multiple promises to settle (resolve or reject) and get the result of each promise.

// Output: It returns an array of objects, each containing the status ("fulfilled" or "rejected") and either a value (for resolved promises) or reason (for rejected promises).



