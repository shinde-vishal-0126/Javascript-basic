//interview preparation

//?1/ what is string literal Or template literal in javascript ?
// string literal is string representation with embedded expression and multi-line string in more readable and flexible way in javascript
// string literal are defined by using (``) backtick and embedded expression using ${}.  and without concatenation operator we have to show the multi-lime string
// Adv:
// readable
// also support the expression Interpolation (using this you have expression directly defined within string)

// --------------------------------------------------------------------------------------------------------------------------------------

//? 2. write a function that point the latter "a" through "z" in the console(you should used the loop to iterate through the latter and print each one on new line)
let sen = "az"; // 97
// charCodeAt(0) return unicode value of given character at specified index
const unicode = sen.charCodeAt(0);
// console.log('unicode', unicode); // 97
const unicode1 = sen.charCodeAt(1);
// console.log(unicode1); // 122
for (let i = unicode; i <= unicode1; i++) {
  // console.log(String.fromCharCode(i))
}

// --------------------------------------------------------------------------------------------------------------------------------------

//? 3. write function to count the number of vowels in a string ?
let str = "vishal shinde vishal shinde a i o o u";
function findVowels(str) {
  let count = 0;
  //   const vowels = ["a", "i", "o", "u", "e"];
  // here we have to work with string so we have give vowel as string.
  // here you have to iterate the string and compare with vowels
  const vowels = "aioue";
  for (let char of str.toLowerCase()) {
    // console.log(char);
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(findVowels(str));

// --------------------------------------------------------------------------------------------------------------------------------------

//? 4 write the function to check if all the vowels present in a string or not
let string = "vishal shinde";
function checkAllVowelsPreset(str) {
  const vowels = "aioue";
  const toLower = str.toLowerCase();
  // The spread operator can also be used to split a string into individual characters, treating each character as an element in an array.
  const allVowelsPresent = [...vowels].every((ele) => {
    toLower.includes(ele);
  });

  if (allVowelsPresent) {
    console.log("all vowels are present in give string");
  } else {
    console.log("all vowels are not present");
  }
}
checkAllVowelsPreset(string);



//* another way
// function checkAllVowels(str){
//     const vowels = 'aioue';
//     for(vowel of vowels){
//         // here check if the current vowel present in string if present it return true if not return false and terminate the program execution
//         if(!str.includes(vowel)){
//             return false // Return false if any vowel is missing

//         }
//     }
//     return true
// }
// console.log(checkAllVowels('vishal shinde'))


// --------------------------------------------------------------------------------------------------------------------------------------

//? 5 Write a javascript function isPangram that takes a string as input and return true if the string is pangram (pangram means check contain all the letters of the alphabet ) and false otherwise
// the function should be case-sensitive and ignore space
let sentences = "abcdefghijklmnopqrstuvwxyz";
function isPangram(str) {
  const toLower = sentences.toLowerCase().split("");
  // console.log(toLower);
  const unicode = "a".charCodeAt(0);
  // console.log(unicode);
  const unicode1 = "z".charCodeAt(0);
  for (let i = unicode; i <= unicode1; i++) {
    const alphabet = String.fromCharCode(i);
    if (!toLower.includes(alphabet)) {
      return false;
    }
  }
  return true;
}
console.log(isPangram(sentences));

//* another approach:
const pangramChecker = (str) => {
  const inputArray = str.toLowerCase().split("");
  console.log(inputArray);
  // used filter method
  const value = inputArray.filter((curEle) => {
    return (
      curEle.charCodeAt() >= "a".charCodeAt() &&
      curEle.charCodeAt() <= "z".charCodeAt()
    );
  });
  // return the value which is Grater then a and less then z  based on unicode
  // then remove the duplicate value form the Give value
  console.log("value", value);
  // here value are return in object format but i want to it in array format
  //   const newValue = new Set(value);
  // here value return in the array objet but i want in proper array format so you have to used spread operate
  const newValue = [...new Set(value)];
  console.log("new value", newValue);
  if (newValue.length !== 26) {
    console.log("Given string is not isPangram");
  } else {
    console.log("give string is pangram");
  }
};

console.log(pangramChecker("abcdefghijklmnopqrstuvwxyz"));

// -----------------------------------------------------------------------------------------------------------------------------------------------
