import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { setUserSession } from "@packages/app-login";

export const Register = (props) => {
  const name = useFormInput("");
  const username = useFormInput("");
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  // handle button click of login form
  const handleLogin = () => {
    setError(null);

    axios
      .post("http://localhost:3000/guest/login", {
        username: username.value,
      })
      .then((response) => {
        setUserSession(response.data.token, response.data.username);
        window.location.href = `http://localhost:8080/GuestDashboard/${response.data.username}`;
      })
      .catch((error) => {
        setError("Something went wrong. Please try again later.");
      });
  };
  const handleRegister = () => {
    setError(null);
    axios
      .post("http://localhost:3000/guests", {
        name: name.value,
        username: username.value,
      })
      .then((response) => {
        setResponse(response.data);
      })
      .catch((error) => {
        setError(
          "some error occurred. Try another username. Maybe the one you entered was taken"
        );
      });
  };

  return (
    <div className="container">
      {response ? null : (
        <>
          <label htmlFor="name">
            <b>Name</b>
          </label>
          <br />
          <input type="text" placeholder="Enter Name" {...name} required />
          <br />
        </>
      )}
      <label htmlFor="uname">
        <b>Username</b>
      </label>
      <br />
      <input type="text" placeholder="Enter Username" {...username} required />
      <br />

      {response ? (
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      ) : (
        <button type="submit" onClick={handleRegister}>
          Register
        </button>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
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
