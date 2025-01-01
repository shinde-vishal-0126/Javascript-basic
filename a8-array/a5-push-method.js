// HOW TO ADD INSERT, REPLACE, AND DELETE ELEMENT INTO THE ARRAY 

//PUSH()
// Push() method add specified element at the end of the array 
// Push() return the new Length of the array
// (i.e append value to array)
// using Push() method you have to add one or more element at end of the array 
// push() method are mutating method (i.e they are modified the original array rather then creating new array)
// push method mutating method because when you push element it add new element at the end and it return new array length instead of creating new array . i.e it modified the original array or modified original array with new element and new length


const num = [5, 3, 9, 1, 7, 2, 10, 4, 6, 8];
const newNum = num.push(30);
// Here push method return new length of array and add give element at the end of the array
console.log(newNum);
console.log(num);
// also using push method you have to push multiple value
num.push(40,50,60);
console.log(num);

// also using spread operator you have to push one array into another array
const num1 = [5, 3, 9, 1, 7, 2, 10, 4, 6, 8];
const num2 = [11,12,13,14,15];
const num3 = num1.push([...num2]);
const num4= num1.push(...num2);
console.log(num3);
console.log(num4);
console.log(num1);

num1.push(undefined);
console.log(num1)
// This adds the value undefined to the end of the array. The array becomes [5, 3, 9, 1, 7, 2, 10, 4, 6, 8, 30, undefined].

console.log(num1.push(null));
// This adds the value null to the end of the array and logs the new length of the array, which is now 13.

// also call push method on nonArray object using the call method
// like Array.prototype.push.call(arraylinked, 1,2 ,2)
