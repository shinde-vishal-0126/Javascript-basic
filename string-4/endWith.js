// ENDSWITH():

// endsWith(searchString[, length])
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

// The endsWith() method is commonly used to check file extensions:

// NOTE :
// The endsWith() method is useful for checking if a string ends with certain characters.
// It is case-sensitive and optionally allows specifying the length of the string to consider for the check.

