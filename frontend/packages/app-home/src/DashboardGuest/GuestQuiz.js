/* eslint-disable array-callback-return */
import React from "react";
import { getToken, getUser, removeUserSession } from "@packages/app-login";
import { Header } from "@packages/app-components";
import { Footer } from "@packages/app-components";

import "./Quiz.css";

export const GuestQuiz = (props) => {
  const user = getUser();
  const answer = useFormInput("");
  const mcqanswer = useFormInput("");

  const [j, setI] = React.useState(0);
  const [m, setm] = React.useState(0);

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
  const [quiz, setQuiz] = React.useState("");
  let token = getToken();
  let st1 = "Bearer ";
  const AuthStr = st1.concat(token);
  const rev = props.location.pathname.split("").reverse().join("");
  const index = rev.indexOf("/");
  const quizid = rev.slice(0, index);
  const url = `http://localhost:3001/guestquiz/${quizid}`;
  let json = [];
  const getOptions = (option) => {
    let content = [];
    for (let i = 0; i < option.length; i++) {
      content[i] = (
        <p key={`opt-${i}`}>
          <b>
            <input
              type="radio"
              name="mcq"
              value={option[i].id}
              onChange={() => mcqanswer.setValue(option[i].id)}
            />
          </b>{" "}
          {option[i].option}
        </p>
      );
    }
    return content;
  };
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
        <h3>Text Question</h3>
        {quiz.text_questions && quiz.text_questions.length !== 0 ? (
          <>
            <table className="quizzes">
              <thead>
                <tr>
                  <th>Ques Id</th>
                  <th>Question</th>
                  <th>Answer</th>
                  <th>Check</th>
                </tr>
              </thead>
              <tbody>
                <tr key={`tques-${j}`}>
                  <td>
                    {quiz.text_questions[j] && quiz.text_questions[j].question
                      ? quiz.text_questions[j].question.id
                      : null}
                  </td>
                  <td>
                    {quiz.text_questions[j] && quiz.text_questions[j].question
                      ? quiz.text_questions[j].question.question
                      : null}
                  </td>
                  <td>
                    <input type="text" placeholder="key" {...answer} required />{" "}
                  </td>

                  <td>
                    <button
                      className="round"
                      onClick={
                        quiz.text_questions[j] &&
                        quiz.text_questions[j].answer &&
                        answer.value === quiz.text_questions[j].answer.answer
                          ? () => {
                              alert("correct");
                            }
                          : () => {
                              alert("wrong");
                            }
                      }
                    >
                      check
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        ) : (
          <p>No Text Questions</p>
        )}
        <button
          className="ans"
          onClick={
            quiz.text_questions && j < quiz.text_questions.length - 1
              ? () => {
                  setI(j + 1);
                  answer.setValue("");
                }
              : () => alert("no more text ques")
          }
        >
          get question
        </button>
      </div>
      <h3>MCQ</h3>
      <div key={`mcq-${m}`} className="innerfixed">
        <h4>
          {m + 1}){" "}
          {quiz.mcq_questions &&
          quiz.mcq_questions[m] &&
          quiz.mcq_questions[m].question
            ? quiz.mcq_questions[m].question.question
            : null}
        </h4>
        <h5>
          <u>Options</u>
        </h5>
        {quiz.mcq_questions &&
        quiz.mcq_questions[m] &&
        quiz.mcq_questions[m].option &&
        quiz.mcq_questions[m].option &&
        quiz.mcq_questions[m].option.length !== null ? (
          getOptions(quiz.mcq_questions[m].option)
        ) : (
          <p>No options defined</p>
        )}
        <button
          className="ans"
          onClick={
            quiz.mcq_questions &&
            quiz.mcq_questions[m] &&
            quiz.mcq_questions[m].answer &&
            mcqanswer.value ===
              quiz.mcq_questions[j].answer.mcq_question_option_id
              ? () => {
                  alert("correct");
                }
              : () => {
                  alert("wrong");
                }
          }
        >
          check
        </button>
        <br />
        <button
          className="ans"
          onClick={
            quiz.mcq_questions && j < quiz.mcq_questions.length - 1
              ? () => {
                  setm(m + 1);
                  mcqanswer.setValue("");
                }
              : () => alert("no more ques")
          }
        >
          get question
        </button>
      </div>

      <Footer />
    </>
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
    setValue,
  };
};
