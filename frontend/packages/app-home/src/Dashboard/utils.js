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
  const getOptions = (option) => {
    let content = [];
    for (let i = 0; i < option.length; i++) {
      content[i] = (
        <p key={`opt-${i}`}>
          {i + 1}) {option[i].option}
        </p>
      );
    }
    return content;
  };
  const getAnswers = (option, answer) => {
    let content = "";
    for (let i = 0; i < option.length; i++) {
      if (option[i].id === answer.mcq_question_option_id) {
        content = <p>ANSWER : {option[i].option}</p>;
        break;
      }
    }
    return content;
  };
  const getMcq = (mcq, l) => {
    let content = [];
    for (let i = 0; i < l; i++) {
      content[i] = (
        <div key={`mcq-${i}`}>
          <h4>
            {i + 1}) {mcq[i].question.question}
          </h4>
          <h5>Options</h5>
          {mcq[i].option && mcq[i].option.length !== null ? (
            getOptions(mcq[i].option)
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
