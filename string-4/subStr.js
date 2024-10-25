// string.substr(start, length):

//  1. stuStr() : get a subString beginning at the specified location and having the specified length.
//  2. subStr() method of string value returns the portion of this string starting at specified index and extending at a given number of characters afterwards.
// 3. subStr() is similar to the slice
// 4. subStr()  also having the 2 arguments first in starting index and 2nd is return length of the extracted string.
// 5. Return new string containing the specified part of a given string 
// 6. subString gets a substring or (extracts the substring ) at the specified location and having specified length.





// 1. @ What is differences between the subString and substr() in javascript  ?
// Both method in javascript used extract the portion of the string

// 1. subString() 
// 1. The substring() method take two arguments startIndex where the execution should be start (inclusive )endIndex where the extraction should end, if you omit the end index it will default to the end of the index 
//  2. Negative indices i.e substring does not accept the negative indices if you provide the negative index as starting or endIndex it will be treated as zero 
//  For example subString (-2, 4)  is equivalent to the (0, 4);
// 3.  both the argument are negative or nan then substring method treat them as if they were zero return empty string.


// 2. subStr()
// 1, The substr() method in JavaScript is used to extract a portion of a string starting from a specified index and for a specified number of characters or length
// 2. The index (zero-based) where the extraction starts. If negative, it counts from the end of the string.
// 3. substr() allows negative values for the start parameter, meaning it can count from the end of the string.


let str = "Hello, world!";
console.log(str.substr(-6, 5));    // Output: 'world' (starts from 6th-to-last character) return the length:
console.log(str.substring(-6, 5)); // Output: 'Hello' (negative values treated as 0)


// 2.@ what is differences between slice() method and subStr() method 

// 1. slice()
// 1. slice(start, end): Extracts from the start index to the end index (non-inclusive). If end is omitted, it extracts until the end of the string.
// 2.slice(): Handles negative values by counting backward from the end of the string. 
// 3. slice(): The second parameter is the end index, and the extraction stops right before this index (non-inclusive).
// 4. slice(): If the start index is greater than the end index, it returns an empty string:

// 2. subString() 
// 1. substr(start, length): Extracts from the start index for a given length.
// 2. substr(): Allows negative start values, counting backward from the end, but the length must always be positive.
// 3. substr(): The second parameter is the number of characters to extract, not an index.
// 4. substr(): Does not return an empty string based on index comparison.

