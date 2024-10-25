// # CharCodeAt()

// CharCodeAt(position)
// 1. return the unicode value of the character at specified index or location 
// 2. (The charCodeAt() method of the string value return an integer between 0 to 65535 representing the  utf 16 code unit at specified index )
// 3. If the index is out of range the charCodeAt() return Nan (not a number);
// 4. Valid indices are from 0 to str.length - 1. 
// Negative indices or indices greater than or equal to the length of the string will return NaN.
//  codePointAt() method of string return non-Negative integer that is the unicode point value of the character string at the given index.


const str = "Hello, World!";
console.log(str.charCodeAt(0));    // Output: 72 (Unicode of 'H')
console.log(str.charCodeAt(7));    // Output: 87 (Unicode of 'W')
console.log(str.charCodeAt(-1));   // Output: NaN
console.log(str.charCodeAt(100));  // Output: NaN

// NOTE:
// The charCodeAt() method is useful when you need to perform operations based on the Unicode values of characters, such as:


