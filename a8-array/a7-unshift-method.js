// UNSHIFT()

// Unshift() method insert new one or more element at the start of an array 
// and return new length of the array
// (i.e insert the give value at the beginning of the array)
// unshift() are mutating method (it also modified the original array rather then creating new array)



const num = [5, 3, 9, 1, 7, 2, 10, 4, 6, 8];
const newNum = num.unshift(30);
// Here push method return new length of array and add give element at the end of the array
console.log(newNum);
console.log(num);
// also using push method you have to push multiple value
num.unshift(40,50,60);
console.log(num);

// also using spread operator you have to push one array into another array
const num1 = [5, 3, 9, 1, 7, 2, 10, 4, 6, 8];
const num2 = [11,12,13,14,15];
const num3 = num1.unshift([...num2]);
const num4= num1.unshift(...num2);
console.log(num3);
console.log(num4);
console.log(num1);

num1.unshift(undefined);

num1.unshift(null);
console.log(num1);



// WHAT IS DIFFERENCES BETWEEN THE PUSH AND UNSHIFT METHOD 

// PUSH()
// push method add one or more element at the end of the array 
// and return new  length of the array


// UNSHIFT ()
// Unshift() method add one or more element at start of the array (beginning of the array)
// also return the new length of the array 