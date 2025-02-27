//  search() 

//  # search( searchElement | regularExpression) :
// The search() method in JavaScript is commonly used for searching a string or pattern in a regular expression (RegEx) within a given text.
// 1. search() method is used to search a string for a specified value and return the position of the match
// 2. search() method of string value execute a search for a match between a regular expression and this string returning the index of the first match in the string.
// 3, finds the first substring  match in a regular expression search
// 4. search() method return a string for specified value and return the position of the match
// 5. search() method can not take a second start position argument
// 6. Return the index of first match between the regular expression and given string
//7.  and return -1 if no match found in given regular expression
// 8. search() only returns the position of the first match

// Example with regular expression
const text = "Hello World";
const index = text.search(/World/);
console.log(index); // Output: 6

// Example with no match
const text1 = "Hello World";
const index1 = text.search(/JavaScript/);
console.log(index); // Output: -1

// 
const text2 = "Hello World";
const index2 = text2.search("World");
console.log(index2); // Output: 6


let str = "apple, banana, cherry";
let result = str.search(/banana/); // 7
console.log(result); // Output: 7

let noMatch = str.search(/^grape/); // -1 (pattern doesn't match)
console.log(noMatch); // Output: -1



// Conclusion :
// search() method is used to find the index of the first occurrence of the pattern in the string.
// If the pattern is not found, it returns -1.

// Purpose: search() is used to find the first match of a regular expression in a string.
// Returns: It returns the index of the first match or -1 if no match is found.
// Regular Expressions: It's commonly used with regular expressions to match patterns


// Important tips :
// the search method cannot take second start position argument
// the indexof() method can not take powerful search value(regular expression)
// they accept the same argument(parameters and return the same value)