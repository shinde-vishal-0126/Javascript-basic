// SPLICE()

//SPLICE(START, DELETCOUNT?, ITEM1, ITEM2 (STRING []))

// start: The index at which to start changing the array.
// If the index is greater than the length of the array, the array will not be modified.
// deleteCount: The number of elements to remove starting from the start index. If omitted, all elements from the start index to the end of the array will be removed.
// item1, item2, ...: The items to be added to the array, starting from the start index. If no items are specified, splice() will only remove elements.

//The splice() method in JavaScript is used to modify an array by removing, replacing, or adding elements. It directly alters the original array.
// splice() method of array instances changes the content of an array by removing, replacing, or adding new element in place

// splice() method remove the element from an array
// if necessary insert new element in their place
// splice() method return an only  array containing the element that were deleted.  (i.e create new array with a segment removed)
// The splice() method change the content of an array by removing, or replacing existing element and or adding new element
// if not element are removed an empty array return
//  splice() method are mutating method (because used to insert, remove, and replace the element in the original array)
// Most of the time array method used for the delete element purpose
// splice method modified the original array (it is mutating meted )


//? what happen when you call the splice() method without arguments?
const data1 = fruits.splice();
console.log(data1) // it always return the empty data. // because you not give any index count also not give any arguments


// 2. what is output if you not give 2nd argument only give first argument ?
// if you not give second argument but give first argument then start the deleting the element form given start index to the last index element
const month1 = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August", 
  "September",
  "October",
  "November",
  "December"
];
const data = month1.splice(1); // here deleted all the element form the start index 1 to the last element of the array
console.log(data) 
// [
//   'February', 'March',
//   'April',    'May',
//   'June',     'July',
//   'August',   'September',
//   'October',  'November',
//   'December'
// ] // here return array containing deleted element*
console.log(month); // [ 'January' ]



const fruits = ["Apple", "Banana", "Cherry", "Date"];
// in following code start index is 1 and deleted count is 2
const deletedFruits = fruits.splice(1, 2);
// splice meted return the modified  resulting original array
console.log(fruits); // ;[ 'Apple', 'Date' ]
// here splice() meted return array containing the deleted element
console.log(deletedFruits); //[ 'Banana', 'Cherry' ]

// example 2
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const newMonth = month.splice(2, 0, "vishal");
// Here return the empty array because it having the deleted count as zero
//(splice method return array containing deleted element but here deleted count is zero so it return zero)
console.log(newMonth);
// return original modified array with adding new element in array
console.log(month);

// update March As MARCH
const Marchindex = month.indexOf("March");
const newMarch = month.splice(Marchindex, 1, "MARCH");
console.log(month);
console.log(newMarch);

// remove vishal form the month array
const remove = month.splice(2, 1);
console.log(remove);
console.log(month);

// Delete JUNE form the array
const indexof = month.indexOf("June");
const removeJune = month.splice(indexof, 1);
console.log(removeJune);
console.log(month);

// if you delete data from March to end how to done//
const marchIndex = month.indexOf("MARCH");
console.log(marchIndex);
if (marchIndex != -1) {
  const deleted = month.splice(marchIndex, Infinity);
  console.log(deleted);
}
console.log("month", month); //month [ 'January', 'February' ]

// using splice() on spare array
const arr = [1, , 3, 4, , 5];
console.log(arr.splice(1, 2)); //[ <1 empty item>, 3 ]
console.log(arr); // [ 1, 4, <1 empty item>, 5 ]

//?  how to replace element in array using splice() method:
// if you want to replace any element into the array you have to give deleted count as 2nd argument in splice method and then give 3 argument as  inserted element in the array
// you have give multiple elements also
// if you don't want to add or replace the element into the array you don't give the third element ot the array.


//? splice() method in javascript are work with -ve index 
  // Yes, the splice() method in JavaScript does work with negative indices.
// When a negative index is used with splice(), it counts from the end of the array. For example:
// -1 refers to the last element.
// -2 refers to the second last element, and so on.
let arrx = [1, 2, 3, 4, 5];
// Remove 2 elements starting from the second-to-last element (-2)
arrx.splice(-2, 2);
console.log(arrx); // Output: [1, 2, 5]


//? if you want to add the element at end using splice method how to do ?
let abc = [1,2,3,4,5];
// const result = abc.splice(-1,0,'vishal');// using this you are not able to add at the end  
// so you have to used the following approach
const result = abc.splice(ab.length,0,'vishal')
console.log('result', result);
console.log(abc);
