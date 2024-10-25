//Array.From()

// Array.from(arrayLike, mapfunction, thisArg);

// Array.form() is static method
// Converts array-like or iterable objects to a new array instance.
// create new , shallow copy, array instances form an iterable or array like objects 
// return new array instances 
// create new array,
// does not modified origonal array or arraylike object 
//  arrayLike : an array like or iterable object to convert to an array
// mapfunction: 

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



// WHAT IS DIFFRENCES BETWEEN THE ARRAY.FROM() AND ARRAY.OF()
// BOTH ARE USED TO CREATT NEW ARRAY

//Array.from() :
// Convert array-like or itarabel object to a new array instances 


// Array.of()
// create new array instances with varible number of arguments (regardless of numbers or type of arguments )