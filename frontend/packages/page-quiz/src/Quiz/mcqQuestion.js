import React from "react";
import { getUser, removeUserSession, getToken } from "@packages/app-login";
import { Header } from "@packages/app-components";
import { Footer } from "@packages/app-components";
import { Shell } from "@packages/app-home";
import { useFormInput } from "../util/utils";

export const AddMCQuestion = (props) => {
  const question = useFormInput("");
  const answer = useFormInput("");
  const option = useFormInput("");

  const user = getUser();
  let data = null;
  const [done, setDone] = React.useState(false);
  let optnum = 0;

  let opt = [];

  let token = getToken();
  let st1 = "Bearer ";
  const AuthStr = st1.concat(token);
  // handle button click of login form
  const handleCreateQuestion = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: AuthStr },
      body: JSON.stringify({ question: question.value, ques_type: "mcq" }),
    };
    const response = await fetch(
      `http://localhost:3001/quiz/${props.location.pathname.slice(6)}`,
      requestOptions
    );
    const ques = await response.json();
    data = ques;
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
        <h1>Add MCQ Question</h1>
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
      </div>
      <Footer />
    </div>
  );
};
