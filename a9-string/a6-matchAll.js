// MATCHALL()

// matchAll() method return an iterator of all matches providing detail information about each match 
// return an empty iterator if no match found.

// def : matchAll() method in JavaScript is used to find all matches of  string against regular expression in a string,
// 1. returning an iterator of all matched results, including capturing groups and additional details
// 2.  matchAll() method of string value return an iterator of all result matching this string against regular expression including capturing group 
// 3. Return an iterable iterator object of matches 
// Returns: An iterator of all matches, each match being an array containing the match and capturing groups.
// matchAll() method searches the string for all occurrences that match a given regular expression

const regex = /t(e)(st(\d?))/g;

// /.../g:
// The g flag indicates that the regular expression should search globally, i.e., find all matches in the string, not just the first one.
// t:// Matches the character t literally.
// (e): Captures the letter e into a capturing group (group 1)
//(st(\d?)):
// Matches st followed by another capturing group (\d?).
// Captures st along with the following optional digit (\d?) into a capturing group (group 2).
// The inner group (\d?) is a capturing group for an optional digit (group 3).
// \d?:Matches a single digit (\d) or nothing (? makes it optional).


const str = 'test1 test2 test3';
const matches = str.matchAll(regex);

for (const match of matches) {
  console.log(match);
}
// [
//   'test1',
//   'e',
//   'st1',
//   '1',
//   index: 0,
//   input: 'test1 test2 test3',
//   groups: undefined
// ]
// [
//   'test2',
//   'e',
//   'st2',
//   '2',
//   index: 6,
//   input: 'test1 test2 test3',
//   groups: undefined
// ]
// [
//   'test3',
//   'e',
//   'st3',
//   '3',
//   index: 12,
//   input: 'test1 test2 test3',
//   groups: undefined
// ]

// const regexp = /[a-c]/;
// const str1 = "abc";
// console.log(str.matchAll(regex)); // typeError


// using named capture Group
const regex2 = /(?<word>\w+)\s(?<number>\d+)/g;
const str2 = 'apple 123 banana 456 cherry 789';
const matches2 = str2.matchAll(regex);

for (const match2 of matches2) {
  console.log(`Word: ${match2.groups.word}, Number: ${match2.groups.number}`);
}

// Word: apple, Number: 123
// Word: banana, Number: 456
// Word: cherry, Number: 789


// 2
let str1 = "The quick brown fox jumps over the lazy quick quick dog.";
let result = str1.matchAll(/quick/g);
// console.log(...result); // Output: ["quick", index: 4, input: "The quick brown fox jumps over the lazy dog.", groups: undefined]
// here the js converts the normal text into regular expression text.match(/javascript/) without the g flat

for(let item of result){
    console.log(item)
}
// also you have to perform destructuring
for(let {index} of result){
  console.log(index)
}


// WHAT IS DIFFERENCES Between MATCH() AND MATCHALL() 

// So match() and matchAll() method used to search for matches of a regular expression within given string 


// MATCH()

// 1. Match method used to search OR find for first match for regular expression within a string 
// 2. It return an array containing the matched substring along with information about  substring and its position within string
// 3. or return null if not match found


// MATCHALL() :

// 1 matchAll() method used to find all matches for regular expression within a string
// 2. It return an iterator that yields match result iterable object also include information about matched substring and its position within string(returns them in an iterable format.)
// Return an iterable iterator object of matches 
//  3. If no match found it return an empty iterator 




// Conclusion : 
// match() return the first match its find as an array but 
// matchAll() return an iterator that provide all matches as match objects which allow you to iterate through all the matches in the string 

//  here the js converts the normal text into regular expression text.match(/javascript/) without the g flat