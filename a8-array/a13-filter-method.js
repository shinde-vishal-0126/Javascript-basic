// FILTER()

// filter((element, number array)) method having callback function
// The callback function must return a boolean value:
// true: Include the element in the new array.
// false: Exclude the element from the new array.
// return the elements of an array that meet the condition 
// in filter method we need to give initial value
// filter method take each and every element of an array and it applied conditional statement against state if the 
// condition return true and the element get pushed into the output array if the condition return false the element does not get pushed 

//  filter() method in JavaScript is used to create a new array from an existing array by filtering out elements that don't meet certain criteria. 
// This method is part of the Array prototype and returns a new array containing only those elements that satisfy the condition provided in the callback function.

// filter() method create new array with all the element that pass the test implemented by provided function

//  if you not give the initial value it get first element as initial value
//  (filter return only those element form the array those fulfilled the give criteria)
//  filter() method create shallow copy of a portion of give array
//  filter()  method does not modify the original array 
//  it return new array containing the element that satisfy the filtering condition
//  if no element pass the test an empty array will be returned.
//  filter method are iterative method call a provided callback function once for each element in the array. construct new array
//The filter() method does not modify the original array, it returns a new array.
// It works in a non-mutating way, meaning that the original array remains intact.
// The callback function can include more complex conditions or logic depending on the filtering requirements.


// example 
const Array = [
    5, 12, 2584, 8, 130, 44, 3, 15, 17, 21, 6, 28, 34, 55, 89, 144, 233, 377, 610,
    987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393]
const data = Array.filter((ele, index, array) => {
    console.log(ele);
    console.log(index);
    console.log(array)
})
console.log(data); // Here return the empty array because it does not have any filtration criteria

// example 
const newData = Array.filter((ele, index, array) => {
    return ele > 1000
}) // If you do not give initial value it take first element as initial value
// not modified the original element
// here return the new array of the element
console.log('mewData', newData);
// Output
// mewData [
//     2584,   1597,  2584,
//     4181,   6765, 10946,
//    17711,  28657, 46368,
//    75025, 121393
// //  ]


// NOTE : 
//?  How filtered method work ?
// filter method create shallow copy of the portion of the given array and filtered down to just

//Example :

const names = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
const len = names.filter((ele, index, array) => {
    return ele.length >= 6
})
console.log(len);


// example
// find all prime number in array
// prime number grater then one that has no positive divisors other than one itself 
const prime = [5, 12, 2584, 8, 130, 44, 3, 15, 17, 21, 6, 28, 34, 55, 89, 144, 233, 377, 610,
    987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393];

function isPrime(element, index, array) {
    if (element <= 1) {
        return false;
    }
    for (let i = 2; i < element; i++) {
        if (element % i === 0) {
            return false
        }
    }
    return true
}

console.log(prime.filter(isPrime));
//output 
//     [
//         5,   3,   17,
//        89, 233, 1597,
//     28657
//   ]


// example
// filtering the invalid entries form the json
const just = [
    {
        id: 13
    },
    { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }, {}, { id: null }, { id: NaN }, { id: undefined }]

let invalidEntries = 0;
function filterJsonById(item) {
    if (Number.isFinite(item.id) && item.id !== 0) {
        return true
    }
    invalidEntries++
    return false
}
const arrayByid = just.filter(filterJsonById);
console.log('arabyId', arrayByid);


// example 
// Filtered () array content based on search criteria
const stdName = [
    "Alice",
    "Bob",
    "Charlie",
    "Diana",
    "Edward",
    "Fiona",
    "George",
    "Hannah",
    "Ian",
    "Julia",
    "Alice",
    "Bob",
    "Alice"

];

function filterByName(ele, qeary) {
    return stdName.filter((ele) => {
        return ele.toLocaleLowerCase().includes(qeary.toLocaleLowerCase())
    });
}

console.log(filterByName(stdName, 'al'));
console.log(filterByName(stdName, 'Bo'))

// example
// used filter in undefined
// Define an array with elements: 1, an empty slot, and undefined
console.log([1, , undefined].filter((x) => {
    // The filter callback checks if the element is strictly equal to `undefined`
    return x === undefined;
})); //[undefined]


// Define an array with elements: 1, an empty slot, and undefined
console.log([1, , undefined].filter((x) => {
    // The filter callback checks if the element is not equal to `2`
    return x !== 2;
}));
// [1, undefined]

// Empty Slots: The empty slot (hole) at index 1 in both arrays is ignored by the filter() method, as it’s neither undefined nor any other value.

// example 

// const arrayLiked = {
//     length: 3,
//     0: "a",
//     1: "b",
//     2: "c",
//     3: "a"
// };

// const result = Array.prototype.filter.call(arrayLiked, (x) => x <= "b");
// console.log(result);


// following example test the behavior of the filter method when the array is modified 
const NAMES = ["ALICE", "BOB", "CHARLIE", "DAVID", "EVE", "FRANK", "GRACE", "HEIDI", "IVAN", "JUDY"];
const modifiedWord = NAMES.filter((word,index, array)=>{
    array[index+1] += 'extra';
    return word.length < 10
})
console.log(modifiedWord);

// append new word with array
const names1 = ["ALICE", "BOB", "CHARLIE", "DAVID", "EVE", "FRANK", "GRACE", "HEIDI", "IVAN", "JUDY"];
const appendWord = names1.filter((word,index,arr)=>{
    arr.push("new");
    return word.length < 6
})
console.log('appendWord', appendWord)


    // WHAT IS DIFFERENCE BETWEEN FILTER AND MAP METHOD

    // FILTER : 
    //  Used to create a new array containing only the elements that pass a specific condition or test.
    // Returns a new array with elements that pass the test.
    // The callback function should return a boolean value (true or false).
    //  Use when you need to remove elements from an array based on a condition.

    // MAP :
    // Used to transform each element in the array and create a new array with the transformed elements.
    // Returns a new array with elements that have been transformed by the callback function.
    // The callback function should return the new value for each element.
    // Use when you need to create a new array with each element transformed in some way.


    // NOTE:
    // filter when you want to select elements based on a condition,  

    

    // note:
    // in  filter method and map method if you give conditional operator then it return true and false value.