"use strict";
// Utility Types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// specify as partial --> we dont want all the props, just what we want to update
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 95 }));
// {grade: 95 } is a partial of assignment
// we are using here partial utility type
const assignGraded = updateAssignment(assign1, { grade: 95 });
////////////////////////////////////////////////////////////
// Required and Readonly utility type
// Required utility type specifies that all of the properties are  are required now
const recordAssignment = (assign) => {
    // send to database
    return assign;
};
//Readonly utitlity type means we can't override any of those properties either
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true }); // verified property also required otherwise it wont work for our recordAssignment function
// assignVerified.grade = 50 // can't do that becuase it is read only
// need all of the properties
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
////////////////////////////////////////////////////////
// Most popular utility type of all
// Record Utility type
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
const finalGrades = {
    Sara: "B",
    Kelly: "U",
};
const gradeData = {
    Sara: { assign1: 85, assign2: 69 },
    Kelly: { assign1: 51, assign2: 20 },
};
const score = {
    studentId: "k123",
    grade: 85,
};
const preview = {
    studentId: "k123",
    title: "Final Project",
};
//////////////////////////////////////////////////////////
// ReturnType (deriving a type from a function)
// type newAssign = {title: string, points: number}
// const createNewAssign = (title: string, points: number): newAssign => {
//     return {title, points}
// }
const createNewAssign = (title, points) => {
    return { title, points };
};
// now if we change createNewAssign, It always going to update our return type newAssign that we have here
const tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
// AssignParams is a tuple of parameters
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
        return res.json();
    })
        .catch((err) => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
// we cant accurately the return type like this if we needed
fetchUsers().then((users) => console.log(users));
