import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import QuestionCard from "./QuestionCard";
import DropDownButton from "./DropDownButton";
import FormHeader from "./FormHeader";
import { postFormQuestions } from "../Redux/actions";
import { useNavigate } from 'react-router-dom'


function BlankForm({ postQuestionsList, state }) {
  const navigate = useNavigate();
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

  useEffect(() => {
    console.log(state, "redux store");
  }, [state]);

  const deleteQuestion = (i) => {
    const list = [...questionList];
    list.splice(i, 1);
    setquestionList(list);
  };

  const updatedData = (options, label, index) => {
    const list = [...questionList];
    list[index] = {
      ...list[index],
      label,
      options,
    };
    setquestionList(list);
  };

  const onPreviewClick = () => {
    postQuestionsList(questionList);
    navigate(`/preview`);
  };

  return (
    <>
      <FormHeader />
      <div className="container">
        {questionList.map((question, i) => (
          <QuestionCard
            key={question.id}
            question={question}
            index={i}
            deleteQuestion={() => deleteQuestion(i)}
            updatedData={updatedData}
          ></QuestionCard>
        ))}
        <button onClick={onPreviewClick}>Preview</button>
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

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    postQuestionsList: (list) => dispatch(postFormQuestions(list)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlankForm);