//! polyfill of Throttling

// Target DOM elements
const button = document.querySelector(".press-button");
const count = document.querySelector(".press_count");
const triggered = document.querySelector(".triggered_count");

// Variables to keep track of counts
let triggeredCount = 0;
let buttonCount = 0;

const myThrottle = (callback, delay) => {
  //explanation :
  // here we have initially is zero and 2nd event is happen in 200 ms then it check 200ms - 0 is return 200 so it is less then delay then it return and then next event is happen in 700 ms then again it check if the 700ms-0 is 700 it still the less then the  delay again it return  and next event happen in  900ms  then it check 900 - 0 it is grater the delay then currentTime assign to the last  and execute the callback function.
  // then again next event happen in 1200 ms  then it check 900-1200 it return 300ms not it also less then the delay it again return i.e if the event is happen Grater then delay the it execute the callback function and assign current time to the last so continue this cycle and make api call

  // Return a new function that will be triggered on events (like scroll, resize, etc.)
  return (...args) => {
    // Get the current time in milliseconds
    const currentTime = Date.now(); 
    // Check if enough time has passed since the last function execution
    if (currentTime - lastExecutionTime >= delay) {
      // If enough time has passed, update the last execution time to the current time
      lastExecutionTime = currentTime; 
      // Execute the callback function with the provided arguments
      callback(...args);
    }
  };
};

//! also you have to used following approach

// Define the throttle function that limits the rate of calling a function
const myThrottle1 = (fun, delay) => {
  // 'isFunctionCalled' tracks whether the function is allowed to be executed
  let isFunctionCalled = true;

  // Return a new function that will be executed when an event happens
  return function (...args) {
    // If the function was recently called (isFunctionCalled is false), stop further execution
    if (!isFunctionCalled) return;

    // if not executed then 
    // Call the actual function with the arguments passed
    fun(...args);
    // Set 'isFunctionCalled' to false, indicating the function cannot be called again immediately
    isFunctionCalled = false;
    // Set a timeout to reset 'isFunctionCalled' to true after the specified delay (to allow next function call)
    setTimeout(() => {
      isFunctionCalled = true;
    }, delay); // After 'delay' milliseconds, the function can be called again
  };
};

// Throttled Function to be executed on button clicks
// const throttledFunction = myThrottle(() => {
//   triggered.innerHTML = ++triggeredCount; // Increment and update the triggered count
// }, 800); // Throttle delay set to 800 milliseconds

// Throttled Function to be executed on button clicks
const throttledFunction = myThrottle(() => {
  triggered.innerHTML = ++triggeredCount; // Increment and update the triggered count
}, 800); // Throttle delay set to 800 milliseconds

// Event listener for button click
button.addEventListener("click", () => {
  count.innerHTML = ++buttonCount; // Increment and update the button click count
  throttledFunction(); // Call the throttled function
});
