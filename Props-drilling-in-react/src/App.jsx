/* Props drilling is a pattern in React where you pass data(props) from a parent
 component to deeply nested child components through multiple layers of
 components, even if some of the intermediate components don't need
the data(props). */

//data flow -> App-> UserDashboard -> UserProfile -> UserName

//here UserDashboard and UserProfile don't need the data 

//We will use Contex api to solve prop drilling
const App = () => {
  const user = "Umesh";
  return (
    <div>
      <UserDashboard user={user} />
    </div>
  );
};

const UserDashboard = ({ user }) => {
  return <UserProfile user={user} />;
};

const UserProfile = ({ user }) => {
  return <UserName user={user} />;
};

const UserName = ({ user }) => {
  return <h1>User: {user}</h1>;
};
export default App;
