import { useId } from "react";

//useId is used for generating unique IDs that can be passed to acessibility attributes.it ensure that each instance of component gets unique ID
const UseIdHook = () => {
  const id = useId();
  return (
    <form className="form-container">
      <div className="form-group">
        <label htmlFor={id + "username"}>Username</label>
        <input
          type="text"
          placeholder="Enter username"
          name="username"
          id={id + "username"}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor={id + "email"}>Email</label>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          id={id + "email"}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor={id + "password"}>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          id={id + "password"}
          required
        />
      </div>
      <button type="submit" className="submit-btn">
        Sign Up
      </button>
    </form>
  );
};

export default UseIdHook;
