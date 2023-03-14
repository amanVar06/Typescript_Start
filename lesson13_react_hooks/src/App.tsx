import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
  MouseEvent,
  KeyboardEvent,
} from "react";

// useCallback will memoize a function, so its not always recreated
// useMemo will memoizes a value, use it when something takes too long to calculate, for expensive calculation, might hold up everything in the component during calculation

interface User {
  id: number;
  username: string;
}

type fibFunc = (n: number) => number; // function signature
// we can write like this also
// type fibFunc(n: number): number

const fib: fibFunc = (n) => {
  if (n < 2) return n;
  return fib(n - 2) + fib(n - 1);
};

const myNum: number = 37;

function App() {
  // const [user, setUser] = useState<User | null>(null);
  // const [users, setUsers] = useState<User[]>([]);
  // you may see an assertion here also, but not recommended
  // const [user, setUser] = useState<User>({} as User);

  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  // why not we use here union i.e. HTMLInputElement | null
  // here we are more specific, telling typescript I am going to use this ref on an HTMLInputElement
  // also we can use non null assertion here, or may add a typeguard to checky to check

  // if(!inputRef.current) // one wa

  console.log(inputRef?.current); // current our element itself input element
  console.log(inputRef?.current?.value); // value of that input element

  useEffect(() => {
    // dealing with side effects
    console.log("mounting");
    console.log("Users: ", users);

    return () => console.log("unmounting");
  }, [users]);
  // no typescript application here, becuase we are not returning any value here

  const addTwo = useCallback(
    (
      event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => setCount((prev) => prev + 2),
    []
  ); // we can also do event: any here, though here we are more specific
  // useCallback also has dependency array like useEffect

  const result = useMemo<number>(() => fib(myNum), [myNum]);
  // if myNum changes then i want to recalculate this function

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      {/* this function will be recreated every time that is every render so to avoid this we can memoize this using useCallback  */}
      <h2>{result}</h2>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default App;
