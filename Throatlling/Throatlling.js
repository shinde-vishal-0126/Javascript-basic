
// Throatting are technique to limit the execution of an event handaler function
//also limit how often a function can be called called in give period of time 
//Throttle is best  used when you want to handaled all intermediate state but at controlled rate 

// Example : 
// When your web page has a scroll bar so as soon as we scroll this scroll bar to a certain limit it is gone and make api calls and fetch 
//more data. 

// show "button pressed x time every time button pressed "
// "increased triggered by time count after the 800 ms" of throttling 
 //Definition : in throttling limit the execution of an event handler function when the event triggered continuously due to user action 

 // here we have to target the Dom element
 const button_press = document.querySelector(".press-button");
 const press_count = document.querySelector(".press_count");
 const triggerd_count = document.querySelector(".triggered_count")

//now we chve to create the 2 variable to dispaly this count 

var pressCount = 0;
var triggeredCount = 0;

// now we call the Throalling function  which is available in lodash libray
const throatFuntion = _.throttle(()=>{
    const newTime = new Date().getTime(); // calculate the first event tiem to second event time
    console.log(newTime-start) //here we have to verity the throatlling time 
    triggerd_count.innerHTML = ++triggeredCount
    
},800); //create a throttle function that only invokes the function at most once per every millisecond . 

const start = new Date().getTime() // start time for analyzing the throatling

// add eventlistner on button
 button_press.addEventListener('click',()=>{
    console.log("button click")
    press_count.innerHTML = ++pressCount;
    throatFuntion()
 })


