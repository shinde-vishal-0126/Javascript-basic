//===================================================================================================================================================
//# filter polyfill
//===================================================================================================================================================

// array.filter(callback(element[, index[, array]])[, thisArg])
// callback: A function executed on each array element. It should return true to include the element in the new array and false otherwise.
// element: The current element being processed.
// index (optional): The index of the current element.
// array (optional): The array on which filter was called.
// thisArg (optional): Value to use as this when executing the callback.

// A new array with elements that pass the test implemented by the provided callback function.



// ployFill of filter
Array.prototype.myFilter = function(callback){
    // return new array to store the resulting value
    let temp = [];
    for(let i=0;i<this.length;i++){
        if(callback(this[i], i, this)){
            temp.push(this[i])
        }
    }
    return temp
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.myFilter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]