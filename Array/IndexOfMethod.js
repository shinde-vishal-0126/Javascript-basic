// indexOF() method

// indexOF(searchElement, formIndex)

// indexOf() method return the first index at which given element can be found in the array
// indexOf() return -1 if the element are not present
// (i.e return the first (latest index) index of an element in the array)
// indexOf() metod searching in forward direction
// indexOf() method show only the first matching element in a give array (if double element present it also show the first matching)


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
  // if you want to start searching form the perticular element you have to used the 2nd paramter of the indexof() method
  const name = NAMES.indexOf("Alice",5);
  console.log(name);


  // example 3 
  const array = [2,9,9];
  const newarray = array.indexOf(2);
  console.log(newarray);


  //example 4 
  // here return -1 because 2 are not present in -1 index positon
  const a = array.indexOf(2, -1)
  console.log(a) // -2


  //example 4 
  // here return zero becaue 2 present at index -3
  const b = array.indexOf(2,-3);
  console.log(b) // 0


  // example 5 
  // you can not used indexOf() for search NAN so its return -1 
  const arr = [2,NaN,4];
  const c = arr.indexOf(NaN);
  console.log(c); // -1



  // example 6 
  // you can not used indexOf() to search for empty slot in spars array
  const app = [2, , 4];
  // here return -1 because index of not used for the search empty slot in array
  const d = app.indexOf(undefined);
  console.log(d); // -1


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