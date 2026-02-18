import React from "react";

const Card = ({ children }) => {
  // console.log(children);
  return (
    <div>
      {children[0]}
      {children[1]}
    </div>
  );
};

export default Card;
