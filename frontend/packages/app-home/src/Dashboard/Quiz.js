/* eslint-disable array-callback-return */
import React from "react";
import { getToken, getUser, removeUserSession } from "@packages/app-login";
import { Header } from "@packages/app-components";
import { Footer } from "@packages/app-components";

import "./Quiz.css";
import "./Allquizzes.css";
import { getTextQ, getMCQs } from "./utils";
import { NavLink } from "react-router-dom";
export const Quiz = (props) => {
  const user = getUser();

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    window.close("http://localhost:8080/dashboard");
    window.open("http://localhost:8080/");
  };
  const [quiz, setQuiz] = React.useState("");
  let token = getToken();
  let st1 = "Bearer ";
  const AuthStr = st1.concat(token);
  const url = `http://localhost:3001/quiz/${props.location.pathname.slice(6)}`;
  let json = [];
  const fetchData = async () => {
    try {
      const response = await fetch(url, {
        method: "get",
        headers: new Headers({
          Authorization: AuthStr,
        }),
      });
      json = await response.json();

      const myjson = json;
      setQuiz(myjson[0]);
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleCloseQuiz = async () => {
    let text =
      "Are you sure you want to Close this quiz. You will not be able to add any more questions!\nEither OK or Cancel.";

    if (window.confirm(text) === true) {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: AuthStr },
        body: JSON.stringify({ title: quiz.quiz.title, open: "false" }),
      };
      const response = await fetch(
        `http://localhost:3001/quiz/${props.location.pathname.slice(6)}`,
        requestOptions
      );
      const data = await response.json();
      window.location.reload();
    } else {
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="con">
        <Header
          link1={null}
          link1data={user}
          link2={handleLogout}
          link2data="Logout"
        ></Header>
        <h1>Title: {quiz.quiz && quiz.quiz.title}</h1>
        <h4>
          Status:{" "}
          {quiz.quiz && quiz.quiz.open ? (
            <>
              <span>"Open"</span>
              <br />
              <button className={"ans"} type="submit" onClick={handleCloseQuiz}>
                Close Quiz
              </button>
            </>
          ) : (
            "Closed"
          )}
        </h4>
        {}
        <h3>Text Question</h3>
        <h4>
          {quiz.quiz && quiz.quiz.open && (
            <NavLink
              exact
              to={`/quiz/${props.location.pathname.slice(6)}/text`}
            >
              Add Text Question
            </NavLink>
          )}
        </h4>
        {quiz.text_questions && quiz.text_questions.length !== 0 ? (
          getTextQ(quiz.text_questions, quiz.quiz)
        ) : (
          <p>No Text Questions</p>
        )}
        <h3>MCQ Question</h3>
        <h4>
          {quiz.quiz && quiz.quiz.open && (
            <NavLink exact to={`/quiz/${props.location.pathname.slice(6)}/mcq`}>
              Add MCQ Question
            </NavLink>
          )}
        </h4>
        {quiz.mcq_questions && quiz.mcq_questions.length !== 0 ? (
          getMCQs(quiz.mcq_questions, quiz.quiz)
        ) : (
          <p>No MCQ Questions</p>
        )}
      </div>
      <Footer />
    </>
  );
};
