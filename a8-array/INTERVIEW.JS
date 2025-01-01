

const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];

// 1. How to check if an array contain a certain item or not
// includes() method check if the given item present or not if present return true otherwise false
const data = fruits.includes('Apple'); // true
console.log(data);

// ANOTHER WAY USING INDEXOF METHOD()
const res = fruits.indexOf('Banana') !== -1 ;
console.log(res);  // true



// 2. How fo find the index of any item in the given array
const index = fruits.indexOf('Apple');
console.log(index); // 0



// 3. How to create an string of an array
const str = fruits.join();
console.log(str); // Apple,Banana,Cherry,Date,Elderberry,Fig,Grape


// 4. how to access the item by its index 
// using square Bracket and inside that  index number
const item = fruits[2];
console.log( item); // Cherry


// 5 how to append item into array
const append = fruits.push('blackberry');
// return new length or modified array
console.log(append);
console.log(fruits);


// 6. How to remov the last element of the array
 const lastElement = fruits.pop();
 console.log(lastElement); // balckberry

 // 7.  How to remove multiple element of an array
 // by using the splice() method we have to remove the multple elemnt form the array
  const remveelemet = fruits.splice(2,2);
  console.log('removeElement', remveelemet);// return the array  contatining the deleted element // removeElement [ 'Cherry', 'Date' ]
  console.log('Origional array', fruits);// Origional array [ 'Apple', 'Banana', 'Elderberry', 'Fig', 'Grape' ]

// 8. How to truncate an array down to just a first n times
const truncate = fruits.splice(2,2);
console.log('Truncate', truncate); // Truncate [ 'Elderberry', 'Fig' ]
console.log(fruits); // [ 'Apple', 'Banana', 'Grape' ]

// 9. How to remove first item of an array ?
// shift() method used to remove the first element of the given array
const removeFirst = fruits.shift();
console.log('removeFirstElement', removeFirst); // removeFirstElement Apple

// 10 how to remove the multiple element of an array form the begging 
let studentNames = ["Alice", "Bob", "Charlie", "David", "Eva"];
const removeMultiple = studentNames.splice(0,3);
console.log('removeMultiple', removeMultiple); // removeMultiple [ 'Alice', 'Bob', 'Charlie' ]


// 11. how to add the new element beginning fo the array ?
let student = ["Alice", "Bob", "Charlie", "David", "Eva"];
// so unshift() method return the new Length of the array 
let addName = student.unshift('vishal'); // removeMultiple [ 'Alice', 'Bob', 'Charlie' ]
console.log('addedname : ', addName);// addedname :  6


// 12. How to remove the single or perticular element of an arry
// here we have to add strude array :
console.log("student", student); // student [ 'vishal', 'Alice', 'Bob', 'Charlie', 'David', 'Eva' ]
let removIndex = student.indexOf('vishal');
console.log('removeIndex', removIndex)// removeIndex 0
const remove = student.splice(removIndex, 1);
console.log('remvoe data', remove) // remvoe data [ 'vishal' ]


// 13 how to delete multiple element of an array using splice metod
// here used strude array
console.log('studentArray', student); // studentArray [ 'Alice', 'Bob', 'Charlie', 'David', 'Eva' ]
const ind = 1;
const deletecount = 2;
const del = student.splice(ind, deletecount);
console.log(del); // [ 'Bob', 'Charlie' ]
console.log('modified origonal aray :', student); // modified origonal aray : [ 'Alice', 'David', 'Eva' ]

// 14 how to add or replace multiple item in an array
// By using the splic method you have also add or replace the item in given array

let countries = ["United States", "Canada", "Mexico", "Brazil", "United Kingdom", "Germany", "France", "India", "China", "Japan"];
// here start position form the zero index, deleted count is also zero and add new element or array
const addCountries = countries.splice(0,0,'india','peru');
console.log(addCountries);
console.log('countries', countries);

// also using the  splice() method you have to replace the element of the given array.
// here we have to replace the element of array at 0 th positon when the deleted count is zero;
const addCountries2 = countries.splice(0,1,['india','peru','Dubai']);
console.log(addCountries2)
console.log('countries', countries);


// 15. How to iterate over an array ?
// by using the for OF loop iterate over the array and it return each and every element of an array
// for of loop return the vlaue of an iterable object
// 
let stud = ["Alice", "Bob", "Charlie", "David", "Eva"];
for(const name of stud){
    console.log('student name', name)
}


// 16 how to call function to each and every element in the array ?
// by using the forEach() method you have to call function on each and every elementof the array
let stu = ["Alice", "Bob", "Charlie", "David", "Eva"];
let datanew = []
 stu.forEach((element, index, array)=>{
    console.log(element);
    console.log(index);
    console.log(array);
    if(element.length < 4){
        datanew.push(element);
    }
 })
 console.log(datanew);
console.log(stu);


// 16 How to mearge multiple array togather
// 1. using concat method
// 2 .using spread opertor 
// 3. using push method with spread operator
// 4. using flat() method,

// USING CONCAT()
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];
let mergedArray = array1.concat(array2, array3);
console.log(mergedArray);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// USING SPREAD OPERATOR
let arr = [1, 2, 3];
let array = [4, 5, 6];
let ar = [7, 8, 9];
let mergedArray1 = arr.concat(array, ar);
console.log(mergedArray1);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]


// USING PUSH WITH SPREAD OPERATOR
let A = [1, 2, 3];
let B = [4, 5, 6];
let C = [7, 8, 9];
A.push(...B, ...C);
console.log(A);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// USIGN FLAT() METOD 
let arraysV = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let mergedArray2 = arraysV.flat();
console.log(mergedArray2);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]


// ALSO USING REDUCE METOD()
const CD = [1, 2, 3];
const D = [4, 5, 6];
const E = [7, 8, 9];
const mergedArrayF = [CD, D, E].reduce((acc, curr) => acc.concat(curr), []);
// EMPTY ARRAY IS INITIAL VALUE.
console.log(mergedArrayF); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]


// 17 HOW TO COPY AN ARRAY 
// 1. USING SLICE() METHOD
// 2. UISNG ARRAY.FROM() METHOD
// 3. ALSO USING SPREAD OPERATOR
// 4. USING THE CONCAT METHOD 

// 1. USING SLICE() METHOD
const originalArray = [1, 2, 3, 4];

const copiedArray = originalArray.slice()
console.log(copiedArray); // Output: [1, 2, 3, 4]

// 2.USING THE SPREAD OPERATOR
const copiedArray2 = [...originalArray];
console.log(copiedArray2); // Output: [1, 2, 3, 4]

// 3. USING ARRAY.FROM()
const copiedArray3 = Array.from(originalArray);
console.log(copiedArray3); // Output: [1, 2, 3, 4]

// USING CONCAT METHOD 
const copiedArrayV = originalArray.concat();
console.log(copiedArrayV); // Output: [1, 2, 3, 4]



// IF you want to deep copy of an array you can used the json.strigigy() to convert array  to json string
// and then convert string back into new array thats compleately independent form the origonal array ?
// if your arry contain objects or other array and you need deep copy (or a new copy of nested objects/array)
// then you can used JSON.parse();\
// or JSON.stringify()

//  Note that this method won't work for arrays containing functions or undefined values.
const original = [{a: 1}, {b: 2}];
const copied = JSON.stringify(original);
console.log( "copied", copied);
const copy = JSON.parse(copied) //copied [{"a":1},{"b":2}]
console.log("c....",copy); // c.... [ { a: 1 }, { b: 2 } ]
console.log(copied === copy);
//false
// false
console.log(copied == copy);

// 18 :
 // assigning an existing array to a new variable does't create copy of either array or its element 
 // insted of new variable is just a refrences of alias to the origonal array
 // that is the origonal array name and the new variable name are just two names for the exact same object 

 let originalArray5 = [1, 2, 3];
let newArray = originalArray5; // newArray is just a reference to originalArray
// Modifying the newArray will also modify the originalArray
newArray.push(4);
console.log(originalArray5); // Output: [1, 2, 3, 4]
console.log(newArray); // Output: [1, 2, 3, 4]


// 19 HOW TO GROUPING THE ELEMENT IN GIVEN ARRAY OR ARRAY LIKE OBJECT 