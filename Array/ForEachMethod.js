// ForEach() method

// forEach(callback_function(vlaue, indes, array)=> thisArg);


// For each method used to iteration over an array in performing an action on each element of the array 

// The forEach method executes a provided function once for each array element.
// forEach Itself: The forEach method does not inherently mutate the original array.
// It is the behavior of the callback function that determines whether or not the array is mutated.
// forEach() method execute provided function once for each array element
// forEach() method return undefined 
// forEach() method not chainable.
// does not return new array (modified the origonal array)
//  forEach() method having the callBack Function and it having four arguments like value, index, array and thisArg
// forEach() iterate throug the element of array and call applied function for each element of array
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
  // forEach() method loop through or iterage the array of an element and call function
  // for each and every element
  const studentName = NAMES.forEach((ele, index, arry)=>{
    console.log('element',ele);
    console.log('arry',arry)
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
// forEach() method are mutated (i.e it change origional array not create new array)
console.log(word);
//Here forEach() return undefined
console.log(newWord);




//example 3
// for each expect asynchronous function it does not wait for promise it direactely execute
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
// ForEach() metod does not return a value 
// and return statment inside the forEach() callback does not affect the iteration or create new array 
// it simply execute the provided funtion to each array element

