import { useFetch } from "./CustomHook";

const Users = () => {
  const { data, loading, error } = useFetch();
  if (loading) return <h1>Loadingg........</h1>;
  if (error)
    return (
      <div>
        <h3>{error.message}</h3>
      </div>
    );

  return <div>{JSON.stringify(data)}</div>;
};

export default Users;
