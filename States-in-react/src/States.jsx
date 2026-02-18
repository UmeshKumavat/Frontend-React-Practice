//State is a built-in object used to store and manage data that changes over time in a component
// State is mutable and can be updated using setState or the useState hook.
// When state changes, React automatically re-renders the component.

//we can store different types of values in state -> string, number, object, Array

import { useState } from "react";

//we use useState hook to create state
const States = () => {
  const [count, setCount] = useState(0);
  const handleBtnClick = () => {
    setCount((prev) => prev + 1);//setCount is a setter function that used to update the state
  };
  return (
    <div className="counter">
      <h1>{count}</h1>
      <button onClick={handleBtnClick}>Increase</button>
    </div>
  );
};

export default States;
