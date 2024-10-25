// 1. Input event in javascript 
// The onChange event occurs when the value of an element has been changed
// For radioButtons and checkboxes, the onchange event occurs when the checked status has been changed.

// you have to defined the onChange event using the tow way
// 1. using onClick= function
// 2. using add EventListner
    //If you defined the addEventListner so no need to define an onchange event in the program is defined in addEventListener argumen
    // If you used an onchange event so after getting the references by using getelementById, querySelector, getelementByClass   you have to use value. Property of the onchange event .
    // like :   const inputChange = document.querySelector('#ice').value;
    // Value get the onchange value of the element
    // But if you deal with the text then you have to used the innerHtml property of the dom 



    // what is differences bewteen the onclick() event and addEventListner()\

    // onClick: 
        // 1. It's a property on DOM elements that you assign a function to handle the click event.
        // 2. When you assign a new function to onClick, it overwrites any previously assigned handler. You can only have one onClick handler at a time.
        // 3.  To remove an event handler, you can set element.onclick = null;, which will remove the click handler.
        // 4.  Does not provide such options. It is limited to handling the event in a straightforward way.
        // 5. Always listens to events during the bubbling phase, meaning it fires after the child elements have handled the event.

    // addEventListener: 
        // 1. It's a method used to register event listeners for specific events (not just click) on DOM elements.    
        // 2. Allows you to attach multiple event listeners to the same event. Each listener will be called when the event occurs, and they won't override each other.
        // 3. You need to call removeEventListener to remove a specific listener, and it requires a reference to the exact function that was added. (element.removeEventListener("click", handleClick);)
        // 4. addEventListener: Provides more flexibility with options like { once: true }, which makes the event listener execute only once and then automatically remove itself
        // 5.  Allows you to choose whether to listen during the capturing phase (before child elements) or the bubbling phase (after child elements) by passing the { capture: true } option.