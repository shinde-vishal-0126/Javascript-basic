//# class expression is similar to function 
//classes have expression from a class expression provide with a alternative way a defined a new class
// class express do not required an identifier after the class keyword and you can used class expression in variable declaration in variable 
// declaration and pass it into a function as an argument 


//class expression start with the keyword class followed by the class definition
// left side of the expression is person variable assigned to a class expression 
let Person = class{
    constructor(name){
        this.name = name
    }
    getName(){
        return this.name
    }
}
let person = new Person('vishal shinde');
console.log(person.getName());

// similar to function expression class expression are not hoisted
//it means you can not create instances of the class before its declaration 
