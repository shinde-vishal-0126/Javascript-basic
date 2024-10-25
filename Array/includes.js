// INCLUDES(search_element, fromIndex);

// include() method in array is determine weather certain element are present in array or not
// include method return true and false 
// include() method work in forward searching
// include() method compare search_element to the elementof array using sameValuezero algorithm
// include() method also iterate the emply slot of the array .
// i.e it check if the give value are present or not in give array.

// example
const empty = [1,2,3]
// include value return boolean value true or false
const result = empty.includes(2);
console.log('result',result); // return ture

//example 
// include() method having the second argument using this you have to start searhing  form that given index in forward direction 
// NOTE:
// Formal index is grater then or equal to the array length of an array then false is return
const man = [1,2,3]
const res = man.includes(3,3);
console.log(res); // return false because 3 index element are not prese 


// example 
// computed index is less then or equal to zero then the enitre array will be searched
const array = ["a","b","c"];
const search = array.includes("c",-100)
console.log('search',search);



//example
// includes method used in spare array
const ab = [2,3,4,5, ,8];
console.log(ab.includes(undefined)); //true