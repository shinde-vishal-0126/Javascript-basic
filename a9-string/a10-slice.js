// Extraction the string part :
// there are three method for extracting a part of the string

// 1. slice(start, end);
// 2. subString(start, end);
// 3. substr(start, length)


// #. slice(start, end) :
// extract a part of the string and return extracted part as new string
// 1. return the section or portion of string (slice() extracts a part of a string and returns the extracted part in a new string.)
// 2. start - the index of the beginning of the specified portion of the stringObj
// 3. end - the index to the end of the specified portion of string obj the substring include the character upto but not including the character indicated by end 
// 4. if the end value not specified the substring continues to the end of the string Obj
// 5. slice() method of string extract portion or section of the string and return it as a new string
// 6. slice() method does not modified the original string.
// in slice() method -ve indexing are supported  


// Example
const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.slice(31)); // the lazy dog.
console.log(str.slice(4,19)); // quick brown fox
console.log(str.slice(-4)); // dog.
console.log(str.slice(-9,-5)) // lazy

// slice(indexStart, indexEnd) method the original array will not changed 
const boiData = 'hi i am vishal shinde at post wadgaon sahani';
const newString = boiData.slice(2,8);
console.log(newString);
console.log('original string :', boiData);
// if you pass negative end argument in the slice method what happen 
let data = boiData.slice(6,-2);
// if you pass end argument as negative it go throw the end of the string and subtract the give end element 
console.log(data); 
// if you  give negative index it will throw the whole string and subtract the negative index form string object and return the result as a new string 


// return new string containing extracted section or portion of the string 
const str1 = 'The morning is upon us.'; // length of the str1 is 23 
const str2 = str1.slice(1,8); //(here you have give the 8 but it exclude the last value or element)
const str3 = str1.slice(4,-2);
const str4 = str1.slice(12);
const str5 = str1.slice(30); // start index is Grater the string length it return empty string
console.log(str2);
console.log(str3);
console.log(str4);
console.log(str5); // if you give the length grater then the actual string length it return empty


// slice method with negative indexes.
 console.log(str1.slice(-3));
 console.log(str1.slice(-3,-1));
 console.log(str1.slice(0,-1));
 console.log(str1.slice(-11,16)); // "is u"
 // here count backward form the end of the 11 and to find the start index and forwards from the start of the string by 16  to find the end index

 const strr = 'The morning is upon u s.'; // length of the str1 is 23 
console.log(str1.length);
// 24 + (-30) =-6  (new calculated ending position is less then the 0 then start from the 0)
const strrr = str1.slice(-30);
console.log(str3)


// what happen if the both argument having -ve indices 
const str45 = "Hello, World!";
// slice() with negative index
console.log(str45.slice(-6, -6)); // it return empty string 

// let str = "Hello, World!";
// slice(-5, 5), the start index is -5 (which refers to "World!") and the end index is 5 (which refers to "Hello"). Since the start index comes after the end index, slice() will return an empty string.
console.log(str.slice(-5, 5)); // Output: ""

let str1111 = "Hello, World!";
console.log(str1111.slice(7, 50)); // Output: "World!"
// If the endIndex is greater than the string length, slice() treats the endIndex as the string's length. Here, slice(7, 50) is equivalent to slice(7, 13) since the string's length is 13. It gives "World!".


// startIndex greater than endIndex: In slice(), the method returns an empty string when the startIndex is greater than the endIndex, so slice(10, 6) returns "".
let str11111 = 'The morning is upon us.';
console.log(str11111.slice(10, 6)); // Output: ""


// Both indices greater than string length: Like substring(), slice() will return an empty string ("") if both indices are greater than the string length.
let str111111 = 'The morning is upon us.';
console.log(str111111.slice(50, 50)); // Output: ""

// Negative startIndex treated as counting from the end: If slice() is given a negative startIndex, it will count from the end of the string. Here, slice(-50) starts from the beginning (since the string is only 23 characters long) and returns the entire string "The morning is upon us.".
let str1111111 = 'The morning is upon us.';
console.log(str1111111.slice(-50)); // Output: "The morning is upon us."


//Both indices are negative and equal: If both indices are negative and equal, slice() returns an empty string ("").
let str1112 = 'The morning is upon us.';
console.log(str11112.slice(-5, -5)); // Output: ""



