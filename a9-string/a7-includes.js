// INCLUDES() :

// str.includes(searchString[, position])
// String.prototype.includes() method in JavaScript is used to determine whether one string can be found within another string. It returns a boolean value (true or false) based on the presence of the specified substring.
// includes() method true if the string contain the specified value and false otherwise.

// 1. The includes() method in JavaScript is used to check if a given string contains a specified substring. It returns true if the substring is found, and false otherwise. This method is case-sensitive.
// 2. def : The includes() method of string values perform a case-sensitive, meaning that it distinguishes between uppercase and lowercase characters. 
// 3. determine whether given string may be found within this string returning true or false appropriate;
// 4. JavaScript is used to determine whether one string can be found within another string,
// 5. if it is found then return true if not found it return false.
// 6. It return true if the search string found anywhere within the given string including when search sting is an empty string otherwise false (i.e if you give empty string it return true )

// String.prototype.includes() method does not support negative indexing in JavaScript. If you pass a negative number as the position argument, it will be treated as 0, meaning the search starts from the beginning of the string.

// example 1 :
const str = "Hello, World!";
console.log(str.includes("World"));  // Output: true
// (case-sensitive)
console.log(str.includes("world"));  // Output: false 
console.log(str.includes("Hello"));  // Output: true

// example 2 :
// 2nd argument as position where we have to start the searching form the give string 
const str1 = "Hello,World!";
// (search starts at position 7)
console.log(str1.includes("World", 7));  // Output: true 
console.log(str1.includes("Hello", 1));  // Output: false (search starts at position 1)
console.log('empty string' ,str.includes(' '))  // true

// example 3 :
const sentence = "The quick brown fox jumps over the lazy dog";
if (sentence.includes("fox")) {
  console.log("The sentence contains 'fox'.");
} else {
  console.log("The sentence does not contain 'fox'.");
}
// Output: The sentence contains 'fox'.


// example 4 :
const userInput = "I love JavaScript!";
if (userInput.includes("JavaScript")) {
  console.log("The input mentions JavaScript.");
} else {
  console.log("The input does not mention JavaScript.");
}
// Output: The input mentions JavaScript.


// example 5 :
// his always evaluates to true because every string contains an empty string at every index (between every character).
const userInput2 = "I love JavaScript!";
console.log(userInput2.includes(""))
if (userInput.includes(" ")) {
  console.log("The input contain empty string"); 
} else {
  console.log("The input does not mention JavaScript.");
}

// The String.prototype.includes() method does not support negative indexing in JavaScript. If you pass a negative number as the position argument, it will be treated as 0, meaning the search starts from the beginning of the string.
const text = "Hello, world!";
console.log(text.includes("world", -5)); // true (treated as position 0)If the start index is negative, the includes() method treats it as 0, meaning it will search the entire string from the beginning.
// 

