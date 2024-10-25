// CHARAT() :

// # charAt(position);
// def : The charAt() method in JavaScript is used to retrieve the character at a specific index from a string.
// It returns a string representing the character at the specified index.
// 1. charAt() method of the string value return new string consisting of the single utf-16 code unit of the given index
// 2. return the character at the specified index. 
// 3. return value string representing the character at specified index if the index out of range then charAt() method return an empty string " "
// 4. zero based index of the desired character (only support -ve index number)
// 5. Does not support negative indices; negative indices are treated as 0.

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