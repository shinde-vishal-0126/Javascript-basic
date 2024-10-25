// array: Collection of multiple type of data stored in single variable (references type in javascript)
// non-primitive type


// How to create array

// using literal annotation method
var myArray = ['a','b','c','d'];
console.log('myArray', myArray);

// create array using  array constructor
let newArray = new Array();
newArray= [10,20,30,40,50]
console.log("newArray", newArray)

// also create Array using the Array.prototype.split("") method
// By using the split method you have to create Array (note: it is possible when you defined string )
const fruits = "apple, banana, mango, papaya";
console.log("fruits", fruits);
// it is possible when only you defined the string not number 
const fruitsArray = fruits.split(",");
console.log('fruitsArray', fruitsArray)

//another example 
const number = "1,2,3,4,5,6"
const numberArray =number.split(",");
console.log(numberArray);

// example 
let years = "vishal";
console.log(years["2"] !== years["02"]); // it is not equal return true

// Trickly question based on array constructor
const array = new Array(10);
console.log('length of the array', array.length);
console.log("output:", array[1]); // undefined
console.log(0 in array); // false

const oldArray = new Array("10");
console.log('length:', oldArray.length); 

