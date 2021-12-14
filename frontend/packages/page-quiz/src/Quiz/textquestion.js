import React from "react";
import { getUser, removeUserSession, getToken } from "@packages/app-login";
import axios from "axios";
import { Header } from "@packages/app-components";
import { Footer } from "@packages/app-components";
import { Shell } from "@packages/app-home";
import { useFormInput } from "../util/utils";

export const AddTextQuestion = (props) => {
  const question = useFormInput("");
  const answer = useFormInput("");

  const user = getUser();
  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState(null);
  const [ans, setAns] = React.useState(null);

  let token = getToken();
  let st1 = "Bearer ";
  const AuthStr = st1.concat(token);
  // handle button click of login form
  const handleCreateQuestion = async () => {
    setError(null);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: AuthStr },
      body: JSON.stringify({ question: question.value, ques_type: "text" }),
    };
    const response = await fetch(
      `http://localhost:3001/quiz/${props.location.pathname.slice(6)}`,
      requestOptions
    );
    const data = await response.json();
    if (!response.ok) {
      setError("Some error occured!try later");
    }
    setData(data);
  };
  const handleCreateAnswer = async () => {
    setError(null);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: AuthStr },
      body: JSON.stringify({ answer: answer.value }),
    };
    const response = await fetch(
      `http://localhost:3001/quiz/${props.location.pathname.slice(6)}/${
        data.id
      }/ans`,
      requestOptions
    );
    const ans = await response.json();
    if (!response.ok) {
      setError("Some error occured!try later");
    }
    setAns(ans);
    window.location.href = `http://localhost:8080/quiz/${data.quiz_id}`;
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
        <h1>Add Text Question</h1>
        <label htmlFor="quizname">
          <b>Question</b>
        </label>
        <br />
        <input
          type="text"
          placeholder="Enter question"
          {...question}
          required
        />
        <br />
        <button type="submit" onClick={handleCreateQuestion} disabled={data}>
          Add Question
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {data && data.question && (
          <>
            <h1>Add Answer</h1>
            <label htmlFor="quizname">
              <b>Answer</b>
            </label>
            <br />
            <input
              type="text"
              placeholder="Enter answer"
              {...answer}
              required
            />
            <br />
            <button type="submit" onClick={handleCreateAnswer}>
              answer
            </button>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};
