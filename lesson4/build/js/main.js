"use strict";
//from previous lesson
//we can't do this with an interface
//thats how we can say type defers from interface
// interface postId = stringOrNumber //Will not work
//interfaces think about those more as objects or classes
// types you can think of as an alias or any type of typescript type that we might assign
// Literal types
let myName; //it is specific assignment or we can say a literal assigment (Dave is only possible here)
// myName = 'Aman' // Can't do this now
let username;
username = "Amy"; //three option for username now
// DRY (Don't Repeat Yourself)
// functions
const add = (a, b) => {
    return a + b;
};
//functions that do not return (just use void as return type)
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello!");
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
// we can use the same thing as interfaces as well
// interface mathFunction {
//   (a: number, b: number): number;
// }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(8, 9));
// Optional parameters
// when c is an optional parameter
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    // c should be the third parameter when passing the arguments
    return a + b;
};
// default parameter value here
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
//default values won't work if we define a function signature value like this i.e. alias or interface
logMsg(addAll(2, 3, 2));
logMsg(addAll(8, 7));
logMsg(sumAll(7, 2));
logMsg(sumAll(undefined, 8));
// Rest parameters (rest of the parameters)
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(25, 1, 23, 45, 6));
// never type
// this is essenetially for the functions that explicitly throw an error
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// never return type when there is infinite loop inside
// when you see never make sure to throw an error
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
//custom typeguard that we can use
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
//use of the never type
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("This should never happen!"); //never type
};
