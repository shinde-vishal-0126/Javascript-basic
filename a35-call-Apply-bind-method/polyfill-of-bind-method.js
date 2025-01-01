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

//   const newFunction = purChanCar.bind(car,"$",90)
//   newFunction();




// polyfill of bind() method
// take individual argument
Function.prototype.myBind = function (context = {}, ...args) {
  // check if the this is function (because only function are allow to call)
  if (typeof this !== "function") {
    throw new Error(this + "this function not callable...");
  }

  // Assign the context object if none is provided (default to an empty object)
  context.fn = this;
  // here bind() method return new function with given argument 

  return function (...newArg) {
    // so bind method create exact copy of the give function and then execute with all give argument in later
    context.fn(...args, ...newArg);
  };
};
const newFunction = purChanCar.myBind(car);
newFunction("$", 90);
