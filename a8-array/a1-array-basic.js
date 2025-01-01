//? def
//* array: Collection of multiple type of data stored in single variable (references type in javascript)
// javascript array is an object that represent a collection similar type of element.
// Each value(name) will be called element
// in array each element is represent by an index which start with zero(0)

// non-primitive type
// iterable : array object where you can used the for loop
// array like object : any object with length property and used indexes to access them
// array as object : array in javascript are specific type of object that has numeric key(indices) and length property
// (then indices are automatically maintained adn the length property is automatically update when you add or remove element form the array)
// type of operator return object type for both array and normal object.

// Javascript array is data structure that allow you to store and organize multiple value within a single variable
// it is versatile and dynamic object
// it can hold various dat types including numeric, string, object, and ever other array
// array in javascript are zero indexed the first element are access with index 0

//? How to create array

// using literal annotation method
var myArray = ["a", "b", "c", "d"];
console.log("myArray", myArray);

// create array using  array constructor
let newArray = new Array();
newArray = [10, 20, 30, 40, 50];
console.log("newArray", newArray);

// also create Array using the Array.prototype.split("") method
// By using the split method you have to create Array (note: it is possible when you defined string )
const fruits = "apple, banana, mango, papaya";
console.log("fruits", fruits);
// it is possible when only you defined the string not number
const fruitsArray = fruits.split(",");
console.log("fruitsArray", fruitsArray);

//another example
const number = "1,2,3,4,5,6";
const numberArray = number.split(",");
console.log(numberArray);

// example
let years = "vishal";
console.log(years["2"] !== years["02"]); // it is not equal return true

//? Trickly question based on array constructor
const array = new Array(10);
console.log("length of the array", array.length); // [ <10 empty items> ]
console.log("output:", array[1]); // undefined
console.log(0 in array); // false

const oldArray = new Array("10"); // length: 1
console.log("length:", oldArray.length);

// first element: refer to the element at index 0
// last element or tail : refer to the element at the last which can be obtained using array.length-1

// ? accessing element :array element access using zero-based index.
// Tricky question
// in array used to get the character using  square bracket or zero based indexing like arr[0]
// but you give negative index in square bracket it return undefined
const arr = [10, 20, 30];
console.log(arr[0]); // 10

//? if you try ot access based on element it is not possible it return undefined
let fruit = ["apple", "banana", "mango"];
console.log(fruit["apple"]); // it return undefined. because you have to access element based on indexing not a element
console.log(arr[-1]); // undefined // es20 get .at() method using this you have to get negative indexing
// using .at() method:
console.log(arr.at(-1)); // return 30


// ? modifying element : modifying elements : you can modify array elements by assigning new value to specific indices
    let names = ['vishal','shinde','at','post'];
    let newArr = names[4] = 'akshu';
    // console.log(newArr); return akshu
    console.log(names) //[ 'vishal', 'shinde', 'at', 'post', 'akshu' ]

// ? how we create empty array or element ?
let array1 = [];


//? array traversal/ iterating over arrays

// for of loop: for of loop is used to iterate over the value of an iterable object such as arrays, string, or other iterable object

// for in loop: for in loop is used to iterate over the properties (including indices ) of an object

// forEach loop: forEach method call the provided function once for each element of the array. the provided function may perform any kind of operation on the element of the given array.

// map() method: map() create a new array form calling a function for every array element 
    // map not change the original array.