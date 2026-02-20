
const FahrenheitInput = ({ temp }) => {
    const fahrenheit = Number(temp) * 1.8 + 32;
  return (
    <h3>{fahrenheit}</h3>
  );    
};

export default FahrenheitInput;
