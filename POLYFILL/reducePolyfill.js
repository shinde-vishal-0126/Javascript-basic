// 
// The reduce method in JavaScript is a powerful array method that allows you to reduce an array to a single value by iteratively applying a callback function
//  It can be used for various operations such as summing numbers, flattening arrays, or accumulating values


// array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

// callback: A function executed on each element in the array. It receives four arguments:
// accumulator: The accumulated value from the previous iteration or the initial value (if provided).
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element being processed.
// array (optional): The array that reduce was called on.
// initialValue (optional): A value to initialize the accumulator. If not provided, the first element of the array will be used as the initial accumulator, and the iteration will start from the second element.

//return the  final accumulated value after processing all array elements.




Array.prototype.myReduce = function(callback , initialValue){
    var accumulator = initialValue;
    for(let i=0;i<this.length ;i++){
        // here if you not give initial value to the accumulator then it give first element value as default value and current element are 2 element
        accumulator = accumulator ? callback(accumulator, this[i], i, this) : this[i]
    }
    return accumulator
}

const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.myReduce((accumulator, currentValue) => accumulator + currentValue, 0);
const sum = numbers.myReduce((accumulator, currentValue) => accumulator + currentValue); // here i have remove the initial value the it tack first element as initial value
console.log(sum); // Output: 15