// trimStart() method 
// 1. trimStart() method remove the whiteSpaces form the starting of the string.
// 2. return new string without modifying original string  
// 3   return new string representing  string stripped whitespace from it start or left side,  if the start of the string not white space then new string still return with give string value;
// 4. trimLeft() are the alias of the trimStart() method;
let str = "         vishal shinde at post wadGaon sahani        ";
console.log('length of original string:', str.length);
const newStr = str.trimStart();
console.log('newStr', newStr);
console.log('length of trimmed string', newStr.length);