
//? what is memoize ?
// Memoization is an optimization technique in programming that involves storing the results of expensive function calls and reusing those cached results when the same inputs occur again.
//  It helps improve performance by avoiding redundant computations.
// JavaScript, memoization is often implemented by wrapping a function in another function that maintains a cache of previously computed results.


//! Why Use Memoization?
// Improves Performance: Reduces repeated computations for the same inputs.
// Ideal for Expensive Operations: Useful for operations involving recursion, heavy calculations, or API calls.
// Saves Time: Trades off a small amount of memory (for caching) to save significant computation time.


//! How Memoization Works:
// A cache (usually a Map or an object) is used to store results.
// Before executing the function:
// Check if the result for the given inputs already exists in the cache.
// If it exists, return the cached result.
// If not, compute the result, store it in the cache, and then return it.


//! Disadvantages:
// Memory Usage: Stores results in memory, which can grow significantly for many unique inputs.
// Limited Use Case: Not useful for functions with side effects or inputs that frequently change.

//! memoize polyfill
// implement Caching and memoize function in javascript 
const calculation = (num1, num2) => {
    // Simulate a heavy computation
    for (let i = 0; i < 100000000; i++) { }
    return num1 + num2;
};


function myMemoize(fun, context) {
    let cache = {}; // Use an object to store results
    return function (...args) {
        const argsKey = JSON.stringify(args); // Serialize arguments as key
        if (!cache[argsKey]) {
            cache[argsKey] = fun.apply(context || this, args);
        }
        return cache[argsKey]; // Always return the cached result
    };
}

// also used the Map()
// function myMemoize(fun, context) {
//     let cache = new Map(); // Use Map for caching results
//     return function (...args) {
//         const argsKey = JSON.stringify(args); // Serialize arguments as a unique key
//         if (!cache.has(argsKey)) {
            // Store the result in cache if not already present
//             cache.set(argsKey, fun.apply(context || this, args));
//         }
//         return cache.get(argsKey); // Retrieve the cached result
//     };
// }

const memoizeFunction = myMemoize(calculation);

console.time("First Call");
console.log(memoizeFunction(1200, 1298)); // Executes the function and caches the result
console.timeEnd("First Call");

console.time("Second Call");
console.log(memoizeFunction(1200, 1298)); // Retrieves the result from cache
console.timeEnd("Second Call");
