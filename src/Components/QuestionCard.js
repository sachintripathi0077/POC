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
  const [label, setLabel] = useState(question.label);
  const [options, setOptions] = useState(question.options || ['Option 1']);
  const [questionType, setQuestionType] = useState(question.type);

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
        <MdDelete style={{ color: "#D02501" }} />
      </span>
      {/* Question Label */}
      &nbsp;
      {/* <input
        type="text"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        id="label"
        placeholder="Enter your question here"
      ></input> */}

      <div class="flex-container">
        <div class="card mt-3 mb-1 mx-4" id="flex-child1">
          <div class="card-body">
            <div className="cardinputfielddiv">
              <input
                type="text"
                className="form-control"
                id="cardinputfield"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                placeholder="Enter Your Question Here"
                onChange={(e) => setLabel(e.target.value)}
                value={label}
              ></input>
            </div>
          </div>
        </div>

        {/* <select
          onChange={(e) => {
            setQuestionType(e.target.value);
          }}
          value={question.type}
        >
          <option value="text">Single Line</option>{" "}
          <option value="radio">Radio Fields</option>{" "}
          <option value="checkbox">CheckBox</option>
          <option value="date">Date</option>
        </select> */}
        {/* <br /> */}

        <div class="card mt-3 mb-1 mx-4" id="flex-child2">
          <div class="card-body">
            <div className="cardinputfielddiv">
              <select
                class="form-select"
                id="cardinputfield"
                aria-label="Default select example"
                onChange={(e) => {
                  setQuestionType(e.target.value);
                }}
              >
                <option value="text">Short Answer</option>
                <option value="radio">Radio Fields</option>
                <option value="checkbox">CheckBox</option>
                <option value="date">Date</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {questionType === "text" && (
        <input
          type="text"
          disabled
          placeholder="Text field"
          className="form-control"
          id="disabledfields"
        ></input>
      )}
      {questionType === "date" && (
        <input
          type="date"
          className="form-control"
          id="disabledfields"
          disabled
        ></input>
      )}

      {(questionType === "radio" || questionType === "checkbox") && (
        <>
          <div class="card mt-0 mb-2 mx-4">
            <div class="card-body">
              <ul className="qcunlist">
                {options.map((option, i) => {
                  return (
                    <li key={i}>
                      <div>
                        <div className="optionsdiv">
                          <input
                            type="text"
                            className="form-control"
                            // id="cardinputfield"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-lg"
                            value={option}
                            onChange={(e) => {
                              handleInputChange(e, i);
                            }}
                          ></input>
                        </div>
                        <button
                          className="btn btn-small"
                          onClick={() => {
                            removeOption(i);
                          }}
                        >
                          {/* Del */}
                          <MdOutlineDeleteOutline style={{ color: "D02501" }} />
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <br />
              <button className='btn btn-primary' type="button" onClick={addOption}>
                Add more options
              </button>
            </div>
          </div>
          &nbsp;
        </>
      )
      }
    </div >
  );
}

export default QuestionCard;