// ENDSWITH():

// endsWith(searchString[, length])
// the endWith() method return true if the string ends with a specified value otherwise return false.
// The endsWith() method in JavaScript determines whether a string ends with the characters of a specified string,or not 
// returning true or false as appropriate.
const str1 = "Hello, World!";
console.log(str1.endsWith("World!"));  // Output: true
console.log(str1.endsWith("world!"));  // Output: false (case-sensitive)
console.log(str1.endsWith("Hello"));   // Output: false

const str = "Hello, World!";
// length (optional): If provided, it is used as the length of str. The searchString is checked against the substring of str ending at this length.
console.log(str.endsWith("Hello", 5));  // Output: true
console.log(str.endsWith("World", 12)); // Output: false
console.log(str.endsWith("!", 13))

// Example with Negative length
// It does not support negative values for the length parameter. If you provide a negative length, it will be treated as 0, resulting in false.
// const str = "Hello, world!";
console.log(str.endsWith("world!", -1)); // false (negative length is treated as 0)


// The endsWith() method is commonly used to check file extensions:

// NOTE :
// The endsWith() method is useful for checking if a string ends with certain characters.
// It is case-sensitive and optionally allows specifying the length of the string to consider for the check.

