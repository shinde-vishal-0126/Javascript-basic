
//? 1.@ What is Expression ?
//* Expression is nothing but combination of operator and operand  and its return result.
// Expression always executed left - Right

// Example: 1
// def: expression is combination of the operator and operand
let num11 =20 // this are operand like num, num1 num2
let num111 = 10
let num211 = 5
let result11 = num * num1 / num2 // here * / are the operator 
console.log('result', result11);


//? Operator : def :
//* Operator is special type of character or symbol the represent a specific mathematical or logical action.


//? falsy value 
// falsy value
//  zero, -0, and NAN are falsy value  
//  if you give any negative number it always true
//  empty string also falsy value
//  undefined also falsy value 
//  null also falsy value

//? truthy value
// true
// any non-empty string ('Hello')
// any not-zero number (56)
// array 
// object even they are not empty

//? How to check truthy and falsy value 
// using if and else condition 
let name = 'vishal';
if(name){
    console.log('this is truthy value')
}else{
    console.log('this is falsy value')
}


var score = 99
if(score === 0){
    console.log('OMG WE LOSS THE GAGE...!')
}
//IF YOU GIVE FALSY VALUE IF THE CONDITION ALWAY RETURN IN ELSE BLOCK
else{
    console.log('WE WIN THE GAME..')
}




