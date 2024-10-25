// Here we have to done the dom manipulation

const button = document.querySelector('.increment_button')
const pressButton = document.querySelector('.pressed_button')
const triggred = document.querySelector('.increment_count')


var button_count = 0;
var triggered_count = 0;


// Debouncing is nothing but wait for some  or (certain period) particular time to execute function again ()
//limit the rate at which function get invoked.

//Here to implement  the ployfill of the debouncing
const my_debounce = (callback, timeDealy) => {
    // debounce function take two argument first on is callback and second one is timeDealy to wait function execution again
    // we need to monitor the time for the every single keystrock or every single button press so we need the timer

    //create time variable
    var timer;

    // and it return the anonymous function for debouncing prupose 
    // so this return function take and extra argument you have to provide the spread that argument
    return function (...args) {
        // and assigne that timer as settimeout and this settimeout is time dealy to execute the function again 
        // and in side that settimeout callback function 
        //you have to call the provided callback function with give argument

        // here we need to check if the time already present so we need to clear this timeout 
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            callback(...args)
        }, timeDealy)
    }

}


const debounce = my_debounce(() => {
    triggred.innerHTML = ++triggered_count

}, 800)

button.addEventListener('click', () => {
    pressButton.innerHTML = ++button_count
    debounce()
})