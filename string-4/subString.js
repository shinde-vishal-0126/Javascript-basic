// subString() :


// substring(startIndex, endIndex)
//  used to extract a portion of a string between two specified indices (positions). It returns a new string and does not modify the original string.
// 1.substring method of string value return the part of this string from the start index up to and executing the end index or to the end of the string if no end index is supplied
// 2. Return a new string containing the specified part of the given string 
// 3. subString  method used to extract  the part of string and return extracted part as new string
// 4. SubString is similar to slice method 
// If either startIndex or endIndex is less than 0, it is treated as 0.

const str = "JavaScript is awesome!";
const result = str.substring(0, 10);
console.log(result);  // "JavaScript"

const str1 = "Hello, World!";
const result1 = str.substring(7); // the extraction starts at index 7 and continues to the end of the string since endIndex is omitted.
console.log(result);  // "World!"


// - if you give negative indices then the character counted the 0 th position
const star = "JavaScript";
console.log(star.substring(-6));   // "JavaScript" (treats -6 as 0)


// 1.@ what happen  When startIndex is greater than endIndex ?
const str2 = "Hello, World!";
const result2 = str.substring(7, 5);  // Same as str.substring(5, 7) If startIndex is greater than endIndex, substring() will swap the values internally.
console.log(result);  // ", "

// 2.@ what is differences between the slice() method and subString() method;

// 1. slice() 
// - slice () method is used to extract a portion of string and return it is a new string or return new array when you used the array
// - Also splice method accept the two argument first one is start index and second one is endIndex 
// - Supports negative indices (Accept the negative value it count start from the end of the string or array )
// - Does not swap startIndex and endIndex
// Returns empty string if startIndex > endIndex ( slice method case it returns an empty string when the startIndex is greater than to the end index.)

// 2. substring() :
// - subString method used to extract the portion of string and return it as a new string
// - Substring method accept the two argument 
// - First one is start index and second one is end index 
// - Negative indices treated as 0 (If either startIndex  or endIndex is negative its treated as if it were zero )
// Swaps startIndex and endIndex if startIndex > endIndex
// Swaps indices if startIndex > endIndex


const str4 = "Hello, World!";
// slice() with negative index
console.log(str4.slice(-6, -1));  // "World"
// substring() with swapped indices
console.log(str4.substring(7, 5));  // ", "

// Both the method does not modify the original value it create new value
