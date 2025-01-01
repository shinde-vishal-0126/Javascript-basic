//FLATTENING AN ARRAY

//Flattening an array refers to the process of converting a nested array (an array that contains other arrays) into a single-dimensional array (an array without nested arrays). 
// This can be useful when you want to simplify the structure of an array for easier processing or manipulation.

//Two dimensional array is nothing but array of an array (array inside array);
// Flattening an array simplifies a nested array into a single-dimensional array.

// More complex example with nested arrays
const nestedArr = [[1, 2], [3, 4], [5, 6]];

// Using flatMap to flatten the nested arrays by one level
const flattened = nestedArr.flatMap(x => x);

console.log(flattened); 