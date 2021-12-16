import React from "react";
import { getUser, removeUserSession, getToken } from "@packages/app-login";
import { Header } from "@packages/app-components";
import { Footer } from "@packages/app-components";

import "./Dashboard.css";
export const DashboardGuest = (props) => {
  const key = useFormInput("");

  const user = getUser();
  let token = getToken();
  let st1 = "Bearer ";
  const AuthStr = st1.concat(token);
  // handle click event of logout button
  const handleLogout = () => {
    if (
      window.confirm(
        "Are you sure you want to quit. You will not be able to login again?"
      ) === true
    ) {
      removeUserSession();
      window.location.href = "http://localhost:8080/GuestRegister";
    } else {
      window.location.reload();
    }
  };
  const openQuiz = () => {
    const id = atob(key.value);
    window.location.href = `http://localhost:8080${props.location.pathname}/${id}`;
  };

  return (
    <div className="Dashboard">
      <Header
        link1={null}
        link1data={user}
        link2={handleLogout}
        link2data="Logout"
      ></Header>
      <div className="main">
        <h2>Hi {user}! Ready to start quizzing?</h2>
        <div>
          <h1>Enter quiz key provided</h1>
          <label htmlFor="quizname">
            <b>key</b>
          </label>
          <br />
          <input type="text" placeholder="key" {...key} required />
          <br />
          <button
            className={key.value === "" ? "button disabled" : "button"}
            type="submit"
            onClick={openQuiz}
            disabled={key.value === ""}
          >
            Open Quiz
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
const useFormInput = (initialValue) => {
  const [value, setValue] = React.useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};
