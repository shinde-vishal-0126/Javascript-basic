// MATCH() :

// # string.match(regexp)

// 1. match() method in javascript is used to search a string for a match against a regular expression and it return the result an an array
// 2. the method return an array  of all matches found ; 
// 3.  otherwise it return an array containing the first match and its capturing groups
// 4.  if no match found return null.
// 5. The match() method of string value retrieve the result of matching this string against a regular expression 
// 6. The match() method returns an array of matches.
// 7. Match method used to search for first match for regular expression within a string  (if you give g (global flag )  it return  array of all matches of string but not return capturing Group )
// Without the g flag: Returns an array with details of the first match.



// Example
let str = "The quick brown fox jumps over the lazy dog.";
let result = str.match(/quick/);
console.log(result); // Output: ["quick", index: 4, input: "The quick brown fox jumps over the lazy dog.", groups: undefined]


// Example 
let str1 = "The quick brown fox jumps over the lazy dog.";
let result1 = str.match(/cat/);
console.log(result1); // Output: null


// using match with no parameter :
const string = "nothing will come of nothing..";
string.match(); // if you have to not provided the the parameter it return null 


// THis may have many unexpected result in special character are not popery escaped 
console.log("123".match(1.3));