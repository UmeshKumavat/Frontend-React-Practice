import useCounter from "./CustomHook";

const Counter = () => { 
  const { count, increment } = useCounter(); //custom hook
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
