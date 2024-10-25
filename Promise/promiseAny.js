// Promise.any();

// - It exactly like promise.race but what it does it 
// - It only returns the first fulfilled promise and ignores all the rejected promises.

console.log('start');
function importantAction(user_name) {
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            resolved(`subscribed to the ${user_name}`)

        }, 500);
    })
}
function likeVideo(video) {
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            reject(`like the video ${video}`)
        }, 100);
    })
}
function sharedVideo(shared) {
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            resolved(`share the video ${shared}`)
        }, 2000);
    })
}
Promise.any([importantAction('vishal'),likeVideo('node js'),sharedVideo('javascript')]).then((result)=>{
    console.log('result', result)
}).catch((error)=>{
    console.log('error', error)
}).finally(()=>{
    console.log('cleanup code')
})

// If all promises are rejected, it throws an AggregateError, which contains all the rejection reasons

// Promise.any() is a method in JavaScript that takes an array of promises and returns a single promise that resolves as soon as any of the promises in the array fulfills. If none of the promises fulfill (i.e., if all promises are rejected), it returns a promise that is rejected 

