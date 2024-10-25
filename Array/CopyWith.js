// COPYWITHIN();

// Copywithin(target, start, end);
// copy within method used to shallow copy part of an array to another lacation within same array
// withiout modifing its length
// it modified the origional array 
//i.e copywithin method return it without modifying it length

let arr = [1, 2, 3, 4, 5,6];
const news = arr.copyWithin(0,3);
// return modified array
console.log(news);
// it return origional arry
console.log(arr);


let arr1 = [1, 2, 3, 4, 5];
arr.copyWithin(0, 1, 3); // [2, 3, 3, 4, 5]


//example
// here copy or move all the element to the right by two position
console.log([1,2,3,4,5].copyWithin(2));//[ 1, 2, 1, 2, 3 ]  

// copyWithin() method is mutating method it does not alter the length of this but it will change the 
// content of this and create new properties or delet existing prpoery
console.log([1,2,3,4,5].copyWithin(-2,-3,-1));//[ 1, 2, 3, 3, 4 ]  


//  coptyWitin() propagate empty slots
console.log([1, , 3].copyWithin(2,1,2)); //[ 1, <2 empty items> ]