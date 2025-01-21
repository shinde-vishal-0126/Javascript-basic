// # rest parameter :
// ? what is rest parameter
// - def:
//  The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.
//  It is represented by three dots (...) followed by a variable name.
//  It provides a way to collect all remaining arguments into a single array.
// it provide more flexible way to work with function that can accept varying number of argument
// - NOTE :
//  it must be a last formal parameter
//  To rest parameter together and put them all in an array
//  rest parameter has prefix with three dots
//  Rest parameters allow you to represent an indefinite number of parameters as an array.
//  All arguments passed to the function will map to the parameter list.
//  Notice the rest parameter must appear at the end of the argument list.
//  and a function definition can have only one rest operator else the code throw syntax error in both case
// - The rest operator in javascript allows a function to take an infinite number of arguments and bundle them in an array.
// 1
function fname(a, b, ...data) {
  console.log("rest parameter");
}
fname(2, 3, 5, 6, 7, 8);
//So This allows us to write functions that can accept a variable number of arguments, irrespective of the number of parameters defined.

// 2
function sum(...args) {
  // args in an array
  let total = 0;
  for (const a of args) {
    // set for of loop to it iterate element and sum them
    total += a;
  }
  return total;
}
console.log(sum(1, 2, 3));
// assuming that the caller of sum() function  may pass arguments with arguments with various kind of data
// type such as number, string, boolean and you want to calculate total number only


function sum(...args) {
  return args
    .filter(function (e) {
      return typeof e === "number";
    })
    .reduce(function (pre, curr) {
      return pre + curr;
    });
}
let result = sum(10, "Hi", null, undefined, 20);
console.log(result);


// * arguments object itself is not an instance of the array type .
// Therefore you cannot use the filter() method directly.
//  in ES5 you have to used Array.prototype.filter.call()
function sum() {
  return Array.prototype.filter
    .call(arguments, function (e) {
      return typeof e === "number";
    })
    .reduce(function (pre, curr) {
      return pre + curr;
    });
}


// as you see the rest parameter makes the code more elegant, suppose you need argument based on a specific type
// such an number, string, boolean, and null function help you to do it
function filterBy(type, ...args) {
  return args.filter(function (e) {
    return typeof e === type;
  });


  // Example
  // arrow function does not have the argument object if you want to pass some argument
  //to the arrow function you must used the rest parameters
  const combine = (...args) => {
    return args.reduce(function (prev, curr) {
      return prev + "" + curr;
    });
  };
  let message = combine("javascript", "rest", "parameters");
  console.log(message); //javascript rest parameters
  //  combine()  function is an arrow that take an indefinite number of arguments and
  //concatenates these arguments.
}

// Before rest operator it contain only those value we can pass as function parameter
// rest parameter is an improved way to handle function parameter allowing us to more easily handle various input as parameter in a function
// the rest parameter syntax allow us to represent infinite number of argument sa an array
// before rest parameter
function sum(a, b) {
  console.log(a + b); //3
}
sum(1, 2, 3, 4, 5, 6);

// After spread operator
function sum(...input) {
  // rest parameter syntax allow us to represent an infinite number of argument
  console.log("input", input);
  // if you want only accept value in rest parameter so you used spread operator
  console.log(...input);
  let total = 0;
  for (let i of input) {
    console.log(i);
    total = total + i;
  }
  console.log("Total", total);
}
sum(1, 2, 3, 4, 5);

// Rest parameter with string
// rest parameter can also be used with string but they collect multiple value into a single array parameter
function collectionCharacter(...character) {
  console.log(character); // [ 'h', 'e', 'l', 'l', 'o' ]
}
collectionCharacter("h", "e", "l", "l", "o");

// Rest parameter with array
// So rest parameters are commonly used with arrays or to collect multiple arguments or elements into single array parameter.
function collectionCharacter(...character) {
  console.log(character); // [ [ 10, 20, 30, 40, 50, 60 ] ]
}
collectionCharacter([10, 20, 30, 40, 50, 60]);

// Rest parameter with object literal
// Rest parameters are not typically used with object literal as object properties does ot directly correspond to the function arguments.
// -  rest parameters are not commonly used directly with object literals in the same way they are with arrays. However, it is possible to use rest parameters when destructuring objects or when an object is passed as an argument. Let me give you an example:
// In the context of an object literal, rest parameters can be used when destructuring the object inside a function. This allows you to capture the remaining properties of the object.
function printDetails({ name, age, ...rest }) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log('Other Details:', rest);
  }
  
  const person = {
    name: 'John',
    age: 30,
    location: 'New York',
    occupation: 'Engineer'
  };
  
  printDetails(person);

  
  Name: John
Age: 30
// Other Details: { location: 'New York', occupation: 'Engineer' }
// The ...rest collects all remaining properties in the object into a new object.


// ? Differences between rest parameter and spread operator
// - rest parameter and spread operator in javascript are both feature that involved in the three dots with function argument or array element but they have differences

// - rest parameter
//  Rest parameter used in function declaration to called multiple argument into a single array variable
//  Used it allow function to accept an arbitrary number of argument and stream then as element of an array
//  Rest operators allow us to pass an infinite number of arguments to function by accumulating these several values into an array.
function sum(...numbers) {
  console.log(numbers);
  return numbers.reduce((acc, num) => {
    return acc + num;
  });
}
console.log(sum(1, 2, 3, 4, 5));
//  last parameter of function definition
//  rest parameter collect argument into an single array within the function definition or function calling
//  used in function parameter list to collect the multiple argument into single  array
//  only appear within the parameter list of function declaration or function expression
//  it collect individual argument into array
//  You have used only one rest parameter  in function parameter list it collect the all the remaining argument into an array
//  When ever rest parameter in used to collect the multiple function argument into an arry array and used within in function parameter  list
//  javascript rest parameter must be declared at the end of the function parameter list
//  This means that you have regular parameter (non rest parameter  before the rest parameter
//  But you can not use any parameters after that.)
//  Basically rest parameter return the  list of argument in an array

// - spread
// - The spread operator is used to split expand or spread element of an array or an iterable (like string or another array) into individual elements
// It is used when we want to spread the value of an iterable into a new array of function calls.
const arr1 = [1, 2, 3];
console.log([...arr1]); // [ 1, 2, 3 ]
// Spread operators spread the value in an array or string across one or more arguments
// Spread operator is primarily used to spread or unpack the element of an iterable (array or string) into a new array or function
// Its main purpose is to break down .an  iterable into its individual element.
// Basically it is used outside the function parameter or within array, literal, and function call.
// Appear on the right hand side of an assignment or within function arguments
//  It takes an existing  iterable and spreads its element.
// You can used the spread operator as many time as needed to spread multiple iterable or elements
// Spread operator used to spread an iterable into individual element and it is used outside the function parameter
// Spread operator you have to define anywhere in the function arguments..

// - Key Difference:
// The rest operator collects arguments or properties into an array or object.
// The spread operator unpacks arrays, strings, or objects into individual elements.

// - Rest Parameter:
// Purpose: Used in function declarations to collect all remaining arguments passed to the function into a single array.
// Def: marge multiple argument into an array and you used it in the argument  list
// Usage: It allows you to handle an indefinite number of function arguments.
// Location: Always used as the last parameter in the function signature.

//  - Spread Operator:
// Purpose: Expands an array or an object into individual elements.
// Usage: Can be used in various contexts like function arguments, array literals, and object literals.
// Location: Used wherever multiple values need to be unpacked or expanded.

function multi(...rest) {
  // rest operator
  const result = rest;
  console.log(rest); // [ 1, 2, 3, 4 ]
}
const arry = [1, 2, 3, 4];
multi(...arry); // spread operator

// Rest Operator (...)
// Purpose: The rest operator is used to collect multiple elements into a single array or object. It is typically used in function parameters or when destructuring arrays or objects.
// Use Case:
// - Function Parameters: To gather remaining arguments into an array.
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  console.log(sum(1, 2, 3, 4));  // 10

  
// - Array Destructuring: To collect remaining elements into an array.
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]

// - Object Destructuring: To collect remaining properties into a new object.
const { name, ...rest } = { name: 'John', age: 30, city: 'New York' };
console.log(name);  // John
console.log(rest);  // { age: 30, city: 'New York' }

// - Rest Operator (...) with Strings
// The rest operator can be used to collect the remaining characters after destructuring a string into parts.
// const str = "Hello";
// const [firstChar, secondChar, ...rest] = str;  // Destructure the string with rest operator
// console.log(firstChar);   // 'H'
// console.log(secondChar);  // 'e'
// console.log(rest);        // ['l', 'l', 'o']


// Spread: Expands elements or properties into individual ones.
// Rest: Collects elements or properties into an array or object.

