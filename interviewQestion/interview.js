// 1.@ What is  Defer in JavaScript ? :
// - In JavaScript, the defer attribute is used in the script tag to specify that a script should be executed after the HTML document has been fully parsed.
// -  It ensures that the script does not block the HTML parsing process, improving the performance of the page loading.
// - Key Points :
// - 1. Non-blocking - Unlike scripts without defer, which block the parsing of the HTML until the script is downloaded and executed, a deferred script allows the HTML parsing to continue while the script is being downloaded in the background.
// - 2. Runs After Document Parsing: The script will only run after the entire document has been parsed, but before the DOMContentLoaded event.
// - This behavior is useful for scripts that manipulate the DOM, as it ensures the DOM is fully available when the script runs.

// 2.@   How string can be converted into an array with the help of split() method.
// 1. split() method is the most common way to convert a string into an array by splitting the string based on a specified delimiter
var test = "a,b,c,d,e,f,g,h";
console.log("test", test.split(" ,")); // test [
//     'a', 'b', 'c',
//     'd', 'e', 'f',
//     'g', 'h'
//   ]

// 2. Array.from() :
// Array.from() creates a new array instance from an iterable object, such as a string.
// ex.
const str = "vishal";
const array = Array.from(str);
console.log(array);

// 3. using spread operator
const newStr = "Hello";
const arr = [...newStr];
console.log(arr);

// 3 @ what is variable shadowing ?
// Variable shadowing is when a variable with the same name is declared in an inner scope as a variable in an outer scope. In such cases, the variable in the inner scope hides the variable in the outer scope. Any references to the variable within the inner scope will refer to the inner variable, effectively "shadowing" the outer variable.

// 4@ if you divide any number with zero than what happen ?
// it return infinity: like 8/0 = infinity also -8/0 = -infinity

// 5 @ what is instances of operator ?
// - instanceof operator in JavaScript is used to check whether an object is an instance of a specific constructor or class.
// - It evaluates to true if the object is an instance of the specified constructor, and false otherwise.
const day = new Date(2023, 10, 12); // October 12, 2023
if (day instanceof Date) {
  console.log("DAY IS AN INSTANCE OF THE DATE OBJECT");
} else {
  console.log("DAY IS NOT AN INSTANCE OF THE DATE OBJECT");
}

// @ 6 Void() :
// Void operator specifies an expression  to be evaluated without returning  a value.

// @ 7 Relational Operator :
// - Relation operator compares its operand and returns a boolean value whatever comparison is true.
// - IN
// relation operator compare it operands and a return boolean value whatever comparison
const tree = ["redwood", "bay", "cedar", "oak", "maple"];
console.log(0 in tree); // true
console.log(3 in tree); // true
console.log(6 in tree); // false
const bay = "bay" in tree;
// - in relation operator of in you need to define only index number.
// -  not the value at that index
console.log(bay); // false
const length = "length" in tree;
console.log(length); // true - because length is the array property so return true.

// @ 8 what is differences between == and === ?
// (==)
// - Double equal sign check only value of the variable equal or not (I.e double equal sign checks only the value of the variable but not the type of operand.)
// - (it check the value not check type of content)
            var num = 20;
            var num1 = "20";
            var num2 = 20;
            console.log(
            "double equal sign check only value not a continent :",
            num == num2
            ); //true
            // here num1 data type is string but it return true so == not check the type of data it check only value
            console.log("double equal :", num1 == num2); //true
            // also here num is number but num1 is string so double equal not check type or content type only check value
            // if value are same it return true
            console.log("double equal :", num == num1); //true
            //  Here the above example value of the variable is the same but type is different so double equal  check only value not type.

// (===)
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

// 9.@ What is a prompt in javascript  ?
// In javascript prompt function used to give user input
// So the prompt function always returns the string value.

// 10.@ How to convert string into number ?
// You have to convert string into number using type casting
            // 1. The Number() function converts a string to a number. It will return NaN (Not-a-Number) if the string cannot be converted.
            const str1 = "42";
            const num1 = Number(str1);
            console.log(num1); // Output: 42

            // 2. parseInt() function parses a string and returns an integer. You can specify the radix (base) for the conversion.
            const str2 = "42";
            const num2 = parseInt(str2, 10); // Base 10
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

//  @ 11 How to iterate the object using the  simple for loop  ?
            Example;
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
                makrs[Object.keys(marks)[i]]
            );
            }

            // another way 
            const obj = { a: 1, b: 2, c: 3 };

            // Get an array of keys
            const keys = Object.keys(obj);
            // Iterate over the array of keys
            for (let i = 0; i < keys.length; i++) {
            const key = keys[i];  // Current key
            const value = obj[key];  // Corresponding value
            console.log(key, value);  // Logs key and value
            }
