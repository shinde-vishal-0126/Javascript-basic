// startWith(searchString, position) :

// 1. startWith() method of the string value determine whether the string begin with the character of a specified string or not
// 2. returning the true of false as appropriate
// 3. Return true if the give character are found at the beginning of the string including when search string is an empty string 
// Otherwise it return the false

const str1 = "Hello, World!";
console.log(str1.startsWith("World!")); // false
console.log(str1.startsWith("world!"));  // false
console.log(str1.startsWith("Hello"));   //true

 

const str = "Hello, World!";
// length (optional): If provided, it is used as the length of str. The searchString is checked against the substring of str start at this length.
console.log(str.startsWith("Hello", 0));  // true
console.log(str.startsWith("World", 7)); //true
console.log(str.startsWith("!", 13)) // false


// With Empty Strings
const str3 = "Test string";
console.log(str3.startsWith("")); // true (an empty string is at the start of any string)

// startsWith() method in JavaScript does not support negative indices for the position parameter. If you pass a negative value, it will be treated as 0, effectively starting the search from the beginning of the string.
const str4 = "JavaScript is fun";

// Using a negative index
console.log(str4.startsWith("Java", -5)); // true (treated as position 0)



// The startWith() method is commonly used to check file extensions:

// NOTE :
// The startWith() method is useful for checking if a string start with certain characters.
// It is case-sensitive and optionally allows specifying the length of the string to consider for the check.

