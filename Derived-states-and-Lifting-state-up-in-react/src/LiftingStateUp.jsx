import CelsiusInput from "./CelsiusInput";
import FahrenheitInput from "./FahrenheitInput";


//Lifting state up is a pattern where shared data that is required by children component is stored or moved to the commonn parent component so that children component remains in sync

const TempretureConverter = () => {
  const [temp, setTemp] = useState(0);
  return (
    <div>
      <CelsiusInput temp={temp} setTemp={setTemp} />
      <FahrenheitInput temp={temp} />
    </div>
  );
};

export default TempretureConverter;
