import { useLoaderData } from "react-router";

const Users = () => {
  const usersData = useLoaderData();
//   console.log(usersData); // got users data throgh useLoaderData() hook
  return (
    <>
      <div className="page">
        <ul className="list-decimal">
          {usersData?.map(({ id, name }) => {
            return <li key={id}>{name}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default Users;
