// FROMCHARCODE()

// 1, fromCharCode(num1,num2,num3......);
// 2. fromCharCode() is static method ;
//  3.fromCharCode() return a string created from specific sequences of code utf16 code unit
// 4 String.fromCharCode() method is used to create a string from a sequence of Unicode values (also known as character codes).
// 5. It converts Unicode numbers into a string of characters.
// 6 The opposite method is charCodeAt(), which retrieves the Unicode value of a character at a specific index in a string.
// 7. String.fromCharCode(): This method only works with code points in the range 0 to 65535

// Example
console.log(String.fromCharCode(189,43,190,61));


// i.e return string of length n consisting of the specified uft16 unit code .
console.log(String.fromCharCode(65,66,67));

// example
const str = String.fromCharCode(72, 101, 108, 108, 111);
console.log(str); // Output: "Hello"
