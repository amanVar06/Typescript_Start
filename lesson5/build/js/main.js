"use strict";
// Convert to more or less specific
let a = "hello"; //string
let b = a; //We assigned the type that is less specific
// assignment to a less specific type
let c = a; // more specific (because a is hello)
//using as keyword
console.log(a, b, c);
//we can use angle brackets as well
let d = "world";
let e = "world";
//more practical example assertions for narrowing
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
//myval expect to be a string
let myVal = addOrConcat(2, 2, "concat"); //more
// we have told typescript explicitly through our assertion that addOrConcat will  return a string in this instance
//without writing as string addOrConcat not assignable to myVal which is of type string
// Be Careful!! TS sees no problem here but as string is returned
let nextVal = addOrConcat(2, 2, "add");
console.log(nextVal, typeof nextVal);
// unknown type
// 10 as unknown as string; //double casting force casting
// The DOM where Assertions can be very useful
const img = document.querySelector("img"); //Exclaimation mark refers to non null assertion
const myImg = document.getElementById("#img");
const nextImg = document.getElementById("#img");
// angle bracket notation not works in tsx file react
img.src;
myImg.src;
