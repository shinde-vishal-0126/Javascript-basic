// REPLACE()

// # string.replace(searchValue, newValue)

// 1. replace() method is used to return new string with some' or all matches of a pattern replace by a replacement.
// 2.  pattern can be string or regular expression and replacement can be a string or function call for each replacement 
// 3. If the pattern is a string only the first occurrences will be replaced (first occurrences will be updated only)
// 4. The original string is left unchanged (original string is not changed create new string with replace with replacement pattern )
// 5. Replacing subString content  ( Replace method replaces a specified value with another value in a string.)
// 6. used to search for a specified substring or pattern within a string and replace it with another substring
// 7. In JavaScript, you can use the replace() method to replace a string or substring in a string
// 8 in replace()  method if you give any specific substring which are not present in string in that case it return original string as it is.


// NOTE
// some important point regarding replace method
// 1. it return new string (not change the string it is called on);
// 2. by default replace method only replace first match
// 3. by default it is case sensitive 


// example 1:
const text = "Hello World";
const newText = text.replace("World", "JavaScript");
console.log(newText); // Output: "Hello JavaScript"

// example 2:
const text1 = "Hello World World";
const newText1 = text1.replace(/World/g, "JavaScript");
console.log(newText1); // Output: "Hello JavaScript JavaScript"

// if the pattern is an empty string the replacement is prepended to the start of the string
'xxx'.replace("","_") // "_xxx"

