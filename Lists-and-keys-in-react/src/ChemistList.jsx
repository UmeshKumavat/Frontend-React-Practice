import { people } from "./data.js";
const ChemistList = () => {
    
  // we need only chemist list so we filter out from people dataset
  const chemistList = people.filter(
    (people) => people.profession === "chemist",
  );

  const listItems = chemistList.map(
    ({ id, name, profession, accomplishment }) => {
      return (
        <li key={id}>
          <p>
            <b>{name}:</b>
            {" " + profession + " "} known for {accomplishment}
          </p>
        </li>
      );
    },
  );
  return <ul>{listItems}</ul>;
};

export default ChemistList;
