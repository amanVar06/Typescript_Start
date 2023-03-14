"use strict";
// Index Signatures
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Dave: 42, // not required just need 3
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
// dynamically accessing the props
let prop = "Pizza";
console.log(todaysTransactions[prop]); //accessing dynamically
// Here we get an error because we have not created any index signature yet
//this can be apply to loop as well, accessing dynamically
const todaysNet = (transactions) => {
    let total = 0;
    // for in loop
    for (const transaction in transactions) {
        total += transactions[transaction];
        console.log(transaction);
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
// can't assign becuase readonly
// todaysTransactions.Pizza = 40
console.log(todaysTransactions["Dave"]);
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200],
};
// console.log(student.test)
//How do you interate through an object you created that doesn't have an index signature provided?
for (const key in student) {
    console.log(`${key}: ${student[key]}`); //using assertion keyof
    //keyof creates an union type, specific string literal, that allows you to loop through the object
}
Object.keys(student).map((key) => {
    console.log(student[key]);
});
// we are just retrieving the typeof by referencing the object itself
////////////////////////////////////////////////
const logStudentkey = (student, key) => {
    //we clearly define key up here as a keyof Student
    // so it defines this key as a string literal and it made up of different names that lies inside the Student i.e. name, GPA, classes
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentkey(student, "GPA");
logStudentkey(student, "name");
logStudentkey(student, "classes");
// smaller syntax, and it allows us to use string literals here as a different types that is expected
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
// and now what if we wanna loop thourgh this?
// like we were able to do with index signature
// Ans: we cant we need to use keyof assertion here also
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
// if we are using Record utility type instead of providing an index signature, we still need to provide keyof to access
