// trimEnd() method 
// 1. trimEnd() method remove the whiteSpaces form the end of the string.
// 2. return new string without modifying original string  
// 3   return new string representing  string stripped whitespace  from it end or Right side,  if the End of the string not white space then new string still return with give string value;
// 4. trimRight() are the alias of the trimEnd() method;
let str = "         vishal shinde at post wadGaon sahani        ";
console.log('length of original string:', str.length);
const newStr = str.trimEnd();
console.log('newStr', newStr);
console.log('length of trimmed string', newStr.length);