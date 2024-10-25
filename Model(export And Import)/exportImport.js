//how to export variables, function , and class , from a module and resume them into another model.
//In Es6 module file executed in strict mode only, (means that any variable or function declared in the module won’t be added automatically to the global scope)

//You can not export an anonymous function of the class using this syntax.


// export statement exposes the message variable to other modules.
export let message = "Hi, vishal";

// you have to export variable, function , class so you place the expor keyword infront of its

export function getMessage(){
return message

}

export function setMessage(message){
    message = msg

}

export class prson {
    constructor(){
        super()
    }
}

// also you have to defined the function first then later you can exoprot it 

function foo(){
    return "Hello"
}
function bar(){
    return "buy"
}
export {foo}; // here you have to exprot foo funciton in another module but not bar because it is not defined as exprot (so it is private funciton)