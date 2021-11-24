import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md";
import DropDownButton from "./DropDownButton";

function QuestionCard({
  children,
  question,
  deleteQuestion,
  updatedData,
  index,
}) {
  const [label, setLabel] = useState("");
  const [options, setOptions] = useState(["Option 1"]);
  const [questionType, setQuestionType] = useState("text");

  const handleInputChange = (e, i) => {
    const optionsList = [...options];
    optionsList[i] = e.target.value;
    setOptions(optionsList);
  };

  useEffect(() => {
    updatedData(options, label, questionType, index);
  }, [options, label, questionType]);

  useEffect(() => {
    console.log(questionType, "questionType");
  }, [questionType]);

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
        placeholder="Enter your question here"
      ></input>
      <select
        onChange={(e) => {
          setQuestionType(e.target.value);
        }}
      >
        <option value="text">Single Line</option>{" "}
        <option value="radio">Radio Fields</option>{" "}
        <option value="checkbox">CheckBox</option>
        <option value="date">Date</option>
      </select>
      <br />
      {(questionType === "radio" || questionType === "checkbox") && (
        <>
          <ul className="qcunlist">
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
            Add more options
          </button>
        </>
      )}
    </div>
  );
}

export default QuestionCard;