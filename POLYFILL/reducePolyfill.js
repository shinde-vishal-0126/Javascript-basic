//===================================================================================================================================================
//# reduce method polyfill
//===================================================================================================================================================
// The reduce method in JavaScript is a powerful array method that allows you to reduce an array to a single value by iteratively applying a callback function
//  It can be used for various operations such as summing numbers, flattening arrays, or accumulating values
// array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

// - The reduce() method in JavaScript is used to reduce an array to a single value by executing a callback function on each element. It accumulates results from each iteration and returns a single value as final value.
// callback: A function executed on each element in the array. It receives four arguments:
// accumulator: The accumulated value from the previous iteration or the initial value (if provided).
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element being processed.
// array (optional): The array that reduce was called on.
// initialValue (optional): A value to initialize the accumulator. If not provided, the first element of the array will be used as the initial accumulator, and the iteration will start from the second element.

//return the  final accumulated value after processing all array elements.

Array.prototype.myReduce = function(callback , initialValue){
    var accumulator = initialValue !== undefined ? initialValue : this[0];
    var startIndex = initialValue !== undefined ? 0 : 1
    for(let i=startIndex;i<this.length ;i++){
        // here if you not give initial value to the accumulator then it give first element value as default value and current element are 2 element
        // If accumulator is defined  the callback function is called with the current accumulator, the current element this[i], the index i, and the array itself this.
        accumulator = callback(accumulator, this[i], i, this)
        //If accumulator is undefined (which happens when no initialValue is provided), the first element of the array (this[i]) is set as the accumulator, and no callback is invoked for the first element.
    }
    return accumulator
}
const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.myReduce((accumulator, currentValue) => accumulator + currentValue, 0);
const sum = numbers.myReduce((accumulator, currentValue) => accumulator + currentValue); // here i have remove the initial value the it tack first element as initial value
console.log(sum); // Output: 15
