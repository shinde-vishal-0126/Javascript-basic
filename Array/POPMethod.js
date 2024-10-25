// POP()

// pop() method remove the last element of the array
// pop() method return the remove element from an array
// pop() method are mutating method (i.e it change the origional array or length of the array rather then creating new array)
// if array is Empty undefined is returned  and array is not modified 


const NUMBERS = [5, 3, 9, 1, 7, 2, 10, 4, 6, 8];
console.log(NUMBERS.length)  // 10
const Remove = NUMBERS.pop();
// pop method return remove element form the array 
console.log(Remove); //
// return the modified array (here change length of the origional array)
console.log(NUMBERS);
// Here return the modified length or the array
console.log(NUMBERS.length);


// in POP() method if the array is empty then it return undefined and does not modified the origional array
 const array = [];
 const removeElment =  array.pop();
 // Here return the undefined becaue it having the empty array
 console.log(removeElment);
 // Here empty array so not modified the origional array
 console.log(array);


 // also pop() method work on array like objects