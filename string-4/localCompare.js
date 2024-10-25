// # LOCALECOMPARE();

//  localeCompare(compareString[, locales[, options]])
// 1. localeCompare() method in JavaScript is used to compare two strings in a locale-sensitive manner.
// 2. It returns a number indicating whether the reference string (this string) comes before, after, or is the same as the given string (compareString) in sort order.

// Return the following value based on the comparison
// -1 if the reference string is sorted before compareString.
// 0 if the reference string is equal to compareString.
// 1 if the reference string is sorted after compareString.


// Example :
 str1 = "apple";
 str2 = "banana";

console.log(str1.localeCompare(str2)); // Output: -1 (apple comes before banana)
console.log(str2.localeCompare(str1)); // Output: 1 (banana comes after apple)
console.log(str1.localeCompare("apple")); // Output: 0 (apple is the same as apple)


// Using options 
 str1 = "apple";
  str2 = "Apple";

console.log(str1.localeCompare(str2)); // Output: 1 or -1 depending on the locale
console.log(str1.localeCompare(str2, undefined, { sensitivity: 'base' })); // Output: 0 (ignores case differences)

// 'base': Only the base characters are compared (e.g., a === A).
// 'accent': Base characters and accents are compared (e.g., a !== á).
// 'case': Base characters and case are compared (e.g., a !== A).
// 'variant': Base characters, accents, and case are compared.
// ignorePunctuation: Whether to ignore punctuation characters.
