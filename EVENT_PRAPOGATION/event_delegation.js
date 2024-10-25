// EVENT DELEGATION
// EVENT DELEGATION IS JAVASCRIPT PATTERN EFFICIENTELY HANDALED EVENT

// Event delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of adding event listeners to individual child elements. The event listener on the parent element can handle events triggered by its child elements due to event bubbling.
// So event can be added to parent element instead of adding every element 
// Event delegation is a technique in JavaScript where you attach a single event listener to a common ancestor of multiple elements, instead of attaching individual event listeners to each of those elements.

// imp:
// 1.  Event Bubbling: 
// When an event is triggered on an element, it first runs the handler on that element, and then it propagates (or "bubbles") up to its parent elements. This means that if you click a child element, its parent and all other ancestors will also receive the event, unless stopped.
//  2. Single Event Listener: Instead of attaching event listeners to multiple child elements, you can take advantage of event bubbling by placing a single listener on a common parent. When the event bubbles up to the parent, you can determine which child element triggered the event by using event.target.


// Advantages of Event Delegation:
// 2. Performance:
// You avoid attaching multiple event listeners to each child element, reducing memory usage, especially in cases where many child elements are created dynamically.
// 2. Dynamic Content:
//  It allows handling events on elements that are added to the DOM dynamically after the initial page load, without needing to reattach event listeners.

// This is particularly useful for optimizing performance and managing events on a large number of elements efficiently.
// When an event occurs, the listener checks the event.target property to determine which specific element triggered the event
// (explanation : event delegation refer to the process of using event propagation (bubbling  to handle event at higher level in the dom then the element on which the event oriented. ))
