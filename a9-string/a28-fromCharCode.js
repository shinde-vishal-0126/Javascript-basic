//! String.fromCharCode(unicode)
// fromCharCode(num1,num2,num3......);
// fromCharCode() is static method ;
// The String.fromCharCode() method in JavaScript is used to convert one or more Unicode values (character codes) into a string.
//? fromCharCode() return a new string created from specific sequences of code utf16 code unit
// String.fromCharCode() method is used to create a string from a sequence of Unicode values (also known as character codes).(It converts Unicode numbers into a string of characters.)
// The opposite method is charCodeAt(), which retrieves the Unicode value of a character at a specific index in a string.
// String.fromCharCode(): This method only works with code points in the range 0 to 65535
//? 1
// The fromCharCode() method takes numeric values as Unicode character codes. For example, 65 corresponds to 'A', 66 corresponds to 'B', and so on.
console.log(String.fromCharCode(189,43,190,61));
//? 2
// i.e return string of length n consisting of the specified uft16 unit code .
console.log(String.fromCharCode(65,66,67));
//? 3
const str = String.fromCharCode(72, 101, 108, 108, 111);
console.log(str); // Output: "Hello"
