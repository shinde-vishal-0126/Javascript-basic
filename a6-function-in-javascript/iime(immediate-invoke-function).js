// immediate invoke function :

// IIME: ( self - contained block of code )
// immediately invoked function expression:

// immediately invoke function expressions is javascript function that is defined and executed immediately after it creation.
// it is a way to create self - contained block of code that does not interfere with the surrounding code and execute immediately.
// IIFEs are used to create a scope for variables, avoiding polluting the global namespace.
// () after the function executes it immediately.
// (IIME function executed immediately after its defining)

//iime function defined inside the parenthesis
(function (a,b){
    console.log(a+b)
})(10,12); // here call immediately after it declaration


// also you have defined iime function as function expression

const result =(function(a,b){
    console.log(a*b)
    // when you have defined function expression you need return statement

})(12,23)


//? use case :

// 1. execution code on load:
(function() {
    console.log('Executing immediately on load');
})();


// 2. Avoiding Global variable pollution:
(function() {
    let count = 0;
    console.log('Count:', count);
})();
// `count` is not accessible outside the function


// 3. Creating module like behavior:
const Module = (function() {
    let privateVar = 'I am private';
    
    return {
        getPrivateVar: function() {
            return privateVar;
        }
    };
})();

console.log(Module.getPrivateVar()); // Output: I am private

