// POLYFILL OF MAP 

// map(callback(element, index, array))

// 1. map()  function having the callback function 
// 2. map()  function return new array
// 3. callback function having three argument like  current element , index , and give array

// polyfill of map 

Array.prototype.MyMap = function(callback,thisARg){

    if (this == null) {
        throw new TypeError('Array.prototype.MyFilter called on null or undefined');
    }

    // Check if the callback is a function
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }


    // here defined empty array (because of  map function return new array)
    let temp = []
    //loops through each element of the array.
    // iterate the array and push into the array with callback function with containing three arguments like value, index and given array
    for(let i=0;i< this.length;i++){
        console.log('index of :', i);
        console.log('current value',this[i]);
        console.log('given array', this);
        // temp.push(callback(this[i], i, this)); calls the callback function with the 
        // - current element, its index, and the original array as arguments. The result is then pushed into the temp array.
        temp.push(callback(this[i], i, this))
    }
    return temp

}

const arr = [1,2,3,4];
const multiply = arr.MyMap((ele , i, arr)=>{
    return ele * 2
})
console.log(multiply);

