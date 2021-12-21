import React from "react";
import { getUser, removeUserSession, getToken } from "@packages/app-login";
import { Header } from "@packages/app-components";
import { Footer } from "@packages/app-components";
import { Shell } from "@packages/app-home";
import { useFormInput } from "../util/utils";

export const CreateQuiz = () => {
  const title = useFormInput("");

  const user = getUser();
  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState(null);
  let token = getToken();
  let st1 = "Bearer ";
  const AuthStr = st1.concat(token);
  // handle button click of login form
  const handleCreateQuiz = async () => {
    setError(null);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: AuthStr },
      body: JSON.stringify({ title: title.value, open: "true" }),
    };
    const response = await fetch("http://localhost:3001/quiz", requestOptions);
    const data = await response.json();
    if (!response.ok) {
      setError("Some error occured!try later");
    }
    setData(data);
    window.location.href = "http://localhost:8080/dashboard";
  };

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    window.close("http://localhost:8080/dashboard");
    window.open("http://localhost:8080/");
  };

  return (
    <div className="Dashboard">
      <Header
        link1={null}
        link1data={user}
        link2={handleLogout}
        link2data="Logout"
      ></Header>
      <Shell />
      <div className="container" style={{ width: "75%" }}>
        <h1>CREATE NEW QUIZ</h1>
        <label htmlFor="quizname">
          <b>Title</b>
        </label>
        <br />
        <input
          type="text"
          placeholder="Enter Title of quiz"
          {...title}
          required
        />
        <br />
        <button type="submit" onClick={handleCreateQuiz}>
          Open Quiz
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
      <Footer />
    </div>
  );
};
