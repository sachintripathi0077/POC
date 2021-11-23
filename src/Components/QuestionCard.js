import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md";


function QuestionCard({
  children,
  question,
  deleteQuestion,
  updatedData,
  index,
}) {
  const [label, setLabel] = useState("");
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
        {/* &times; */}
        <MdDelete />
      </span>
      {/* Question Label */}
      &nbsp;
      <input
        type="text"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        id="label"
        placeholder='Enter your question here'
      ></input>
      <br />
	  {console.log(question, 'question')}
      {(question.type === "radio" || question.type === "checkbox") && (
        <>
          <ul class="qcunlist">
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
                      {/* Del */}
                      <MdOutlineDeleteOutline />

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