// A custom hook is a JavaScript function that starts with use and internally calls other hooks like useState, useEffect, or useContext. It allows us to extract reusable logic, keeping components clean and modular.

import Counter from "./Counter";
import Users from "./Users";

const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      <Users />
    </div>
  );
};

export default App;
