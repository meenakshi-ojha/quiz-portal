import { NavLink } from "react-router-dom";
import { getToken } from "@packages/app-login";
import "./Quiz.css";
import DeleteIcon from "@material-ui/icons/Delete";

export const getTextQ = (text_q, quiz) => {
  const l = text_q.length;
  let token = getToken();
  let st1 = "Bearer ";
  const AuthStr = st1.concat(token);
  const deleteQues = async (ans, ques) => {
    let text =
      "Are you sure you want to delete this ques!\nEither OK or Cancel.";
    if (window.confirm(text) === true) {
      try {
        await fetch(
          `http://localhost:3001/quiz/${ques.quiz_id}/text/${ques.id}/ans/${ans.id}`,
          {
            method: "DELETE",
            headers: new Headers({
              Authorization: AuthStr,
            }),
          }
        );
        await fetch(
          `http://localhost:3001/quiz/${ques.quiz_id}/text/${ques.id}/`,
          {
            method: "DELETE",
            headers: new Headers({
              Authorization: AuthStr,
            }),
          }
        );
      } catch (error) {
        console.log("error", error);
      }
      window.location.reload();
    } else {
      window.location.reload();
    }
  };
  const getRow = (text, l) => {
    let content = [];
    for (let i = 0; i < l; i++) {
      content[i] = (
        <tr key={`tques-${i}`}>
          <td>{text[i].question.id} </td>
          <td>{text[i].question.question}</td>
          <td>{text[i].answer.answer && text[i].answer.answer} </td>
          <td>{text[i].question.ques_type}</td>
          <td>
            {quiz.open ? (
              <button
                className="round"
                onClick={() => deleteQues(text[i].answer, text[i].question)}
              >
                <b>
                  <DeleteIcon />
                </b>
              </button>
            ) : (
              <span>Quiz closed.Cant be changed</span>
            )}
          </td>
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
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>{getRow(text_q, l)}</tbody>
    </table>
  );
};

export const getMCQs = (mcq, quiz) => {
  const l = mcq.length;
  let token = getToken();
  let st1 = "Bearer ";
  const AuthStr = st1.concat(token);
  const deleteAns = async (ans, ques) => {
    let text =
      "Are you sure you want to delete this Ans!\nEither OK or Cancel.";

    if (window.confirm(text) === true) {
      try {
        await fetch(
          `http://localhost:3001/quiz/${ques.quiz_id}/mcq/${ques.id}/ans/${ans.id}`,
          {
            method: "DELETE",
            headers: new Headers({
              Authorization: AuthStr,
            }),
          }
        );
      } catch (error) {
        console.log("error", error);
      }
      window.location.reload();
    } else {
      window.location.reload();
    }
  };
  const deleteQues = async (ques) => {
    let text =
      "Are you sure you want to delete this ques!\nEither OK or Cancel.";

    if (window.confirm(text) === true) {
      try {
        await fetch(
          `http://localhost:3001/quiz/${ques.quiz_id}/mcq/${ques.id}`,
          {
            method: "DELETE",
            headers: new Headers({
              Authorization: AuthStr,
            }),
          }
        );
      } catch (error) {
        console.log("error", error);
      }
      window.location.reload();
    } else {
    }
  };
  const getOptions = (option, answer, question) => {
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
    const deleteOpt = async (id, ques) => {
      let text =
        "Are you sure you want to delete this opt!\nEither OK or Cancel.";

      if (window.confirm(text) === true) {
        try {
          await fetch(
            `http://localhost:3001/quiz/${question.quiz_id}/mcq/${ques.id}/opt/${id}`,
            {
              method: "DELETE",
              headers: new Headers({
                Authorization: AuthStr,
              }),
            }
          );
        } catch (error) {
          console.log("error", error);
        }
        window.location.reload();
      } else {
        window.location.reload();
      }
    };
    let content = [];
    for (let i = 0; i < option.length; i++) {
      content[i] = (
        <p key={`opt-${i}`}>
          <b>{i + 1})</b> {option[i].option}
          {answer === null && quiz.open ? (
            <button
              className={"ans"}
              type="submit"
              onClick={() => handleCreateAnswer(option[i].id)}
            >
              set as answer
            </button>
          ) : null}
          {quiz.open && (
            <button
              className={"round"}
              onClick={() => deleteOpt(option[i].id, question)}
            >
              <b>
                <DeleteIcon />
              </b>
            </button>
          )}
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
            {mcq[i].question &&
            mcq[i].option.length === 0 &&
            !mcq[i].answer &&
            quiz.open ? (
              <button
                className={"round"}
                onClick={() => deleteQues(mcq[i].question)}
              >
                <b>
                  <DeleteIcon />
                </b>
              </button>
            ) : null}
          </h4>
          <h5>
            <u>Options</u>
          </h5>
          <h6>
            {mcq[i].question && mcq[i].option.length < 5 && quiz && quiz.open && (
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
          <span>
            {mcq[i].option && mcq[i].answer ? (
              getAnswers(mcq[i].option, mcq[i].answer)
            ) : (
              <p>No Answer defined</p>
            )}
            {mcq[i].option && mcq[i].answer && quiz.open ? (
              <button
                className={"round"}
                onClick={() => deleteAns(mcq[i].answer, mcq[i].question)}
              >
                <b>
                  <DeleteIcon />
                </b>
              </button>
            ) : null}
          </span>
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
