// Utility Types

// Partial

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

// specify as partial --> we dont want all the props, just what we want to update

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "compsci123",
  title: "Final Project",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 95 }));
// {grade: 95 } is a partial of assignment
// we are using here partial utility type

const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });

////////////////////////////////////////////////////////////

// Required and Readonly utility type
// Required utility type specifies that all of the properties are  are required now
const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // send to database
  return assign;
};

//Readonly utitlity type means we can't override any of those properties either
const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
}; // verified property also required otherwise it wont work for our recordAssignment function

// assignVerified.grade = 50 // can't do that becuase it is read only

// need all of the properties
recordAssignment({ ...assignGraded, verified: true });

////////////////////////////////////////////////////////

// Most popular utility type of all
// Record Utility type

const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Kelly: "U",
};

//we can do this thing with interface also

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 85, assign2: 69 },
  Kelly: { assign1: 51, assign2: 20 },
};

//////////////////////////////////////////////////////

// Pick and Omit (works with interface)

// picking the properties that we want to use
type AssignResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignResult = {
  studentId: "k123",
  grade: 85,
};

type AssignPreview = Omit<Assignment, "grade" | "verfied">;

const preview: AssignPreview = {
  studentId: "k123",
  title: "Final Project",
};

//////////////////////////////////////////////////////////

// Exclude and Extract utility type
// (not going to work with interfaces but going to work with string literals, union type )

type adjustedGrade = Exclude<LetterGrades, "U">;

type highGrades = Extract<LetterGrades, "A" | "B">;

//////////////////////////////////////////////////////////

// NonNullable

type AllPossibleGrades = "Dave" | "John" | null | undefined;
type NamesOnly = NonNullable<AllPossibleGrades>;

//////////////////////////////////////////////////////////

// ReturnType (deriving a type from a function)

// type newAssign = {title: string, points: number}

// const createNewAssign = (title: string, points: number): newAssign => {
//     return {title, points}
// }

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type NewAssign = ReturnType<typeof createNewAssign>;
// now if we change createNewAssign, It always going to update our return type newAssign that we have here

const tsAssign: NewAssign = createNewAssign("Utility Types", 100);

console.log(tsAssign);

///////////////////////////////////////////////////////////

// Parameters (deriving a type from the parameters of a function)
// same theme as above

type AssignParams = Parameters<typeof createNewAssign>;
// AssignParams is a tuple of parameters
const assignArgs: AssignParams = ["Generics", 100];

const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

///////////////////////////////////////////////////////////

// A New Utitliy type
// Awaited - helps us with the ReturnType of a Promise

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

// Now to get this return type if we have to use awaited

// type FetchUsersReturnType = ReturnType<typeof fetchUsers>
// we dont actually want a promise, we want an result that should be return type i.e. User[]

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;
// we cant accurately the return type like this if we needed
fetchUsers().then((users) => console.log(users));
