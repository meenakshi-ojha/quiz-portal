import React from "react";
import axios from "axios";
import { getToken } from "@packages/app-login";
import "./Allquizzes.css";
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
  });
  return (
    <div className="Allquizzes">
      <br />
      <table className="quizzes">
        <tr>
          <th>Quiz Id</th>
          <th>Quiz Name</th>
          <th>Status</th>
        </tr>
        {quizzes.map((quiz, i) => (
          <tr key={i}>
            <td>{quiz.id}</td>
            <td>{quiz.title}</td>
            <td>{quiz.open ? "Open" : "Closed"}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
