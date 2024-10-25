// FINDLASTINDEX :

// lastFindIndex(callback(ele, index, array));
// lastFindIndex() method used to find the index of last element in the array that satisfied the provided testing function
// if no element satisfied the condition it return -1 
// here start the execution in reverse order and return first element index that satisfied the given conditon

// Example: 1
const array = [5,12,8,130,44];
const index = array.findLastIndex(element => element > 10);
console.log(index); // Output: 4


// Example: 2
const array11 = [5, 12, 8, 130, 44];
const index1 = array11.findLastIndex(element => element > 200);
console.log(index1); // Output: -1

//Example : 3
const arraylikeObj = {
    length: 3,
    0:2,
    1:7.3,
    2: 4,
    3:3 // here is ignore because its length is 3
}

const num = Array.prototype.findLastIndex.call(arraylikeObj,(ele)=>{
    return Number.isInteger(ele);
});
console.log(num)
