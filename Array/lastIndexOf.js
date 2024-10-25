// LASTINDEXOF

// lastIndexOf(searchElement, formIndex)
// Retrun last(greatest) index of an element with in the array equal to an element
// lastIndexof() return the index of the last occurrences of a specified value in an array
// it return -1 if not found
// it search element last to first (backword direction)

const fruits = ['apple', 'banana', 'cherry', 'date', 'banana', 'elderberry', 'fig', 'grape','banana'];
const data = fruits.lastIndexOf('banana');
console.log(data) //8

//lastindexof(searchElelent, fromelemet) second  element start searching form the give element
const fruitData = fruits.lastIndexOf('banana',6);
console.log(fruitData); 

// if not found it return -1
const data1 = fruits.lastIndexOf('main',2);
console.log(data1) // -1


//example1
const animals = ['lion', 'tiger', 'elephant', 'giraffe', 'zebra','tiger', 'kangaroo', 'panda'];
const lastIndex = animals.lastIndexOf('tiger');
// return give index value
console.log(lastIndex);


// example2
const numbers = [10, 20, 30, 40, 50, 60, 70];
const index = numbers.lastIndexOf(30);
console.log(index); // 2
const index1 = numbers.lastIndexOf(20,-2);
console.log(index1);// /1
const index2 = numbers.lastIndexOf(20,-1);
console.log(index2);// 1


// You have to not used lastIndexOf with NaN
const ap = [NaN];
const sdp = ap.lastIndexOf(NaN);
console.log(sdp); // -1

// also you can not used lastindexof() to search empty slots in spare array
const app = [1, ,3]
const a = app.lastIndexOf(undefined);
console.log(a); // -1



//  WHAT IS DIFFERENCE BETW INDEXOF() AND LASTINDEXOF()

// INDEXOF() :
//indexof() method return the index of first occurrences of a element specified in the array
// i.e search element index of first occurrences of substring whitin a string
// if match return the index of first match 
// if not found it return -1
// indexof() method work on first to last (i.e it is forwared direction)


// LASTINDEXOF()
// lastindexOf() method return the index of last occurrences of a element specified in the array
// i.e search element index of last occurrence of substring within a string
// if match the string it return last index of that elment
// if not match it return -1
// LastIndexOf() method return last to first (i.e backword direction)