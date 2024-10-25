// Promises 
// What is promise in javascript  ?

// 1. Promise is good way to handle asynchronous operation
// 2. A promise is javascript object that like producing code and consuming code (Producing code means that code take some time)(Consuming code means code that must wait for a result)
// 3. Promise basically represented the upcoming completion or a failure of an asynchronous event and its resulting value.

// 4 in javascript promise is an objects that encapsulates the result of an Synchronous operation
// 5. Promised having 3 conditions or state.
        // 1. Pending 
        // 2. Fulfilled with value
        // 3. Rejected. For a reason
// 6.you must need used promise method to handle promise.then (dot then used to handle promise)
// 7 Promise.then() used two arguments: a callback for success and another one failure


// NOTE

// 1. In the beginning  the state of the promise is pending, indicating the asynchronous operation is in process. (promise object is pending  → result is undefined)

//  2. depending upon the result of the asynchronous operation state change either fulfilled or rejected.
// 3.  So the fulfilled state indicates that asynchronous operation was completely successful.(When the promise object is fulfilled → result is value)
// 4  So the rejected state indicates that the asynchronous operation failed (When the promise object is rejected the result → is an error object )
 

// CREATE PROMISE
// 1. create promise object used promise() constructor
// 2. Promise constructor accept the callback function(with 2 argument resolved and rejected) that typically perform asynchronous operation (callback function often reffered as executer)

const sub = new Promise((resolved,reject)=>{
    setTimeout(()=>{
        const result = false;
        if(result){
            resolved('fetch the data')
        }
        else{
            reject('error to fetching data')
        }
    },100)
})
// 1.to run or execute the promise using the .then()
// 2. then() means promise is fullfield
// 3. if the fail then the promise is not fuillfield then we can get the result in catch
sub.then((res)=>{
    console.log(res);
}).catch((error)=>{
    console.log(error)
})
// Note :
// then() used to get result when the promise fuillfield
// cath() used the get the error when failed the promise

// =============================================>

// example 2 
function importantAction(uses_name){
    return new Promise((resolved, reject)=>{
        setTimeout(()=>{
            resolved(`${uses_name}`)
        },0)
    })
}
function likeVideo(video){
    return new Promise((resolved, reject)=>{
        setTimeout(()=>{
            resolved(`${video}`)
        })
    },1000)
}

function sharedVideo(shared){
    return new Promise((resolved, reject)=>{
        setTimeout(()=>{
            resolved(`${shared}`)
        })
    })
}
importantAction('vishal').then((action)=>{
    console.log(action);
})
likeVideo('javascript interview video').then((res)=>{
    console.log(res)
})
sharedVideo('javascript video').then((res)=>{
    console.log(res)
}).catch((error)=>{
    console.log(error)
})

// NOTE :
// 1. Promises can not go from fulfilled state to the rejected state and vice versa  and it can not go back from fulfilled or rejected state to the pending state.
// 2. Once new promise object created it state is pending 
// 3. If promise reaches state is fulfilled or rejected, state if resolved 


// ===>  How to consuming the promise :
// 1. Then :
            // 1. Get the value of promise when it fullfield you can call then() method of the promise object 
            // 2. Promise.then(onFullfieled, onRejcted)
            // 3. then method accept 2 callback function first one is onFullFiled and second one is onRejected
            // 4. then method call onFullFileld callback function with value when the prommise is fuillfield, on rejected with an error if the promise rejected 
            // 5. both the argument are optional.
// 2. catch
            // 1. If you want to get an error only when the state of the promise is rejected you can use the catch() method of the promise object.
            // 2. Promise.catch(onRejected); (The catch method invokes the then(undefined, onRejected)  method.)
// 3 funally 
            // 1. Sometimes you want to execute the same pieces of code whether the promise is fulfilled or rejected.
            //  2. To implement the finally method, which is called after the promise has been settled (whether it was fulfilled or rejected), you can simply add the .finally() method after the .then() chain.


// example 
let success = false
function getUser(){
    return new Promise((resolved, reject)=>{
        if(success){
        setTimeout(()=>{
            resolved([
                {
                    username:'vishal',
                    email:'shindev05@gmail.com'
                },
                {
                    username:'shinde',
                    email:'test@gamil.com'
                }
            ])

        })
    }else{
        reject('faild to load data')
    }
    })

}

function onFullfieled(user) {
    console.log(user)
}

function onRejcted(error){
    console.log('error', error)
}

// getUser().then((onFullfieled)=>{
//     return onFullfieled.map((ele, index)=>{
// console.log("ele", index, ele);
//     })
// })
getUser().then(onFullfieled, onRejcted).finally(()=>{
    console.log('Promise settled (fulfilled or rejected). Cleanup actions can be performed here ');
    
})
// First define the onFulfilled function to be called when a promise is fulfilled
// Second  call the getUsers () function to get promise object
// Third, call the method of the promise object and output the user list on the console.

// Summary 
// Promise is an object then encapsulate the result of an synchronous operation

// A promise starts with a pending state and ends with either a fulfilled state or rejected state.

// Used then() method schedules or handles a promise by giving  a callback to be executed when the promise is fulfilled and catch method to schedule callback to be invoked when the promise is rejected.

// Place the code that you want to execute in the final method whether the promise is fulfilled or rejected .



// ====>* how to solved promise recursively :

// 1. It's the process in which a function repeatedly calls itself until a condition is met that makes it stop.
// 2. Recursion is the technique of making a function call itself.  (A recursive function is a function that calls itself during its execution)

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
            resolved(`like the video ${video}`)
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
// first you have to define function to handaled the promises 
promiseRecursively([importantAction('vishal'),likeVideo('node js'),sharedVideo('javascript')]);

function promiseRecursively(functionPromise){
    if(functionPromise.length === 0) return;
    const currentPromise = functionPromise.shift() // remove the first element form the array and return this element
    currentPromise.then((res)=>{
        console.log('result', res);
    }).catch((error)=>{
        console.log('error', error);
    })
    promiseRecursively(functionPromise)
}