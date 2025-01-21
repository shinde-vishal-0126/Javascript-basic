//#spread operator
// - def:
// The spread operator (...) is a syntax in JavaScript that allows you to expand or spread elements of an iterable (like an array or string) or properties of an object into individual elements or key-value pairs.
// It is commonly used for various tasks like copying, merging, or combining data.

// * it is used:
// - copying an array
// It allows for a concise way to create copies of arrays or objects,( split an array or an iterable (like string and another array) into individual elements )
// - concatenating array/ or combining two array
// merge multiple arrays or objects, (Primarily used for creating copies of arrays or combining multiple arrays or iterative)
// - adding in existing array.
// - and pass elements as function arguments.
//example
// spread operator allow us to quickly copy all the part of the array or array like object into another array or object
const color = ["red", "green", "blue", "white"];
const new_color = ["red", "green", "blue", "black"];
const myFavColor = [...color, "yell", "black"];
console.log("myFavColor", myFavColor);

// Note:
// - The spread operator does not create a reference to the original array
//  - This is because the new array is a separate instance with its own values, copied at the time of creation.
color.push("mango");
console.log(color);
console.log("myFavColor after pushing new array", myFavColor);

// - Spread operator also used with objects literals
// if you used spread operator in object and you are spread operator used to combined two object and both object having one same property then the in first same property override with the 2nd property
const vehicle = {
  brand: "food",
  model: "mustang",
  color: "red",
};
const feature = {
  year: 2021,
  type: "car",
  color: "yellow",
};

const new_feature = {
  ...vehicle,
  ...feature,
};
console.log(new_feature);
// Overwriting in the context of merging objects with the spread operator happens when two objects have properties with the same key. The value of the property from the last object spread into the new object will replace the value from any earlier objects with the same key.

// - Spread Operator spread into function call
// In function call the spread operator is used to spread the element of an array (or any iterable) as an individual argument to function
function sum(a, b, c) {
  return a + b + c;
}
const number = [1, 2, 3, 4, 5, 6, 8];
const result = sum(...number);
console.log(result);

//- spread operator with string
// When a spread operator is used with the string the spread operator treats the string as an iterable and spreads its characters into an array or other context where iterable elements are expected.
// in javascript when using the spread operator it convert the string into an array of its individual characters.
const str = "vishal";
console.log(...str); // v i s h a l
console.log([...str]);

// . Spread Operator (...)
// Purpose: The spread operator is used to expand or "spread" elements from an iterable (like an array or object) into individual elements or propertie

// Use Case:
// - Arrays: To expand an array into individual elements.
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // Spread elements of arr1
console.log(arr2); // [1, 2, 3, 4, 5]

//  - Objects: To expand an object’s properties into a new object.
const obj1 = { name: "John", age: 30 };
const obj2 = { ...obj1, city: "New York" }; // Spread properties of obj1
console.log(obj2); // { name: 'John', age: 30, city: 'New York' }

//  -Spread Operator (...) with Strings
// The spread operator can be used to split a string into individual characters in an array.
// const str = "Hello";
// const chars = [...str];  // Spread the string into individual characters
// console.log(chars);  // ['H', 'e', 'l', 'l', 'o']
// In this case, the string "Hello" is spread into an array of characters ['H', 'e', 'l', 'l', 'o'].


// Here's the difference between the spread and rest operators

// 1. spread operator
//Purpose :Expands elements (like a string, array, or object) into individual items.
// Context :Used in array or object literals, function calls, etc.	
// Use Case	 : Expanding a string, array, or object into separate values.	
// Example : (String)const chars = [..."Hello"]; → ['H', 'e', 'l', 'l', 'o']
//  Used in Function Calls :es, to pass individual elements from an iterable.
// used in destructuring : No, cannot be used in destructuring for collecting.



// 2. rest operator 
// Purpose :Collects remaining elements (like a string, array, or object) into an array or object.
// Context:	Used in function parameters, array or object destructuring.
// Use Case	: Collecting remaining parts of a string, array, or object.
// example : const [first, second, ...rest] = "Hello"; → first = 'H', rest = ['l', 'l', 'o']
//	No, used in function parameters to collect arguments.
// Used in Destructuring	:Yes, to collect remaining values in arrays or objects.