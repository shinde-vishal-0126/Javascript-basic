// CHARAT() :


// there are 3 method for extracting string character.

// # charAt(position);
// def : The charAt() method in JavaScript is used to retrieve the character at a specific index from a string.

// It returns a string representing the character at the specified index.

// 1. charAt() method of the string value return new string consisting of the single utf-16 code unit of the given index
// 2. return the character at the specified index. 
// 3. return value string representing the character at specified index if the index out of range then charAt() method return an empty string " "
// 4. zero based index of the desired character (only support -ve index number)
// 5. Does not support negative indices; negative indices are treated as 0.
// If the index is less than 0 or greater than or equal to the length of the string, it returns an empty string ("").
//It ensures that the return value is always a string, even if the character at the index doesn't exist.

const str = "Hello, World!";
console.log(str.charAt(0));    // Output: "H"
console.log(str.charAt(7));    // Output: "W"
// basically charAt() method does not support -ve index it return the empty string
console.log(str.charAt(-1));   // Output: "" (empty string)
// if the indexing rage out of range or not found in give string it return the empty string
console.log(str.charAt(100));  // Output: "" (empty string)


// 1.@ WHAT IS DIFFERENCES BETWEEN CHARAT() & AT() METHOD ?

// CHARAT() :
    //  CharAt() return the character of the given index.
    //  does not support -ve index (it used zero based index of the desired character)
    //  if the index is not found or out of range then it return empty string also if the -ve index it also return empty string " ";
    //  Use charAt() when you need basic character retrieval with zero-based indexing and don't need negative indexing.

// AT() :
    // at() method return character of the given index 
    //  it support the -ve index and in -ve indexing it is start form the last element
    //  if the index of of range or not found then it return the undefined.
    //  Use at() for more flexible indexing, including support for negative indices, which can simplify code when working with positions relative to the end of the string.



    // Differences between charAt() and [] notation:
// Both charAt() and the bracket notation [] can be used to access characters in a string, but they behave differently in edge cases.
let str1 = "Hello!";
console.log(str1.charAt(1));  // Output: "e"
console.log(str1[1]);         // Output: "e"

console.log(str1.charAt(100)); // Output: ""
console.log(str1[100]);       // Output: undefined
// charAt() returns an empty string for out-of-bounds indices.
// Bracket notation returns undefined for out-of-bounds indices.
