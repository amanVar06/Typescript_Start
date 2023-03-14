"use strict";
//typescript is statically typed i.e. types checked at compile time
//javascript is dynamically typed means types checked at run time
//typescript benefits
// self documenting the code
// Catch errors in dev!
// Great for teams
let myName = "Dave";
let meaningOfLife;
let isLoading;
let album; //defeat typescript(any datatype)
let album2;
//union type can be either be string or number
myName = "John";
meaningOfLife = 556;
isLoading = true;
album = 1984;
album2 = 4857;
const sum = (a, b) => {
    return a + b; //can be string concatenation also
};
let postId;
let isActive;
//union is not limited to 2 datatypes you can use more than 2 as well
let re = /\w+/g; //regular expression
