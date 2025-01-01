// FROMCODEPOINT(num, num2, num....)

// The String.fromCodePoint() method in JavaScript returns a string created by using the specified sequence of code points.
// String.fromCharCode(): If given a number greater than 65535

console.log(String.fromCodePoint(9731));           // Output: "☃" (Unicode for snowman)
console.log(String.fromCodePoint(0x1F601));        // Output: "😁" (Unicode for grinning face emoji)
console.log(String.fromCodePoint(0x1F600, 0x1F602)); // Output: "😀😂" (Unicode for grinning face and face with tears of joy)

console.log(String.fromCodePoint("-")); // RengeEror
console.log(String.fromCodePoint("infinity")); // RengeEror
console.log(String.fromCodePoint("-1"));// RengeEror
console.log(String.fromCodePoint(3.14));// RengeEror

// - String.fromCodePoint() method in JavaScript returns a string created from the specified sequence of code points.
//  -It is similar to String.fromCharCode(), 
//- but with the key difference that it can handle code points beyond the Basic Multilingual Plane (BMP), which means it supports characters represented by more than one 16-bit unit (such as emoji or other special characters).
// 