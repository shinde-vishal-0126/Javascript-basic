// SPLICE()

//SPLIC(START, DELETCOUNT?, ITEM1, ITEM2 (STRING []))
// splic() method remove the element from an array 
// if necessary insert new elemnt in their place
// splic() method return an only  array contatining the element that were deleted. (i.e create new array with a segment removed)
// The splic() method change the contenet of an array by removing, or replacing existing elment and or adding new element
// if not element are removed an empty array return
//  splic() method are mutating method (because used to insert, remove, and replace the element in the origional array)
// Most of the time array method used for the delet element puprose
// splice method modified the origoan array (it is mutating metod )




const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
const deletedFruits = fruits.splice(1,2);
// splice metod return the modified  resultiong origional array
console.log(fruits);
// here splic() meted return array containing the deleted element
console.log(deletedFruits);


// example 2
const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const newMonth = month.splice(2,0,'vishal');
  // Here return the empty array because it having empty array
  console.log(newMonth);
  // return orgional modified array with adding new element in array
  console.log(month);

  
  // update March As MARCH
const Marchindex = month.indexOf('March')
  const newMarch = month.splice(Marchindex,1,'MARCH')
  console.log(month);
  console.log(newMarch);

// remove vishal form the month array
const remove = month.splice(2,1);
console.log(remove);
console.log(month)  


// Delete JUNE form the array
const indexof = month.indexOf('June');
const removeJune = month.splice(indexof, 1);
console.log(removeJune);
console.log(month);


// if you delete data from March to end how to done//
const marchIndex = month.indexOf('MARCH')
console.log(marchIndex);
if(marchIndex != -1){
   const deleted = month.splice(marchIndex, Infinity);
   console.log(deleted);
}
console.log('month',month) //month [ 'January', 'February' ]


// using splice() on spare array
const arrv = [1, , 3, 4, ,5];
console.log(arrv.splice(1,2)); //[ <1 empty item>, 3 ]
console.log(arrv); // [ 1, 4, <1 empty item>, 5 ]