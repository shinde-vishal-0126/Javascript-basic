//SHIFT()

// Shift() method remove the first element of an array
// shift() method return the removed element form the array 
// shift () method are the mutating method (its change the length of the original array or modified the original array)
// in shift() method if the array is empty then it return the undefined 
// if the array is empty then not modified the original array




const NUMBERS = [5, 3, 9, 1, 7, 2, 10, 4, 6, 8];
console.log(NUMBERS.length)  // 10
const Remove = NUMBERS.shift();
// pop method return remove element form the array 
console.log(Remove); //
// return the modified array (here change length of the original array)
console.log(NUMBERS);
// Here return the modified length or the array
console.log(NUMBERS.length);


// in POP() method if the array is empty then it return undefined and does not modified the original array
 const array = [];
 const removeElement =  array.shift();
 // Here return the undefined became it having the empty array
 console.log(removeElement);
 // Here empty array so not modified the original array
 console.log(array);


// Example

// using shift() method in while loop 
// shift() method used in condition inside while loop 
// shift() method in while loop remove the next element form an array until array is empty
const name = ['vishal','shinde', 'at','post'];
while(typeof( i = name.shift()) !== 'undefined'){
    console.log(i)
}


// which method pop() or shift() are fast as performances wise for removing the element ?
//  pop method are fast as compare to the shift'
// because by using pop method you have to remove the last element of the array so there is no need to shifting the element 
// but using shift() method you have to remove the starting element of the array so you need to shift all remaining element one position to the left.


// pop () method are associate with objet ?
// so pop method associated with the array objet 

// shift() method are associated with which objet ?
// shift() method are associated with linked list .

 // also pop() method work on array like objects


 // WHAT IS DIFFERENCES BETWEEN THE POP() AND SHIFT()

 // POP()
 // POP() method remove the last element of an array
 // pop() method return the remove element of an array
 // in pop() method  array is empty it return undefined
 // pop() method are associated with array and remove the element form end
 //  Generally pop() method performance are fast because it does not require shifting element


 // SHIFT()

 // shift() method remove the first element of an array
 // shift() method return remove element of an array
 // shift() method array is empty then it return undefined
 // shift() method are associated with linked list and remove the element form front\
 // Generally shift() method performance are slower because need to shift all remaining element one position to the left.