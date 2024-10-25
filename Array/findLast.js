// FINDLAST()

// The findLast() method in JavaScript is used to return the value of the last element in an array that satisfies the provided testing function
// findeLast(callback(ele, index, array));
// findindex() iterate an array in reverse order & return the value of the element that satisfied the Give conditon or give test function
// if no element statisfied the condition it return undefined
// Basically it return the value of first matching in given condition satisfied with array
// return first value in reverse order  & last value in forward way

// Example : 1
// const array = [5, 12, 8, 130, 44];
// const found = array.findLast(element => element > 10);
// console.log(found);

// Example: 2
// const users = [
//     { name: 'Alice', active: false },
//     { name: 'Bob', active: true },
//     { name: 'Charlie', active: false },
//     { name: 'David', active: true }
//   ];
  
//   const lastActiveUser = users.findLast(user => user.active);
  
//   console.log(lastActiveUser); // Output: { name: 'David', active: true }
  