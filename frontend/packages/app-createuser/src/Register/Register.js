import React, { useState } from "react";
import "./Register.css";
import axios from "axios";

export const Register = (props) => {
  const email = useFormInput("");
  const password = useFormInput("");
  const name = useFormInput("");
  const username = useFormInput("");
  const password_confirmation = useFormInput("");
  const [error, setError] = useState(null);

  // handle button click of login form
  const handleRegister = () => {
    setError(null);
    axios
      .post("http://localhost:3000/users", {
        email: email.value,
        password: password.value,
        name: name.value,
        password_confirmation: password_confirmation.value,
        username: username.value,
      })
      .then((response) => {
        window.close("http://localhost:8080/Register");
        window.open("http://localhost:8080");
      })
      .catch((error) => {
        setError("Something went wrong. Please try again later.");
      });
  };

  return (
    <div className="container">
      <label htmlFor="name">
        <b>Name</b>
      </label>
      <br />
      <input type="text" placeholder="Enter Name" {...name} required />
      <br />
      <label htmlFor="uname">
        <b>Username</b>
      </label>
      <br />
      <input type="text" placeholder="Enter Username" {...username} required />
      <br />
      <label htmlFor="email">
        <b>Email</b>
      </label>
      <br />
      <input type="text" placeholder="Enter Email" {...email} required />
      <br />
      <label htmlFor="psw">
        <b>Password</b>
      </label>
      <br />
      <input
        type="password"
        placeholder="Enter Password"
        {...password}
        required
      />
      <br />
      <label htmlFor="psw_conf">
        <b>Confirm Password</b>
      </label>
      <br />
      <input
        type="password"
        placeholder="Enter Password"
        {...password_confirmation}
        required
      />

      <button type="submit" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};
