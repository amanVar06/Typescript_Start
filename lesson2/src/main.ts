//typescript is statically typed i.e. types checked at compile time
//javascript is dynamically typed means types checked at run time

//typescript benefits
// self documenting the code
// Catch errors in dev!
// Great for teams

let myName: string = "Dave";
let meaningOfLife: number;
let isLoading: boolean;
let album: any; //defeat typescript(any datatype)

let album2: string | number;
//union type can be either be string or number

myName = "John";
meaningOfLife = 556;
isLoading = true;
album = 1984;
album2 = 4857;

const sum = (a: number, b: string) => {
  return a + b; //can be string concatenation also
};

let postId: string | number;
let isActive: number | boolean;
//union is not limited to 2 datatypes you can use more than 2 as well

let re: RegExp = /\w+/g; //regular expression
