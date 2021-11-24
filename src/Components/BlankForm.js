import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import QuestionCard from "./QuestionCard";
import FormHeader from "./FormHeader";
import { postFormQuestions } from "../Redux/actions";
import { useNavigate } from "react-router-dom";
import { MdAddCircleOutline } from "react-icons/md";

function BlankForm({ postQuestionsList, state }) {
  const navigate = useNavigate();
  const [questionId, setQuestionId] = useState(0);
  const [questionList, setquestionList] = useState([]);

  const addQuestion = () => {
    setQuestionId(questionId + 1);
    const questionArr = [...questionList];
    questionArr.push({
      id: questionId,
      type: "text",
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

  const updatedData = (options, label, questionType, index) => {
    const list = [...questionList];
    list[index] = {
      ...list[index],
      type:questionType,
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
      &nbsp;
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
      </div>
      {/* ---------------------------------------Toolbar Start ----------------------------------*/}
      <div className="mynav">
        <button
          type="button"
          className="formtextbutton"
          id="mybtn"
          onClick={addQuestion}
        >
          <MdAddCircleOutline />
          Add Tile
        </button>
        <button onClick={onPreviewClick} className="previewbutton">
          Preview
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