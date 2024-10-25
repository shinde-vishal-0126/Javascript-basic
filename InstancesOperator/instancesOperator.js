// instances operator determine if the constrotur prototype appears in prototype chain of objects
// it return ture of false (so instances of operator is binary operator) 
// i.e it used to test object is given type or not (  check if an object is an instances of the type )
// check if the constructor.prototype is object's prototype chain or not 


// Here we have to defiend the a person type using the constructor function pattern
function Person(name){
    this.name;

}
let newPerson = new Person('vishal');
console.log('person', newPerson);
// here we have to check if the newPerson in instances of an person object or not
console.log("return value" ,newPerson instanceof Person); //its true becaue newPerson appears in person prototype chain and person prototype in 
//object prototype


// defiend call using ES6 Class
// Here create in example defined the person class and use the instancesOf operator to check if an object is an instances of the class

class Person1{
    constructor(name){
        this.name = name
    
    }
}

class employee extends Person1{
    constructor(name, title){
        super(name);
        this.title = title
    }
}
 let newEmp = new employee('prasad', 'abc');
 console.log('newEmp', newEmp)
 console.log(newEmp instanceof employee)
 console.log(newEmp instanceof Person1)
 console.log(newEmp instanceof Object);
 let newPer = new Person1('vishal')
 console.log(newPer instanceof Object);
 console.log(newPer instanceof Person1);
 console.log(newPer instanceof employee);
