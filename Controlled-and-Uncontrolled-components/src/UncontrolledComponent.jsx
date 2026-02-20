import { useRef } from "react";

//Uncontrolled component in react are those where form data is handled by DOM itself.
const UncontrolledComponent = () => {
  const inputRef = useRef();
  
  function handleSubmit(e) {
    e.preventDefault();
    //using DOM
    // const inputValue = document.querySelector('#inputText').value;
    // console.log(inputValue);

    //Using useRef() hook
    console.log(inputRef.current.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Enter username"
        id="inputText"
        ref={inputRef}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledComponent;
