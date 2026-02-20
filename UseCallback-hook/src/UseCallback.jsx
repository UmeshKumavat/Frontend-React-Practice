import React, { memo, useCallback, useState } from "react";

const Button = memo(({ onClick, children }) => {
  console.log(`rendering button: ${children}`);
  return <button onClick={onClick}>{children}</button>;
});

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    console.log("Increment inside");
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    console.log("Decrement inside");
    setCount((prev) => prev - 1);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
};

export default UseCallback;
