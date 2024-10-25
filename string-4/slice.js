// Extraction the string part :
// there are three method for extracting a part of the string

// 1. slice(start, end);
// 2. subString(start, end);
// 3. substr(start, length)


// #. slice(start, end) :
// 1. return the section of string (slice() extracts a part of a string and returns the extracted part in a new string.)
// 2. start - the index of the beginning of the specified portion of the stringObj
// 3. end - the index to the end of the specified portion of string obj the substring include the character upto but not including the character indicated by end 
// 4. if the end value not specified the substring continues to the end of the string Obj
// 5. slice() method of string extract portion or section of the string and return it as a new string
// 6. slice() method does not modified the original string.


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
const str2 = str1.slice(1,8);
const str3 = str1.slice(4,-2);
const str4 = str1.slice(12);
const str5 = str1.slice(30);
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

 
