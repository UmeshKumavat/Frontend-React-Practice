import React from "react";
import { Link, useNavigate, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  //   console.log(error);

  const navigate = useNavigate();
  return (
    <div>
      <h1>404 Not Found</h1>
      <p className="text-2xl my-4">{error.data}</p>
      <button>
        <Link to="/">Go to Home</Link>
      </button>
      <button onClick={() => navigate(-1)}>Navigate Back</button>
    </div>
  );
};

export default ErrorPage;
