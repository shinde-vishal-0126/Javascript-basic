// LASTINDEXOF()

// # string.lastIndexOf(searchValue[, fromIndex])
        //string.lastIndexOf(searchValue[, fromIndex])
        // fromIndex is optional and specifies the position within the string to start searching backwards. If omitted, the default is the length of the string

// 1. The lastIndexOf() method in JavaScript is used to find the last occurrence of a specified value within a string &
// 2. return the index of the last occurrences of the specified value 
// 3. return -1 if the value not found
// 4. Last index start form the backward search and return then index form the forward count perspective .
// 4. It is case-sensitive.
// 5. if you give negative index it start form the search entire string

// Example : 
let str = "Hello world, welcome to the universe.";
let index = str.lastIndexOf("welcome");
console.log(index); // Output: 13

// Example 
let str1 = "Hello world, welcome to the universe. Welcome!";
let index1 = str1.lastIndexOf("Welcome", 31);
// start searching form the index of 31 in backward direction
console.log(index1); // -1

// -lastIndexOf() in JavaScript, if you provide a negative value for the fromIndex parameter, it will be treated as an offset from the end of the string. 
//However, if the negative value results in a starting index less than 0, the method will search the entire string.
// Example :
let str2 = "Hello world";
let index2 = str.lastIndexOf("o", -1);
console.log(index2); // Output: 7


// Example :
let str3 = "Hello world";
// here give index as -5 so when you give negative index its start form the searching entire string.
let index3 = str.lastIndexOf("H", -5);
console.log(index3); // Output: 0


// also lastIndexOf() for the empty() string
console.log("camel".lastIndexOf("",2)); // here return 2 
console.log("camel".lastIndexOf("")); // return index as 5 because after completing string it having empty string.
