// # Switch statement is alternative if-else ladder
// 1. Switch statements evaluate  the expression matching expression value  case clause and execute a statement which is associated with that particular case.
// 2. Control statement execute set of logic  based on the result of comparison 
// 3. Implement decision making logic 
// 4. Evaluate an expression matching the expressions value to a case cause and execute statement associated with that case We have to use break statement in switch statement
// Example 
// switch statement 
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
