//! template literals:
//? In JavaScript, a template literal is a way to define strings that allows embedding expressions and multi-line content in a more readable and flexible manner.
//?  It is denoted by backticks (`) instead of the regular single or double quotes (' or ").
// string interpolation with embedded expression
// have to used backtick (`  `) and inside that by using dollar $ symbol you have to write anything
// it is a way to represent string Representation.  
// With template literals you can avid  the concatenation operator and improve the readability of your code by using placeholder of the form ${expression} to perform substitution for embedded expression  
// string interpolation: Template string support string interpolation allowing you to embed expression directly within the string. 
//interpolated expression are enclosed in ${}

//? normal way create string
let name = 'vishal';
let firstName = 'vishu'
// using template literal
console.log(`my name is ${name} and nack name ${firstName}`);

// Advantages :
// - Readability : template engine make the code more readable especially for complex string construction
// - embedded expression:
// - expression interpolation: You can embed expressions directly inside the string using ${}
    // can also embed more complex expressions, such as function calls or mathematical operations.
