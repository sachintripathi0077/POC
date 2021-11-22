import React from "react";
import QuestionCard from "./QuestionCard";
import { useState, useEffect } from "react";
import DropDownButton from "./DropDownButton";

function BlankForm() {
  const [questionId, setQuestionId] = useState(0);
  const [questionList, setquestionList] = useState([]);
  const [inputType, setInputType] = useState("text");

  const addQuestion = () => {
    setQuestionId(questionId + 1);
    const questionArr = [...questionList];
    questionArr.push({
      id: questionId,
      type: inputType,
      label: "",
    });
    setquestionList(questionArr);
  };

  useEffect(() => {
    console.log(questionList, "questionList");
  }, [questionList]);

  const deleteQuestion = (i) => {
    const list = [...questionList];
    list.splice(i, 1);
    setquestionList(list);
  };

  const updatedData = (options, label, index) => {
    // console.log("updatedData", options, label, index);
    const list = [...questionList];
    list[index] = {
      ...list[index],
      label,
      options
    };
    setquestionList(list);
  };

  return (
    <>
      <div className="container">
        {questionList.map((question, i) => (
          <QuestionCard
            key={question.id}
            question={question}
            index={i}
            deleteQuestion={() => deleteQuestion(i)}
            updatedData={updatedData}
          >
            {/* Question {i + 1} */}
          </QuestionCard>
        ))}
      </div>

      {/* ---------------------------------------Toolbar Start ----------------------------------*/}
      <div className="mynav">
        <DropDownButton
          list={
            <>
              <option value="text">Single Line</option>{" "}
              <option value="radio">Radio Fields</option>{" "}
              <option value="checkbox">CheckBox</option>
              <option value="date">Date</option>
            </>
          }
          handleChange={(e) => {
            setInputType(e.target.value);
            console.log("first", e.target.value);
          }}
        />
        <button
          type="button"
          class="btn btn-outline-secondary"
          id="mybtn"
          onClick={addQuestion}
        >
          Add Tile
        </button>
      </div>
      {/* ---------------------------------------Toolbar END ----------------------------------*/}
    </>
  );
}

export default BlankForm;