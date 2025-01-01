// FINDINDEX()

//findIndex(callback_function, thisArgc) 
// callback: A function that is called on each element of the array. The function takes three arguments:

// element: The current element being processed in the array.
// index: The index of the current element being processed in the array.
// array: The array that findIndex() is being called on.
// thisArg (optional): A value to use as this when executing the callback function.

// FindIndex() method of TypeArray instances return the index of the first element in the array that satisfied the provided testing function 
// if no element satisfy the testing function -1 is returned.
// Return the index of the first element in the array where predicate is true
// i.e findIndex() method return index of the first element in the array where the give condition is satisfied
// it return the index of the element not return the element of the array
// if condition is not satisfied it return the -1

const longArray = [
    5, 12,2584, 8, 130, 44, 3, 15, 17, 21, 6, 28, 34, 55, 89, 144, 233, 377, 610,
    987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393]
const index = longArray.findIndex((ele, index,  array)=>{

    console.log('element', ele)
    console.log('index', index);
    console.log(array);
})
console.log(index); // here return =1 because we don't have any condition

// example 2 
// Here we have to give condition return those element are Grater then 8  here two element are grater then
// but it return the index value of the 12  element is 1 
// it return the index value of  the first element which satisfied the give condition
const data = longArray.findIndex((element, index)=>{
     return element > 8
})
console.log("data", data); // return 1 so one it is index 


// find the index of the prime number in  an array
function isPrime(element){
    //  4 % 2 === 0 || 4 < 2
    // This condition checks if the number is either even (i.e., divisible by 2)
    // or less than 2. Numbers less than 2 and even numbers (other than 2 itself) are not prime. return false
    if(element % 2 === 0 || element < 2){
        // then return false
        return false
    }
    // if element if Grater then element 
       // This for loop iterates over odd numbers starting from 3 up to the square root of element
    for(let factor = 3 ; factor < Math.sqrt(element); factor+=2){
        // Inside the loop, it checks if element is divisible by factor. If it is, element is not a prime number.
        if(element % factor === 0)
            return false 
    }
    return true
    // return true indicate number it prime 

}
console.log([4,6,7,9,12].findIndex(isPrime)); // return the  index two for the prime number .


// using findindex an non-array object 

const arrayLike = {
    length : 3,
    "-1" : 0.1,
    0 : 2,
    1 : 7.3,
    2 : 4
}

console.log(Array.prototype.findIndex.call(arrayLike,(x)=>{
    return !Number.isInteger(x)  // return index of this result 1 
}))


// DIFFERENCES BETWEEN FIND() AND FINDINDEX() METHOD 

// FIND() :
//  Find method return the first element of the array that satisfied the given condition 
// if not found the element it return undefined


// FINDINDEX()
// Findindex() method return the index of the first  element in the array which satisfied the condition
// if not found element index in given array in return -1 


// Usage:
// Finding an element with a condition: findIndex() is useful when you need the index of an element that meets a specific condition rather than the element itself.
// Complex conditions: You can use complex conditions or perform checks on object properties.


// Notes:
// findIndex() stops searching once it finds the first element that satisfies the condition.