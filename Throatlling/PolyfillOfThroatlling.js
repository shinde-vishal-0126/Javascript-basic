// @ in throttle we have multiple event executing one after the another and we are only supposed 
//to execute the event after certain delay or limit of time one by one
// @ to execute the particular  event we are going to record that particular time 

// so here we have to create the polyfil of the Throatllin g

// Target DOM elements
const button =document.querySelector(".press-button");
const count = document.querySelector(".press_count");
const triggered =  document.querySelector(".triggered_count")






// Variables to keep track of counts
let triggeredCount = 0;
let buttonCount = 0;

//in polyfill  function haviang two aregument like callback function and tiemDealy 
// to execute the perticular event we are going to record that perticular time 

// Polyfill for throttle function
const myThrottle = (callback, delay) => {
    let lastTime = 0; // Initialize lastTime to store the time of the last executed event
    //here we need execute perticulare event so we are going to record that perticular time 
    // here first event execute at 0 ms then next event is execute at 500 ms then the last event time is 
    // last = 500;
    // also another event are happen the gain major perticular time or our previous time is more then our dealy tiem or not
    // it is less then our dealy time then does not going to execute any event 
    // it is more then our dealy time then we are going to execute that pertcualre event 
    

    // throatlling function return anonymous function for the throatlling purpuse to execute event
    return (...args) => {
        const currentTime = new Date().getTime(); // Get the current time in milliseconds
        // Check if the time since the last event is greater than or equal to the delay
    if (currentTime - lastTime >= delay) {
        lastTime = currentTime; // Update lastTime to the current time
        callback(...args); // Execute the callback function with provided arguments
      }
    };
  };
        // (then if last and new event are less then timedealy then return agian next event occure in 1000 ms 
       // is Grater then timeDeatly then execute callback fuction)
      
       
const start = new Date().getTime();


// Create a throttled version of the function to be executed on button click
const throttle = myThrottle(() => {
    const now = new Date().getTime(); // Get the current time in milliseconds
    console.log(now - start); // Log the time elapsed since start
    triggered.innerHTML = ++triggeredCount; // Increment and update the triggered count in the DOM
  }, 800); // Set the delay to 800 milliseconds
  

// Add event listener to the button
button.addEventListener('click', () => {
    count.innerHTML = ++buttonCount; // Increment and update the button click count in the DOM
    throttle(); // Call the throttled function
  });

