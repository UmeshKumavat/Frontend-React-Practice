import { useState } from "react";
import Greeting from "./Greeting";
import User from "./User";
import Card from "./Card";

//Props -> Properties or data Passed from Parent Component to Child Component
//Props are read only data child component can not modify them
const App = () => {
  const [username, setUsername] = useState("Amit");
  return (
    <div>
      <Greeting name="Umesh" />
      <User name={username} age={21} setUsername={setUsername} />

      {/* passing elements as children */}
      <Card>
        <h1>Props-in-React</h1>
        <p>Hello React</p>
      </Card>
    </div>
  );
};

export default App;
