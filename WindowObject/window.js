// window object 

// - main container
// - also you can say Global object
// - any operation related to the entire browser window can be part of window object

// window
// Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
// window.document
// #document (chrome://new-tab-page/)
// window.localStorage
// Storage {length: 0}
// window.href
// undefined
// window.location
// Location {ancestorOrigins: DOMStringList, href: 'chrome://new-tab-page/', origin: 'chrome://new-tab-page', protocol: 'chrome:', host: 'new-tab-page', …}
// window.location.origin
// 'chrome://new-tab-page'
// location.href
// 'chrome://new-tab-page/'

// 1. Window has method, properties, and object ex.
// 2. setTimeout(), setIntervals(), are the method where
// 3. a document is an object of the window and 
// 4. it also has a screen object of the window and it also has a screen object with properties describing the physical display.



// 1. // alert(location.href)
// if(confirm('you want to visit to the current webpage')){
//     location.href='www.youtube.com'
// }

// 2 .nevaigata to the back page 
// window.history.back() ---> return to the previous page 


// # DialogBox (used to defined different type or pop-up to the user:)
alert('Hello welcome to javascript ?');  // showing single button to proceed further execution
confirm('Hi') // having two button like ok or cancel :(Give the confirmation) ==> return result in the form of true and false
const name = prompt('enter user name'); // used to get input form the user 
