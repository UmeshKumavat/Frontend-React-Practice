import React from "react";

//Props destructuring
const User = ({ name, age, setUsername }) => {
  return (
    <div>
      <h2>
        {name} is {age} years old.
      </h2>
      <button onClick={() => {setUsername("Umesh")}}>Change Username</button>
    </div>
  );
};
export default User;
