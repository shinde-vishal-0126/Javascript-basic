// polyfill of the apply() method

let car = {
  color: "red",
  company: "Ferrari",
};

function purChanCar(currency, price) {
  console.log(
    `i have punchedCar ${this.company} car with color ${this.color} and price are ${currency} ${price}`
  );
}

// purChanCar.call(car,"$",90)

// Define a custom 'myApply' method on Function.prototype
Function.prototype.myApply = function (context = {}, args = []) {
  // Check if 'this' is a function (only functions can be called using 'apply')
  if (typeof this !== "function") {
    throw new Error(this + "this is not callable...."); // Throw an error if not a function
  }
  if (!Array.isArray(args)) {
    return "please give argument as an array";
  }
  // Assign the context object if none is provided (default to an empty object)
  context.fn = this; //  Temporarily assign 'this' (the function) as a method of the context object
  const result = context.fn(...args); // Invoke the function with the provided arguments

  // Clean up by removing the temporary method from the context object
  delete context.fn;

  // Return the result of the function call
  return result;
};

purChanCar.myApply(car, ["$", 90]);
