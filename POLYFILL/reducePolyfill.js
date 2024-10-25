// REDUCE POLYFILL 

// reduce(callback(accumulator, currentValue, index, array), initialValue);

    // having a callback funtion with  4 arguments accumulator, current value , index , array
    // does not modified origional array insted process the array element and return single acculated result based on provoded callback function


    Array.prototype.myReduce = function(callback, initialValue){
        if(this == null){
            throw new TypeError ('myReduce method call on null or undefined')
        }
        if(typeof callback !== 'function'){
            throw new TypeError(callback + 'is not a function');
        }

        // initialize the variable 
        let accumulator;
        let startIndex = 0

        // if initialValue is provided used it as the accumulator
        // otherwise use the first non-empty element as the accumulator
        if(arguments.length > 1){
            accumulator = initialValue;
        }
        else{
            // find the first non-empty element in the array 
            while(startIndex <  this.length && !(startIndex in this)){
                startIndex++
            }
            // if the array is empty or contains only empty slot throw an error
            if(startIndex >= this.length){
                throw new TypeError('reduce of empty array with no iniital value')
            }
            // used the first non-empty element as the initial accumulator value
            accumulator = this[startIndex]
        }

        // iterat over the array and apply the callback functon
        for(let i=startIndex;i<this.length;i++){
            if(i in this){
                accumulator = callback(accumulator, this[i],i,this)
            }
        }
        return accumulator;
    }

    const numbers = [1, 2, 3, 4];
const sum = numbers.myReduce((acc, currentValue) => acc + currentValue, 0);
console.log(sum); // Output: 10