//FIND();

// find() method is used to find() the first element in an array that satisfied a provided testing function it return the first matching element or undefined if no element is found.

// find() having call back function
// find() method return the first element in the array that satisfies a given condition or provided testing function. 
// find((ele,index, array)=>{})
// find() method return the value of the first element in the array where predicates is true
// if the value are not satisfied with give condition it return undefined.
// found element in the array if some element in the array satisfied the given condition
// find() method are non mutating method(does not modified the original array ) (it just perform read operation on array)

//example 
const array = [5, 12, 8, 130, 44];
const find = array.find((ele, index) => {
    return ele > 10
})
// here return the first element that satisfied the give condition
console.log(find);


// example 
// if not satisfied the condition then return undefined
const notFind = array.find((ele, index) => {
    return ele = 0;
})
console.log(notFind); // undefined

//NOTE :
//  only problem with the fined method is that it return only one element to satisfied the condition
//  find() method used for the searching and filtering

//example

// for element and index condition 

var demo = [10, 20, 30, 40, 56, 78, 88, 99, 48];
const data = demo.find((ele, index) => {
    console.log("element", ele);
    console.log("index", index)
})
// here return undefined because it does not satisfied any condition
console.log(data) // undefined


// example 
const longArray = [
    5, 12, 8, 130, 44, 3, 15, 17, 21, 6, 28, 34, 55, 89, 144, 233, 377, 610,
    987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393]
const newData = longArray.find((ele, index, array) => {
    return ele < 1000
})
// it return only 5 because find method return first element that match the given condition 
// so instead of returning the multiple value it return only first occurrences of the return result
console.log(newData); // return 5 


// example array of object return  first Match in the give array object 
const fruits = [
    { name: 'Apple', quantity: 10 },
    { name: 'Banana', quantity: 5 },
    { name: 'Orange', quantity: 8 },
    { name: 'Mango', quantity: 15 },
    { name: 'Pineapple', quantity: 3 },
    { name: 'Grapes', quantity: 12 },
    { name: 'Strawberry', quantity: 6 },
    { name: 'Blueberry', quantity: 20 },
    { name: 'Peach', quantity: 7 },
    { name: 'Cherry', quantity: 25 }
];
const fdata = fruits.find(({ name }) => {
    return name === 'Orange'
})
console.log(fdata);// { name: 'Orange', quantity: 8 



// find the prime number in an array
// find the prime number in the array  and if not prime number then return undefined.
// Function to check if a number is prime
function findPrimeNumber(number, index, array) {
    // Start checking from 2
    let start = 2; // 3

    // This condition should ideally be used to loop through possible divisors from 2 up to the square root of ele
    while (start <= Math.sqrt(number)) {
        // If the number is divisible by 'start', it's not a prime number
        //Checks if ele is divisible by start with a remainder of 0
        // Checks if ele is divisible by start with a remainder of 0
        if (number % start++ < 1) {
            return false; // Return false if a divisor is found
        }
    }
    // If no divisors are found and the number is greater than 1, it's prime
    return number > 1;
}
// Example usage with an array of numbers
const numbers = [4, 6, 8, 22, 29, 35];
// Find the first prime number in the array
const firstPrime = numbers.find(findPrimeNumber);
// Output the result
console.log(firstPrime); // Output: 29



// example 5 
// using find on spare array
const arr = [0,1, , , ,5,6];
// if you not defined any condition then it by default return last element for the element and index 
const un = arr.find((element, index)=>{
    console.log(index, element);
})
// here return the undefined because we don't defined any condition
console.log(un);

const ne =arr.find((element, index)=>{
    if(element === 0){
        console.log('delete element are ', arr[5]);
        delete arr[5];
    }
    return element;
})
console.log(ne); // return 1 


//? performances consideration

// The find() method processes elements in the array from the beginning until it finds a match.
// Once a match is found, it stops and returns the element, making it more efficient than methods like filter() which process the entire array