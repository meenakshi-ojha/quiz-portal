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
        <h4>Status: {quiz.quiz && quiz.quiz.open ? "Open" : "Closed"}</h4>
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
          getTextQ(quiz.text_questions)
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
          getMCQs(quiz.mcq_questions)
        ) : (
          <p>No MCQ Questions</p>
        )}
      </div>
      <Footer />
    </>
  );
};
