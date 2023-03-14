"use strict";
let strArray = ["one", "two", "three"];
let guitars = ["strat", "Les paul", 5150];
let mixedData = ["EVH", 1984, true];
//union type in array with parentheses always
strArray[0] = "Aman";
strArray.push("hey");
guitars[0] = 8745;
guitars.unshift("dev");
guitars = strArray; //but we can't do the other way
mixedData = guitars;
// mixedData and guitars not assignable to guitars and strArray
let test = [];
let bands = []; //annotation of the type
bands.push("Van Halen");
//Tuple
//tuple lock an array with a specific type at specific position
// and of specific length as well
let myTuple = ["Dave", 526, true];
let mixed = ["john", 1, false];
mixed = myTuple; //no error
// myTuple = mixed it will give an error because there is a possibility that source(mixed) may not have 3 elements
myTuple[1] = 73; //number only assignable to 2nd position
// myTuple[2] = 54  give error
// Objects
let myObj;
myObj = []; //array also an type of object in js as we know
console.log(typeof myObj);
myObj = bands;
myObj = {}; //another way to define object
const exampleObj = {
    prop1: "Dave1",
    prop2: true,
};
// we can use interface as well, both does the same thing
// interface Guitarist {
//     name: string;
//     active?: boolean;
//     albums: (string | number)[];
// };
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "QU812"],
};
let jp = {
    name: "Jimmy",
    active: true,
    albums: ["I", "II", "IV"],
};
evh = jp;
//we cant add another property here as well
// evh.years = 50 not gonna work
//we can also specify the properties here as well
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`;
    }
    //typescript realizes it in advance
    //thats one way it helps to eleminate the error at dev time/compile time instead of run time as in JS
    return "Hello!";
};
console.log(greetGuitarist(jp));
//type vs interface
// works just the same
// Enums
// Unlike most Typescript features, Enums are not a type-level addition
// to Javascript but something added to the language and runtime
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
