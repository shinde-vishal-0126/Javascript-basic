//! Type of Decision making (conditional expression)

//? 1. If statement
//-  (the if statement evaluate the condition inside the () if the condition is evaluated to true the code inside  the body of  if is executed else the code is not executed )

//? 2. If-else statement
//- (if the condition is true code inside if is executed else code inside else block is executed )

//? 3. If -else if
//- (sometime we might want to keep tracking a set of condition one by one until one matches we use if else if form achieving this )

//? 4. Switch statement.
// - (switch statement evaluates an expression matching the expression value to a case clause, and executes a statement associated with that case, and as well as a statement in case that follows the matching case.)



//? 1.If /if - else
//  The if statement execute statement if specified condition is truthy
//  If the condition is falsely  so another statement can be executed
//  Example
// conditional statement
var tomorrow = "rain";
// if the given condition are true then executed given block of code
if (tomorrow == "rain") {
  console.log("TAKE A RAINCOAT");
  //if the given condition false then executed another block
} else {
  console.log("NO NEED TO RAINCOATS");
}

//? 2. Nested if-else
// - Nested if else means inside the if-else having another if-else ex..
//* write a program that work out weather of a given year is leap year so leap year having the
// 366 day (leap year mean exactly divided by 4 also divided by 400 expect it divided by 100 then it
//is not leap year)

var year = 2000;
if (year % 4 === 0 && year % 400 === 0) {
  // here we have to used the nested if statement
  if (year % 100 !== 0) {
    console.log("GIVEN YEAR NOT LEAP YEAR");
  } else {
    console.log("GIVEN YEAR IS LEAP YEAR");
  }
} else {
  console.log("GIVEN YEAR IS NOT LEAP YEAR..!");
}

//?  If else inside the if-else
// Else if check the condition for multiple times in first condition false then check the next condition if any condition true   then execute block of code .
// Which is used to perform different action based on different condition

// # Another way to if-else and else-if ladder

Example; //
// another way of the if-else and else-if condition
var name = "vishal";
var age = 20;
if (name === "vishal" && age === 27) {
  console.log("THIS IS NOT ACCURATE AGE");
} else if (name === "shinde" && age === 20) {
  console.log("THIS IS NOT VISHAL");
} else if (name === "vishal" && age === 20) {
  console.log("GIVEN DATA IS VISHAL S DATA"); //GIVEN DATA IS VISHAL'S DATA
} else {
  console.log("INVALID DATA !");
}
// In the case of multiple condition only first logical condition which evaluate to true will be execute to execute multiple statement group within  a block statement
