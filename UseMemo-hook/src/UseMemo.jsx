import React from "react";
import { memo } from "react";
import { useMemo } from "react";
import { useState } from "react";

//useMemo is a React Hook that memoizes the result of a computation and recomputes it only when its dependencies change, helping optimize performance by avoiding unnecessary recalculations.
const ExpensiveCalculation = () => {
  function sum() {
    console.log("Calculating....");
    let i = 0;
    while (i <= 1000000000) {
      i = i + 1;
    }
    return i;
  }
  const total = useMemo(() => sum(), []);
  return <h1>Sum: {total}</h1>;
};
const UseMemo = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <ExpensiveCalculation />
      <button onClick={() => setCount(count + 1)}>Re-render Parent</button>
      <p>UseMemo Component Re-renders : {count}</p>
    </div>
  );
};

export default UseMemo;
