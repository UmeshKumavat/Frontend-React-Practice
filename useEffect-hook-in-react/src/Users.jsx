import { useState, useEffect } from "react";
import './App.css'
const Users = () => {
  const baseURL = "https://jsonplaceholder.typicode.com";

  const [usersData, setUsersData] = useState([]);

  async function getUsers(endpoint) {
    const res = await fetch(`${baseURL}${endpoint}`);
    const data = await res.json();
    console.log(data);
    if (res.status === 200) {
      setUsersData(data);
    }
  }
  useEffect(() => {
    getUsers("/users");
  }, []);
  return (
    <div className="card-container">
      {usersData.map((user) => {
        const { id, name, email, phone, website } = user;
        return (
          <li key={id} className="card">
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
          </li>
        );
      })}
    </div>
  );
};

export default Users;
