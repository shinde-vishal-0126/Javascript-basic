// FILTER POLYFILL

// filter(callback(element, index, array ))
    // 1. filter method return new array
    // 2. having the callback function
    // 3 callback function having three argument 1. current element, 2. index  3. current or executable Array

    




    Array.prototype.Myfilter = function(callback, thisARg){
        if(this == null ){
            throw new TypeError('Array.prototype.MyFilter called on null or undefined')
        }
        if(typeof callback !== 'function'){
            throw new TypeError (callback + ' is not a function')
        }
        console.log(thisARg);
        // initialze over the array and apply the callback function
        let result = [];
          // iterate the array and push into the array with callback function with containing three arguments like value, index and given array
          for(let i=0;i<this.length;i++){
            console.log('index of :', i);
            console.log('current value',this[i]);
            console.log('given array', this);
            //his calls the callback with the correct this context (thisArg), the current element, the current index, and the array.
            // If the callback returns true, the element is added to the result array.
            if(callback(this[i],i,this)){
            result.push(this[i])
            }
          }
          //This returns the array of elements that passed the filter condition.
          return result;

    }
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const evenNumbers = numbers.Myfilter((num) => num % 2 === 0);
    console.log(evenNumbers)



    
// also another solution 
// Array.prototype.MyFilter = function(callback, thisArg) {
//     if (this == null) {
//         throw new TypeError('Array.prototype.MyFilter called on null or undefined');
//     }
//     if (typeof callback !== 'function') {
//         throw new TypeError(callback + ' is not a function');
//     }
    
//     // Initialize an empty array to hold the filtered elements
//     let result = [];
    
//     // Iterate over the array and apply the callback function
//     for (let i = 0; i < this.length; i++) {
//         if (i in this) {
    // Ensures the callback is called only for elements that are actually in the array (handling sparse arrays).

//             console.log('index of:', i);
//             console.log('current value:', this[i]);
//             console.log('given array:', this);
            
//             // Call the callback function with the correct context
// Calls the callback function with the current element, its index, and the array.
// If the callback returns true, the element is pushed into the result array.
//             if (callback.call(thisArg, this[i], i, this)) {
//                 result.push(this[i]);
//             }
//         }
//     }
    
//     return result;
// }

// // Test the implementation
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = numbers.MyFilter((num) => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]