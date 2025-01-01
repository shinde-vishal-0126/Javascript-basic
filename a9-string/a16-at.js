// AT()

//# str.at(index)
// The at() method in JavaScript is used to access a character at a specific index in a string.
// The at() method in JavaScript is used to access the element at a specific index in an array or a string, supporting negative indices, which count from the end.
// def : at() method in JavaScript is used to access or retrieve the element at a given or specified index index in a string or an array

// 1. The string at() method take an integer value and return new string consisting of the single utf-code 16 unit located at specified offset
// 2. this method allow positive and negative integers (negative numbers start from the last string character )
// 3. The at method in JavaScript is used to retrieve the element at a specified index in a string 
// 4. If the specified index is out of range (greater than the string length or less than the negative string length), the method returns undefined.        
// 5. return undefined if the element not found 
// It is similar to using bracket notation ([]), but with an added benefit: it allows you to use negative indices to access elements from the end of the string or array.
// Return Value:
// If the index is within the bounds of the string, it returns the character at that position.
// If the index is negative, it returns the character counted from the end of the string.
// If the index is out of range (either too large or too negative), it returns undefined.

// Example :
const str = "Hello, World!";
console.log(str.at(0));   // Output: "H"
console.log(str.at(7));   // Output: "W"

// for negative indexing
// -ve indexing start form the last element.
console.log(str.at(-1));  // Output: "!"
console.log(str.at(-5));  // Output: "o"
console.log(str.at(15)) // undefined

const str1 = "JavaScript";
console.log(str1.at(0)); // "J" (first character)
console.log(str1.at(4)); // "S" (fifth character)

console.log(str1.at(20)); // undefined (index exceeds the string length)
console.log(str1.at(-20)); // undefined (negative index is too large)


// Positive Index: Works as usual, starting from the beginning of the array or string.
// Negative Index: Allows you to access elements from the end of the array or string.
// Out-of-Bounds Access: Returns undefined when the index is out of bounds.

// The at() method is useful in cases where you want to access characters starting from the end of the string or avoid extra checks when working with out-of-bounds indices.