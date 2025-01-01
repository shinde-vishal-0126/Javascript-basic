// ARRAY.OF()

// Array.of(element, element....)
// Array.of() method in JavaScript creates a new array instance with a variable number of arguments,
//  regardless of the number or type of the arguments.
//  It ensures that the arguments passed are treated as elements of the array,
// not as a length specifier (which happens when using the Array() constructor with a single number argument).
// Array.of() static method create new array instances with a variable number of arguments
// regardless of the number or type of arguments
// it is different from the  ARRAY constructor (array.of() which behave differently depending upon number of arguments)
// return new array instances

// Example :

const array = Array.of(7);
console.log(array);// [ 7 ]


// Example 2 
const array2 = Array.of(1, 2, 3); 
console.log(array2); // Output: [1, 2, 3]


// WHAT IS DIFFERENCES BETWEEN THE ARRAY.OF() AND ARRAY CONSTRUCTOR

// ARRAY.OF(ELEMENT) :
// Multiple arguments Creates an array with the provided elements.	

// crate a new array instances with a variable number of arguments  regardless number and type of arguments 
// Creates an array with one numeric element
const array3 = Array.of(7);
console.log(array3); // Output: [7]

// array.of(element) always creates an array with provided argument as element
// when single argument is passed to array() it create an array with that length(create an array with that single number as an element)
// Array.of(7) creates an array with a single element [7].

// Array Construct0R 
// Creates an empty array of the specified length.
// if you pass multiple argument then it Creates an array with the provided elements.
// create an new array instances  behavior various based on the number and type of the arguments
// Array(7) creates an array with 7 empty slots (i.e., an array of length 7).
const array1 = Array(7);
console.log(array1); // Output: [ <7 empty items> ]


const array4 = Array(1, 2, 3);
console.log(array4); // Output: [1, 2, 3]

const array5 = Array.of(1, 2, 3);
console.log(array5); // Output: [1, 2, 3]

// if you not pass any argument it return empty array
const arr5 = Array.of();
console.log(arr5); // []



