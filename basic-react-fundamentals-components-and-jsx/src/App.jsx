import React from "react";
import { Hello } from "./TypesOfComponents";

//jsx is javascript XML -> it allow us to write html in javascript -> behind the scene it uses babel and create ReactElement to render it on browser
//jsx return a single root element -> all children must wrapped in single parent or we can use React Fragment "<> </>" to avoid extra div node in HTML Tree

//JSX requires tags to be explicitly closed: self-closing tags like <img> must become <img />
//attribute names in react written in camelCase : class -> className
//we use curly braces {} in jsx to write javascript code

const App = () => {
  const url =
    "https://pluspng.com/img-png/react-logo-png-img-react-logo-png-react-js-logo-png-transparent-png-1142x1027.png";
  const altText = "React-png";

  const name = "Umesh";
  return (
    // <>
    //   <h1 className='heading'>Hello React</h1>
    //   <img src="https://pluspng.com/img-png/react-logo-png-img-react-logo-png-react-js-logo-png-transparent-png-1142x1027.png" alt="react-png" style={{width: 230, height: 200}}/>
    // </>

    // Passing strings with quotes
    // <>
    //   <h1 className='heading' style={{color: "blue"}}>Hello {name}</h1>
    //   <img src={url} alt={altText} style={{width: 230, height: 200}}/>
    // </>

    //for  inline CSS styles in JSX. we pass an object to the style attribute
    <>
      <ul
        style={{
          fontSize: 20,
          color: "pink",
        }}
      >
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
      <Hello />
    </>
  );
};

export default App;
