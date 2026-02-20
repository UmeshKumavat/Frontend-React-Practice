import { memo } from "react";
import { useRef } from "react";
import { useState } from "react";

//React.memo is a higher-order component that prevents unnecessary re-renders by memoizing a component and re-rendering it only when its props change.

const ReactMemo = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <Child name="Child" />
    </div>
  );
};

const Child = memo(({ name }) => {
  const ref = useRef(0);
  return (
    <h2>
      {name} {ref.current++} times Rendered because of Parent Component
    </h2>
  );
});

export default ReactMemo;
