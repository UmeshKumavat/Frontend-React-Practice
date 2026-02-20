import { useContext } from "react";
import { UserContext } from "./UserContext";

//context api allows us to pass data through the component tree without having to pass props down manually at every level.
const App = () => {
  const { name, age } = useContext(UserContext);
  return (
    <div>
      <UserName name={name} age={age} />
    </div>
  );
};

//accessing user data directly in UserName component using Context Api.
const UserName = ({ name, age }) => {
  return (
    <div>
      <h1>Username: {name}</h1>
      <h2>Age: {age}</h2>
    </div>
  );
};
export default App;
