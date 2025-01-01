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


let word = "JavaScript";
for (let i = 0; i < word.length; i++) {
  console.log(word.charCodeAt(i));
}
// Output:
// 74 (J)
// 97 (a)
// 118 (v)
// 97 (a)
// 83 (S)
// 99 (c)
// 114 (r)
// 105 (i)
// 112 (p)
// 116 (t)


// A number that represents the Unicode value of the character at the specified index.
// If the index is out of range (i.e., less than 0 or greater than or equal to the string length), it returns NaN.


// Difference between charAt() and charCodeAt():
// charAt() returns the character at the specified index in the string.
// charCodeAt() returns the numeric Unicode value of the character at the specified index.

let str2 = "A";
console.log(str2.charAt(0));      // Output: "A"
console.log(str2.charCodeAt(0));  // Output: 65 (Unicode value of "A")
//The charCodeAt() method returns the Unicode value of the character at the specified index.
// The return value is a number that represents the character’s code point in the UTF-16 encoding.
// Out-of-range index: If the provided index is invalid (i.e., less than 0 or greater than or equal to the string length), the method returns NaN.
    console.log(str2.charAt(12));      // "" return empty string 
    console.log(str2.charCodeAt(100));  // NaN


    // Use charCodeAt() when you need to work with the numeric representation of characters (e.g., comparing character codes, working with character shifts, etc.). 