//from previous lesson

//Type Aliases
//we can use the aliases if we want to use some specific union of types in serveral parts of our application
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

//we can't do this with an interface
//thats how we can say type defers from interface

// interface postId = stringOrNumber //Will not work
//interfaces think about those more as objects or classes
// types you can think of as an alias or any type of typescript type that we might assign

// Literal types
let myName: "Dave"; //it is specific assignment or we can say a literal assigment (Dave is only possible here)
// myName = 'Aman' // Can't do this now

let username: "Dave" | "John" | "Amy";
username = "Amy"; //three option for username now

// DRY (Don't Repeat Yourself)

// functions

const add = (a: number, b: number): number => {
  return a + b;
};

//functions that do not return (just use void as return type)
const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("Hello!");
logMsg(add(2, 3));

let subtract = function (c: number, d: number): number {
  return c - d;
};

// add and subtract function using same number of arguments and return type so we can create a separate type for both the functions to use it in other places as well

type mathFunction = (a: number, b: number) => number;
// we can use the same thing as interfaces as well
// interface mathFunction {
//   (a: number, b: number): number;
// }

let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply(8, 9));

// Optional parameters
// when c is an optional parameter
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  // c should be the third parameter when passing the arguments
  return a + b;
};

// default parameter value here
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

//default values won't work if we define a function signature value like this i.e. alias or interface

logMsg(addAll(2, 3, 2));
logMsg(addAll(8, 7));
logMsg(sumAll(7, 2));

logMsg(sumAll(undefined, 8));

// Rest parameters (rest of the parameters)
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(25, 1, 23, 45, 6));

// never type
// this is essenetially for the functions that explicitly throw an error
const createError = (errMsg: string) => {
  throw new Error(errMsg);
};

// never return type when there is infinite loop inside
// when you see never make sure to throw an error
const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};

//custom typeguard that we can use
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

//use of the never type
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("This should never happen!"); //never type
};
