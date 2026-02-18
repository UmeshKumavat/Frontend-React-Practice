const ConditionalRendering = () => {
  return (
    <div>
      <ul>
        <User isLoggedIn={true} username="Umesh Kumavat" />
        <User isLoggedIn={true} username="Amit Sharma" />
        <User isLoggedIn={false} username="Rahul Yadav" />
      </ul>
    </div>
  );
};

export const User = ({ isLoggedIn, username }) => {
  //   if (isLoggedIn) {
  //     return <li>{username} is LoggedIn</li>;
  //   }
  //   return <li>{username} is Not LoggedIn</li>;

  //   Conditional (ternary) operator (? :)

  //   return (
  //     <li>
  //       {username} is {isLoggedIn ? "LoggedIn" : "Not LoggedIn"}
  //     </li>
  //   );

  //   return <>{isLoggedIn ? <GreetUser username={username}  /> : <Loading />}</>;

  //Logical AND operator (&&)
  return <>{isLoggedIn && <GreetUser username={username} />}</>;
};

export const GreetUser = ({ username }) => {
  return <h1>Hello {username}</h1>;
};

export const Loading = () => {
  return <h3>Loading.....</h3>;
};

export default ConditionalRendering;
