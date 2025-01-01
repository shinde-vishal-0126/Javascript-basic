// ForEach() method

// array.forEach(callback_function(currentValue, index, array)=> thisArg);


// array : Thea array on which the foreach method called
// callback: a function that will be called once for each element in array
// currentValue : the current element being processed in the array.
// index :the index of the current element being processed.
// array : the array foreach was called upon
//  this value:(optional): a value to use as this when executing the callback function.
// the forEach() method does not transform an array. It is used for iterating over the array and executing a function on each element, but it does not create a new array or modify the original array
// It is used for side effects (like logging, updating external variables, etc.) but not for transforming the array.
// For each method used to iteration over an array in performing an action on each element of the array 
// The forEach method executes a provided function once for each array element of the array.the provided function may be perform any kind of operation on the give array element.
// forEach Itself: The forEach method does not inherently mutate the original array.
    // means that the forEach method in JavaScript iterates over the elements of an array but does not modify the array itself unless you explicitly perform a mutation inside the callback function.
    // No inherent mutation:
    const numbers = [1, 2, 3];
    numbers.forEach(num => console.log(num));
    console.log(numbers); // Output: [1, 2, 3]

    // Explicit mutation possible:
    // If you explicitly modify the elements of the array within the forEach callback, the array will change. This happens because arrays are mutable objects in JavaScript.
    const numbers1 = [1, 2, 3];
    numbers.forEach((num, index, arr) => {
    arr[index] = num * 2; // Explicitly modifying the array
    });
    console.log(number1); // Output: [2, 4, 6]


// It is the behavior of the callback function that determines whether or not the array is mutated.
// forEach() method execute provided function once for each array element
// forEach() method return undefined 
// forEach() method not chainable.
// does not return new array (modified the original array)
//  forEach() method having the callBack Function and it having four arguments like value, index, array and thisArg
// forEach() iterate through the element of array and call applied function for each element of array
// It is typically used for performing side effects such as printing value or updating existing value within the original array 


const NAMES = [
    "Alice",
    "Bob",
    "Charlie",
    "Diana",
    "Edward",
    "Fiona",
    "George",
    "Hannah",
    "Ian",
    "Julia"
  ];

  // example
  // forEach() method loop through or iterate the array of an element and call function
  // for each and every element
  const studentName = NAMES.forEach((ele, index, array)=>{
    console.log('element',ele);
    console.log('array',array)
  })
  // forEach() method return undefined 
  console.log(studentName);//undefined



  // example 2
  // ForEach method does not make the copy of the array before iterating 
  const word = ['one','two','three']
 const newWord = word.forEach((ele)=>{
    if(ele== 'one'){
        // shift used to removed the first element of an array
        word.shift()
    }
  }
)
// forEach() method are mutated (i.e it change original array not create new array)
console.log(word);
//Here forEach() return undefined
console.log(newWord);




//example 3
// for each expect asynchronous function it does not wait for promise it directly execute
const rating = [5,4,5];
let sum =0
// const sumFunction = async(a,b) => a+b
const sumFunction = ((a,b)=>{
    return a +b
})
rating.forEach(async(ele,index)=>{
sum = await sumFunction(sum, ele)
})
console.log(sum); // 0



// example 
 let scores = [85, 92, 78, 95, 88];
let totalScore = 0;

scores.forEach(score => {
    totalScore += score;
});
console.log(`Total score: ${totalScore}`);


//NOTE :
// ForEach() meted does not return a value 
// and return statement inside the forEach() callback does not affect the iteration or create new array 
// it simply execute the provided function to each array element

// Unlike methods like map or filter, which return new arrays and leave the original array untouched, 
// forEach does not create a new array. It is meant for executing a function on each array element without returning a new array.
// In summary, forEach itself does not change the array. If the array changes during the iteration, it’s due to explicit actions in the callback function.



//? when we used forEach method() ?
// You would use the forEach() method when you need to perform an operation on each element of an array without the need to return a new array. It's typically used for operations that produce side effects, like logging, updating external variables, or modifying the original array.


//? why forEach method are not chainable :
// forEach method are nor chainable because when you iterate over and array by using forEach method with give condition on each and every element it does not return anything instead of that it modified original array so forEach method return undefined that why this method are not chainable