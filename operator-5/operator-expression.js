
// 1.@ What is Expression ?
// Expression is nothing but combination of operator and operand  and its return result.
// Example: 1
// def: expression is combination of the operator and operand
let num11 =20 // this are operand like num, num1 num2
let num111 = 10
let num211 = 5
let result11 = num * num1 / num2 // here * / are the operator 
console.log('result', result11);



// Operator : def :
// Operator is special type of character or symbol the represent a specific mathematical or logical action.


// 1. Arithmetic Operator 
// -  Arithmetic operator take numeric value ( either literal or variable as their operands and return a single numeric value)
// - 
//  1.Addition
// 2.Subtraction
// 3.Division
// 4.Multiplication 
// 5.Reminder (Module operator) → return reminder.
// 6. Exponentiation operator ** (find the power of the value) 5**3 = 5*5*5 =125


// 2. Assignment operator 
// 1. Assignment operator assign value to its left operand based on the value of its right operand
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


// # truthy and falsy value 
// - zero, -0, and NAN are falsy value  
// - if you give any negative number it always true
// - empty string also falsy value
// - undefined also falsy value 
// - null also falsy value
var score = 99
if(score === 0){
    console.log('OMG WE LOSS THE GAGE...!')
}
//IF YOU GIVE FALSY VALUE IF THE CONDITION ALWAY RETURN IN ELSE BLOCK
else{
    console.log('WE WIN THE GAME..')
}

