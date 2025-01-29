// mock interview 1: // 21/01/2025

//? find the output of the following code.

// let a = 12;
// let a ='vishal' // when you deal with string return NaN
let a = false; // when you work with boolean it return true for 1 and 0 for false
console.log(a * 12);
// exponent: The power to which the base is raised.
console.log(a ** 12);

// =============================================================================================================================================

// ? 2.
// this concept is know as Global variable leak
// to solve this used strict mode
function example() {
  // "use strict"
  salary = 50000;
  console.log(salary);
}
example(); // 50000

// =============================================================================================================================================

function test() {
  console.log(test.abc); // undefined
  // 600
}
test();
test.abc = 400;
test.abc = 600;
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

//? what do you mean by event bubbling ?
// event bubbling :
//  Event bubbling is a concept in the DOM (Document Object Model) where an event starts at the most specific element (the target element) and then "bubbles up" through its ancestors in the DOM hierarchy, triggering the same event handler on each ancestor.
//  This process continues until it reaches the root element of the document.
//- How Event Bubbling Works:
// Event Occurrence: When an event (like a click, keydown, etc.) occurs on a target element, the event is initially captured by that element.
// Propagation: The event then bubbles up from the target element to its parent element, then to its parent's parent, and so on, until it reaches the root element (usually the <html> or <body> element).
// Event Handlers: As the event bubbles up, any event listeners attached to these ancestor elements are triggered, provided that they are set to listen for that event type.

//? what pure function in javascript with example ?
// pure function if function that get same output when execute multiple time with same argument 
// does not modify variable, dom or global variable, it having constant result with same input 
// it is rely or does not modify any state 
// does not perform any sideeffect.



//? what is transpiling in coding 
// When you want to convert one type of source code into another, you're typically using a transpiler or a compiler. 
// These tools take the source code written in one language or syntax and transform it into another format or language.

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


//? what is promise and its state 
// promise are object or placeholder where we have to store the failure or success of the asynchronous operation
// it having 3 state
// pending state
// fulfilled state
// rejected state