import React from "react";

const CelsiusInput = ({temp, setTemp}) => {
  return (
    <input
      type="text"
      placeholder="Celsius"
      value={temp}
      onChange={(e) => setTemp(e.target.value)}
    />
  );
};

export default CelsiusInput;
