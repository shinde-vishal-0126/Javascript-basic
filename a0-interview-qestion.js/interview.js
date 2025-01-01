//? 1.@ What is  Defer in JavaScript ? :
// - In JavaScript,//* the defer attribute is used in the script tag to specify that a script should be executed after the HTML document has been fully parsed.
// -  It ensures that the script does not block the HTML parsing process, improving the performance of the page loading.
// - Key Points :
// - 1. Non-blocking - Unlike scripts without defer, which block the parsing of the HTML until the script is downloaded and executed, a deferred script allows the HTML parsing to continue while the script is being downloaded in the background.
// - 2. Runs After Document Parsing: The script will only run after the entire document has been parsed, but before the DOMContentLoaded event.
// - This behavior is useful for scripts that manipulate the DOM, as it ensures the DOM is fully available when the script runs.

//? 2.@   How string can be converted into an array with the help of split() method.
// 1. split() method is the most common way to convert a string into an array by splitting the string based on a specified delimiter
var test = "a,b,c,d,e,f,g,h";
console.log("test", test.split(" ,")); // test [
//     'a', 'b', 'c',
//     'd', 'e', 'f',
//     'g', 'h'
//   ]

//? 2. Array.from() :
//* Array.from() creates a new array instance from an iterable object, such as a string.
// ex.
const str = "vishal";
const array = Array.from(str);
console.log(array);

//* 3. using spread operator
const newStr = "Hello";
const arr = [...newStr];
console.log(arr);

//? 3 @ what is variable shadowing ?
// Variable shadowing is when a variable with the same name is declared in an inner scope as a variable in an outer scope. In such cases, the variable in the inner scope hides the variable in the outer scope. Any references to the variable within the inner scope will refer to the inner variable, effectively "shadowing" the outer variable.

//? 4@ if you divide any number with zero than what happen ?
// it return infinity: like 8/0 = infinity also -8/0 = -infinity

//? 5 @ what is instances of operator ?
// - instanceof operator in JavaScript is //* used to check whether an object is an instance of a specific constructor or class.
// - It evaluates to true if the object is an instance of the specified constructor, and false otherwise.
const day = new Date(2023, 10, 12); // October 12, 2023
if (day instanceof Date) {
  console.log("DAY IS AN INSTANCE OF THE DATE OBJECT");
} else {
  console.log("DAY IS NOT AN INSTANCE OF THE DATE OBJECT");
}
// The instances of operator return true if the specified object is of the specified Object type ro constructor or class type

//? @ 6 Void() :
// Void operator specifies an expression  to be evaluated without returning  a value.

//? @ 7 Relational Operator :
// - Relation operator compares its operand and returns a boolean value whatever comparison is true.
//* - IN
// relation operator compare it operands and a return boolean value whatever comparison
const tree = ["redwood", "bay", "cedar", "oak", "maple"];
console.log(0 in tree); // true
console.log(3 in tree); // true
console.log(6 in tree); // false
const bay = "bay" in tree;
//* - in relation operator of in you need to define only index number.
// -  not the value at that index
console.log(bay); // false
const length = "length" in tree;
console.log(length); // true - because length is the array property so return true.

//? @ 8 what is differences between == and === ?
//* (==)
// - Double equal sign check only value of the variable equal or not (I.e double equal sign checks only the value of the variable but not the type of operand.)
// - (it check the value not check type of content)
var num = 20;
var num21 = "20";
var num2 = 20;
console.log(
  "double equal sign check only value not a continent :",
  num == num2
); //true
// here num1 data type is string but it return true so == not check the type of data it check only value
console.log("double equal :", num21 == num2); //true
// also here num is number but num1 is string so double equal not check type or content type only check value
// if value are same it return true
console.log("double equal :", num == num1); //true
//  Here the above example value of the variable is the same but type is different so double equal  check only value not type.

//* (===)
// 1. Triple equal sign check value and  type of the content is same (equal ) or not
// I.e triple equal sign checks the value as well as type of the operand.
// (it checks the value as well as type of the content).
var num = 20;
var num1 = "20";
var num2 = 20;
console.log(
  "triple equal sign check only value not a continent :",
  num === num2
); //true
// here num1 data type is string  it return false so ===  check the type of data as well as it check value of the data
console.log("triple equal :", num1 === num2); //false
// also here num is number but num1 is string so triple equal  check type or content type and  value of the variable
// if value are same it return true
console.log("triple equal :", num === num1); //false

//? 9.@ What is a prompt in javascript  ?
// In javascript prompt function used to give user input
// So the prompt function always returns the string value.

//? 10.@ How to convert string into number ?
// You have to convert string into number using type casting

// 1. The Number() function converts a string to a number. It will return NaN (Not-a-Number) if the string cannot be converted.
const str1 = "42";
// const num1 = Number(str1); // convert with the help of constructor
console.log(num1); // Output: 42

// 2. parseInt() function parses a string and returns an integer. You can specify the radix (base) for the conversion.
const str2 = "42";
// const num2 = parseInt(str2, 10); // Base 10
console.log(num2); // Output: 42

const str3 = "42.5";
const num3 = parseInt(str3, 10);
console.log(num3); // Output: 42 (it truncates the decimal part)

// 3. The parseFloat() function parses a string and returns a floating-point number.
const str4 = "42.5";
const num4 = parseFloat(str4);
console.log(num4); // Output: 42.5

// 4. You can use the unary plus operator to convert a string to a number. This is a shorthand way of performing the conversion.
const str5 = "42";
const num5 = +str5;
console.log(num5); // Output: 42

const str6 = "42.5";
const num6 = +str6;
console.log(num6); // Output: 42.5

//?  11 How to iterate the object using the  simple for loop  ?
// Example;
const marks = {
  vishal: "10",
  a: 40,
  f: 80,
  g: 90,
};
for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(i);
  console.log(
    "key are " +
      Object.keys(marks)[i] +
      "and value are " +
      marks[Object.keys(marks)[i]]
  );
}

//2. another way
const obj = { a: 1, b: 2, c: 3 };

// Get an array of keys
const keys = Object.keys(obj);
// Iterate over the array of keys
for (let i = 0; i < keys.length; i++) {
  const key = keys[i]; // Current key
  const value = obj[key]; // Corresponding value
  console.log(key, value); // Logs key and value
}

// ? what is used of new keyword ?
// You can used the new operator  //* to created an instance of  user defined type  or one of the built in object type

// ? what super() keyword in javascript ?
  // The super() keyword in JavaScript is //* used within a derived (child) class to call the constructor of its parent (base) class.
  //  This is necessary when you're working with inheritance and need to initialize the parent class's properties and methods before the child class can access or extend them.
  // It is used to access properties on an object literal  or class prototype
  // or invoke superclass constructor
  //  Super keyword used to call function of an  object parent to the child object
  //It is useFull with classes  to call parent constructor
  // Example
  // super(arg)
// used to call the parent call constructor in child class

//? Javascript  type operator :
// The Type operator return string indicating the type of  unevaluated  operand so operand is the string variable , keyword or object for which to be returned
// Example
//* type of operator --> return string that indicating the type of unevaluated operand
const myFun = new Function("5 + 2");
console.log(typeof myFun); // function

const shape = "round";
console.log(typeof shape); // string

const size = 1;
console.log(typeof size); // number

// ? Conditional and Ternary operator  ?
// Shortcut to execute the condition
//* Evaluate the condition and execute a block of code based on the condition
// Conditional ternary operator is same as if,else,statement
//* The conditional (ternary) operator is to take three arguments.
// Variable name = (condition) ? value1 : value2
// Shortcut method of the if -else
// Execute the condition and based on that this expression will be executed
// Example :
var age = 19;
var age = age > 18 ? "ELIGIBLE FOR VOTE" : "NOT ELIGIBLE FOR VOTE";
console.log("VOTER ARE: ", age); //VOTER ARE:  ELIGIBLE FOR VOTE
// The operator can value one or two value based on condition
// If the condition is true then  the operator  has the value of eligible for voting  if false then uses the not eligible for voting.

// Nested ternary operator
const score = 85;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log(grade); // Output: "B"

//? How to convert number into string:
let n = 19;
console.log(typeof String(n));
// also used another approach
console.log(typeof (n + ""));


//? How to find color hex code in javascript
let hexValue = '0123456789abcdef'
let color= '#';
// console.log(hexValue)
for(let i=0;i < 6;i++){
    // console.log(i)
    console.log(hexValue[Math.floor(Math.random() * 16) ]);
    color = color + hexValue[Math.floor(Math.random() * 16) ] 
   
}
 console.log(color)


 //? how to copy the text ?
// to copy the text you have to used window object property navigator.clipboard.writeText(content(which data you want copy));


//? what is local Storage ?
// it is object or way to store the key-value pair in user's browser (it does no expire , and remains available if browser closed or open)

//? what is JSON.stringify() and JSON.parse() in javascript ();
//  JavaScript methods for working with JSON (JavaScript Object Notation), which is a lightweight data format used for data exchange
// JSON.stringify(value, replacer, space)
  //* Converts a JavaScript object, array, or other value to a JSON string.
  //Sending data to a server (convert an object to a JSON string).
  // Storing data in localStorage or sessionStorage.
  // Use JSON.stringify() to serialize JavaScript data into a JSON string.
// JSON.parse()
  //* Parses a JSON string and converts it back to a JavaScript object or array.
  // Receiving and using JSON data from a server.
  // Retrieving data from localStorage or sessionStorage.
  // Use JSON.parse() to deserialize a JSON string back into JavaScript data.


  //? what is throttling in javascript  give with example :
  // effective technique in javascript to limiting the rate of frequency of the function execution used to improve, maintain or optimize the performances of the application 
  // Throttling used to execute the function after fix interval of time 

  //? write the polyfill of the throttling and debouncing in javascript
  // Throttling function having 2 parameter first one in callback function and another one is time delay

  //? what is debouncing in javascript 
  // used to wait for the certain time before invoking function again 
  // The main purpose of the debouncing is delay the function execution until pause event occurrences
  // function executed after series of rapid events 
  // debouncing used senario like get user input, scrolling event where you want to wait for for pause in input before triggering a function avoid rapid or unindented execution

  //? which is better debouncing or throttling in javascript ?
  // based on the use case we have to defined which is better 
  // Whether debouncing or throttling is better depends entirely on your use case and the type of behavior you want to achieve
  //! Choose Debouncing When:
// You want the function to execute after the user stops performing the action.
// Frequent triggering is unnecessary, and you only care about the final state.
// Example Scenarios:
// Search Box Autocomplete: Trigger an API call only when the user has stopped typing for a specified delay (e.g., 300ms).
// Form Validation: Validate form fields only after the user finishes typing.
// Resize/Scroll Handling: Recalculate layout only after resizing or scrolling has stopped.


// Choose Throttling When:
// You need the function to execute at regular intervals during an ongoing action.
// It’s important to update in near real-time, but not too frequently.
// Example Scenarios:
// Infinite Scroll: Load more content while the user scrolls but limit the rate of API calls.
// Dragging/Slider: Update UI (e.g., position, value) at regular intervals while dragging a slider.
// Analytics Tracking: Log user actions (e.g., scroll positions or clicks) without overwhelming the server.

// Debouncing is generally better for actions triggered by user input because it minimizes unnecessary calls.
// Throttling is better for performance-critical tasks that need periodic updates, such as animations or real-time logging.


// Debouncing
// Executes once, after a delay.
// Focused on final state.
// Real-time Updates	No (delays execution).

// Throttling
// Executes at regular intervals.
// Focused on intermediate updates.
// Real-time Updates:	Yes (limits execution frequency).


// ? what is differences between debouncing and throttling


// what is setTimeout function scope ()
// it is Global scope