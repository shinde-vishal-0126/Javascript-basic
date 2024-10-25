//SPLICE()

// splice(start, end);
// splice() method in javascript used to create shallow copy of a protion of an array into new array
// it return new array
// it does not modified the origonal array
// you can used it to extract the segment of the array and work wit its a new array
// both argument state and end are optional 
// if you not provided any arguent it create the shallow copy of the array ( create new arry with existiong aray )
// in end argument last element are excluded.

// example 
const array = [1, 2, 3, 4, 5];
const newArray = array.slice(1, 4);
//slice(1, 4) extracts elements from index 1 to 3 (index 4 is excluded)
console.log(newArray); // Output: [2, 3, 4]
console.log(array); // Output: [1, 2, 3, 4, 5] (Original array is unchanged)

// omiting end parameter 
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
console.log(newAnimal.slice(2, -1));


// calling slice() method on non-array object
const arrayLinks = {
    length: 3,
    0: 2, 1: 3, 2: 4, 3: 33
}
console.log(Array.prototype.slice.call(arrayLinks,1,3))

// using slice() on spare array
console.log([12,3,4, ,6].slice(1,4));
