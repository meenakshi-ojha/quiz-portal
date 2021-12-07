import React from "react";

import { getToken } from "@packages/app-login";
import "./Allquizzes.css";
import { NavLink } from "react-router-dom";

export const AllQuizzes = () => {
  const [quizzes, setQuizzes] = React.useState([]);

  let token = getToken();
  let st1 = "Bearer ";
  const AuthStr = st1.concat(token);
  const url = "http://localhost:3001/quiz";

  const fetchData = async () => {
    try {
      const response = await fetch(url, {
        method: "get",
        headers: new Headers({
          Authorization: AuthStr,
        }),
      });
      const json = await response.json();
      setQuizzes(json);
    } catch (error) {
      console.log("error", error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="Allquizzes">
      <br />
      <table className="quizzes">
        <thead>
          <tr>
            <th>Quiz Id</th>
            <th>Quiz Name</th>
            <th>Status</th>
            <th>Quiz</th>
          </tr>
        </thead>
        <tbody>
          {quizzes.map((quiz, i) => (
            <>
              <tr key={`quiz-${i}`}>
                <td>{quiz.id}</td>
                <td>
                  <p>{quiz.title}</p>
                </td>
                <td>{quiz.open ? "Open" : "Closed"}</td>
                <td>
                  <NavLink exact to={`/quiz/${quiz.id}`}>
                    see quiz
                  </NavLink>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};
