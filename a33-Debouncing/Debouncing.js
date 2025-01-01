
// debouncing is way to optimize the (performances ) event handling in javascript or way
// help to optimize how we called certain event in javascript 
// ex. searchbox (Having the debouncing method (with display 400ms))
// debouncing wait for some perticular time to execution of an function call
// (or wait for certain amount of time before running it again)
// it remove the unwanted noise form the inputs , searchbox and button
// it limit the rate at which a function get invoked (or prevent extra activity or prevent slow function of triggering to often)


// when i pressed button x time the increase the count y every time when i stop the pressing the button and 
// 800 ms  as debounced as passed.

//Target each Dom element

const button = document.querySelector('.increment_button');
const pressedButton = document.querySelector('.pressed_button');
const triggering = document.querySelector('.increment_count');

// defined two variable for press Count and triggered Count
var pressed_count = 0;
var triggered_count = 0;

//without debouncing here press_count is increment as well as triggered count also incremented but we want
// every time pressing the button and we stop this pressing the button and only after the 800ms or more than then
// only increment the triggered count (not every time we pressing the button)
//solved this issue we have to used the debouncing 
// to used debouncing we have to used the implementation of debouncing or also present the debounces function is
// lodash library.
// syntax  .debounce(fun, [wait=0],[options={}])

//here we have to create debounce function
const debounce_function = _.debounce(() => {
    // perform action whatever you want
    triggering.innerHTML = ++triggered_count
}, 800)

// Then add event listener on button
button.addEventListener('click', () => {
    pressedButton.innerHTML = ++pressed_count;
    // call here debounces function
    debounce_function();
})
//Example :  when i go to search box and type something  then you can notice when i type and pause few millisecond and then only the search result updated 
//When i continuously typing in the search bar it does not show the result when as soon as i stop for few millisecond then it makes and api call and then the fetch suggestion so this happen with the help of debouncing

//we have SearchBox is  having debounces method with display of 400 ms and we typing one word after the another   like  (v i s h ) and this each word having the gap of 100 ms between them and while typing the extra word beyond 400 ms not the api call will be executed 
//So as soon as we pause and mode another keystroke after sometime it is more than 400 ms let us it around 600 ms Vish  (400 ms )  __ al  → 600 ms When we pause this is movement where are action will be performed which in this case we need to call api in paused section so this is called as debouncing 




 //? which is better debouncing or throttling in javascript ?
  // based on the use case we have to defined which is better 
  // Whether debouncing or throttling is better depends entirely on your use case and the type of behavior you want to achieve
  //! Choose Debouncing When:
// You want the function to execute after the user stops performing the action.
// Frequent triggering is unnecessary, and you only care about the final state.
// Example Scenarios:
// Search Box Autocomplete: Trigger an API call only when the user has stopped typing for a specified delay (e.g., 300ms).
// Form Validation: Validate form fields only after the user finishes typing.
// Resize/Scroll Handling: Recalculate layout only after resizing or scrolling has stopped.


// Choose Throttling When:
// You need the function to execute at regular intervals during an ongoing action.
// It’s important to update in near real-time, but not too frequently.
// Example Scenarios:
// Infinite Scroll: Load more content while the user scrolls but limit the rate of API calls.
// Dragging/Slider: Update UI (e.g., position, value) at regular intervals while dragging a slider.
// Analytics Tracking: Log user actions (e.g., scroll positions or clicks) without overwhelming the server.

// Debouncing is generally better for actions triggered by user input because it minimizes unnecessary calls.
// Throttling is better for performance-critical tasks that need periodic updates, such as animations or real-time logging.

// Debouncing
// Executes once, after a delay.
// Focused on final state.
// Real-time Updates	No (delays execution).

// Throttling
// Executes at regular intervals.
// Focused on intermediate updates.
// Real-time Updates:	Yes (limits execution frequency).



//?  Q what is differences between the DeBouncing and throttling 
//  * debouncing and throttling are techniques used to control the frequency of function or optimize event execution.

// Debouncing : 
// -Wait for the certain time before invoking the function again 
// -The purpose of debouncing is to delay the execution of a function until a pause in event occurrences
// -It ensures that the function is only executed once after a series of rapid events.
// -Debouncing is often used for scenarios like handling user input or scroll events, where you want to wait for a pause in input before triggering a function to avoid rapid, unintended executions.
// -Debouncing is typically implemented by using a timer. 
// -When an event occurs, a timer is started. If another event occurs before the timer elapses, the timer is reset
// - The function is executed only when the timer finally expires, indicating a pause in event occurrences.
// - Debouncing is concerned with ensuring that the function is only executed once, and it waits for a pause in event occurrences. It's about delaying execution until the events have stopped for a certain duration
// - remove the unwanted noise form the input box, button 
// - Ensures a function is executed only after a specified delay has passed since the last call.
// - Ideal when you want to execute a function only after an action has stopped.
// - The function executes only once, after the events have stopped firing for a delay period.
// - Executes the function at the end of the delay period.
// -  Auto-saving form data after the user stops typing.
// - Validating an email field in a form.
// - Delays the function execution until no further calls occur within the delay period.
// - You want to trigger a search query only after the user has stopped typing in a search box for 300 milliseconds.
// - Debouncing ensures the function is executed after a delay, useful for actions triggered after a pause.


// Throttling : 
// - Limit the number of time the function can be called over the certain period 
// - Ensure that the function is called only once if the event is triggered multiple time
// - Throttling is used to limit the rate at which a function can be executed. It ensures that a function is called at a maximum frequency, regardless of how often the event occurs
// - Throttling is commonly used for scenarios like rate-limiting API requests or preventing resource-intensive operations from overloading a system.
// - Throttling can be implemented by allowing the function to execute at a fixed interval or rate
// - For example, you may execute the function every 100 milliseconds. Any excess calls that occur within that interval are ignored until the next interval begins.
// - Throttling focuses on limiting the rate at which a function is executed. It guarantees that the function is executed at a controlled pace and doesn't exceed a certain rate, regardless of how frequently the events occur
// - Ensures a function is executed at most once in a specified time period.
// - Ideal when you want to execute a function at regular intervals during a continuous action.
// - The function executes periodically, at fixed intervals.
// - Executes the function immediately and/or at regular intervals.
// -  Handling window resize or scroll events.
// -  API calls while dragging a slider.
// - Limits the rate at which the function is called.
// - Throttling controls the rate of function execution, useful for continuously updating actions.



