// ARRAY.OF()

// Array.of(element, element....)

// Array.of() static method create new array instances with a variable number of arguments
// regardless of the number or type of arguments
// it is different from the  ARRAY constructor (array.of() which behave differentely dependiong upon number of arguments)
// return new array instances

// Example :

const array = Array.of(7);
console.log(array);// [ 7 ]


// Example 2 
const array2 = Array.of(1, 2, 3); 
console.log(array2); // Output: [1, 2, 3]


// WHAT IS DIFFERENCES BETWEEN THE ARRAY.OF() AND ARRAY CONSTRUCTOR

// ARRAY.OF(ELEMENT) :
// crate a new array instances with a variable number of arguments  regardless number and type of arguments 
// array.of(elelent) always creates an array with provided argument as element
// when single argument is passed to array() it create an array with that length(create an array with that single number as an element)
// Array.of(7) creates an array with a single element [7].

// Array Construct0R 
// create an new array instances  behaviour veriso based on the number and type of the arguments
// Array(7) creates an array with 7 empty slots (i.e., an array of length 7).

const array1 = Array(7);
console.log(array1); // Output: [ <7 empty items> ]

const array3 = Array.of(7);
console.log(array3); // Output: [7]

const array4 = Array(1, 2, 3);
console.log(array4); // Output: [1, 2, 3]

const array5 = Array.of(1, 2, 3);
console.log(array5); // Output: [1, 2, 3]




