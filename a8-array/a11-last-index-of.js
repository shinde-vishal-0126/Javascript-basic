// LASTINDEXOF

// lastIndexOf(searchElement, formIndex)
// Return last(greatest) index of an element with in the array equal to an element
// s used to find the last occurrence of a specified value in an array
// lastIndexof() return the index of the last occurrences of a specified value in an array
// it return -1 if not found
// it search element last to first (backward direction)

const fruits = ['apple', 'banana', 'cherry', 'date', 'banana', 'elderberry', 'fig', 'grape','banana'];
const data = fruits.lastIndexOf('banana');
console.log(data) //8

//lastindexof(searchElement, fromelemet) second  element start searching form the give element
const fruitData = fruits.lastIndexOf('banana',6);
console.log(fruitData);  // 6 start form 6 index then it return 4 as value

// if not found it return -1
const data1 = fruits.lastIndexOf('main',2);
console.log(data1) // -1


//example1
const animals = ['lion', 'tiger', 'elephant', 'giraffe', 'zebra','tiger', 'kangaroo', 'panda'];
const lastIndex = animals.lastIndexOf('tiger');
// return give index value
console.log(lastIndex); // 5


// negative indexing: 
/// Define the array
const numbers = [10, 20, 30, 40, 50, 60, 70];

// Example 1: Search for the last occurrence of 30 without specifying fromIndex
const index = numbers.lastIndexOf(30); 
console.log(index); // Output: 2
// Explanation: The method searches backward from the last element (70) and finds 30 at index 2, which is the last occurrence of 30.


// Example 2: Search for the last occurrence of 20 starting from index -2
const index1 = numbers.lastIndexOf(20, -2);
console.log(index1); // Output: 1
// Explanation:
// The negative fromIndex (-2) means we start searching from index 5 (since array.length = 7, and -2 => 7 + (-2) = 5).
// We then search backward from index 5 (which has the value 60) and find the value 20 at index 1.
// So, the method returns 1.


 // Example 3: Search for the last occurrence of 20 starting from index -1
const index2 = numbers.lastIndexOf(20, -1);
console.log(index2); // Output: 1
// Explanation:
// The negative fromIndex (-1) means we start searching from index 6 (since array.length = 7, and -1 => 7 + (-1) = 6).
// We search backward from index 6 (which has the value 70) and find the value 20 at index 1.
// So, the method returns 1 again.


/** Example 4: If the element is not found */
const index3 = numbers.lastIndexOf(100); // Searching for a non-existent element
console.log(index3); // Output: -1
// Explanation: Since 100 is not in the array, the method returns -1.




// You have to not used lastIndexOf with NaN
const ap = [NaN];
const sdp = ap.lastIndexOf(NaN);
console.log(sdp); // -1

// also you can not used lastindexof() to search empty slots in spare array
const app = [1, ,3]
const a = app.lastIndexOf(undefined);
console.log(a); // -1


const ab = [2, 3, 4, 5, , 8, '', null, NaN];

// Searching for an empty value, i.e., no argument passed to lastIndexOf
console.log(ab.lastIndexOf()); // -1
// Explanation:
// If no argument is passed to `lastIndexOf()`, it defaults to `undefined`.
// `undefined` is not found in the array, so it returns -1.


// Searching for `undefined`
console.log(ab.lastIndexOf(undefined)); // -1
// Explanation:
// The array does not explicitly contain `undefined` (although there is a hole in the array),
// so `lastIndexOf` returns -1.


// Searching for `null`
console.log(ab.lastIndexOf(null)); // 7
// Explanation:
// The array contains `null` at index 7, so it returns 7, the index of the last occurrence.


// Searching for an empty string (`''`)
console.log(ab.lastIndexOf('')); // 6
// Explanation:
// The array contains an empty string (`''`) at index 6, so it returns 6, the index of the last occurrence.


// Searching for `NaN`
console.log(ab.lastIndexOf(NaN)); // -1
// Explanation:
// `lastIndexOf` cannot correctly find `NaN` because `NaN` is not equal to itself in JavaScript.
// Even though `NaN` is in the array, it returns -1, as `lastIndexOf` doesn't consider `NaN` equal to `NaN`.




//  WHAT IS DIFFERENCE between INDEXOF() AND LASTINDEXOF()

// INDEXOF() :
//indexof() method return the index of first occurrences of a element specified in the array
// i.e search element index of first occurrences of substring whiten a string
// if match return the index of first match 
// if not found it return -1
// indexof() method work on first to last (i.e it is forward direction)


// LASTINDEXOF()
// lastindexOf() method return the index of last occurrences of a element specified in the array
// i.e search element index of last occurrence of substring within a string
// if match the string it return last index of that element
// if not match it return -1
// LastIndexOf() method return last to first (i.e backward direction)