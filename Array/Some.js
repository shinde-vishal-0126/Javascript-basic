// Array.SOME(callback(element, index, array)) :

// SOME()   method test weather at least one element in the array passed the give test or specified condition (or predicated function);
// it return ture if at least one element in the array satisfied the conditon  other wise return false
// are not mutated method(it does not modified the origonal array)
// it is itarative method it call a provided callback function once for each element in an array


// Example 
// here check if any one element are present in the array that are even number
const newarr = [1,2,3,4,5,6,7]
const even = ((element)=>{
     return element  % 2 === 0;
})
console.log(newarr.some(even));

// testing with array of  object 

const users = [
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 35 }
  ];
  const hasAdult = users.some(user => user.age >= 18);
  console.log(hasAdult); // Output: true (since Alice and Charlie are adults)


  // checking with specific value
  const array = ['apple', 'banana', 'cherry'];
const containsBanana = array.some(fruit => fruit === 'banana');
console.log(containsBanana); // Output: true (since 'banana' is in the array)


// NOTE :
// some() method will stop iterationg as soon as it fined the element that satisfied the condition 
// it not check the remaining contion once the conditon is met 


// some() method using on spare array
console.log([1, ,2].some((x)=>{
    return x === undefined
}));

console.log([1, , 1].some((ele)=>{
    return ele !== 1
}));

console.log([1, undefined, 1].some((x)=>{
     return x === undefined
}));
  
