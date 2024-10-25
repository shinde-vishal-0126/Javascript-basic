// Jump statement 

// 1.  break
// The break statement is used to exit a loop (such as for, while, or do...while) or to exit a switch statement.
// and cursor pointer goes to the out of loop

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exits the loop when i is 5
    }
    console.log(i); // Will log 0 to 4
}



// 2. continue
// The continue statement skips the current iteration of a loop and jumps to the next iteration.
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // Skips the iteration when i is 5
    }
    console.log(i); // Will log 0 to 4 and 6 to 9
}


// 3. return 

// The return statement is used to exit a function and optionally return a value to the caller.
function sum(a, b) {
    return a + b; // Exits the function and returns the sum
}
console.log(sum(5, 3)); // Outputs 8
