// FLAT()

//flat([depth]) :
// flat() is new array instances method that can create one-dimensional array from a multidimensional array (nested array into a single , flat)
// The flat() method in JavaScript is used to create a new array with all sub-array elements concatenated into it, up to a specified depth. This method is available on arrays in JavaScript
// 
//The flat() method is used to flatten nested arrays up to a specified depth.
// flat() method in javascript used to create a new array with all sub-array element concatenated into it recursively 
// - upto specified depth
//  depth level specifying how deep a nested structure should be flattened the default is 1

// flat() method indeed creates a new array with the sub-array element concatenated into and it does not modified the original array.
// it return new array that is a shallow copy of the element form the original array up to specified depth

// javascript is non-mutating method.(does not modify the original array)
// flat() method is iterating method over the element internally.

// Example: 1
const arr1 = [1,2,[3,4]];
// by default depth is 1
console.log(arr1.flat()); //[ 1, 2, 3, 4 ]

// Example: 2
// flattering lever 2
const arr = [1,2,[3,4,[5,6]]];
console.log(arr.flat(2)); // [1,2,3,4,5,6]

// Example: 3
// flattering lever 2
const arr2 = [1,2,[3,4,[5,6]]];
// here depth by default are 1
console.log(arr2.flat()); // [1,2,3,4,[5,6]]

// Example: 4
// Flattening Completely: If you don’t know how deep the nested structure is, use Infinity to flatten it completely:
// flattering an array infinite lever
const arr4 = [1, 2, [3, 4, [5, 6, [7, 8]]]];
console.log(arr4.flat(Infinity)); 
// Output: [1, 2, 3, 4, 5, 6, 7, 8]

// Example 5
// Handling the spare array value
// if the spare array or empty value it remove form the time of flattering
const arr5 = [1, 2, , 4, 5]; 
console.log(arr5.flat()); 
// Output: [1, 2, 4, 5]

