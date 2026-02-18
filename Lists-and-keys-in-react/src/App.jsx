/*
we often want to display multiple similar components from a collection of data. We can use the JavaScript array methods to manipulate an array of data. we use filter() and map() with React to filter and transform  array of data into UI components
*/

import ChemistList from "./ChemistList";
import FruitsList from "./FruitsList";


const App = () => {

  return <div>
    <FruitsList />
    <ChemistList />
  </div>;
};

export default App;
