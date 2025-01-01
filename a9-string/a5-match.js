// MATCH() :

// # string.match(regexp)
// The match() method in JavaScript is used to retrieve the matches of a string against a regular expression. 
// It returns an array of matches if there is a match found, or null if no matches are found.
// match() return an array of matched value or null if no match found();
// 1. match() method in javascript is used to search a string for a match against a regular expression and it return the result an an array

// 4.  if no match found return null.
// 5. The match() method of string value retrieve the result of matching this string against a regular expression 
// 6. The match() method returns an array of matches.

// Basic Usage: The match() method searches a string for a match against a regular expression and returns the result as an array.
// With the g Flag: When the regular expression has the g (global) flag, it returns an array of all the matched values (without capturing groups).
// Without the g Flag: If the regular expression does not have the g flag, it returns an array with the details of the first match, including the matched value and any captured groups.    



// Example
let str = "The quick brown fox jumps over the lazy dog.";
let result = str.match(/quick/);
console.log(result); // Output: ["quick", index: 4, input: "The quick brown fox jumps over the lazy dog.", groups: undefined]
// here the js converts the normal text into regular expression text.match(/javascript/) without the g flat


let str2 = "The quick brown fox jumps over the lazy quick quick dog.";
let result2 = str2.match(/quick/g);
console.log(result2); //output ["quick", "quick", "quick    "]
// here the js converts the normal text into regular expression text.match(/javascript/) 


// Example 
let str1 = "The quick brown fox jumps over the lazy dog.";
let result1 = str.match(/cat/);
console.log(result1); // Output: null


// using match with no parameter :
const string = "nothing will come of nothing..";
string.match(); // if you have to not provided the the parameter it return null 


// THis may have many unexpected result in special character are not popery escaped 
console.log("123".match(1.3));