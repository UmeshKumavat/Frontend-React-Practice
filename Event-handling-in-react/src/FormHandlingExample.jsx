import React from "react";
import { useState } from "react";

const FormHandlingExample = () => {
  const [input, setInput] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    setInput("")
  } 
  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" name="" value={input} onChange={(e) => setInput(e.target.value)} />
      <button>submit</button>
    </form>
  );
};

export default FormHandlingExample;
