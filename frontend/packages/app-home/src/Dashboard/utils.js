import { NavLink } from "react-router-dom";
import { getToken } from "@packages/app-login";
import "./Quiz.css";

export const getTextQ = (text_q) => {
  const l = text_q.length;

  const getRow = (text, l) => {
    let content = [];
    for (let i = 0; i < l; i++) {
      content[i] = (
        <tr key={`tques-${i}`}>
          <td>{text[i].question.id}</td>
          <td>{text[i].question.question}</td>
          <td>{text[i].answer.answer}</td>
          <td>{text[i].question.ques_type}</td>
        </tr>
      );
    }
    return content;
  };
  return (
    <table className="quizzes">
      <thead>
        <tr>
          <th>Ques Id</th>
          <th>Question</th>
          <th>Answer</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>{getRow(text_q, l)}</tbody>
    </table>
  );
};

export const getMCQs = (mcq) => {
  const l = mcq.length;
  const getOptions = (option, answer, question) => {
    let token = getToken();
    let st1 = "Bearer ";
    const AuthStr = st1.concat(token);
    const handleCreateAnswer = async (ans) => {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: AuthStr,
        },
        body: JSON.stringify({ mcq_question_option_id: ans }),
      };
      await fetch(
        `http://localhost:3001/quiz/${question.quiz_id}/mcq/${question.id}/ans`,
        requestOptions
      );
      window.location.reload();
    };
    let content = [];
    for (let i = 0; i < option.length; i++) {
      content[i] = (
        <p key={`opt-${i}`}>
          <b>{i + 1})</b> {option[i].option}
          {answer === null ? (
            <button
              className={"ans"}
              type="submit"
              onClick={() => handleCreateAnswer(option[i].id)}
            >
              set as answer
            </button>
          ) : null}
        </p>
      );
    }
    return content;
  };
  const getAnswers = (option, answer) => {
    let content = "";
    for (let i = 0; i < option.length; i++) {
      if (option[i].id === answer.mcq_question_option_id) {
        content = (
          <p>
            <b>ANSWER : {option[i].option}</b>
          </p>
        );
        break;
      }
    }
    return content;
  };
  const getMcq = (mcq, l) => {
    let content = [];
    for (let i = 0; i < l; i++) {
      content[i] = (
        <div key={`mcq-${i}`} className="innerfixed">
          <h4>
            {i + 1}) {mcq[i].question.question}
          </h4>
          <h5>
            <u>Options</u>
          </h5>
          <h6>
            {mcq[i].question && mcq[i].option.length < 5 && (
              <NavLink
                exact
                to={`/quiz/${mcq[i].question.quiz_id}/mcq/${mcq[i].question.id}`}
              >
                Add MCQ options
              </NavLink>
            )}
          </h6>
          {mcq[i].option && mcq[i].option.length !== null ? (
            getOptions(mcq[i].option, mcq[i].answer, mcq[i].question)
          ) : (
            <p>No options defined</p>
          )}
          {mcq[i].option && mcq[i].answer ? (
            getAnswers(mcq[i].option, mcq[i].answer)
          ) : (
            <p>No Answer defined</p>
          )}
        </div>
      );
    }
    return content;
  };
  return (
    <>
      <div className="fixed">{getMcq(mcq, l)}</div>
    </>
  );
};
