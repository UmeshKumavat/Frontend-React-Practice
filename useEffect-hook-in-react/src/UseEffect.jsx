import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     console.log("Runs on Every Render");
  //   });//without dependency array

  //   useEffect(() => {
  //     console.log("Runs only Once");
  //   }, []); //with empty dependency array

  useEffect(() => {
    console.log("Count Changed"); //runs every time when count state change
  }, [count]); //with dependecies

  //   useEffect(() => {
  //     const id = setInterval(() => {
  //       console.log("Running");
  //     }, 1000);

  //     return () => clearInterval(id);
  //   }, []);

  return (
    <div>
      <h1> Understanding useEffect Hook</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export default UseEffect;
