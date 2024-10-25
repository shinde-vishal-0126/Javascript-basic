// INDEXOF()

//  # str.indexOf(searchValue[, fromIndex])

// 1. The indexOf() method in JavaScript is used to determine the first occurrence of a specified value within a string
// 2. it return the index of first occurrences of specified value
// 3. it return -1 if the string not found
// 4. This method are case-sensitive .
// 5. If fromIndex is negative, it is treated as 0.
// 6. Indexof() → start the searching in forward way 
// 7. It also start the search form the first character in search element in forward direction
// 8. return The index of the first occurrence of the specified value

// example 1:
const str = "Hello, World!";
console.log(str.indexOf("World"));  // Output: 7
// (case-sensitive)
console.log(str.indexOf("world"));  // Output: -1
console.log(str.indexOf("Hello"));  // Output: 0
console.log(str.indexOf("o"));      // Output: 4 (first occurrence)


// example 2:
const str1 = "Hello, World!";
console.log(str.indexOf("o", 5));   // Output: 8 (search starts at position 5)
console.log(str.indexOf("o", 9));   // Output: -1 (search starts at position 9)


// example 3
// If fromIndex is negative, it is treated as 0.
//( but in array index of case it start form last )
const str2 = "The quick brown fox jumps over the lazy dog";
console.log(str2.indexOf("quick", -5));   // Output: 4 (treated as 0)
console.log(str2.indexOf("lazy", -100));  // Output: 35 (treated as 0)


// 1.@ what is difference between Array.indexof() and String.indexof() ?
// 1. in array.indexof() are negative index are allowed it start from the last
// 2. but in String.indexof() method -ve index treated as 0


// Example 4 :
const str4 = "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
const word = "dog";
let positions = [];
let pos = str4.indexOf(word);
while (pos !== -1) {
  positions.push(pos);
  pos = str4.indexOf(word, pos + 1);
}
// here return specified string are present in position in give string (return the index of the specified string  in whole string)
console.log(positions);  // Output: [40, 52]

// example 5:
// return the value using empty search string
console.log("Hello word".indexOf("")); // 0
console.log("Hello word".indexOf("", 0)); //return 0
console.log("Hello word".indexOf("", 3)); // return 3
console.log("Hello word ".indexOf("", 8)); // return 8
// Searching as an empty search string produce strange result with no second argument or with second argument whose value
// is less then the calling string length then the return value is the same as the value as second argument
console.log("Hello word null ".indexOf(null));  // return 11

// Example 6:
// However  2nd argument value is Grater then or equal to the string length then the return value is the string length
console.log("Hello word!".indexOf("",11)); // return 11
// 2nd argument is grater then then the string length there return the value of the string length.
console.log("Hello word!".indexOf("",13)); // return 11
console.log("Hello word!".indexOf("",22)); // return 11


// Example 7:
// by using the index of method you have to find the occurrences of the element in give array
const string = "To be, or not to be, that is the question.";
let count = 0;
let position = string.indexOf("e");
while (position !== -1) {
    count++;
    position = string.indexOf("e", position + 1);
}
console.log(count); // Output: 4



