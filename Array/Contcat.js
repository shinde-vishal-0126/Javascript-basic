// concat() 
// concat method used to merge two or more array
// Does not modified the origional array
// return new array

const array3 = ['a','b','v'];
const array2 = ['d','e','f'];
newArray = array3.concat(array2);
// return new array
console.log(newArray);
console.log('Does not modified the origona arry', array3);
console.log(array2);

// Concataneating value to an array
const letters = ['a','b','c'];
const newConcat = letters.concat(1,[2,3]);
console.log(newConcat);

// concatenationg nesting array
const abc =[[1]];
const abc2 = [2,[3]];
const abcd = abc.concat(abc2);
console.log(abcd); // return new array
// push method return length of the new array or modified array
const newArray1 = abc[0].push(4);
console.log('newArray',newArray1);
const de = abc.concat(abc2);
console.log(de);

// concatenating on spare array
const array123 = ['a','b','c', , 2];
const concatArray = array123.concat([4,5,[6]]);
console.log(concatArray);
const concatArray1 = array123.concat(3,[,[5],]);
console.log(concatArray1);