// trim() :
//  1. It removes spaces, tabs, and other whitespace characters from the start and end of a string;
//  2. it does not modify the original string  but it return new trimmed string.(with it new length)
// 3. It does not affect the spaces within the string itself.
// 4. remove the leading and trailing white space and line terminator character from a string
let str = "         vishal shinde at post wadGaon sahani        ";
console.log('length of original string:', str.length);
const newStr = str.trim();
console.log('newStr', newStr);
console.log('length of trimmed string', newStr.length);

