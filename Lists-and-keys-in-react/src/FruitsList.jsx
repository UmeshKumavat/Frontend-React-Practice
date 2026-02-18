// we get -> Warning: Each child in a list should have a unique “key” prop
//React need keys to efficiently identify each list item so that it can efficiently perfom DOM update and optimize Re-renders

const FruitsList = () => {
  const fruits = ["Apple", "Banana", "Mango", "Grapes", "Orange", "Kivi"];
  return (
    <div>
      {fruits.map((fruit, index) => {
        return (
          <div key={index}>
            <h3>{fruit}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default FruitsList;
