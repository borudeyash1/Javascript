
//advanced javascript-
/*Asynchronous javascript-
1. synchronous vs asynchronous : synchronous code is executed in sequence, one line at a time. Asynchronous code is executed all at once.
2. event loop : event loop is a single thread that performs all i/o operations asynchronously. It picks up the events from the event queue and pushes them to the call stack.

3. callbacks : callbacks are functions that are passed as arguments to other functions and are executed when certain conditions are met.

4. promises: promises are objects that represent the eventual completion of an asynchronous operation and its result.
5. async/await: async/await is a way to write asynchronous code that looks synchronous.
6. generators: generators are functions that can be paused and resumed.
7. iterators: iterators are objects that define a sequence and potentially a return value upon its termination.
8. proxy: proxy is a way to create a virtual object that delegates all operations to another object.
9. reflect: reflect is a built-in object that provides methods for interceptable JavaScript operations.
10. symbols: symbols are unique and immutable data types that can be used as object properties.
11. web workers: web workers are a way to run scripts in the background.
12. service workers: service workers are a way to run scripts in the background.
13. web sockets: web sockets are a way to communicate between a client and a server.
14. fetch api: fetch api is a way to make http requests.
15. local storage: local storage is a way to store data in the browser.
16. session storage: session storage is a way to store data in the browser.
17. indexed db: indexed db is a way to store data in the browser.
18. cookies: cookies are a way to store data in the browser.
19. localforage: localforage is a way to store data in the browser.
20. localstorage vs indexeddb vs cookies: localstorage is synchronous, indexeddb is asynchronous, and cookies are synchronous.
21. localstorage vs sessionstorage: localstorage is persistent, sessionstorage is not.
22. localstorage vs cookies: localstorage is synchronous, cookies are synchronous.
23. localstorage vs localforage: localstorage is synchronous, localforage is asynchronous.
24. localstorage vs sessionstorage vs localforage: localstorage is synchronous, sessionstorage is synchronous, localforage is asynchronous.
25. localstorage vs cookies vs localforage: localstorage is synchronous, cookies are synchronous, localforage is asynchronous.
26. sessionstorage vs cookies: sessionstorage is synchronous, cookies are synchronous.
*/

//Asynchronous nature of kavascript-Example:
//synchronous code
// function add(a, b) {
//     return a + b;
//   }
//   console.log(add(1, 2)); // Output: 3
//   console.log(add(3, 4)); // Output: 7
//explain: the add function is synchronous, so it will be executed in sequence.

//asynchronous code 
// console.log("start");
// setTimeout(() => {
//     console.log("inside timeout");
// }, 2000);
// console.log("end");
//output: start end inside timeout
//explain: the setTimeout function is asynchronous, so it will be executed after the synchronous code.

//timer functions in javascript:
// setTimeout(() => {
//     console.log("inside timeout");
// }, 2000);
//explain: the setTimeout function is used to set a timer that will execute a function after a certain amount of time.

//event loop in javascript:
//the event loop is a single thread that performs all i/o operations asynchronously. It picks up the events from the event queue and pushes them to the call stack.
// console.log("start");
// setTimeout(() => {
//     console.log("inside timeout");
// }, 2000);
// console.log("end");
//output: start end inside timeout
//explain: the setTimeout function is asynchronous, so it will be executed after the synchronous code.

//---------Closure in javascript------------------------------------------
//closure is a function that has access to the outer function's scope even after the outer function has returned.
// function outerFunction() {
//     let count = 10;

//     function innerFunction() {
//       count++;
//       console.log(count);
//     }

//     return innerFunction;
//   }

//   const closureFunction = outerFunction();
//  for (let i = 0; i < 10; i++) {
//     closureFunction();
//   }

  //output: 11 12 13 14 15 16 17 18 19 20


//Promises in javascript:
//promises are objects that represent the eventual completion of an asynchronous operation and its result.
//used to handle asynchronous operations in javascript.Also to fetch data from the server.
//example 1
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("success");
//     }, 2000); //2 seconds
//   });

  
//   promise.then((result) => {          //.then() is used to handle the resolved promise.It takes a callback function as an argument.
//     console.log(result);
//   }).catch((error) => {      //error handling
//     console.log(error);
//   });

  //output: success
  //explain: the promise is resolved after 2 seconds.

//.then chaining: use in errror handling.
//example 2
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("success");
//     }, 2000); //2 seconds
//   });
//   promise.then((result) => {
//     console.log(result);
//     return result;
//   }).then((result) => {
//     console.log(result);
//   }).catch((error) => {
//     console.log(error);
//   });
  //output: success success

 //Prototypal inheritance: 
  //prototypal inheritance is a way to create objects based on other objects.
  //example 1

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHello = function() {
//   console.log(`Hello, my name is ${this.name}`);
// };

//example 2

// function Animal(name) {
//   this.name = name;
// }

// function Dog(name) {
//   Animal.call(this, name);
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;
// Dog.prototype.sayHello = function() {
//   console.log(`Hello, my name is ${this.name}`);
// };

// let dog = new Dog("Fido");
// dog.sayHello();

//output: Hello, my name is Yash
//Hello, my name is Fido
//explain: the Dog object inherits from the Animal object, which in turn inherits from the Person object.
  
  //this and binding in javascript:
  //this keyword refers to the object it belongs to.
  //example 1
  // const person = {
  //   name: "Yash",
  //   sayHello: function() {
  //     console.log(`Hello, my name is ${this.name}`);
  //   }
  // };
  // person.sayHello(); // Output: Hello, my name is Yash

  // const sayHelloFunction = person.sayHello;
  // sayHelloFunction(); // Output: Hello, my name is undefined,beacuse this keyword is not bound to the person object.It doesnt know what this is.

  // const boundSayHelloFunction = sayHelloFunction.bind(person);    //here, we bind the this keyword to the person object to fix the issue.
  // boundSayHelloFunction(); // Output: Hello, my name is Yash



  //example 2
  // const person = {
  //   name: "Yash",
  //   sayHello: () => {
  //     console.log(`Hello, my name is ${this.name}`);
  //   }
  // };
 
  //--------------------Async-Await-------------------------------------------------
//async/await is a way to write asynchronous code that looks synchronous.
//syntax:
// async function myFunction() {
//     await promise;
//     // do something after the promise is resolved
//   }
//example 1
// async function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Le bhai tera data"); 
//     }, 3000);
//   });
// }

// async function getData() {
//   try {
//     console.log("Ruko jara..Sabar Karo...");
//     const userData = await fetchData(); 
//     console.log("Data:", userData);
//   } catch (error) { 
//     console.log("Error:", error);
//   }
// }

// getData();

//output: Ruko jara..Sabar Karo...Data: Le bhai tera data
//explain: the fetchData function is asynchronous, so it will be executed after the synchronous code.

//example 2 :
// function fetchPostData(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve("Data fetched successfully");
//     },2000);
//   });
// }
// function fetchcCommentData(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve("Comments fetched successfully");
//     },3000);
//   });
// }
// async function getBlogData() {
//   try{
//     const blogData = await fetchPostData();
//     const commentData = await fetchcCommentData();
//     console.log("Fetching blog data...");
//     console.log(blogData);
//     console.log("Fetching comments...");
//     console.log(commentData);
//   }catch(error){
//     console.log("Error:",error);
//   }
  
// }
// getBlogData();


//Efficient way-
// function fetchPostData(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve("Data fetched successfully");
//     },2000);
//   });
// }
// function fetchcCommentData(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve("Comments fetched successfully");
//     },3000);
//   });
// }
// async function getBlogData() {
//   try{
//     // const blogData = await fetchPostData();
//     // const commentData = await fetchcCommentData();
//     // console.log("Fetching blog data...");
//     // console.log("Fetching comments...");
//     const [postData,commentData] = await Promise.all([fetchPostData(),fetchcCommentData()]);
//     // console.log(blogData);
//     console.log(postData)
//     console.log(commentData);
//   }catch(error){
//     console.log("Error:",error);
//   }
  
// }
// getBlogData();
//output: Fetching blog data...Data fetched successfully
//Fetching comments...Comments fetched successfully
//explain: the fetchPostData and fetchcCommentData functions are asynchronous, so they will be executed after the synchronous code.
//the getBlogData function is also asynchronous, so it will wait for the fetchPostData and fetchcCommentData functions to complete before continuing.
 