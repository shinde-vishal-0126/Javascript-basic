// FIND_LASTINDEX :

// arr.findLastIndex(callbackFn, thisArg);
// callbackFn: A function to test each element. It takes the following arguments:
// element: The current element being processed.
// index: The index of the current element.
// array: The array findLastIndex was called upon.
// thisArg (optional): Value to use as this when executing callbackFn.
// findLastIndex() method used to find the index of last element in the array that satisfied the provided testing function
// if no element satisfied the condition it return -1 
// here start the execution in reverse order and return first element index that satisfied the given condition

// Example: 1
const array = [5,12,8,130,44];
const index = array.findLastIndex(element => element > 10);
// here return 44 as last index which is Grater then 10 because it iterate through and return value 
console.log(index); // Output: 4


// Example: 2
const array11 = [5, 12, 8, 130, 44];
const index1 = array11.findLastIndex(element => element > 200);
console.log(index1); // Output: -1

//Example : 3
const arraylikeObj = {
    length: 3,
    0:2,
    1:7.3,
    2: 4,
    3:3 // here is ignore because its length is 3
}

const num = Array.prototype.findLastIndex.call(arraylikeObj,(ele)=>{
    return Number.isInteger(ele);
});
console.log(num)


// useCase()
// This method is useful when you want to locate the last occurrence of an element that satisfies a condition.
// If the array is empty, the method immediately returns -1.