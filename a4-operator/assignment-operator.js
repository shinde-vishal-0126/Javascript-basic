//? 1. Assignment operator 
// *1. Assignment operator assign value to its left operand based on the value of its right operand
// 2. assignment operator in programming are symbol used to assign value to variable.
// 3 They tak value on the right side of the operator and assign it to the variable on left side..
// 2. Assignment operator is equal sign (=)

//assign operator assign value to its left operand based on value of its right operand
console.log("assign value to the right operand  using assign operator equal (=)")
let num = 10
console.log(num); // 10

console.log('addition assignment operator', " += ")
let val = 20
let result = 20;
result += val // result = 20 + 20 
console.log(result) // 40

console.log('subtraction assignment operator', " -= ")
let num1= 20
result -= val // result = 20 - 20 
console.log(result) // 0

console.log('multiplication assignment operator', " *= ")
num1 *= val // result = 20 * 20 
console.log(num1) // 400

console.log('division  assignment operator', " /= ")
result /= val // num = 20 / 20 
console.log(result) // 

console.log('module  assignment operator', " /= ")
result *= val // num = 1 % 20 
console.log(result) //  20 (return reminder)

console.log('exponential  assignment operator', " /= ")
console.log(num);
console.log(val)
num **= val // num = 10 ** 20 
console.log(num) // 

//? when working with floating point numbers in javascript consider using method like toFixed(2) when precise decimal representation is necessary