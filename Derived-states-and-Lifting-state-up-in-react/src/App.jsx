import React from "react";
import Cart from "./DerivedState";
import TempretureConverter from "./LiftingStateUp";

const App = () => {
  return (
    <div>
      <Cart />
      <TempretureConverter />
    </div>
  );
};

export default App;
