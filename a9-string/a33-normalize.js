// NORMALIZE() :

//  The normalize method of string value return the unicode normalize from of the string 
// Return a string containing the unicode normalization form of given string


const str1 = 'e\u0301'; // "e" + "́" (combining acute accent)
const str2 = 'é';      // single character "é"

console.log(str1 === str2);                  // false
console.log(str1.normalize() === str2);      // true // because normalize() method return unicode normalize form to the string
// The normalize() method in JavaScript is used to return a normalized string in a specific Unicode format. The method does not modify the original string but instead returns a new string that is in one of the Unicode normalization forms.