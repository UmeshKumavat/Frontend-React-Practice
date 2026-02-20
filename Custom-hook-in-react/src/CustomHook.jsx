import { useEffect } from "react";
import { use } from "react";
import { useState } from "react";

const useCounter = (intial = 0) => {
  const [count, setCount] = useState(intial);
  function increment() {
    setCount((prev) => prev + 1);
  }
  return { count, increment };
};
export const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUser = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      if (!res.ok) return;
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return {data, loading, error};
};
export default useCounter;
