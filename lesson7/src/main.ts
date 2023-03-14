// Index Signatures

// interface TransactionObj {
//   readonly [index: string]: number;
//we can make this readonly as well that will not allow any assignments to any property inside of the object that is created
// }
//this is the index signature that just declares that all the keys are string and all the values are numbers
// Keys can't be boolean

interface TransactionObj {
  // this would allow other properties to be added to an object
  // that was created with this interface
  readonly [index: string]: number; //Index signature
  Pizza: number;
  Books: number;
  Job: number;
  //The above 3 properties are required for the object created with this interface
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
  Dave: 42, // not required just need 3
};

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);

// dynamically accessing the props

let prop: string = "Pizza";
console.log(todaysTransactions[prop]); //accessing dynamically
// Here we get an error because we have not created any index signature yet

//this can be apply to loop as well, accessing dynamically

const todaysNet = (transactions: TransactionObj): number => {
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

/////////////////////////////////////////////////////////

interface Student {
  // [key: string]: number | string | number[] | undefined; //index signature
  name: string;
  GPA: number;
  classes?: number[]; // optional
}

const student: Student = {
  name: "Doug",
  GPA: 3.5,
  classes: [100, 200],
};

// console.log(student.test)
//How do you interate through an object you created that doesn't have an index signature provided?

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`); //using assertion keyof

  //keyof creates an union type, specific string literal, that allows you to loop through the object
}

Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]);
});
// we are just retrieving the typeof by referencing the object itself

////////////////////////////////////////////////

const logStudentkey = (student: Student, key: keyof Student): void => {
  //we clearly define key up here as a keyof Student
  // so it defines this key as a string literal and it made up of different names that lies inside the Student i.e. name, GPA, classes
  console.log(`Student ${key}: ${student[key]}`);
};

logStudentkey(student, "GPA");
logStudentkey(student, "name");
logStudentkey(student, "classes");

//////////////////////////////////////////////////

// interface Incomes {
//   [key: string]: number;
// }

type Streams = "salary" | "bonus" | "sidehustle";

type Incomes = Record<Streams, number | string>; //utility type Record
// smaller syntax, and it allows us to use string literals here as a different types that is expected

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
};

// and now what if we wanna loop thourgh this?
// like we were able to do with index signature
// Ans: we cant we need to use keyof assertion here also

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}

// if we are using Record utility type instead of providing an index signature, we still need to provide keyof to access
