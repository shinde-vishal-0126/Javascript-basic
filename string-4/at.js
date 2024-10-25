// AT()

//# str.at(index)
// def : at() method in JavaScript is used to access or retrieve the element at a given or specified index index in a string or an array
// 1. The string at() method take an integer value and return new string consisting of the single utf-code 16 unit located at specified offset
// 2. this method allow positive and negative integers (negative numbers start from the last string character )
// 3. The at method in JavaScript is used to retrieve the element at a specified index in a string 
// 4. If the specified index is out of range (greater than the string length or less than the negative string length), the method returns undefined.        
// 5. return undefined if the element not found 
// It is similar to using bracket notation ([]), but with an added benefit: it allows you to use negative indices to access elements from the end of the string or array.

// Example :
const str = "Hello, World!";
console.log(str.at(0));   // Output: "H"
console.log(str.at(7));   // Output: "W"

// for negative indexing
// -ve indexing start form the last element.
console.log(str.at(-1));  // Output: "!"
console.log(str.at(-5));  // Output: "o"
console.log(str.at(15)) // undefined
