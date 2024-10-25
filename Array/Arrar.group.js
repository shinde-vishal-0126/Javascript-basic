// ARRAY.GROUP()

//  Grouping the element of the array based on the given condition :
//  so grouping the element of the array used array.prototype.group() can used to group the element of the array 
//  using a test function that return a string that indicating the group of the current element
//  to used group you supply a callback function that is called with the current element and the optionally current index and array and return a string indicating the group of the element
//  Array.prototype.group method is a recent addition to JavaScript (ES2023) that allows for grouping the elements of an array based on a specific criterion. 
//  This method simplifies the process of grouping elements without having to manually use reduce or other methods.
//  Callback Function: This function determines the grouping key for each element.


// // example 
// let people = [
//     { name: "Alice", age: 21 },
//     { name: "Bob", age: 22 },
//     { name: "Charlie", age: 21 },
//     { name: "David", age: 22 },
//     { name: "Edward", age: 23 }
//   ];
//   let groupedByAge = people.group(person => person.age);
//   console.log(groupedByAge);
//   /* Output:
//   {
//     "21": [
//       { name: "Alice", age: 21 },
//       { name: "Charlie", age: 21 }
//     ],
//     "22": [
//       { name: "Bob", age: 22 },
//       { name: "David", age: 22 }
//     ],
//     "23": [
//       { name: "Edward", age: 23 }
//     ]
//   }
//   */
  

// // Grouping by condition 
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let groupedByOddEven = numbers.group(num => num % 2 === 0 ? 'even' : 'odd');
// console.log(groupedByOddEven);
// /* Output:
// {
//   "odd": [1, 3, 5, 7, 9],
//   "even": [2, 4, 6, 8, 10]
// }
// */

// Example 2 :
// let peep = [
//     { name: "Alice", age: 21, gender: "female" },
//     { name: "Bob", age: 22, gender: "male" },
//     { name: "Charlie", age: 21, gender: "male" },
//     { name: "David", age: 22, gender: "male" },
//     { name: "Eve", age: 23, gender: "female" }
//   ];  
//   let groupedByAgeAndGender = peep.group(person => `${person.age}-${person.gender}`);
//   console.log(groupedByAgeAndGender);
//   /* Output:
//   {
//     "21-female": [
//       { name: "Alice", age: 21, gender: "female" }
//     ],
//     "21-male": [
//       { name: "Charlie", age: 21, gender: "male" }
//     ],
//     "22-male": [
//       { name: "Bob", age: 22, gender: "male" },
//       { name: "David", age: 22, gender: "male" }
//     ],
//     "23-female": [
//       { name: "Eve", age: 23, gender: "female" }
//     ]
//   }
//   */
  
//   //Example 2:

//   const inventory = [
//     {name:'Hi', type:'vegetables'},
//     {name:'b', type:'fruit'},
//     {name:'c', type:'meat'},
//     {name:'c', type:'fruit'},
//     {name:'e', type:'meat'},
    
//   ]
//   // group method having the  callback function based on this callback function group the given array
//   const data = inventory.group(({type})=>{
//     return type;
//   })
//   console.log(data);


// NOTE :
// GROUP BY  FUNCTION IS NOT SUPPORTED IN THIS ENVIRONMENT
// SO IMPLEMENT BY USING THE REDUCE METHOD( POLYFILL OF THE GROUP FUNCTION IMPLEMENT USING REDUCE METHOD);


let peo = [
    { name: "Alice", age: 21 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 21 },
    { name: "David", age: 22 },
    { name: "Edward", age: 23 }
  ];

  let groupedByAge = peo.reduce((acc, person) => {
    if (!acc[person.age]) {
      acc[person.age] = [];
    }
    acc[person.age].push(person);
    return acc;
  }, {});
  console.log(groupedByAge);


  // Example 2 
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const groupByevenOdd = numbers.reduce((acc, num)=>{
    let key = num % 2 === 0 ? 'even' : 'odd';
    if(!acc[key]){
        acc[key] = []
    }
    acc[key].push(num);
        return acc
  },{})
  console.log(groupByevenOdd)

  // Grouping by multiple properties 

  let people2 = [
    { name: "Alice", age: 21, gender: "female" },
    { name: "Bob", age: 22, gender: "male" },
    { name: "Charlie", age: 21, gender: "male" },
    { name: "David", age: 22, gender: "male" },
    { name: "Eve", age: 23, gender: "female" }
  ];
  
  let groupedByAgeAndGender = people2.reduce((acc, person) => {
    let ageKey = person.age;
    let genderKey = person.gender;
    
    if (!acc[ageKey]) {
      acc[ageKey] = {};
    }
    if (!acc[ageKey][genderKey]) {
      acc[ageKey][genderKey] = [];
    }
    acc[ageKey][genderKey].push(person);
    return acc;
  }, {});
  
 
console.log(JSON.stringify(groupedByAgeAndGender
));