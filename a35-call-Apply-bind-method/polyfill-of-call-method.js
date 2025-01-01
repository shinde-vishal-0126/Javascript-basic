// polyfill of the call() method

let car = {
    color:'red',
    company:'Ferrari'
}

function purChanCar(currency, price){
console.log(`i have punchedCar ${this.company} car with color ${this.color} and price are ${currency} ${price}`)
}

// purChanCar.call(car,"$",90)

// now lets create polyfill of teh call() method 
// first call method take two argument first one is context like object and 2nd argument as individual argument 
// so lets create function

// Function.prototype.myCall = function (context={} ,...args) {
//     // then check call method calling are the type of function or not 
//     if(typeof this !== 'function'){
//         throw new Error(this + "this function are not callable...")
//     }

//     context.fn = this;
//     context.fn(...args)
// };


// Define a custom 'myCall' method on Function.prototype
Function.prototype.myCall = function(context = {}, ...args) {
    // Check if 'this' is a function (only functions can be called using 'call')
    if (typeof this !== 'function') {
        throw new Error(this + " is not callable"); // Throw an error if not a function
    }

    // Assign the context object if none is provided (default to an empty object)
    context.fn = this; // Temporarily assign 'this' (the function) as a method of the context object

    // Call the function using the context object and spread the arguments
    const result = context.fn(...args); // Invoke the function with the provided arguments
    // Clean up by removing the temporary method from the context object
    delete context.fn;

    // Return the result of the function call
    return result;
};



purChanCar.myCall(car,"$",90)