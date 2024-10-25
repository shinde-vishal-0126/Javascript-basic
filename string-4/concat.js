// CONCAT() :

//  # Concat :
// str.concat(string1, string2, ..., stringN)

// def: concat() method in JavaScript is used to combine (concatenate) two or more strings into a single string. 
//It does not modify the original strings but returns a new string containing the concatenated result.
// 1. The string to append to the end of the string
//.2 return a string that contain the concatenation of the tow or more string
// 3.concat() method join two or more string
// 4. This method does not modify the original strings but returns a new string containing the combined text of the strings provided.
// 5. The concat() method can be used interchangeably with the + operator for concatenating strings. Both approaches achieve the same result.


// Example 1 :
const str1 = "Hello";
const str2 = "World";
const result = str1.concat(", ", str2, "!");
console.log(result); // Output: "Hello, World!"

// Example 2 :
// using the concat you have combine multiple string
const greeting = "Hello";
const name = "Alice";
const punctuation = "!";
const message = greeting.concat(", ", name, punctuation);
console.log(message); // Output: "Hello, Alice!"

const greet = ['hello', " ", "vacant", "!"];
console.log("".concat(...greet)); // hello vacant!

// using concat method also you have pass the multiple (more then one string)
let firstName = 'Vishnu';
const newStr =firstName.concat(',', 'shinde', 'pune',message);
console.log(newStr);



console.log("".concat({})); // [object Object]
console.log("".concat([])); // return empty ""
console.log("".concat(null));  // return null
console.log("".concat(true)); // true
console.log("".concat(4,5));  //45

