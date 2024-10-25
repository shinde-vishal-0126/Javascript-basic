// EVENT

// 1. 4 way of writing Events in javascript (how to write event in javascript)
// 2. What is Event object
// 3. Mouse event in javascript
// 4 .Keyboard event in javascript 
// 5. InputEvent in javascript

//  * Html event are “things” that happen to html element
// When javascript is used in Html page , javascript reacts to these events.
//  Html event *
//  An html event can be something the browser does or something a user does.

// An html page has finished Loading
// An html input field changed
// An html button was clicked
// Often when events happen you may want to do something.


// Common HTML event
//  1. Onclick : the user click on html element
// 2. Onmouseover : The user move the mouse over an html element
// 3. Onmouseout : the user move the mouse away from an html element
// 4. onKeydown : the user pushes a keyboard key
// 5 .onChange : an html element has been changed.


// 4 ways to write events in javascript ..
// 1 using alert()  → using inline event
        //     <a href="#" class="button_su_inner" onclick="alert('Hi welcome')">
        // <span class="button_text"> Simple inline alert</span>
        // </a>


// 2.  By calling a function
        // <script>
        // const handaledChange = ()=>{
        //     alert("welcome to event object ")
        // }
        // </script>


// 3. using inline event : (HTML onClick =” ”  property and element.onclick)
        //     <script>
        //     const way = document.getElementById('event1');
        //     way.onclick = function(){
        //         alert('hi, how are you ?')
        //     }
        // </script>

// NOte
// If you are calling a function in an event like onclick we need to pass parentheses after the function name.
// In an inline event if you define the same event again and again it overrides the event and it shows the bottom (or last) event action.

// 4. using Event Listeners : (add Eventlisners and IE attach event ) 
        // AddEventListener() method has 3 arguments: first is type of event, and 2nd is callback function and third is optional like a boolean condition like true or false.
        // <script>
    
        // const way = document.querySelector('#event1');
        //  way.addEventListener('click', ()=>{
        //     alert('welcome to javascript')
        // })
        // </script>
 // If using addEventListener you have to call same event multiple time so it not override the same event it show event multiple time



//   Key Differences Between Inline Events and addEventListener:
//  1. Inline event handlers (onclick): They overwrite any previously set handler, so only one event handler can exist for a given event at a time.
// 2. inline event if you define the same event again and again it overrides the event and it shows the bottom of the event.


// 1. addEventListener: It allows attaching multiple event listeners for the same event on the same element. All attached listeners are executed when the event occurs, unless you manually remove them with removeEventListener.
// 2. addEventListner () : in addEventlistener if you define the same event again and again it does not override it call event one by one.



// What is an Event Object :
// Event Object is parent Object of the event Object :
