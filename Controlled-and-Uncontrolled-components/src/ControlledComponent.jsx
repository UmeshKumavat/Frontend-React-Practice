import { useState } from "react";


//Controlled component in react are those  where form innput is handled by react component state.

const ControlledComponent = () => {
  const [input, setInput] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Enter username"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledComponent;
