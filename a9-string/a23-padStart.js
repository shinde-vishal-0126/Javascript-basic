// PADSTART() :

// # padStart(targetLength [, padString])

// The padStart() method pads the string with a specified character (by default, spaces) from the beginning until the string reaches the desired length.
// 1. padStart() used to pad the current string with another string(repeated if needed);
// 2. so resulting string reaches a give length (Return a String of specified targetLength with the padString  applied at the start of the current str.)
// 3. padding is applied form the start (left ) of the current string
// 4.  if the target length specified in the padStart() method is less than or equal to the length of the current string, the string will be returned as-is, without any padding. This is because the string already meets or exceeds the target length.
// both pad start and pad End are not mutating method

// padStart() Return Value
// The padStart() method returns a new string that is padded with the specified character from the beginning (start) until the string reaches the desired length.

// If the original string is already at or longer than the targetLength, the string is returned unchanged.
// If the original string is shorter than the targetLength, it will be padded with the specified padString (or spaces if not provided) at the start of the string.
// example 1:
let st = "Hello";
let paddedStr = st.padStart(3, "*");
console.log(paddedStr); // Outputs: "Hello"

// 5. padding default value is single space
// 6. JavaScript is used to pad the beginning of a string with another string (or characters) until the resulting string reaches a specified length.
// 7 If the original string is already of the specified length or longer, no padding is applied

// 1.Basic padding
const str = "5";
console.log(str.padStart(3, "0")); // "005"
console.log(str.padStart(5, "x")); // "xxxx5"

// 2. padding with default value
const str1 = "hello";
console.log(str1.padStart(10)); // "     hello"

// 3. target length less then string length
const str3 = "hello";
console.log(str3.padStart(3)); // "hello"

// 4. padding with multi character strings
const str4 = "123";
console.log(str4.padStart(10, "abcdef")); // "abcdefa123"
//  the string str is padded with the string 'abcdef'. Since 'abcdef' is longer than needed, it is truncated to fit the target length, resulting in "abcdefa123".
