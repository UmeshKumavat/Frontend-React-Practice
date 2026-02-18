//events represent user actions such as clicking a button, typing in a field, or moving the mouse.
//React provides a variety of built-in event handlers that we can use to handle different user interactions.

import FormHandlingExample from "./FormHandlingExample";

const App = () => {
  function handleClick() {
    alert("Button Clicked");
  }
  function handleUser(user) {
    alert(user + " " + "Cliked Button");
  }
  function handleChange(e) {
    console.log(e.target.value);
  }
  return (
    <>
      <div>
        <button onClick={handleClick}>First Button</button>
        {/* Inline Event Handler */}
        <button onClick={() => alert("Hello")}>Second Button</button>
        {/* Passing Arguments */}
        <button onClick={() => handleUser("Umesh")}>Third Button</button>
        {/* syntetic event */}
        <input type="text" name="text" onChange={(e) => handleChange(e)} />
      </div>

      <FormHandlingExample />
    </>
  );
};

export default App;
