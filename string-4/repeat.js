// REPEAT()

// # str.repeat(count)
// 1. the repeat() method of the string value construct and new string  which contains the specified number of copies of this string or (concatenated together);
// 2. If the count is 0, an empty string is returned.
// 3. If the count is negative or Infinity, it throws a RangeError

// Basic example
const str = 'abc';
console.log(str.repeat(3)); // "abcabcabc"

// repeating with zero
const str1 = 'abc';
console.log(str1.repeat(0)); // ""

// if the count is negative or infinity it throw a rangeError
console.log('abc'.repeat(-1)) // rangeError
