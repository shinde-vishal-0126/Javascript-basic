// async-await :
// - Then to handaled the asynchronous operation or promise used modular apprach like async-await.

//Example:
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



// asynchronous function which we can used do adding async keyword before function
// Here we have to create function and call the promise here like important action
// here promise we can not gone used .then() then it return the promise object but we don't want we want result

const result = async () =>{
    // it gone wait until the this promise return us a fulfilled or rejected whatever state and we can get value provided
    const message1 = await importantAction('vishal');
    const message2 = await likeVideo('whatsapp')
    const message3 = await sharedVideo('javascript video')
    console.log(message1 + " " + message2 + " " + message3)
}
result();

// *  How to handaled the error in async-wait
// handaled error using try, catch, and finally block

const res = async () =>{
    try{
        const msg1 =await importantAction('vishal');
        const msg2 = await likeVideo('shinde');
        const msg = await sharedVideo('hi')
        console.log(msg + msg2 + msg1)
    }catch(error){
        console.log('promised failed', error)

    }
}
res()


// * output based question

// 1
const promse = new Promise((res, rej)=>{
    console.log(1) // 
    res(2)// 2
})
promse.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log('error', error);
    
})
//  javascript inside the asynchronous function find if there is any synchronous function then it execute first then asynchronous


// 2
console.log('start'); //start
const promise1 = new Promise((resolved, reject)=>{
    console.log(1);
    resolved(2)//1
    console.log(3); // 3
})
promise1.then((res)=>{
console.log('result :' , res)
});
console.log('end'); 

// console.log('start'); //start
const fn = () => {
    return new Promise((resolve, reject) => { // Return the Promise here
        console.log(1);
        resolve("success");
    });
};
console.log("middle");

fn().then((res) => {
    console.log(res);
});
console.log("end"); 


