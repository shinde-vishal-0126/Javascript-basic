// FILL() :

// fill() metod change all element in an array to static value form start index to and end index 
// fill(value, start, end);
// by default start index 0 and end index is array.length
// it return modified array with fill static value

// Example : 1
const arr1 = [1,2,3,4];
const new1 = arr1.fill(3,1);
// it return the modified array
console.log(new1);
// it modified the origional array
console.log(arr1);

// Example : 2
console.log(arr1.fill(5,1));

// Example: 3
// fill method fills empty slots in spares array with value as well
const temp  = Array(5).fill('girl',0);
console.log(temp);


// Example : 4
console.log([1,2,3].fill(4,-3,-2));

// Example : 5
// if you used fill method with NaN does not happend anything with array
console.log([1,4,5].fill(4, NaN, NaN));

// Example : 6
// if the value is an object each sloat in the array will refrence that array
const arr2 = Array(3).fill({});([{},{},{}]);
console.log(arr2);
arr2[0].welcome = 'Welcome';
console.log(arr2)


// in fill method callback function is invoked only for array indexes which have assigned value it not invoked for empty slots in spare arry