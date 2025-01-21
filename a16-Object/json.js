//# json (javascript object notation)
// json is data interchange format derived form javascript objects:
// object can be easily converted to json and vice versa

//? what is differences between json object and javascript object
//  * json object :
// JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is a string representation of data.
// all key and value are display in double inverted commas (value are depends on the data type but all key are in double inverted commas)
// JSON is always a string format.
//  * object key :
// JSON keys must be double-quoted strings. Values can be strings, numbers, booleans, arrays, or other objects.

// Supports only specific data types: strings, numbers, objects, arrays, booleans, and null.

// JSON does not have methods; it’s a data format.

//  Used primarily for data exchange, like sending data over a network (e.g., APIs, server responses).

// Immutable in its raw form (a string). Needs to be parsed into an object to manipulate.

// Can be converted to a JavaScript object using JSON.parse() and can be converted to a string using JSON.stringify().

// {"name": "John", "age": 30, "city": "New York"}

// Dates in JSON are represented as strings (e.g., "2023-01-01") and need to be parsed manually.

// * javascript
// A JavaScript object is a collection of key-value pairs in memory, directly usable in JavaScript code.
// javascript object only value are display in double inverted commas (value depends on the data type)
// JavaScript objects are actual objects, not strings

// * Object Keys in JavaScript:
// In JavaScript, object keys must be either strings, symbols, or numbers.
// If you define a key as an identifier (e.g., keyName), JavaScript automatically treats it as a string.
// If you use a key with special characters (e.g., spaces, hyphens, or reserved words), the key must be enclosed in quotes (either single ' or double " quotes).

const obj = {
  name: "John", // No quotes needed for valid identifier
  age: 30,
};

const obj = {
  "first name": "John", // Quotes are necessary because of the space
  "1stAge": 30, // Quotes required for keys that start with a number
  "key-with-hyphen": "value",
};
// JavaScript object keys are always strings, and if they aren't valid identifiers (i.e., they contain special characters or spaces), they must be quoted (either single or double quotes).
// Numbers and symbols can be used as object keys, but they are automatically converted to strings when used as keys.


// Supports any valid JavaScript data type, including functions, undefined, and regular expressions.

// JavaScript objects can have methods (functions) associated with them

// Used in JavaScript programs for creating and manipulating data structures and logic.

// Mutable and directly editable in JavaScript.

// JavaScript objects don’t need conversion to be used within JavaScript, but can be serialized to a JSON string using JSON.stringify().

// {name: "John", age: 30, city: "New York"}

// JavaScript objects can hold Date objects natively.


//? How to covert object into json object ?
const jsonObj = JSON.stringify(person);
console.log(jsonObj); // it return in json format


//? how to convert json object into normal javascript object ?
const normalObj = JSON.parse(jsonObj);
console.log(normalObj);
