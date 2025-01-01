//? window object 

// - main container
// - also you can say Global object
// - any operation related to the entire browser window can be part of window object

// window ==> Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}

// window.document ==> #document (chrome://new-tab-page/)

// window.localStorage ==> Storage {length: 0}

// window.href ==> undefined

// window.location ==>  Location {ancestorOrigins: DOMStringList, href: 'chrome://new-tab-page/', origin: 'chrome://new-tab-page', protocol: 'chrome:', host: 'new-tab-page', …}

// window.location.origin ==>'chrome://new-tab-page'

// location.href ==>   'chrome://new-tab-page/'


//* all the members like objects, methods or properties if they are the part of the window object then we do not refer the window object 
// (if you used any properties of and method of the window object we no need to write window object each time)

// 1. Window has method, properties, and object ex.
// 2. setTimeout(), setIntervals(), are the method where
// 3. a document is an object of the window and 
// 4. it also has a screen object of the window and it also has a screen object with properties describing the physical display.


//? Difference between window and document 
//* window :
// - main container
// - also you can say Global object
// - any operation related to the entire browser window can be part of window object
// all the members like objects, methods or properties if they are the part of the window object then we do not refer the window object 
// (if you used any properties of and method of the window object we no need to write window object each time i,e without window keyword we have to all the properties and method of the window object)
// window has method, properties and object ex setTimeout(), seeINterval() are method where Document is the object of the window and it also has a screen object with properties describing the physical display


//* Document
// where the DOM is the child of window object 
// when in DOM we need to refer the document if we want to use document object method or properties
// Document just the object of the global object that is window which deal with the document html element themselves 



//? BOM (browser object method:)

// window.innerHeight / window.innerWidth : return innerHeight and hight of the browser content are including toolbars and scrollbars

// window.console ==> represent the browser debugging console
    // allow logging message using log(), warn() and error() 

// window.open('http://127.0.0.1:5500/DocumentObject/app.html','_blank');==> open new page with give url 

// window.scrollx / window.scrolly ==> represent the number of pixels that the document is currently scrolled horizontally and vertically.

// window.outerWidth / window.outerWidth ==> provide the hight and width of the whole browser window(including toolbars and borders)


// window.localStorage ==> provide way to store key-value pairs persistently on the browser on the users's device
    // allowing storing data beyond the lifetime of a single page session


//? navigator object :
// provide information about the browser
// navigator.userAgent
// navigator.language

//? function alert/confirm/prompt are also part of Bom
//* They are directly not related to the document but represent pure browser methods of communicating with the user.
// 1. // alert(location.href)
// if(confirm('you want to visit to the current webpage')){
//     location.href='www.youtube.com'
// }

//? # DialogBox (used to defined different type or pop-up to the user:)
alert('Hello welcome to javascript ?');  // showing single button to proceed further execution
confirm('Hi') // having two button like ok or cancel :(Give the confirmation) ==> return result in the form of true and false
const name = prompt('enter user name'); // used to get input form the user

//? location object:
// represent the current url of the browser
// window.location.href 
// window.location.hostname

//? History object:
// represent session history, allow navigation through the browser history
// window.history.back();
// window.history.forward();

//? screen object 
// represent information about users screen
// Ex window.screen.width, widow.screen.height

//? navigator object :
//*the javascript navigator is used for browser detection it can be used to get browser information such as appName, appCodeName, userAgent
//? navigator.userAgent(property) ==> return the user agent string of browser
// ex console.log(navigator.userAgent)

//? navigator.language(property) ==> return the language preferences of the user browsers
// ex. console.log(navigator.language)

//?navigator.cookieEnabled(Property): ==> indicates whether cookies are enabled in the browser
// console.log(navigator.cookeEnabled)

//?navigator.platform(property) ==> return the platform which the browser is running
// ex.console.log(navigator.platform)

//?navigator.onLine(property) ==> indicates whether the browser is online
// console.log(navigator.onLine

//? History object :
//* the javascript history object represent an array of urls visited by the user.by using this object you and load previous, forward, or any perticular page.


//? location object

//? window.location.href(property) ==> return set compleat url of the current page
// console.log(window.location.href)

//? window.location.hostname(property) ==> return the domain name of the web host
// console.log(window.location.host)

//? window.location.search(property) ==> // return the query string part of the urls
// console.log(window.location.search)

//? screen object 
//? window.screen.width and window.screen.hight(properties)
// represent inner width and hight of the screen
// console.log(window.screen.width)

//? window.screen.availWidth and window.screen.availHight(properties) ==> represent the available width and hight of users screen (excluding taskbar)
// console.log(window.screen.availWidth)

//? window.screen.colorDepth(property);
// return the number of bit used to represent the color of each pixel
// console.log(window.screen.colorDepth)

//? window.screen.orientation(Property)
// return the current orientation of the user's screen
// console.log(window.screen.orientation)