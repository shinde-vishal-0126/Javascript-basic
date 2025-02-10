//? what is memoize ?
// Memoization is an optimization technique in programming
// that involves storing the results of expensive function calls and reusing those cached results when the same inputs occur again.
//  It helps improve performance by avoiding redundant computations.
// JavaScript, memoization is often implemented by wrapping a function in another function that maintains a cache of previously computed results.

//? Why Use Memoization?
// Improves Performance: Reduces repeated computations for the same inputs.
// Ideal for Expensive Operations: Useful for operations involving recursion, heavy calculations, or API calls.
// Saves Time: Trades off a small amount of memory (for caching) to save significant computation time.

//? How Memoization Works:
// A cache (usually a Map or an object) is used to store results.
// Before executing the function:
// Check if the result for the given inputs already exists in the cache.
// If it exists, return the cached result.
// If not, compute the result, store it in the cache, and then return it.

//? Disadvantages:
// Memory Usage: Stores results in memory, which can grow significantly for many unique inputs.
// Limited Use Case: Not useful for functions with side effects or inputs that frequently change.

//? memoize polyfill
// implement Caching and memoize function in javascript
const calculation = (num1, num2) => {
  // Simulate a heavy computation
  for (let i = 0; i < 100000000; i++) {}
  return num1 + num2;
};

function memoize(fun, context) {
  // Initialize a cache object to store the computed results for specific arguments.
  var cache = {};
  console.log("cache", cache);

  // Return a new function that will act as the memoized version of the provided function.
  return function (...args) {
    console.log(...args);
    // Convert the arguments into a string key to uniquely identify the combination of arguments.
    const argsKey = JSON.stringify(args);
    console.log(argsKey);
    // Check if the result for the current arguments is already in the cache.
    console.log(cache[argsKey]);
    if (!cache[argsKey]) {
      // If the result is not in the cache, compute it by calling the original function and store it in the cache.
      // The 'context' specifies the context in which the function should be executed.
      cache[argsKey] = fun.apply(context || this, args);
    }
    // Return the cached result if available, or the computed result.
    console.log("cache2", cache);
    return cache[argsKey];
  };
}

const memoizeFunction = memoize(calculation);

console.time("First Call");
console.log(memoizeFunction(1200, 1298)); // Executes the function and caches the result
console.timeEnd("First Call");

console.time("Second Call");
console.log(memoizeFunction(1200, 1298)); // Retrieves the result from cache
console.timeEnd("Second Call");



//| also used the Map()
function myMemoize(fun, context) {
    let cache = new Map(); // Use Map for caching results
    return function (...args) {
        const argsKey = JSON.stringify(args); // Serialize arguments as a unique key
        if (!cache.has(argsKey)) {
    // Store the result in cache if not already present
            cache.set(argsKey, fun.apply(context || this, args));
        }
        return cache.get(argsKey); // Retrieve the cached result
    };
}

// |--------------------------

// This defines a function named myMemoize that takes two parameters:
// fun: The function that you want to memoize (i.e., cache the result of).
// context: An optional context (this value) in which to execute the fun.

function myMemoize(fun, context) {
    let cache = {}; // Use an object to store results
    //This returns a new function that takes any number of arguments (...args is the rest parameter). 
    // This new function will be the one that is invoked instead of directly calling fun
    return function (...args) {
        // The args (the arguments passed to the function) are serialized into a string using JSON.stringify.
        // This serialized string is used as a unique key to store the result in the cache object.
        // This is important because objects or arrays passed as arguments cannot be directly used as keys in an object, so we convert them into a string.
        const argsKey = JSON.stringify(args); // Serialize arguments as key

        // This checks whether the result for these specific arguments (argsKey) is already cached. 
        // If the key does not exist in the cache, it means the function hasn’t been called with this set of arguments before, so we need to compute the result.
        //if (!(argsKey in cache))
        if (!cache[argsKey]) {
            // If the result is not in the cache, the function fun is called with the provided arguments (args).
            //  The apply method is used to invoke fun with the correct this context, which is either the value of context (if provided) or the default this (i.e., the current context in which the function is called).
            // The result of the function call is stored in the cache object using the argsKey.
            cache[argsKey] = fun.apply(context || this, args);
        }
        return cache[argsKey]; // Always return the cached result
    };
}


// also used the following code function memoize(fun, context) {
  // Initialize a cache object to store the computed results for specific arguments.
  var cache = {};
  console.log("cache", cache);

  // Return a new function that will act as the memoized version of the provided function.
  return function (...args) {
    console.log(...args);
    
    // Convert the arguments into a string key to uniquely identify the combination of arguments.
    const argsKey = JSON.stringify(args);
    console.log(argsKey);
    
    // Check if the result for the current arguments is already in the cache.
    console.log(cache[argsKey]);
    //function memoize(fun, context) {
  // Initialize a cache object to store the computed results for specific arguments.
  var cache = {};
  console.log("cache", cache);

  // Return a new function that will act as the memoized version of the provided function.
  return function (...args) {
    console.log(...args);
    
    // Convert the arguments into a string key to uniquely identify the combination of arguments.
    const argsKey = JSON.stringify(args);
    console.log(argsKey);
    
    // Check if the result for the current arguments is already in the cache.
    console.log(cache[argsKey]);
    if (!(argsKey in cache)) {
      // If the result is not in the cache, compute it by calling the original function
      // with the specified context (this) and arguments.
      cache[argsKey] = fun(...args); // Directly call the function with arguments.
    }

    // Return the cached result if available, or the computed result.
    console.log("cache2", cache);
    return cache[argsKey];
  };
}

// using bind method
function memoizeWithBind(fun, context) {
  var cache = {};
  console.log("cache", cache);

  return function (...args) {
    console.log(...args);
    const argsKey = JSON.stringify(args);
    console.log(argsKey);

    if (!(argsKey in cache)) {
      // Bind the function to the given context and execute it
      cache[argsKey] = fun.bind(context)(...args);
    }

    console.log("cache2", cache);
    return cache[argsKey];
  };
}


// using call method 

function memoizeWithCall(fun, context) {
  var cache = {};
  console.log("cache", cache);

  return function (...args) {
    console.log(...args);
    const argsKey = JSON.stringify(args);
    console.log(argsKey);

    if (!(argsKey in cache)) {
      // Use `call` to invoke the function with the given context, passing arguments individually
      cache[argsKey] = fun.call(context || this, ...args);
    }

    console.log("cache2", cache);
    return cache[argsKey];
  };
}
