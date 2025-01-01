// REDUCERIGHT(CALLBACK(ACCUMULATOR, CURRENTVALUE, INDEX, ARRAY),initial value)

//reduceRight()
// The reduceRight() method is a function in JavaScript that is used on arrays to apply a reducer function to each element in the array, but in reverse order. It is similar to reduce(), but it starts processing the array from the rightmost element (the last element) and works towards the leftmost element (the first element).
// reduceRight() method applies a function against an accumulator and each value of the array (from left to right) to reduce it to single value
// this method is very similar to the reduce method but main difference is that :
// - reduceRight() process the array element right to left and  reduce method process the element left to right

// about initial value :
// a value  to use as the first argument to the first call of the callback if no initial value is supplied the last element in the array will be used as the initial accumulator value
// and iteration will start from the second-to-last element


// Example 
const array = [1, 2, 3, 4];
const sum = array.reduceRight((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); // Output: 10
// n the example, reduceRight() starts from the rightmost element (4) and accumulates the sum as it moves left:

// First iteration: accumulator = 0, currentValue = 4 → accumulator = 4
// Second iteration: accumulator = 4, currentValue = 3 → accumulator = 7
// Third iteration: accumulator = 7, currentValue = 2 → accumulator = 9
// Fourth iteration: accumulator = 9, currentValue = 1 → accumulator = 10


// Example 2
const nestedArray = [[0, 1], [2, 3], [4, 5]];
const flatArray = nestedArray.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue), []);
console.log(flatArray); // Output: [4, 5, 2, 3, 0, 1]


// example 3
const words = ['world', 'hello'];
const sentence = words.reduceRight((accumulator, currentValue) => accumulator + ' ' + currentValue);
console.log(sentence); // Output: "hello world"


// using reduceRight() with spare array
// NOTE : reduceRight() method skip the spae array 
console.log([1,2,3, ,4,5,6].reduceRight((a,b)=>{
    return a + b
}))

// BUt reduceRight() method does not skip the undefined method()
console.log([1,2 , undefined, 5].reduceRight((a, b)=>{
    return a + b
})); // here return NaN because here undefined (so reduce right method does not skip the undefined ) 


// WHAT IS DIFFERENCE BETWEEN REDUCERIGHT() AND REDUCE () METHOD

// REDUCERIGHT() :
// reduceRight(): Processes the array from the last element to the first element
// reduceRight(): Use when the order of processing needs to be reversed, such as evaluating expressions in reverse order or reversing strings/arrays.
// / IF THE INITIAL VALUE NOT PROVIDED THEN :
// reduceRight(): The LAST element of the array is used as the initial value of the accumulator, and the reduction starts with the second-to-last element.


const nestedArray2 = [[0, 1], [2, 3], [4, 5]];
const flatArray2 = nestedArray2.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue), []);
console.log(flatArray2); // Output: [4, 5, 2, 3, 0, 1]


// REDUCE() :
// reduce(): Processes the array from the first element to the last element.
// reduce(): Use when you need to process elements in the natural order of the array.
// IF THE INITIAL VALUE NOT PROVIDED THEN :
// reduce(): The first element of the array is used as the initial value of the accumulator, and the reduction starts with the second element.

const nestedArray1 = [[0, 1], [2, 3], [4, 5]];
const flatArray1 = nestedArray1.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
console.log(flatArray1); // Output: [0, 1, 2, 3, 4, 5]
