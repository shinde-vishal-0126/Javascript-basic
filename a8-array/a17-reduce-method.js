// REDUCE() Method

// reduce method in JavaScript is used to execute a reducer function on each element of an array, resulting in a single accumulated value

// reduce method in javascript is used to accumulate or reduce an array to a single value.
// it iterates over the elements of an array and applies a callback function to each element.
// updating an accumulator value with the result .
// the reduce method takes a callback function as its first argument an optional initial value for he accumulator as the second argument
// syntax
array.reduce((accumulator, currentValue, index, array)=>{

}, initialValue)

// callback: a function that is called once for each element in the array
// accumulator: the accumulated result of the previous iteration
//currentValue : the current element being processed in the array
// index: the index of the current element being processed 
// array: (optional) : array reduce was called upon
// initialValue:(optional): an initial value for the accumulator. if not provided the first element of the array is used as the initial value.


// reduce(callback_function, initial_value)
// reduce() method reduce array of the value down to just one single value
//reduce() method execute the callback function for all the element in an array.
// return value of the callback function is the accumulated result and it is an argument 
// -  in the next call to the call back function

// In reduce method having two things
// 1. callback_function (Having 4 argument callback(previousValue, currentValue, currentIndex, array))
// 2. Initial value :(if initial value specified it is used as the initial value to start the accumulation)
// The first call to the callback function provides this value as an argument instead of an array value

//  NOTE :
// A value to use as the first argument to the first call of the callback. 
// If no initial value is supplied, the first element in the array 
// will be used as the initial accumulator value, and callback will start from the second element in the array.

// reduce() method used to reduce an array to a single value by applying a specified function to each element of an array.
// this method iterate each element of the array (it is iterative method iterate left to right)
// accumulating the result and it goes and return the final result as a single value.
// accumulator is basically the result of the previous computation (initially no previous computation result it is zero)

// The reduce method reduces the given array into a single value by executing reducer function
// to each and every element in the array..
//The final result running the reducer across all element of the array in single value 
// reduce method does not change the original array instead in process the array element and return a single accumulated result based on provided callback function

// what is return reduce method ?
// The reduce method in JavaScript returns a single accumulated value that is derived from running the provided callback function on each element of the array. This return value can be any type, such as a number, string, object, array, or even another function, depending on how the callback function processes the elements.

// Immutability: reduce doesn't modify the original array but creates a new value.
// Initial Value: Always provide an initial value for safer and more predictable behavior, especially for empty arrays.


//Reduce method flatten an array means convert the 3d or 2d array into a single dimensional array
// method in JavaScript is used to execute a reducer function on each element of an array,
// resulting in a single output value. 
//It is a powerful array method for aggregating data, transforming arrays, and combining elements into a single value.

const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
const newNumbers = numbers.map((element)=>{
    return element * 2
}).filter((ele)=>{
    return ele *2
}).reduce((acc,cur, index, array)=>{
    return acc + cur
});
console.log(newNumbers);

// in reduce() method you have to defined initial value or (default value to start the execution);
const array = [1,4,5,3,8,9,33,0,6];
const num = array.map((ele)=>{
    return ele *2
}).filter((ele)=>{
    return ele *  2
}).reduce((accu, ele)=>{
    return accu += ele;
},7)
console.log(num)

// example 
const arr = [1,4,5,3,8,9,33,0,6]
const initialValue = 0;
const sum = arr.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue
},initialValue)
console.log(sum);

// example
const getMax = ((a,b)=>{
    return Math.max(a,b)
});
console.log([1,100].reduce(getMax,50)); // 100
console.log([50].reduce(getMax,10)) // 50
console.log([1,100].reduce(getMax));

console.log([].reduce(getMax,1)) // 1 because its initial value is one

// How to work reduce method without initial value
const fc = [15,16,17,18,19];
const now =fc.reduce((accumulator,currentValue,index)=>{
    console.log(accumulator);
    console.log(currentValue)
    return accumulator + currentValue
})
console.log(now);

// How to work reduce method with an initial value
const fs = [15,16,17,18,18]
const data = fs.reduce((acc, current)=>{
    return acc + current
},10)
console.log(data);

// using reduce with spare array
// reduces skip missing element in the spare array but does not skip undefined value

// for spare array skip the spare array
const d = [1,2,3, ,4,5, ,6];
const f = d.reduce((accure, curre)=>{
    return accure + curre
})
console.log(f);

// reduce method for the undefined
const g = [1,2,3,undefined ,4,5,undefined ,6];
const h = d.reduce((accure, curre)=>{
    return accure + curre
})
console.log(h);


// BY USING REDUCE() METHOD YOU HAVE TO FLATTERN AN ARRAY
// Flattern an array refers to the process of converting a nested into single dimensional

const arr1 = [['zone-1','zone-2'],
['zone-2','zone-3'],
['zone-5','zone-6'],['zone-6','zone-6']]
let flatten = arr1.reduce((accum, customElements)=>{
    return accum.concat(customElements)
})
console.log(flatten);



// Example2
const nestedArray = [1, [2, [3, [4]], 5], 6];

function flattenArray(arr) {
    return arr.reduce((acc, val) => {
        return acc.concat(Array.isArray(val) ? flattenArray(val) : val);
    }, []);
}

const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]




// Why Is reduce So Useful?
// Flexibility: You can transform data in many ways, including filtering, mapping, and aggregating.
// Efficiency: It allows you to combine multiple operations into a single pass over the array.
// Customizability: Unlike other array methods like map or filter, reduce can produce any data structure, not just arrays.


// used of reduce method
// calculate aggregate
// string manipulation
// removing duplicates
// chaining transformation
// building object for array
//Grouping the item
// counting occurrences
// flattening nested array
// finding the maximum and minimum
// summing up value.