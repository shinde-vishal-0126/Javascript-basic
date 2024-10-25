// split(separator, limit) : (splits a string into an array of substrings, based on a specified delimiter) (also limit the number of splits by passing an optional second argument.)

// - split() method divides a string into an array of substrings.
// 1.def : split a string into  subString  using the specified separator and return them as an array ;
// 2. split() method of the string  value take a pattern and divided this string into an ordered list of substring by searching for the pattern and so put this substring into an array and return the array 
// 3. Return an a new array of string
// 4. Split method does not change the original array.

// ex.
const str = 'vishal shinde';
const word = str.split('');
console.log('return :', word); // divides a string into an array of substrings // return : [
//     'v', 'i', 's', 'h',
//     'a', 'l', ' ', 's',
//     'h', 'i', 'n', 'd',
//     'e'
//   ]
const strCopy = str.split();
console.log('copy of string', strCopy); // copy of string [ 'vishal shinde' ]


// # when the string is empty and non empty separator is specified then split return [''];
const emptyString = '';
const newData = emptyString.split('a');
console.log('newData', newData); // newData [ '' ]

const newData1 = emptyString.split();
console.log('newData1', newData1); //newData1 [ '' ]

// string and separator are both empty string then return []
console.log(emptyString.split(emptyString)); // []

// 2. Using the limited number of split();
const myString = 'Hello word, How are you ?';
const nu = myString.split(' ', 3);
console.log('mu', nu);










