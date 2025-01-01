//!  String:

//? What is string ?
// string  in javascript are fundamental data type that represent sequence of character
// useful for holding the data represented in text form
// string basically data type
// string are zero indexed base

//? What are properties of the string ?
// 1. length: (property that return the length of string (i.e number of characters))
let newString = 'vishal shinde';
console.log('length of string', newString.length); // 13


//? How to create string ?
// 1. string create using string literal
// 2. using string constructor string();

// using string literal
const myName = "vishal";
const lastName = "shinde";
console.log("fullName", lastName + myName); //fullName shindevishal

// using string() constructor
const fullName = new String("vishal shinde");
// return value array as string  [String: 'vishal shinde']
console.log(fullName); // [String: 'vishal shinde']


//? How to find the length of the string
// length data popery of a string contain length of string in UTF-16 code
// index start from the string is zero
console.log(fullName.length); // return 13


//? how find the individual character from the string ?
// There are tow way to find the individual character form the string
// using 1. charAt() method
const str = "vishal shinde";
const index = str.charAt(6); // indexing start form the zero
console.log(index);

// using  2. array like object where individual character correspond to numerical index
// using array like object where individual character
const a = str[0];
console.log(a);



//? comparing a string
// use less or Grater then operator or compare the string
const e = "a";
const b = "b";
if (a < b) {
  console.log("${a} is less then ${b}");
} else if (a > b) {
  console.log("${a} is Grater then ${b}");
} else {
  console.log("${a} are equal ${b}");
}

//? Escape character
// in javascript escape character it allow you to include special character
//1. back slash (\)  escape character turns a special character into a string character
// Also if you want double quotes inside double quotes you have to use escape characters.
//2. single quote
//3. double quotes
let string = 'hey ,hi, how are you ? " i am fine and you " ';
console.log(string);
