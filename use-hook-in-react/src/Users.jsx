import { use } from "react";

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return await res.json();
}

const Users = () => {
  const users = use(getUsers());
//   console.log(users);
  return (
    <ul>
      {users.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </ul>
  );
};

export default Users;
