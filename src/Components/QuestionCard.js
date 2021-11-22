import React, { useState, useEffect } from "react";

function QuestionCard({
  children,
  question,
  deleteQuestion,
  updatedData,
  index,
}) {
  const [label, setLabel] = useState("Label");
  const [options, setOptions] = useState(["Option 1"]);

  const handleInputChange = (e, i) => {
    const optionsList = [...options];
    optionsList[i] = e.target.value;
    setOptions(optionsList);
  };

  useEffect(() => {
    updatedData(options, label, index);
  }, [options, label]);

  const addOption = () => {
    const optionsList = [...options];
    optionsList.push(`Option ${options.length + 1}`);
    setOptions(optionsList);
  };

  const removeOption = (i) => {
    const optionsList = [...options];
    optionsList.splice(i, 1);
    setOptions(optionsList);
  };
  return (
    <div className="card">
      {children}
      <span className="delete-btn" onClick={() => deleteQuestion()}>
        &times;
      </span>
      Question Label
      <input
        type="text"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        id="label"
      ></input>
      <br />
	  {console.log(question, 'asdasd')}
      {(question.type === "radio" || question.type === "checkbox") && (
        <>
          <ul>
            {options.map((option, i) => {
              return (
                <li key={i}>
                  <div>
                    <input
                      type="text"
                      value={option}
                      onChange={(e) => {
                        handleInputChange(e, i);
                      }}
                    ></input>
                    <button
                      className="btn btn-small"
                      onClick={() => {
                        removeOption(i);
                      }}
                    >
                      Del
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          <button type="button" onClick={addOption}>
            Create Option
          </button>
        </>
      )}
    </div>
  );
}

export default QuestionCard;