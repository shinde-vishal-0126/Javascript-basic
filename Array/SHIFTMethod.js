//SHIFT()

// Shift() method remove the first element of an array
// shift() method return the reomved element form the array
// shift () method are the mutating method (its change the length of the origional array or modified the origonal array)
// in shift() method if the array is empty then it return the undefined 
// if the array is empty then not modified the oriogional array




const NUMBERS = [5, 3, 9, 1, 7, 2, 10, 4, 6, 8];
console.log(NUMBERS.length)  // 10
const Remove = NUMBERS.shift();
// pop method return remove element form the array 
console.log(Remove); //
// return the modified array (here change length of the origional array)
console.log(NUMBERS);
// Here return the modified length or the array
console.log(NUMBERS.length);


// in POP() method if the array is empty then it return undefined and does not modified the origional array
 const array = [];
 const removeElment =  array.shift();
 // Here return the undefined becaue it having the empty array
 console.log(removeElment);
 // Here empty array so not modified the origional array
 console.log(array);


// Example

// using shift() method in while loop 
// shift() method used in conditon inside while loop 
// shift() method in while loop remove the next elment form an array untile array is empty
const name = ['vishal','shinde', 'at','post'];
while(typeof( i = name.shift()) !== 'undefined'){
    console.log(i)
}


 // also pop() method work on array like objects


 // WHAT IS DIFFERENCES BETWEEN THE POP() AND SHIFT()

 // POP()
 // POP() method remove the last elment of an array
 // pop() method return the remove element of an array
 // in pop() method  array is empty it return undefined
 // pop() method are associated with array and remove the element form end
 //  Generally pop() method performance are fast becaue it does not require shifting element


 // SHIFT()

 // shift() method remvoe the first elment of an array
 // shift() method return remove element of an arry
 // shift() method array is empty then it return undefined
 // shift() method are associated with linked list and remove the element form front\
 // Generally shift() method performance are slower becaue need to shift all remaining element one position to the left.