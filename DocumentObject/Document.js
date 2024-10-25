// Document object

// - document is a child of a window object (Whatever present inside the document is always present inside the window because the document is a child of the )
// - Document is just an object of the global object that is a window which deals with the document and the html elements themselves.
// - If you have any work regarding the html then you have to use a document object.

// WINDOW :--> DOCUMENT OBJECT MODEL (DOM) -->
//              DOCUMENT (Deal with document the html element themselves)
         // --> BORWSER OBJECT MODEL (BOM) -->
                    // OBJECT LIKE --> NAVIGATIOR, SCREEN, LOCATION, FRAMES, HISTORY, XMLHTTP REQUEST,
                    //  method liek  SETINTERVAL(), SETTIMEOUT() (Deal w ith broser component)
                    // PROPERTIES LIKE --> innerHight, and innerWidth ( properties show the width and height of the browsers.)
                    // Functions alert, confirm, and prompt are also part of Bom (They are directly not related to the document, but represent pure browser method of communicating with the user )

        // --> JAVASCRIPT  --> OBJECT , ARRAY , FUNCTION

// NOTE :
//  1. $0 used to get the current selected element


// DOM Nevigation

// DOM --> Document
                //First element inside the document is Html
 
                 //  html (Html is the root element of the document.)
                // body --> head
                // After Html is having body tag (contain another tag like anchor tag paragraph tag so on ) and Head tag (head tag contain title , meta data, and links )    


// 1.@ what is the root element of the Document
//  document.documentElement  method return the root element 

// 2.@ How to return the document body
// document.body

// 3.@ How to return the head of the document
// document.head

// 4.@ How to find out how many child present in body tag
// document.body.childNodes



//  5.@ If you want actual element inside the body so you have used 
// document.body.children
// HTMLCollection [div.main] // Return the actual 0r parent child in the body.



//6.@ whether an element has a child node or not ?
// document.body.hasChildNodes()
// true




// 7.@. What is used of creatElement() 
// Used to create dynamically html element nodes with specified name via javascript.
// This method take the name of the element as the parameter and create new element node




// 8,@.How to find a child in a Dom tree.

// 1. children: Returns only element nodes.
const bodyChildren = document.body.children;
console.log(bodyChildren); // Logs the list of child elements

// 2.childNodes: Returns all nodes (elements, text, comments).
const bodyChildNodes = document.body.childNodes;
console.log(bodyChildNodes); // Logs all child nodes, including text nodes

// 3. firstChild: Returns the first node (can be text, comment, or element).
const bodyChildNodes1 = document.body.childNodes;
console.log(bodyChildNodes1); // Logs all child nodes, including text nodes


//4.  firstElementChild: Returns only the first element, ignoring text and comments.
const firstElementChild = document.body.firstElementChild;
console.log(firstElementChild); // Logs the first element node, skipping text nodes

// it return the firstElement child then its insided child (Find first child of inside first Child)
//document.body.firstElementChild.firstElementChild

// -------------------------------------------------------------------------

// 9. @ Differences between firstChild and firstElementChild.

// FirstChild return the text which is first child when you give whitespace, and enter or tab in body it return first child as text 
// But firstElementChild always returns the actual child element of the body.

// If you want to change the color of the property so you have to change it using document.style.property of css.

// ----------------------------------------------------------




// 1 In document object find out the parent node 👍
// Used parentNode  → return the parent element of the body
// document.body.parentNode

// 2 parentNode can return any type of node (including Document or DocumentFragment), while parentElement only returns an element.
// document.body.parentElement

//also used 
// document.head.parentNode
// document.head.parentElement

// Also if you search the parent element of head it returns the same.

// --------------------------------------------------------

//  * How to find out the siblings of the body and head

// document.head.nextElementSibling → body (finds the next sibling element after head).
// document.head.nextSibling → text (finds the next sibling node, which may include text, comments, or elements).
// document.head.previousElementSibling → null (there’s no previous element sibling for head).
// document.body.previousElementSibling → head (finds the previous sibling element before body).
// document.body.previousSibling → text (finds the previous sibling node, which may include text or elements).
// document.body.nextElementSibling → null (there’s no element sibling after body).
// document.body.nextSibling → text (finds the next sibling node, often a text node or comment).


// nextElementSibling and previousElementSibling return element nodes.
// nextSibling and previousSibling return any node (element, text, or comment).




// =============================================================================

// 1. How to search the element and the references

// Document.getElementbyId(‘id/class’). innerHtml = 'rendering or replacing content’.
//  use id in html tag it only tackles only unique elements.
// When you defined id used #
// If you defined the class used .
// When you defined id used #
// If you defined the class used .


// InnerHtml 
// it is property (or part of the document object model )
// That allow javascript code to manipulate a website being display
// allows rendering and replacing everything within the Given dom element.
// InnerHtml used to add dynamic html on html documents.


// you have to used following method 

// 1. const data = document.getElementsByClassName('child1').innerHtml = document.body.style.color = 'green';
// 2. const data = document.getElementById('12').innerHtml = document.body.style.color = 'red';
// 3. const data = document.getElementsByTagName('div').innerHtml = document.body.style.color = 'red'
// 4. const data = document.getElementsByName('vishal').innerHtml = document.body.style.color = 'red';

// =============================================================================================



// ** Searching in dom objects 

//  1 .Quary Selector  
// Quaryselector having the class name of id name.
// const child = document.querySelector('.main');
//  return the first matching value where 

// - const data = document.querySelector('.child1').innerHtml = document.body.style.color = 'green';



// querySelectorAll  return all the matching elements.
// const data = document.querySelectorAll('.child1').innerHtml = document.body.style.color = 'green';

// ==========================================================================================
// What is the difference between getElementByid or quarySelector ?

//  getElementByid
// Syntax
// document.getElementById(‘id’);
// Return references to the element by its id
// If the element with the specified Id is not in the document it will return null.

//  getElementByClass
// Syntax
// document.getElementByClass(‘id’);
// Return references to the element by its className
// If the element with the specified className is not in the document it will return null


// What is a quarry selector ?
// Syntax
// document.quarySelector(selectors);
// Return the first element within the document that matches the specified group of selectors
// It returns null if not found matches.

