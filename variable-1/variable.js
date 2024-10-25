// variables :

//  1.@ what is variable in javascript ? 
// Def : variable is container to stored the value
//  container are location in memory used to stored value : (javascript variable is just name of stroage location)

// # variable are defined in 3 way
// 1. var : (function scope)
// 2. let : (block scope)
// 3. const : (block scope)

//  # NOTE :
// - In javascript variable type change or checked at run-time so it is dynamically type language. (allow you to change the variable type at runtime);

// =============================>==================================>

// 2.@ What is differences between var, let, const in javascript ?

// ==> 1. VAR :
//  1. var having the "functional scope" / or may be Global scope

// 2. if you defined variable with var this variable available throughout the function in which they are definedn.

// 3. Example :
function name(){
    var firstName = 'vishal';
    var lastName = 'shinde';
    console.log('Full name :' , firstName + ' ' + lastName); // Full name : vishal shinde
}
name() // call the function 
// if try to access this firstName and lastName outside the function it show the Refrences error:
// 4.  console.log('Full name :', firstName + lastName) // ReferenceError: firstName is not defined (so var having the function scope);
// 5. if you defined variable value using var later on you have to change the value 
var firstName = 'akshay';
console.log('Full name :', firstName); 
// 6. i.e you have to "update" and "re-declared" into the scope
// 7. we can also declared a variable again if it has been defined previousely in the same scope;
function name(){
    var firstName = 'vishal';
    var lastName = 'shinde';
    var firstName = 'akshu';
    console.log('Full name :' , firstName + ' ' + lastName); // akshu shinde (i.e here you have to also redeclared the variable)
}
// 8. Hoisting are allowed:
// 9. var variable can be declared without initialization
// 10. it can be accessed bofore without initialization as default value is undefined:

// --------------------------------------------------------------------------------------

// 2. LET :
// 1. let having "Block-scope:"
// 2. if you defiend any variable with let so this variable only available block where they have defined.
// 3.Ex. 
function bioData(){
    let name = 'vishal';
    let age = 28;
    console.log('name :' , name + ' ' + 'age :', age); // name : vishal age : 28
    if(true){
    let lastName = 'shinde'
    console.log('fullname:', name + lastName); // vishalshinde
    }
    console.log('full name :', name + lastName);// ReferenceError: lastName is not defined (let having blcok scope outside the block scope we are not able to acess the lastName)
}
bioData();

// 4. you have to update or change the value of the let variable in the same scope 
function bioData(){
    let name = 'vishal';
    // here we have to update or change the value of let variable like name (ot overwrrite the previous value)
    // let name='akshu';
    name = 'askshu';
    let age = 28;
    console.log('name :' , name + ' ' + 'age :', age); //name : akshu age : 28
    if(true){
    let lastName ='vishal' ;
    console.log('fullname:', name + lastName); // vishalshinde
    }
    // console.log('full name :', name + lastName);// ReferenceError: lastName is not defined (let having blcok scope outside the block scope we are not able to acess the lastName)
}
bioData();
// 5. but you can not declared same let variable in the same scope it show the  SyntaxError: Identifier 'name' has already been declared
// 6. let variable declared without initialization;
// 7. let variable can not access before without initialization otherwise it will get ReferenceError: Cannot access 'fullName' before initialization

// console.log('fullname', fullName);
// let fullName;
// Hoisting are not allowed.

// -----------------------------------------------------------------------------------------------

// 3. CONST :
// 1. const having the block scope:
// 2. if you defined variable using the const it accessible within block only where you have to declared.
// 3. ex :
function math(){
    const MI = 3.14;
    console.log('math', MI);
};
math()
// console.log('math', MI);  // ReferenceError: Mi is not defined (i.e it is accessible only within the block scope)
// 4. if you defined variable using const you can not change the value later in your function
// 5. if you defined variable using the var you can not updated or changes its value also you are not able to re-declared the variable in same scope;
// 6. Hoisting are not allowed 
// 7. it can not redeclared without initializtion
// 8. it can not be accessed before without initialization and it can notbe declared without initialization.



// NOTE :
// 1. If you declare variable  as var so its by default initialized as undefined.
// 2. If you declare variable as let and const it can not initialize by default  

// 3.@  What is difference between let const and var :

// # VAR :
// Scope :==> functional scope 
// Accessibility :==> variable declare by var  available throughout the function in which they are declare
// Declare without initialization or not :==> in var we have to declare without initialization 
// Access without initialization :==>  if you used var you access before without initialization as its default value is undefined
// Re-declare :==> if you defined variable you have to redeclare the variable value
// (i.e it can update or re-declare the  into the scope) (it allow redefined or reclared)
// Update :==> if you defined the variable value  var so later on you have to change the  value
// Hoisting :==> hoisting allowed with var.

// # lET 
// Scope :==> Block scope
// Accessibility  :==> variable declared by let this variable  available only block where they are defined .
// Declare without initialization or not :==> in let  we have to declare without initialization  
// Access without initialization :==>  if you used let you can not  access  Before without initialization  otherwise it show the references error
// Re-declare :==> if you defined variable with let  we can not redeclare more then once if you defined that previously same scope(if you defined variable with let so you can not redeclare with same scope with same name  (not allowed to redefined or redeclare))
// Update :==> if you defined the variable value  as  let  so later on you have to change or update the  value
// Hoisting :==> hoisting is not allowed in let  (it is allowed but not initialized)

// # CONST :
 
// Scope :==> block scope
// Accessibility  :==> if you declare variable as const so it having the block scope so which can access into the block whatever it defined
// Declare without initialization or not :==>  it can not declare without initialization   You can't declare a const variable without assigning it a value, (// SyntaxError: Missing initializer in const declaration)
// Access without initialization :==>  const  can not be accessed without initialization and Cannot be redeclared: Once a const variable is initialized, it cannot be redeclared or reassigned a new value
// Redeclare :==> you can not redeclare variable more then once if you defined it previously in the same scope
// Update : if you define a variable using the const you can not change the value later in your function (it can not update value once it is defined.)
// Hoisting : Hoisting not allowed  (it is allowed but not initialized.)


// 4 @ What is the concept of variable shadowing in java script ?
// 1. Def : Variable shadowing is nothing but variable declared in the inner scope having the same variable name defined on its outer scope the value in the variable assigned in the inner scope this is known as varailabe showding.
// 2. Shadowing occurs when a variable in an inner scope has the same name as a variable in an outer scope, and the concept of scope determines which variable is accessible in a given context. (variable with the same name exists in both the outer and inner scope, the inner variable takes precedence within its scope.)
// ex.
 let x =20;
 function outerFunction(){
    let x =10;
    console.log('value of x in inner scope ', x);
    if(true){
        let x = 30
        console.log('value of x in block scope', x);
    }
 }
 console.log('value of x in outer scope', x);
outerFunction();

// 3. variable shadowing can occur with variables declared using any of the three keywords: var, let, and const
// ex.
var a = 'shinde'
function test(){
    if(true){
        // shaddow var varialbe with let 
        let a = 'vishal';
        console.log('value of a :', a); // vishal
    }
    console.log('value of a outside the block scope :', a); // shinde
}
test();
// 4. variable shadowing does not cross the boundry of scope

// 5. you have to shadow var variable with let variable but not vice-versa liek let variable with var
// ex;
// let a = 'shinde'
// function test(){
//     if(true){
//         // shaddow var varialbe with let 
//         var a = 'vishal';
//         console.log('value of a :', a); // vishal
//     }
//     console.log('value of a outside the block scope :', a); // shinde
// }
// test();  // SyntaxError: Identifier 'a' has already been declared

// 6. if you try to shadow let variable with var it called illegal shadowing (it give the error variale already defined)
// 7. shadowing with var :
// ex.
var data = 'akshu';
function data1(){
    var data = 'vishal';
    console.log('data', data); // vishal
    if(true){
        console.log('data1', data); // vishal
    }
}

data1();
console.log('data', data); // akshu
// Redeclaring var within the same function is allowed (even though it's not good practice), and it can lead to unexpected bugs.

// ex. 
var z = 100;
if (true) {
  var z = 200; // This shadows the outer `z`, but also modifies the outer `z` because `var` is function-scoped
  console.log(z); // Logs 200
}
console.log(z); // Logs 200 (outer variable is modified, unlike `let` or `const`)

//Note : 
//  1.  Variable shadowing is when a variable with the same name is declared in an inner scope as a variable in an outer scope. In such cases, the variable in the inner scope hides the variable in the outer scope. Any references to the variable within the inner scope will refer to the inner variable, effectively "shadowing" the outer variable
// 2. So you have to shadow var variable with let but not vice-versa like let variable to var.
// 3. If you do let variable shadow with var it called  illegal shadowing (it given the error variable already defined )




