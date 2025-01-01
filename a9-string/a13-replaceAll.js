//REPLACE-ALL() :

// # string.replaceAll(searchValue, newValue)
// In JavaScript, the replaceAll() method is used to replace all occurrences of a specified substring or pattern in a string 
 
//  replaceAll() method returns a new string with all matches of a pattern replaced by a replacement.
// 1. replaceAll() method of string value return a new string with all matches of a pattern replace by replacement
//  2. The pattern can be string or regular expression and replacement can be string or function to be called for each matches
// 3.The original string is left unchanged (i.e new created with replace all matches of pattern with replacement)
// 4. replaceAll() replaces all occurrences of the specified substring or regular expression without the need for a global flag.
// 5. Return a new string with all matches of a pattern replace by replacement 
// 6. that replaces all occurrences of a specified string or regular expression within a string with a new string.
// 7. replaceAll() method returns a new string with all values replaced
// 8.The replaceAll() method does not change the original string.
// 9. used to replace all occurrences of a specified substring or pattern within string replace with given string and  return a new substring.
// 10 if Given substring are not present simply it return the original string  unchanged (return original string as it is )




// Example 1:
const text = "Hello World World";
const newText = text.replaceAll("World", "JavaScript");
console.log(newText); // Output: "Hello JavaScript JavaScript"


// in replaceAll() using regular expression so search value must be global
console.log("abc".replaceAll(/b/g,".")) // aa..cc

// example 2
// replace method using regular expression
const text1 = "Hello World World";
const newText1 = text.replaceAll(/World/g, "JavaScript");
console.log(newText1); // Output: "Hello JavaScript JavaScript"



// 1.@ WHAT IS DIFFERENCE BETWEEN REPLACE() METHOD AND REPLACE-ALL() METHOD
// Both replace and replaceAll method in javascript use search for specified pattern in a string and replace it with another string

// Replace () 
// replace method used to replace the first occurrences of specified pattern in a string with another string
// it take two parameters the first is pattern search for (which can be regular expression or plain string ) amd second parameter is replacement string
// replace only first occurrences of the pattern in the string if you want to replace all the occurrences you need to used regular expression with global flag;

// example 
let str = 'Hello, word! hello, universe!';
let newStr = str.replace('Hello','hi');
console.log(newStr) 
//  output 'hi, word! hello, universe!


// ReplaceAll()

// replaceAll() method is used to replace all the occurrences of specified pattern in a string with another string
// it take two parameters first is pattern search for (it may be regular expression or plan string ) amd second parameter is replace string
// replace-all replace the all occurrences of the pattern in the string without need for a global flag in regular expression

let str1 = 'Hello, word! Hello, universe!';
let newStr1 = str1.replaceAll('Hello','hi');
console.log(newStr1);



// ==> Conclusion :
// The main differences between the replace and replaceAll method is to 
// Replace only first occurrences of specified pattern 
// But ReplaceAll () replaces all the occurrences of the pattern in the string.
