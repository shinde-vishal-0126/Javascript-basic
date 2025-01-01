// EVERY() :
// array.every(callback(element, index, array), thisArg);


// The every() method in JavaScript is an array method used to test whether all elements in an array pass a specified test (provided by a callback function).
//  If all elements pass the test, it returns true. Otherwise, it returns false.
// every((ele, index, array));
// every() having callback function
// every() method test weather all element in an array pass to provided function 
// it return boolean value True and false
// every() are iterative method
// every() method are non mutating method
// every() does not modified the original array
// if the predicated function return true for every array element and false otherwise

// Example :
const isBelow = ((currentValue)=>{
    return currentValue > 40
});
const b = [100,340,56,400,290,45];
const value = b.every(isBelow);
// it return true if and only if all the value satisfied the condition if one of the value not
// satisfied condition then it return false
console.log(value);


// Example : 2
// check array is the subset of another array
const subset = [1,2,3,4,5,6,7,] 
const subset1 = [5,6,7];
const isSubset = ((subset, subset1)=>{
  return  subset1.every((element)=>{
     return   subset.includes(element)
    })
})
// here it return true because all the element of subset1 present in the subset
console.log(isSubset(subset, subset1))


// Example :3
console.log([1, ,2].every((element)=>{
    return element !== undefined
})) // true


// Example : 4
console.log([2, ,2].every((ele)=>{
    return ele === 2;
}))// true


// 1. The every() method does not execute the callback for empty arrays.
//2. It stops execution and returns false as soon as it encounters an element that does not satisfy the condition.


// Sparse Arrays
// A sparse array is an array with "holes" (missing indices). The every() method skips holes (indices that are not initialized or deleted).
const sparseArray = [1, , 3]; // The second element is a "hole"
const result = sparseArray.every(num => num !== undefined);
console.log(result); // Output: true
// The `every()` method skips the hole and does not call the callback for it.



// When to Use
// Use every() when:

// You want to confirm all elements in an array meet a condition.
// You need a simple true/false answer without modifying the original array.