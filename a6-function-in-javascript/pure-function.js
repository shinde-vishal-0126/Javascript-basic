// =============================================================================================================================================================
// # pure function in javascript 
// =============================================================================================================================================================

//? what is pure function in javascript 
// JavaScript, pure functions and impure functions are concepts used to differentiate between functions based on their behavior and side effects.


// - A pure function in JavaScript is a function that:
// Always produces the same output for the same input.(For a given input, the function always produces the same output.)
// Does not have any side effects (does not modify any external state or variables outside of the function).
// It does not modify any external state or interact with the outside world (e.g., no API calls, no DOM manipulation, no changes to global variables).
// Deterministic:Its behavior is predictable and only depends on its input arguments.

// - Characteristics of a Pure Function:
// It does not modify the input data (i.e., it doesn't mutate its arguments).
// It doesn't rely on or modify any external state (i.e., it doesn't have side effects like changing global variables, DOM manipulation, etc.).

// - A pure function that adds two numbers
function add(a, b) {
    return a + b;
  }
  
  console.log(add(2, 3)); // 5
  console.log(add(2, 3)); // 5 (always same result for same inputs)
  

//? what is impure function in javascript 
// In the impure example, the function relies on and modifies an external state (counter), which makes it impure.
// An impure function is a function that violates one or more principles of a pure function. Specifically:
// - Has Side Effects:
// It modifies external state or interacts with the outside world (e.g., changes global variables, makes API calls, modifies the DOM, or performs I/O operations).
// Non-deterministic:
// The output may vary even with the same input because it depends on external factors.

//? Why is it impure?
// It performs a side effect (API call).
// The result depends on external factors like network status or server response.
// ex. explanation
// It modifies the external variable count.
// The output depends on the current state of count, not just the inputs to the function.


let counter = 0; // External state

// An impure function that modifies external state
function increment() {
  counter++;
  return counter;
}

console.log(increment()); // 1
console.log(increment()); // 2 (output depends on external state)


//? Why Prefer Pure Functions?
// Easier to Test: No external dependencies make testing straightforward.
// Predictable: The output is consistent, making it easier to debug.
// Reusable: Pure functions can be used in different contexts without side effects.