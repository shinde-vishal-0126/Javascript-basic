// indexOF() method

// indexOF(searchElement, formIndex)

// indexOf() method return the first index at which given element can be found in the array
// indexOf() return -1 if the element are not present
// (i.e return the first (latest index) index of an element in the array)
// indexOf() method searching in forward direction
// indexOf() method show only the first matching element in a give array (if double element present it also show the first matching)
// indexof() method start searching form the -ve index but using different approach defined in following 


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
    "Julia",
    "Alice" // Duplicate name
  ];
  // if element present then return the index of first occurrences of the element in the array
  const data = NAMES.indexOf("Alice"); // 0
  console.log(data);
  //if element not present then indexOf() method return -1 
  const data1 = NAMES.indexOf("vishal"); // -1
  console.log(data1);

  // example 2
  // if you want to start searching form the perticular element you have to used the 2nd parameter of the indexof() method
  const name = NAMES.indexOf("Alice",5);
  console.log(name);


  // example 3 
  const array = [2,9,9];
  const newArray = array.indexOf(2);
  console.log(newArray); // 0


  
  //? No, the indexOf() method in JavaScript does  work with negative indices. The indexOf() method always starts searching from the beginning of the array (index 0) or a specified positive index if provided.
  // if you give -ve index then fromIndex (optional): The index to start the search. Defaults to 0. If negative, it is treated as array.length + fromIndex, but the search still proceeds forward.

  // Behavior with Negative fromIndex:
// If you pass a negative value for fromIndex, the starting position is calculated as array.length + fromIndex.
//  However, the search will only proceed forward from this calculated position, not
let arrr = [10, 20, 30, 40, 50];
// Searching for 30 starting from -3 (array.length + (-3) = 5 - 3 = 2)
console.log(arrr.indexOf(30, -3)); // Output: 2 (index of 30)
// Searching for 10 starting from -3
console.log(arrr.indexOf(10, -3)); // Output: -1 (10 is not found from index 2 onward)


// Negative fromIndex adjusts the starting point but does not reverse the search direction.
// If the adjusted fromIndex is out of bounds (e.g., less than 0), the search starts at 0.

  //example 4 
  // here return -1 because 2 are not present in -1 index position
  const a = array.indexOf(2, -1)
  console.log(a) // -1


  //example 4 
  const b = array.indexOf(2,-3);
  console.log(b) // 0


  // example 5 
  // you can not used indexOf() for search NAN so its return -1 
  const arr = [2,NaN,4];
  const c = arr.indexOf(NaN);
  console.log(c); // -1



  // example 6 
  // you can not used indexOf() to search for empty slot in spars array
  const app = [2, , 4 , , null,''];
  // here return -1 because index of not used for the search empty slot in array 
  // indexof() method are not able to find the empty slot in array it return -1
  const dd = app.index( )
  console.log(dd) // -1


  // also index of method are not able to find undefined in array so it return -1
  const d = app.indexOf(undefined);
  console.log(d); // -1

  // indexOf() method return index of the null value
  const d2 = app.indexOf(null);
  console.log(d1); // 4


  // indexOf() method return the index of the empty string
  const d3 = app.indexOf('');
  console.log(d3)// 5


 
  ; // -1


  // example 7
  // find the occurrences of an element in array
  const stdName = [
    "Alice",
    "Bob",
    "Charlie",
    "Diana",
    "Edward",
    "Fiona",
    "George",
    "Hannah",
    "Ian",
    "Julia",
    "Alice", 
    "Bob",
    "Alice"

  ];

  let occurrences = [];
  count =0
  let ele = "Alice"
  let index = stdName.indexOf(ele);
  while(index !== -1){
    occurrences.push(index);
    index = stdName.indexOf(ele, index+1)
    count ++;
  }
  console.log("occurrences", occurrences) //occurrences [ 0, 10, 12 ]
  console.log(count) //3


  // indexOf() method what exactly work with -ve index 
  // if you give negative index then it calculate the new starting value based on the following formula 
  // return new starting element position =array.length + formIndex(Given negative index) 
  // based on that new starting element position  we start the find out the given element in forward direction
  let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// Searching for "cherry" starting from index -3
// Negative index -3 is converted to array.length + (-3) = 5 - 3 = 2
// The search starts at index 2 (which is "cherry") and moves forward
console.log(fruits.indexOf("cherry", -3)); // Output: 2

// Searching for "apple" starting from index -3
// Negative index -3 is converted to array.length + (-3) = 5 - 3 = 2
// The search starts at index 2 ("cherry") and moves forward, skipping "apple"
console.log(fruits.indexOf("apple", -3)); // Output: -1 (not found)

// Searching for "banana" with a very negative index
// Negative index -10 is converted to array.length + (-10) = 5 - 10 = -5
// Since the result is less than 0, the search starts from index 0
console.log(fruits.indexOf("banana", -10)); // Output: 1

// Searching for "date" with no fromIndex provided
// When no fromIndex is specified, the search starts from index 0
console.log(fruits.indexOf("date")); // Output: 3
