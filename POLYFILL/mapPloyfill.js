//===================================================================================================================================================
//# Map polyfill
//===================================================================================================================================================
// map having call back function with 3 argument first is currentEle, index and third one is array 
// map((ele,index, arr)=>{
    // console.log() 
// })
Array.prototype.myMap = function(callback){
    // mep method return new array to store resulting element then create empty arry 
    let temp = [];
    for(let i=0;i<this.length;i++){
        temp.push(callback(this[i], i , this))
    }
    return temp;
}
const num  = [1,2,3,4,5,6]
const mul = num.myMap ((ele, index, arr)=>{
    return ele * ele
})
console.log(mul)


//===================================================================================================================================================
//? what is differences between the map() and filter
//===================================================================================================================================================

// - map () :
// map return each and every value and modified according to Given callback condition ( i.e it is transform and array based on the given test function)
// map(): Used to create a new array by transforming each element of the original array based on the function provided.
// map(): Always returns a new array of the same length as the original array, but the values may be modified based on the transformation.
// map(): The callback function passed to map() takes each element and transforms it, returning a new value for that element.
//map(): Always transforms each element and returns a modified version of the original array, without changing the original array.

// - filter() : 
// filter method only return  those value which satisfied the given condition (or give test function ) of the callback function not each and every element (i.e return only those element that satisfied the given condition)
// filter(): Used to create a new array containing only the elements from the original array that satisfy the condition defined in the callback function.
// filter(): Returns a new array, but the length of the resulting array can be shorter because only elements that meet the condition are included.
// filter(): The callback function passed to filter() checks each element and returns true or false. Only elements where the callback returns true will be included in the new array.
// filter(): Does not modify elements; it only selects those elements that pass the test.




// also used this approach

Array.prototype.myMap = function(callback,thisArg){
    if(typeof callback !== 'function'){
         throw new Error(callback + "not a function ");    
    }
    let temp = [];
    for(let i=0;i<this.length;i++){
        if(i in this){
          temp.push(callback.call(thisArg, this[i], i, this));
           
        }
    }
    return temp;
}

let arr = [1,2,3,4,5,6];

const newArr = arr.myMap((ele, index, arr)=>{
    return ele * 2;
})

console.log(newArr)


// ? what is used of thisArg in map() filter() and forEach() method.?
// thisArg is an optional parameter in JavaScript array methods like map(), forEach(), filter(), etc. It allows you to specify a custom this value for the callback function.
// callback → Function to test each element.
// thisArg (optional) → Value used as this inside callback.
// If thisArg is provided, the callback function uses it as this.
// If thisArg is not provided, this defaults to undefined (or window in non-strict mode).
// thisArg sets the this context inside the callback function.