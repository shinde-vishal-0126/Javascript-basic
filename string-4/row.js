// ROw()

// # raw`templateString`
// String.raw(callSite, ...substitutions)

// 1. String .raw() is static method is a tag function of template literals 
// 2. It is used to get the raw string from of template literals 
// 3. method in JavaScript is a tagged template literal that allows you to create raw string literals, 
// 4.  meaning it doesn't process escape sequences
// 5. It is particularly useful when you need to include backslashes (\) in a string without them being interpreted as escape characters.

// Basic example 
const rawString = String.raw`Hello\nWorld`;
console.log(rawString); // "Hello\nWorld"
// the \n sequence is not interpreted as a newline character but is included as part of the string.

// using with variable 
const name = 'Alice';
const rawString1 = String.raw`Hello\n${name}`;
console.log(rawString1); // "Hello\nAlice"

// actual example 
const filePath = String.raw`C:\Users\JohnDoe\Documents\File.txt`;
console.log(filePath); // "C:\Users\JohnDoe\Documents\File.txt"


// String.raw is a powerful tool for creating strings where the precise content is crucial, and escape sequences should not be processed.