// trim() :
//  1. It removes spaces, tabs, and other whitespace characters from the start and end of a string;
//  2. it does not modify the original string  but it return new trimmed string.(with it new length)
// 3. It does not affect the spaces within the string itself.
// 4. remove the leading and trailing white space and line terminator character from a string
// Whitespace includes spaces, tabs, and newline characters.
// It doesn't modify the original string; it returns a new string with the whitespace removed.
// It is often used when cleaning user input or when working with strings from external sources that may have extra spaces.
let str = "         vishal shinde at post wadGaon sahani        ";
console.log('length of original string:', str.length);
const newStr = str.trim();
console.log('newStr', newStr);
console.log('length of trimmed string', newStr.length);

