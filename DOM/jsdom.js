//example 1

//grab the element first
//document.querySelector('.')  //select all
// let hold = document.getElementById("changeTextbutton").addEventListener("click",()=> {
//      let paragraph = document.getElementById("myParagraph");
//      paragraph.textContent = 'I am changed';
// } )
//addEventListener('what to listen', 'what to do'))
//console.log(hold); //print what is holding

//example 2
//  let buttondata = document.getElementById("highlightFirstCity").addEventListener("click",function(){
//     let city =document.getElementById("citiesList");
//     city.firstElementChild.style.backgroundColor = 'yellow';
//     city.firstElementChild.style.fontSize = '10px';
//     city.firstElementChild.style = 'backgroundColor= yellow ,shadow: 10px 10px 10px black; border: 1px solid black';

//     //console.log(city.firstElementChild.classList); //show all the list of the class  - add the class to the llist element
//     //html is themarkuop lanague , and DOm is the processer elemnt in document tree in memory ,document trre is generated using the cpp that is the dom
// })

//example -3
// let changecoffee =  document.getElementById("changeOrder").addEventListener("click",function(){
//     let coffeetype =  document.getElementById("coffeeType");
//     coffeetype.textContent = 'espresso';
//     coffeetype.style.backgroundColor = 'yellow';
//     coffeetype.style.fontSize = '10px';
 
// })


//example-4
// document.getElementById("addNewItem").addEventListener("click",function(){
//   //  let tasklist = document.createElement("li"); //create the element
//     let newItem = document.createElement("li");
//     newItem.textContent = "eggs"; //add the text to the element
//     document.getElementById("shoppingList").appendChild(newItem); //append the element to the parent element
// })

//example-5
// document.getElementById("removeLastItem").addEventListener("click",function(){
//     let tasklist = document.getElementById("taskList");
// //    tasklist.removeChild(tasklist.lastElementChild);  //tasklist.remove() - will remove all
//     tasklist.lastElementChild.remove(); //remove the last element in the list
// })


//example-6
// document.getElementById("clickMeButton").addEventListener("click",function(){
//     alert("You clicked me");
// })

//-there are so many events mouover,mousedown,dblclick,click,keydown,keyup,change,submit,reset,load,unload,resize,scroll,select,blur,focus,error,online,offline,contextmenu,drag,dragend,dragenter,dragleave,dragover,dragstart,drop,keydown,keypress,keyup,mousemove,mouseout,mouseover,mouseup,mousewheel,scroll,select,submit,unload


//example-7
// document.getElementById("teaList").addEventListener("click",function(event){
//      //console.log(event); //to get info about the event that was triggered
//        // console.log(event.target); //to get the target element
//        if (event.target && event.target.matches(".teaItem")){  //can match for particular selector
//             alert("You Selected "+ event.target.textContent);
//        }
// })  


//example-8
// document.getElementById("feedbackform").addEventListener('submit',function(event){
//     alert(`Form Submitted.\nYour Response is:  ${event.target[0].value}`);
// })


//example-9
// document.addEventListener('DOMContentLoaded',function(){
//     let domStatus = document.getElementById("domStatus");
//     domStatus.textContent = 'DOM Loaded Successfully';
//     domStatus.style.color = 'green';
//     console.log('DOM Loaded Successfully');
// })

//example-10




// - ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -->

// In this example, we use document.getElementById() to access the content div element by its ID.
// We then use the innerHTML property to change the content of the element to "Hello, JavaScript!".
// We also use the style property to change the style of the element.
//----------------------------------------------------------------------------------------------
// Window Object:
// The window object represents an open window in a browser.
// It provides access to the document object, which represents the HTML document displayed in the window.
// The window object also provides methods and properties to control the browser window, handle events, and interact with the user.

// Document Object:
// The document object represents the HTML document displayed in a browser window.
// It provides access to the elements and content of the document.
// The document object is a part of the DOM (Document Object Model) and is the root node of the document tree.

// Element Object:
// The element object represents an HTML element in a document.
// It provides access to the properties and methods of the element, such as its content, attributes, and style.
// The element object is a part of the DOM (Document Object Model) and is a node in the document tree.

// Node Object:
// The node object represents a node in the document tree.
// It is a generic object that can represent different types of nodes, such as elements, text, comments, and more.
// The node object is a part of the DOM (Document Object Model) and is the base class for all other node types.

// Event Object:
// The event object represents an event that occurs in a document.
// It provides information about the event, such as the type of event, the target element, and the event handler.
// The event object is passed as an argument to event handlers and can be used to handle and respond to events in the document.

// Event Listener:
// An event listener is a function that is called when an event occurs in a document.
// It is used to handle and respond to events, such as clicks, keypresses, and mouse movements.
// Event listeners are attached to elements in the document and are triggered when the specified event occurs on the element.

// Event Propagation:
// Event propagation is the process of how events are handled in a document.
// It is a way to handle events at different levels of the document tree.
// There are two phases of event propagation: capturing phase and bubbling phase.
// In the capturing phase, the event is handled by the topmost element in the document tree.
// In the bubbling phase, the event is handled by the bottommost element in the document tree.  

// Example of Event Propagation:
// HTML:
// <div id="outer">
//   <div id="inner">
//     Click me
//   </div>
// </div>

// JavaScript:
// const outer = document.getElementById('outer');
// outer.addEventListener('click', () => {
//   console.log('Outer div clicked');
// });

// const inner = document.getElementById('inner');
// inner.addEventListener('click', () => {
//   console.log('Inner div clicked');
// });
// When you click on the inner div, the event will first be handled by the inner div's event listener,
// and then it will propagate up to the outer div's event listener.
// This is an example of event bubbling.

// Example of Event Capturing:
// HTML:
// <div id="outer">
//   <div id="inner">
//     Click me
//   </div>
// </div>

// JavaScript:
// const outer = document.getElementById('outer');
// outer.addEventListener('click', () => {
//   console.log('Outer div clicked');
// }, true);

// const inner = document.getElementById('inner');
// inner.addEventListener('click', () => {
//   console.log('Inner div clicked');
// }, true);
// When you click on the inner div, the event will first be handled by the outer div's event listener,
// and then it will propagate down to the inner div's event listener.
// This is an example of event capturing.
// The third argument to the addEventListener method is a boolean value that indicates whether the event should be
// handled in the capturing phase (true) or the bubbling phase (false).
// By default, the event is handled in the bubbling phase.
// The capturing phase is less commonly used, but it can be useful in certain situations, such as
// event delegation or handling events on the document or window objects.

// Event Delegation:
// Event delegation is a technique in which a single event listener is attached to a parent element
// to handle events that occur on its child elements.
// This allows you to handle events on multiple elements with a single event listener,
// rather than attaching event listeners to each element individually.
// Event delegation is useful for optimizing performance and reducing the number of event listeners needed in a document.

// Example of Event Delegation:
// HTML:
// <div id="container"></div>
//   < class="item">Item 1</ div>
//   < class="item">Item 2</ div>
//   < class="item">Item 3</ div>

// JavaScript:
// const container = document.getElementById('container');
// container.addEventListener('click', (event) => {
//   if (event.target.classList.contains('item')) {
//     console.log('Item clicked:', event.target.textContent);
//   }
// });

// In this example, we attach a single event listener to the container element to handle click events on its child elements.
// When a click event occurs on an item element, we check if the target element has the item class,
// and if so, we log the text content of the element.   
// This allows us to handle click events on multiple item elements with a single event listener on the container element.

// AJAX (Asynchronous JavaScript and XML):
// AJAX is a technique for creating interactive web applications that can update parts of a web page without reloading the entire page. 
// It allows you to send and receive data from a server without reloading the page.
// AJAX uses a combination of JavaScript and XML (or JSON) to send and receive data asynchronously.
// It is commonly used to build dynamic web applications, such as chat applications, search engines, and online forms.
// AJAX can be used to update content on a web page, submit form data, and fetch data from a server in the background.
// It is an essential tool for building modern web applications.
// Example of AJAX using the XMLHttpRequest object:
// JavaScript:
// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.example.com/data', true);
// xhr.onreadystatechange = function() {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     const data = JSON.parse(xhr.responseText);
//     console.log(data);
//   }
// };
// xhr.send();
// In this example, we create a new XMLHttpRequest object, open a GET request to the specified URL,
// and set up an event listener to handle the response when it is received.
// We then send the request and log the data to the console.    
// AJAX is a powerful tool for building interactive web applications and enhancing the user experience.
// It allows you to update content on a web page without reloading the entire page, making it an
// essential technique for building modern web applications.
// Example of AJAX using the fetch API:
// JavaScript:
// fetch('https://api.example.com/data')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error(error);
//   });    
// AJAX is a powerful tool for building interactive web applications and enhancing the user experience.
// It allows you to update content on a web page without reloading the entire page, making it an
// essential technique for building modern web applications.
// Example of AJAX using the fetch API:
// JavaScript:
// fetch('https://api.example.com/data')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error(error);
//   });    
// In this example, we use the fetch API to send a GET request to the specified URL and handle the response using
// the then method to log the data to the console.
// The fetch API is a modern alternative to the XMLHttpRequest object and provides a more
// flexible and powerful way to work with AJAX requests in JavaScript.

// Cookies:
// Cookies are small pieces of data stored on the client's computer by a website.
// They are used to store information such as user preferences, session data, and authentication tokens.
// Cookies are sent to the server with each request, and the server can use them to identify the user and
// provide personalized content.