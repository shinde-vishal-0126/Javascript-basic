// REDUCE() Method


// reduce(callback_function, initial_value)
// reduce() method reduce array of the value down to just one single value
//reduce() method execute the callback function for all the element in an array.
// return value of the callback function is the accumulated resutl and it is an grgument 
// -  in the next call to the call back function

// In reduce method having two things
// 1. callback_function (Having 4 argument callback(previousValue, currentValue, currentIndex, array))
// 2. Initial value :(if initial value specified it is used as the initial value to start the accumulation)
// The first call to the callback function provides this value as an argument insted of an array value

//  NOTE :
// A value to use as the first argument to the first call of the callback. 
// If no initial value is supplied, the first element in the array 
// will be used as the initial accumulator value, and callback will start from the second element in the array.

// reduce() method used to reduce an array to a single value by applying a specified function to each element of an array.
// this method iterate each element of the array (it is itarative method itearate left to right)
// accumulating the result and it goes and return the final result as a single value.
// accumulator is basically the result of the previous computation (initially no previous computation result it is zero)

// The reduce method reduces the given array into a single value by executing reducer function
// to each and every element in the array..
//The final result running the reducer across all element of the array in single value 
// reduce method does not change the origional array insted in process the array element and return a single accumulated result based on provided callback function



//Reduce method flatten an array means convert the 3d or 2d array into a single dimensional array

// method in JavaScript is used to execute a reducer function on each element of an array,
// resulting in a single output value. 
//It is a powerful array method for aggregating data, transforming arrays, and combining elements into a single value.

const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
const newNumbers = numbers.map((element)=>{
    return element * 2
}).filter((ele)=>{
    return ele *2
}).reduce((acc,cur, index, arry)=>{
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

console.log([].reduce(getMax,1)) // 1 becuae its initial value is one

// How to work reduce method without initial value
const fc = [15,16,17,18,19];
const now =fc.reduce((accumulator,curentValue,index)=>{
    console.log(accumulator);
    console.log(curentValue)
    return accumulator + curentValue
})
console.log(now);

// How to work reduce method with an initial value
const fs = [15,16,17,18,18]
const data = fs.reduce((acc, current)=>{
    return acc + current
},10)
console.log(data);

// using reduce with spare array
// reudce skip missing element in the spare array but does not skip undefined value

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
// Flattern an array refers to the process of converting a nested into single diamentioanl

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