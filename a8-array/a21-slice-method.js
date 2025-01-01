//SPLICE()

// slice(start, end);
// The slice() method in JavaScript is used to extract a portion of an array or string and returns a new array or string without modifying the original one. It can be used with both arrays and strings, and its syntax is similar for both.
// slice() method in javascript used to create shallow copy of a portion of an array into new array
// it return new array
// it does not modified the original array
// you can used it to extract the segment of the array and work wit its a new array
// both argument state and end are optional 
// if you not provided any argument it create the shallow copy of the array ( create new array with existing array )
// in end argument last element are excluded.
// slice() method are work with -ve index 
// it the array out of bound index then return entire array as result

// example 
const array = [1, 2, 3, 4, 5];
const newArray = array.slice(1, 4);
//slice(1, 4) extracts elements from index 1 to 3 (index 4 is excluded)
console.log(newArray); // Output: [2, 3, 4]
console.log(array); // Output: [1, 2, 3, 4, 5] (Original array is unchanged)

// omitting end parameter 
const array1 = [1, 2, 3, 4, 5];
const newArray1 = array1.slice(2);
console.log(newArray1); // Output: [3, 4, 5]

// shallow copy of the entire array
const array3 = [1, 2, 3, 4];
const newArray3 = array3.slice();
console.log(newArray3); // Output: [1, 2, 3, 4]


// Example :
const newAnimal = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(newAnimal.slice(2));
console.log(newAnimal.slice(2, 4));
console.log(newAnimal.slice(2, -1)); // [ 'camel', 'duck' ]


// calling slice() method on non-array object
const arrayLinks = {
    length: 3,
    0: 2, 1: 3, 2: 4, 3: 33
}
console.log(Array.prototype.slice.call(arrayLinks,1,3))

// using slice() on spare array
console.log([12,3,4, ,6].slice(1,4));


// If the startIndex provided to the slice() method is less than the negative length of the array, it is clamped to 0. This means that the slicing starts from the beginning of the array.
const arr1 = [10, 20, 30, 40, 50]; // array in less then the length then it start from the zero
console.log(ar1r.slice(-10)); // [10, 20, 30, 40, 50]


const arr2 = [10, 20, 30, 40, 50];
// arr.length + (-10) = -5 (so here calculated starting position is less then zero the start the serching form the give index as 2 so give element not found it return the empty array)
console.log(arr2.slice( 2,-10)); // []
