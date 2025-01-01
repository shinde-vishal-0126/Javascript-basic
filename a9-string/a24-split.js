// split(separator, limit) : (splits a string into an array of substrings, based on a specified delimiter) (also limit the number of splits by passing an optional second argument.)

// - split() method divides a string into an array of substrings.
// The split() method in JavaScript is used to divide a string into an array of substrings based on a specified separator
// 1.def : split a string into  subString  using the specified separator and return them as an array ;
// 2. split() method of the string  value take a pattern and divided this string into an ordered list of substring by searching for the pattern and so put this substring into an array and return the array 
// 3. Return an a new array of string
// 4. Split method does not change the original array.
// The return value of split() is always an array.
// If no separator is found, the whole string becomes the first (and only) element of the array.


// separator (Optional): A string or regular expression that defines where each split should occur. If not provided, the entire string is returned as an array with one element.
// limit (Optional): A non-negative integer that specifies the maximum number of splits. The split method will return an array with up to limit elements.

// ex.
const str = 'vishal shinde';
const word = str.split('');
console.log('return :', word); // divides a string into an array of substrings // return : [
//     'v', 'i', 's', 'h',
//     'a', 'l', ' ', 's',
//     'h', 'i', 'n', 'd',
//     'e'
//   ]
const strCopy = str.split();
console.log('copy of string', strCopy); // copy of string [ 'vishal shinde' ]


//  Basic usage with a string separator:
let str1 = "apple,banana,orange";
let result = str1.split(",");
console.log(result); // ["apple", "banana", "orange"]

// . Using a space as the separator:
let sentence = "Hello world!";
let words = sentence.split(" ");
console.log(words); // ["Hello", "world!"]

// 3. Limiting the number of splits:
let str2 = "a,b,c,d,e";
let result2 = str2.split(",", 3);
console.log(result2); // ["a", "b", "c"]


//  Using regular expressions as separators:
let strr = "apple123banana456orange";
let resultr = strr.split(/\d+/); // Splitting at one or more digits
console.log(resultr); // ["apple", "banana", "orange"]

// No separator (entire string returned as a single element in an array):
let strf = "Hello daara";
let resultf = str.split();
console.log(resultf); // ["Hello"]


// // . Using split(",") with a comma as a separator:
// let str = "apple,banana,grape";
// let result = str.split(",");
// console.log(result);  // Output: ["apple", "banana", "grape"]

// // Using split("") with an empty string as a separator:
// let str = "Hello daara";
// let result = str.split("");
// console.log(result);  // Output: ["H", "e", "l", "l", "o", " ", "d", "a", "a", "r", "a"]

// // 2. Using split(" ") with a space as a separator:
// let str = "Hello daara";
// let result = str.split(" ");
// console.log(result);  // Output: ["Hello", "daara"]


// # when the string is empty and non empty separator is specified then split return [''];
const emptyString = '';
const newData = emptyString.split('a');
console.log('newData', newData); // newData [ '' ]

const newData1 = emptyString.split();
console.log('newData1', newData1); //newData1 [ '' ]

// string and separator are both empty string then return []
console.log(emptyString.split(emptyString)); // []

// 2. Using the limited number of split();
const myString = 'Hello word, How are you ?';
const nu = myString.split(' ', 3);
console.log('mu', nu);

// The original string is not modified; a new array is returned.
// If the separator does not match anything in the string, the entire string is returned as a single array element.








