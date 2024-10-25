// debouncing is way to optimize the evant handalling in javascript or way
// help to optimize how we called certain event in javascript 
// ex. searchbox (Having the debouncing method (with diaply 400ms))
// debouncing wait for some perticualr time to execution of an funcation cal
// (or wait for certain ammount of time before running it again)
// it remove the unwanted noice form the inputbox , searchbox and button
// it limit the rate at which a function get invoked (or prevent extra acitivity or prevent slow function of traggering to often)


// when i pressed button x time the increase the count y every time when i stop the pressing the button and 
// 800 ms  as debounced as passed.

//Target each Dom element

const button = document.querySelector('.increment_button');
const pressedButton = document.querySelector('.pressed_button');
const traggering = document.querySelector('.increment_count');

// defined two variable for press Count and triggered Count
var pressed_count = 0;
var triggered_count = 0;

//without debouncing here press_count is increment as well as triggered count also incremented but we want
// every time pressing the button and we stop this pressing the button and only after the 800ms or more than then
// only increment the triggered count (not every time we pressing the button)
//solved this issue we have to used the debouncing 
// to used debouncing we have to used the implemetation of debouncing or also present the debounces function is
// lodash library.
// syntax  .debounce(fun, [wait=0],[options={}])

//here we have to create dbounce function
const debounce_function = _.debounce(() => {
    // perform action whatever you want
    traggering.innerHTML = ++triggered_count
}, 800)

// Then add event listner on button
button.addEventListener('click', () => {
    pressedButton.innerHTML = ++pressed_count;
    debounce_function();
})


//Example :  when i go to search box and type something  then you can notice when i type and pause few millisecond and then only the search result updated 

//When i continuously typing in the search bar it does not show the result when as soon as i stop for few millisecond then it makes and api call and then the fetch suggestion so this happen with the help of debouncing

//we have SearchBox is  having decounces method with display of 400 ms and we typing one word after the another   like  (v i s h ) and this each word having the gap of 100 ms between them and while typing the extra word beyond 400 ms not the api call will be executed 

//So as soon as we pause and mode another keystroke after sometime it is more than 400 ms let us it around 600 ms Vish  (400 ms )  __ al  → 600 ms When we pase this is movement where are action will be performed which in this case we need to call api in paused section so this is called as debouncing 


