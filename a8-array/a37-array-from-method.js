//Array.From()

// Array.from(arrayLike, map_function, thisArg);

// Array.form() is static method
// Converts array-like or iterable objects to a new array instance.
// create new , shallow copy, array instances form an iterable or array like objects 
// return or create new array instances;
// does not modified original array or arraylike object 
//  arrayLike : an array like or iterable object to convert to an array
// array.form() method are iterable.
// Array.form() it is not mutating method (does not modified original array.)
// map function: 

// what is iterable object in javascript:
// String,
// nodeList
// argument object
// set
// map
// custom object with length property

// what is return Array.form() method ?
// Array.form() method return the new array instances;

// this converted into the array
const str = "Hello";
const arr = Array.from(str);
console.log(arr); // [ 'H', 'e', 'l', 'l', 'o' ]
console.log(str); // Hello


// convert set into the array
const set = new Set([1,2,3,4]); 
const newSet = Array.from(set);
console.log(newSet);// [ 1, 2, 3, 4 ]


// array from a map 
const map = new Map([[1,2],[2,4],[4,8]])
console.log(Array.from(map)); // [ [ 1, 2 ], [ 2, 4 ], [ 4, 8 ] ]


// Example :
const mapper = new Map([
    ["1","a"],
    ["2","b"]
]);
console.log(Array.from(mapper.values())); // [ 'a', 'b' ]
console.log(Array.from(mapper.keys())); // [ '1', '2' ]



// Array from an array-like object
function f(){
    return Array.from(arguments)
}
const data = f(1,2,3);
console.log('data', data);// data [ 1, 2, 3 ]

// using arrow function and array.form();
console.log(Array.from([1,2,3], (x)=>{
    return x + x
}))// [ 2, 4, 6 ]



// WHAT IS DIFFERENCES BETWEEN THE ARRAY.FROM() AND ARRAY.OF()
// BOTH ARE USED TO CREATE NEW ARRAY

//Array.from() :
// Convert and create array-like or iterable object to a new array instances 


// Array.of()
// create new array instances with variable number of arguments (regardless of numbers or type of arguments )


// When to Use Array.from()
// To convert non-array iterables (e.g., strings, NodeLists, Sets, Maps) into true arrays.
// When you need to transform or map items in one step while creating an array.
// To easily generate arrays with a specific size and initialized values.
// Generate an array of numbers from 1 to 10
const sequentialNumbers = Array.from({ length: 10 }, (_, index) => index + 1);
console.log(sequentialNumbers);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
