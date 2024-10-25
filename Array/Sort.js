// SORT()

//sort() method sort the element of an array in place and return the refrences to the same array now sorted
// it return the refrences of the sorted array (array sorted in place no copy is made)
// all undefined array is stored at the end of the array
//  sort() method preserve the empty slot if source of array having empty slot and it move at the end after the undefined
// (sort element in place and return sorting array) 
// default sorting order is Ascending
// sort method built upon converting their squence of UIF-16 code unit value

const MONTHS = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
console.log(MONTHS.sort())
// output
// [
//     'APRIL',    'AUGUST',
//     'DECEMBER', 'FEBRUARY',
//     'JANUARY',  'JULY',
//     'JUNE',     'MARCH',
//     'MAY',      'NOVEMBER',
//     'OCTOBER',  'SEPTEMBER'
//   ]




const NUMBERS = [5, 3, 9, 1, 7, 2, 10, 4, 6, 8];

// Sort the numbers (as strings)
const sortNumber = NUMBERS.sort();
console.log("sortNumber", sortNumber); // Output will show the sorted array
console.log("NUMBERS", NUMBERS);       // Output will show the original array which is now sorted
// Check if both references are the same
console.log("Are both references the same?", sortNumber === NUMBERS); // Should output: true

// Output[
//     1, 10, 2, 3, 4,
//     5,  6, 7, 8, 9
//   ]

// NOTE :
// array sort() method work with string if you sort the number then array.sort() method firest convert into string then convert



// exampel
const num = [5, 3, 9, 1, 7, 2, 10, 4, 6, 8];
const mon = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
const numericStrings = ["1", "22", "333", "4444", "55555"];
const mixedArray = [1, "22", 333, "4444", 55555, "666", 7, "8", 90];
function compareNumbers (a,b){
    return a-b
}

const new2 = mon.join();
console.log(new2);
console.log(mon.sort());

console.log(num.join());
console.log(num.sort());

console.log("compareArray", num.sort(compareNumbers));

console.log(numericStrings.join());
console.log(mixedArray.join());
console.log(mixedArray.sort(compareNumbers));
console.log(mixedArray.sort());
console.log(numericStrings.sort());
console.log(numericStrings.sort(compareNumbers));