// Generics

const stringEcho = (arg: string): string => arg;
// it is dedicate to the string it only works with the string type
// what if we want more generic function

const echo = <T>(arg: T): T => arg;
// now it works with any type that we pass in to the function

////////////////////////////////////////////////////

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log(isObj(true));
console.log(isObj("john"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "John" }));
console.log(isObj(null));

////////////////////////////////////////////////////

// another example of utility function

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }

  //we dont want empty object and array to give true
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
  //!! take any value and return its boolean
};

console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("Dave"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: "Dave" }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));

////////////////////////////////////////////////////

//Redoing the above function with an interface

interface BoolCheck<T> {
  // we use type placeholder T a generic in the interface
  value: T;
  is: boolean;
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }

  //we dont want empty object and array to give true
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg };
  //!! take any value and return its boolean
};

////////////////////////////////////////////////////

interface HasID {
  id: number;
}

// narrowing the generic type

// narrowing the type, using HasID interface
// now the (type) user we pass has to have id property
const processUser = <T extends HasID>(user: T): T => {
  //process the user with logic here
  return user;
};

console.log(processUser({ id: 1, name: "Aman" }));
// console.log(processUser({name: 'Dave'}))

/////////////////////////////////////////////////////

//imagine T here as an object that has an id --> user object
//K is going to be keys of T of that user object
const getUsersProperty = <T extends HasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
  // we were able to map through those keys essentially though our users without using assertion becuase we used K extends keyof T right up here as passed in our typed variable
};

const usersArray = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];

console.log(getUsersProperty(usersArray, "email"));
console.log(getUsersProperty(usersArray, "username"));

//////////////////////////////////////////////////////

// Generic in class

class StateObject<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    // getter
    return this.data;
  }

  set state(value: T) {
    //setter
    this.data = value;
  }
}

const store = new StateObject("John");
console.log(store.state);

store.state = "Dave";
// store.state = 12;

const myState = new StateObject<(string | number | boolean)[]>([15]); //now its going to accept anything string, number or boolean as long as it is an array
myState.state = ["Dave", 43, true];
console.log(myState.state);
