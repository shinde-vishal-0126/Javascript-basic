// mock interview 1: // 21/01/2025

//? find the output of the following code.

let a = 12;
// let a ='vishal' // when you deal with string return NaN
// let a = false; // when you work with boolean it return true for 1 and 0 for false
console.log(a * 12); 
// exponent: The power to which the base is raised.
console.log(a ** 12);



// ? 2.
// this concept is know as Global variable leak
// to solve this used strict mode
function example() {
  // "use strict"
  salary = 50000;
  console.log(salary);
}
example(); // 50000



//? 3.
function test() {
  // which is refer to the property of the function itself
  console.log(test.abc); // undefined
  // 600
}
test();
// assign property to the function (javascript function are object so you can attached properties to them)
test.abc = 400;
test.abc = 600;
// In JavaScript, functions are first-class objects, meaning they can have properties like any other object.
// test.abc is a custom property of the function test, not a local variable.
// Since test.abc is modified between calls, its value changes accordingly.
test();




// ? tell me the output
console.log({} == {}); // false
// console.log({} === {}) // false

// Each time you use {}, it creates a new, unique object in memory.
// == checks for equality with type conversion (comparing objects, it checks if they reference the same object in memory.)
// Since {} creates a new object each time, two different {} objects do not reference the same object in memory.
// === checks for strict equality, meaning both the type and value must be the same.
// Like ==, it checks if the two objects reference the same object in memory.

// - explanation :
// Value vs. Reference:
// - In JavaScript, primitive values (like numbers, strings, etc.) are compared by their value.
// - Objects (including arrays and functions) are compared by their reference (memory location), not by their content or structure.

// * Loose Equality (==):
// == performs type coercion for primitive values. For example, 2 == '2' would be true because the string '2' is coerced to the number 2.
// However, for objects, == still checks if they reference the same object in memory.
// Even if two objects have the same structure or properties, if they are not the exact same object (i.e., the same reference), == will return false.
//  * Strict Equality (===):
// === checks both type and reference without type coercion.
// For objects, === checks if both operands reference the exact same object in memory.

// =============================================================================================================================================

// ? what is output of this code
const person = {
  name: "vishal",
};

let b = {
  // create the copy of the person object it does create references with person create using pass by value
  ...person,
};
b.name = "akshu";
console.log(person.name); // vishal

// =============================================================================================================================================

// ? what the output
// here === check value or content and its type also
let bb = 10;
let c = new Number(10); // 10
console.log(typeof c); // object
// c return the Number {10} as object so it compare with any other is return false
console.log(c);
let d = 10;

console.log(bb === c); // false
console.log(bb === d); // true

// =============================================================================================================================================


// ? what is output
function data(record) {
  // Attempt to compare record with a new object {age: 28} using loose equality (==)
  // This will not work as expected because objects are compared by reference, not by value.
  // Even though both objects have the same properties and values, they are different instances in memory.
  if (record == { age: 28 }) {
    console.log("you are adult");
  }
  // Attempt to compare record with a new object {age: 28} using strict equality (===)
  // This will also fail because the two objects are different instances in memory.
  else if (record === { age: 28 }) {
    console.log("you are still in adult");
  }
  // If neither condition above is true, this block will execute.
  // This happens because both equality checks above compare object references, not the actual content.
  else {
    console.log("no record");
  }
}

// =============================================================================================================================================


// ? what is output
console.log(+true);
// value of true is one and using + it converted into number
// So, +true converts true to 1, and the result of the console.log will be 1.
console.log(!"vishal");
// The string 'vishal' is a non-empty string, which is considered a "truthy" value in JavaScript.
// The ! operator is a logical NOT, which inverts the truthy value.
// Since 'vishal' is truthy, ! will convert it to false.
// Output: false

// =============================================================================================================================================


//? what is output

a = {
  //   "[object Object]": 600
};

b = {
  key: b,
  // "[object Object]": 700
};

var c = {
  key: c,
};

//  Here, we try to set the key b in the object a and assign it the value 600
// However, when an object (b in this case) is used as a key in an object (a), JavaScript automatically converts the object to a string.
//  JavaScript calls the toString method on b to convert it to a string. The default toString method for objects returns the string [object Object].
// a['[object Object]'] = 600;

a[b] = 600;
// we try to set the key c in the object b and assign it the value 700.
//  since c is an object, it is converted to a string [object Object] before being used as a key.
//b['[object Object]'] = 700;

b[c] = 700;

// c is an object, and when used as a key, it gets converted to the string [object Object], just like in the previous steps.
// a['[object Object]']
//  a['[object Object]'] was assigned the value 600.

console.log(a[c]);

// try to access a[b]. Since b is an object, it will also be converted to the string [object Object] before being used as a key.
// a['[object Object]']
console.log(a[b]); // 600

/* Now, we try to access b[b]. Here, b is an object, and when used as a key, it will be converted to the string [object Object].
b['[object Object]']
From the previous step, we know that the value of b['[object Object]'] was set to 700.
console.log(b[b]); //
console.log(b[c]); // 700 */

// =============================================================================================================================================


// ? in following example i want the output 
let str = 'abcdef';
let str2 = '123';
// a1b2c3def

// let str = 'abc'
// let str2 = '123456'
// a1b2c3456
function concat(str,str2){
    let result = ''
   
    let strLength = str.length;
    let str2Length = str2.length;

    let i =0
    while(i < strLength && i < str2Length){
        result = result + str[i];
        result = result + str2[i];
        i++
    }
    // append the remaining character form the str array 
    while(i < strLength ){
        result = result + str[i]
        i++
    }
 // append the remaining character form the str2 array
    while(i < str2Length){
        result = result + str2[i]
        i++
    }
    console.log(result)
}
concat(str, str2)


// - using built in method 

function combineString(str,str2){
    let result = ''
    let minLength = Math.min(str.length , str2.length);
    console.log('minLength',minLength);

    for(let i =0 ;i< minLength;i++){
        result = result + str[i] + str2[i]
        console.log(result)
    }

    if(str.length > minLength){
        result =result + str.slice(minLength)
    }else if(str2.length > minLength){
        result = result + str2.slice(minLength)
    }
    return result 
}
console.log(combineString(str,str2))

// =============================================================================================================================================

// ? what is type of null data type
console.log(typeof null); // Object

// =============================================================================================================================================

// ? how to check given object is array or object 
console.log(Array.isArray([])) // return true;
console.log(Array.isArray({})) // return false


// mock interview 2 : 22/01/2024
// ? separate the char and number form the given array 
let array = [1, 'a', 'b', "c", 6, 7, 8, '5'];
function separationOfArray(array) {
  let numberArray = [];
  let charArray = [];

  for (let element of array) {
    if (typeof element === 'number') {
      numberArray.push(element);
    } else {
      charArray.push(element);
    }
  }

  return {
    numberArray,
    charArray
  };
}
const result = separationOfArray(array);
console.log("Numbers:", result.numberArray);
console.log("Characters:", result.charArray);



//? give the example of function currying ?
function currying(operator){
  return function(a){
      return function(b){
          return function(c){
              if(operator ==='add'){
                  return a+b+c;
              }else if(operator === 'mul'){
                  return a*b*c
              }else{
                  throw new Error ('unsupported operation')
              }
          }
      }
  }
}
const calculate = currying('mul');
console.log(calculate(1)(2)(3))

// ? what is scope in javascript ?
// accessibility and visibility of the variable in program is know as scope 
// certain reagan in the program where defined variable is exist recognized or not recognized
// scop defined the context where variable, function and object can be refereed.

//? Give a example fo deep copy and shallow copy in javascript 
let object = {
  name:'vishal',
  age:34
}
// create shallow copy 
let newObj = Object.assign({}, object)
// create shallow copy
let newObj1 = {...object}

// Deep copy
let deepCopy = JSON.parse(JSON.stringify(object));



// ? what is differences between map function and forEach function
// map : return new array with transformed element based on teh callback function 
//     : does not modify the array create new array
//    :  chaining method allowed like filter reduce
// forEach() : does not return anything (undefined) simply execute the function for each element.
          //  : modified the original array if change the element inside the callback  
          // : chaining is not possible.


//? what do you mean by event bubbling ?
// event bubbling :
//  Event bubbling is a concept in the DOM (Document Object Model) where an event starts at the most specific element (the target element) and then "bubbles up" through its ancestors in the DOM hierarchy, triggering the same event handler on each ancestor.
//  This process continues until it reaches the root element of the document.
//- How Event Bubbling Works:
// Event Occurrence: When an event (like a click, keydown, etc.) occurs on a target element, the event is initially captured by that element.
// Propagation: The event then bubbles up from the target element to its parent element, then to its parent's parent, and so on, until it reaches the root element (usually the <html> or <body> element).
// Event Handlers: As the event bubbles up, any event listeners attached to these ancestor elements are triggered, provided that they are set to listen for that event type.


//? what pure function in javascript with example ?
// (Deterministic – Given the same inputs, it always returns the same output.
// No Side Effects – It does not modify external states (e.g., global variables, DOM, databases).)
// pure function if function that get same output when execute multiple time with same argument 
// does not modify variable, dom or global variable, it having constant result with same input 
// it is rely or does not modify any state 
// does not perform any sideeffect.
function add(a, b) {
  return a + b; 
}
console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 (Same input, same output)

//? what is impure function ?
// It is not deterministic – The same input may not return the same output.
// It has side effects – It modifies external state (e.g., global variables, DOM, API calls, databases).
let total = 0; 

function addToTotal(value) {
    total += value;  // Modifies global variable
    return total;
}

console.log(addToTotal(5));  // 5
console.log(addToTotal(5));  // 10 (Same input, different output) 



//? what is transpiling in coding 
// Transpiling is the process of converting modern JavaScript (ES6+) code into an older version (ES5 or earlier) so that it can run in older browsers that do not support the latest features.

// 🛠 Tools for Transpiling:

// Babel (Most popular)
// TypeScript (also compiles to JavaScript)
// SWC (faster alternative to Babel)

// When you want to convert one type of source code into another, you're typically using a transpiler or a compiler. 
// These tools take the source code written in one language or syntax and transform it into another format or language.

//? Why is Transpiling Needed?
// New JavaScript features (e.g., let, const, arrow functions, classes, async/await) may not be supported in older browsers. 
// -Transpiling ensures backward compatibility.

// - Transpiling from TypeScript to JavaScript
// TypeScript is a superset of JavaScript that adds type annotations and other features. A transpiler like tsc (TypeScript compiler) is used to convert TypeScript code into regular JavaScript code.

// - ES6+ to ES5 (JavaScript Transpiling)
// Tools like Babel are used to convert modern JavaScript (ES6 or later) into an older version (ES5) for compatibility with older browsers that don't support newer syntax (like arrow functions, async/await, etc.).

// -SASS/SCSS to CSS
// A CSS preprocessor like SASS is used to write styles in a more feature-rich syntax. These tools transpile SCSS into regular CSS that browsers can read.
// JSX to JavaScript (React)
// In React, JSX is used to write UI components, but browsers can't directly interpret JSX. A tool like Babel or a build tool like Webpack is used to convert JSX into regular JavaScript.
//  transpilers allow developers to write code in a more expressive, efficient, or higher-level way, and then transform it into a more widely-supported or optimized version. If you're talking about converting one source code language or format to another, transpilers are probably what you're looking for.


//? what are new features in es6 please explain 
// ES6 Features List with One-Line Descriptions 🚀
// let and const – Block-scoped variable declarations (let is mutable, const is immutable).
// Arrow Functions (=>) – Shorter function syntax that inherits this from the surrounding scope.
// Template Literals – String interpolation using backticks (`Hello, ${name}!`).
// Default Parameters – Assign default values to function parameters (function greet(name = "User")).
// Destructuring Assignment – Extract values from arrays and objects into variables (const {name, age} = obj).
// Rest Operator (...) – Collects multiple elements into an array (function sum(...nums)).
// Spread Operator (...) – Expands an array or object (const arr2 = [...arr1, 4, 5]).
// Enhanced Object Literals – Shorthand for defining object properties ({ name, age } instead of { name: name, age: age }).
// Promises – Handle asynchronous operations (fetchData().then().catch()).
// Classes – ES6 class syntax for object-oriented programming (class Person { constructor(name) { this.name = name; } }).
// Modules (import/export) – Split code into reusable modules (import { func } from './module.js').
// Map and Set – New collection types (Map for key-value pairs, Set for unique values).
// for...of Loop – Iterates over iterable objects (for (let item of arr) {}).
// Object.entries() and Object.values() – Retrieve keys and values from an object.
// find() and findIndex() – Locate elements in an array based on a condition.
// includes() for Arrays – Checks if an array contains a specific value (arr.includes(3)).
// startsWith() and endsWith() – Check string prefixes and suffixes (str.startsWith("Hello")).
// Number.isFinite() and Number.isNaN() – Improved number checking methods.
// Generators (function*) – Create iterators with yield keyword (function* gen() { yield 1; yield 2; }).
// WeakMap and WeakSet – Similar to Map and Set, but with weak references.


//? what is promise and its state 
// promise are object or placeholder where we have to store the failure or success of the asynchronous operation
// it having 3 state
// pending state
// fulfilled state
// rejected state