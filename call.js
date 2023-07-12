let obj = {
    nam:'pc',
}

function sayHello(arg1,arg2){
    console.log(this,arg1,arg2);
}

// sayHello('test1','test2');

// // to be bind with obj object;
sayHello(obj,'fgh','werty');

// console.log(sayHello);

// sayHello();

// obj.sayHello();

// sayHello.call(obj,'amruth','raj');
// sayHello();
// console.log(obj);