import React from "react";
import QuestionCard2 from "./QuestionCard2";
import { useState } from "react";
import ToolBar from "./ToolBar";

function BlankForm() {
  var qid = 0
  const [questionCards, setquestionCards] = useState([[qid, ""]]);
  // console.log(questionCards);
  const handleClick = () => {
    qid = qid+1
    setquestionCards([...questionCards, [qid, ""]]);
    console.log(questionCards);
  };

  const handleDelete = (id) => {
    console.log("Deleting id " + id);
    // let remainingQuestionsCards = questionCards.filter((id)=>{

    // })
  };
  return (
    <>
      <div className="container">
        {questionCards.map((item, i) => (
          <QuestionCard2 deleteme={handleDelete} id={qid}>
            This is Question Card {i + 1}
          </QuestionCard2>
        ))}
      </div>
      <ToolBar />
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => handleClick()}
      >
        Add
      </button>
    </>
  );
}

export default BlankForm;
