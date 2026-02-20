import { useState } from "react";
import "./App.css";

const Form = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!form.email.includes("@")) {
      alert("Invalid email");
      return;
    }
    console.log("Submitted",form);
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleFormSubmit}>
        <h2 className="form-title">Create Account</h2>

        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            placeholder="Enter first name"
            name="firstname"
            value={form.firstname}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Enter last name"
            name="lastname"
            value={form.lastname}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={form.password}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            placeholder="Enter phone number"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Form;
