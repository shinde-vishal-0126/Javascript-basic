//? # Switch statement is alternative if-else ladder

// Control statement execute set of logic  based on the result of comparison 
// Implement decision making logic 
//! Evaluate an expression matching the expressions value to a case cause and execute statement associated with that case We have to use break statement in switch statement
//! switch statement : The switch statement is used to perform different action based on different condition
// execute and expression so expression matching the expression value to cause and execute
// statement associated with the case.

var area = 'circle'
const pi = 3.14;
var length=10;
var width = 20;
radius = 10;
switch(area){
    case 'circle':
        const areaCircle = pi + radius ** 2
        console.log('AREA OF CIRCLE', areaCircle);
        break;
    case 'triangle':
        const triangle = ((length * width) / 2)
        console.log(triangle);
        break;
    default :
        console.log('NO DATA')
}
// That allow to program to execute different block of code based on the value as of an expression


// ? why is there a break statement after each case in the switch statement ?
    // The break statement used to exit the switch statement after the corresponding case is executed.
    // break statement used to preventing the fall-through the subsequent statement. 
