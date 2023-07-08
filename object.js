// Object is a collection of properites
// properties -> key value


// An Object is a collection of properties & 
// Property is an association between a key & value.

// a property value can also be function -> method.

// let a={
//     b:10,
//     c:13,
// };

// console.log(a);

// const user = {
//     nam: 'pc',
//     age: 23,
// }

// delete user.age;

// console.log(user);
// function abc(a){
//     delete a;
//     return a;
// }

// const func = (function (a){
//     delete a;
//     return a;
// })(99);

// console.log(func);

// // Key with space
// const user = {
//   nam: "PC",
//   age: 23,
//   "work at acciojob": true,
//   workAtAccioJob: true,
// };

// console.log(user["work at acciojob"]);
// console.log(user['workAtAccioJob']);

// console.log(user['nam']);
// console.log(user['age']);

// Dynamic keys

// const property='firstName';
// const nam = 'PC';

// const user = {
//     [property]:nam,
// }

// let a = 10;
// console.log(a);
// console.log(user);


// looping through objects

// const user = {
//     nam: 'pc',
//     age: 23,
//     isWorking: true,
// }

// For in loop
// for(key in user){
//     // this thing is in string
//     // console.log(key);
//     console.log(key, "---->", user[key]);
// }

// const obj = {
//     a: 'one',
//     b: 'two',
//     a: 'three',
// };

// console.log(obj);

// let num = {
//     a:100,
//     b:200,
//     title:'my nums',
// }
// num -> fn
// num.a ->200
// eventual
// let num2 = {
//     a:200,
//     b:400,
//     title:'my nums',
// }


// function multiByTwo(obj){
//     for (x in obj) {
//       if (typeof(obj[x])==='number') {
//         obj[x] = obj[x] * 2;
//       }
//     }
// }
// multiByTwo(num);

// console.log(num);

// let num2 = {
//     a:200,
//     b:400,
//     title:'my nums',
// }

// // localStorage.setItem('num2',JSON.stringify(num2));
// let stringNum2= JSON.stringify(num2);

// // console.log(stringNum2);

// let num = JSON.parse(stringNum2);
// console.log(num);

// Spread operator

// const user = {
//     nam:'pc',
//     age:23,
// }

// const admin = {
//     ...user,
//     isAdmin:true,
// }

// console.log(admin);

// let c = {
//   greeting: "Hey!",
// };

// let d;
// d = c;

// c.greeting = 'hello';

// console.log(d.greeting); 

let person = {nam:'pc'};
const members = ['test',person]; // members[0] = person
// members[0].nam=null
console.log(members);

// Deep shallow copy and refrence left
