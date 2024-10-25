
// Shortcut to execute the if else condition  (Shortcut method of the if -else)
// The conditional (ternary) operator is to take three arguments.
// (based on the condition it return expression)
// Variable name = (condition) ? value1 : value2
var age = (age > 18 ) ? 'ELIGIBLE FOR VOTE' : 'NOT ELIGIBLE FOR VOTE'
console.log('VORTER ARE: ', age); //VORTER ARE:  ELIGIBLE FOR VOTE


// you can also chain multiple ternary operators:
const isMember = true;
const isStudent = false;
const price = isMember ? (isStudent ? "5 USD" : "10 USD") : "15 USD";
console.log(price); // Output: 10 USD


//  multiple condition for Displaying Message
const status = 'offline';

const message = status === 'online' ? "You are online" :
                status === 'away' ? "You are away" :
                status === 'offline' ? "You are offline" : 
                "Unknown status";

console.log(message); // Output: You are offline


// Example : 
const time = 13;

const greeting = time < 12 ? "Good Morning" :
                 time < 18 ? "Good Afternoon" : 
                 "Good Evening";

console.log(greeting); // Output: Good Afternoon
