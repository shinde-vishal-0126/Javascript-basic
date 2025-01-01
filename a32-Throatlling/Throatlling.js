
// | Throttling:

// Throttling in javascript is effective technique to limit the frequency at which a function executed so to improve or maintain performances optimization of the application. (or optimized the function execution performances)
// By using throttling in javascript The function is executed after fixed interval of time (i.e limit the rate or frequency at which a function can be executed)
// Throttling delay the next() function call for certain limit of times 
// Throttling used to call function after every millisecond or perticular fix interval of time only first click execute immediately
// by using the Throttling improve the user experiences in situation when rapid changes may cause unwanted flickering and jittering

//! when to used Throttling ?
// if you want to avoid the overloading a server and conserving network bandwidth or improve the performance of you application
// also you wan to function is called at a limited rate or frequency without missing any important input or event
// used to prevent un-necessary or unwanted function call

// Example : 
// When your web page has a scroll bar so as soon as we scroll this scroll bar to a certain limit it is gone and make api calls and fetch 
//more data. 
// show "button pressed x time every time button pressed "
// "increased triggered by time count after the 800 ms" of throttling 
 //Definition : in throttling limit the execution of an event handler function when the event triggered continuously due to user action 

 // here we have to target the Dom element
 const button_press = document.querySelector(".press-button");
 const press_count = document.querySelector(".press_count");
 const trigger_count = document.querySelector(".triggered_count")

//now we have to create the 2 variable to display this count 

var pressCount = 0;
var triggeredCount = 0;

// now we call the Throttling function  which is available in lodash library
const throatFunction = _.throttle(()=>{
    // const newTime = new Date().getTime(); // calculate the first event time to second event time
    // console.log(newTime-start) //here we have to verity the throttling time 
    trigger_count.innerHTML = ++triggeredCount
    
},800); //create a throttle function that only invokes the function at most once per every millisecond . 

const start = new Date().getTime() // start time for analyzing the throttling

// add eventlistener on button
 button_press.addEventListener('click',()=>{
    console.log("button click")
    press_count.innerHTML = ++pressCount;
    throatFunction()
 })

     



