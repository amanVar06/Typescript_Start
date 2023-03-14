import Counter from "./Counter";
import { CounterProvider } from "./context/CounterContext";
import { initState } from "./context/CounterContext";

/**
 Note! The Provider only expects one child. Wrap the children in a fragment <></> OR change the ChildrenType in context to: ReactElement | ReactElement[] | undefined
 */

// Cleaned up our component
// Put all the logic and the state inside of that CounterContext for that feature and then any component that needs to recieve it we can just wrap it in that provider that we created for that counter

function App() {
  return (
    <>
      <CounterProvider count={initState.count} text={initState.text}>
        <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
      </CounterProvider>
    </>
  );
}

export default App;
