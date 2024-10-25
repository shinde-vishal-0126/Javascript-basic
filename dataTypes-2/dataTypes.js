// Data type :
// ==> Def :
// -  data type defined which type of data are stored in variable
// - data type is classification  of data which tells the compiler or interpreter how the programmer intends to use the data.

// ==> 2 type of data :
// 1. primitive data (fundamental data typep)
// 2. non-primitive data (non-fundamental data type)

// 1.==>. primitive data : 7 data type
// - fundamental data type (build in data type defined by programming language)
// - build in type or predefined data types
// - size and type of variable value are specified
// - it has no additional method

//  1. Boolean :
//  2. Number :
//  3. String :
//  4. BigInt :
//  5. symbol :
//  6. undefined : (does not defined anything)
//  7. null : (i.e nothing)

// 1.@ How to check the type of data ?
const data = "vishal";
console.log(typeof data);

// 2. @ How to convert string in to number ?
const num = "100";
const name = "vishal";
console.log("Ginven data :", num);
console.log("Given string convert into num :" + num); // 100
console.log("return NAN", +name); // NaN

//  Also usde the another method "parseInt"
console.log(parseInt(num));
console.log(parseInt(name));

// 3.@ How to convert number into string ?
const num1 = 100;
console.log("Number --> string : ", typeof "" + num1, "OR", typeof num1 + ""); //  string 100 OR number

// 4.@ some tricky question :
console.log("null converted in to number ", +null); // 0
console.log("undefined converted into number", +undefined); // NaN

// 5.@ What are the type of null
console.log("type of null :", typeof null); // object

// 6.@ What is differences between null and undefined ?
// 1.  null :
// - null means variable as been defined and assign value is defined as null
// i.e Assigned explicitly value as null.
// null is nothing (i.e does not exits anything);

const firstName = null;
console.log("firstName :", firstName); // null
console.log("type of null", typeof null); // Object

// 2. undefined :
// undefined means the variable has been defined but it value has not been assigned
// undefined it is data type.
// typeof operator return type of undefined is undefined

let lastName;
console.log("lastName return :", lastName); // undefined
console.log("type of undefined", undefined); // undefined

// 7.@ What NaN in javascript ?
// - NaN stands for not a number Not-a-Number
// - initial value of the NaN i
// - in javascript Nan is a property of the Global object (i.e it is available in Global scope and can be accessed in your code)

// - isNaN() method check weather a value is NaN (not a number ) or not. (it return true if the value is NaN other wise false)
var name1 = "vishal";
var num2 = 200;
console.log("check it is number or not :", isNaN(name1), isNaN(num2)); // true // false

// - type of NaN is number
console.log("type of NaN :", typeof NaN); // number

// - if you perform any mathematical operation with NaN it result always return the NaN
var str = "vishal";
var no = NaN;
console.log(
  "if you perform any operation with NaN it alway return NaN :",
  str - no
); // NaN

// - NaN is not equal to itself
// - One unique feature is that it is only value in javascript the not equal to it self
console.log(NaN === NaN); // false

//================>=====================**>**=============>=======================================

// 2.==> non-primitive data types :
// - This data type are actually are not defined by the programming language
// - Not in built in data type:
// - basically it is derived form the primitive  data types
// - then size and type of the variable value are not specific
// - it has additional method
// it is also know as derived data types or references data type

// 1. array
// 2. object

//  @ type of infinity 
console.log(typeof Infinity) // number:

// @ if you divided zero/zero =  0/0 = return not a number (NAN)

// @ javascript typeof operator :
// Type of operator return string indicating the type of unevaluated operand 
const foo = ['apple', ' mango', 'orange'];
console.log(typeof(foo)) // object 

const today = new Date();
console.log(typeof(today)); // object

// parseInt () 
// if you give parseInt(null) it return NaN;
// and if you plus sign with null it return zero  +null == 0
