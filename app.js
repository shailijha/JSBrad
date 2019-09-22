//alert('Hello');
// console.log('Hi!');
// console.table({ a: 1, b: 2 });
// console.error('This is an error');
// console.clear();
// console.time('Hello');
// console.log('Hi!');
// console.log('Hi!');
// console.log('Hi!');
// console.log('Hi!');
// console.log('Hi!');
// console.log('Hi!');
// console.log('Hi!');
// console.timeEnd('Hello');

//Primitive
// const name = 'John Doe';

// console.log(typeof name);

let val;
// //val = String(true);
// //val = 5;
// //val = String([89, 0, 90]);
// //val = String(new Date());
// //val = String(null);

// // val = (5).toString();
// val = parseFloat('5hi');

// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed());

// const today = new Date();
// let birthday = new Date('9-10-1981 11:25:00');
// birthday = new Date('September 11 2019');
// birthday = new Date('9///1/1992');

// val = today.getMonth();
// val = today.getDate();
// val = birthday.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();

// birthday.setMonth(3);
// birthday.setDate(31);

// console.log(birthday);

// Window Methods/ Objects/ Properties

// window.console.log(123);

// // Alert
// window.alert('Hi there!');

// Prompt
// const input = prompt("What's your age?");
// alert(input);

// Confirm
// if (confirm('Are you sure?')) {
//   console.log('Confirmed');
// } else {
//   console.log('Cancelled');
// }

//Outer height and width
val = window.outerHeight;
val = window.outerWidth;

val = window.innerHeight;
val = window.innerWidth;

val = window.scrollY;
val = window.scrollX;

//Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
//window.location.href = 'http://google.com';
// Reload
//window.location.reload();

// History object
// window.history.go(-2);
val = window.history.length;

// Navigator object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;
val = window.navigator.geolocation;

console.log(val);
