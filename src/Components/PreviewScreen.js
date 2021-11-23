import React from "react";
import { useState, useEffect } from "react";
import PreviewQuestion from "./PreviewQuestion";
import store from "../Redux/store";
import { connect } from "react-redux";
import axios from 'axios'

function PreviewScreen({questionList}) {
  const [state, setstate] = useState([{ qid: 1, response: "" }]);

//   const mockData = [
//     {
//       type: "text",
//       options: ["a", "b", "c", "d"],
//       label: "This is a question label",
//       id: 1,
//     },
//     {
//       type: "radio",
//       options: ["a", "b", "c", "d"],
//       label: "This is a question label",
//       id: 2,
//     },
//     {
//       type: "checkbox",
//       options: ["a", "b", "c", "d"],
//       label: "This is a question label",
//       id: 3,
//     },
//     {
//       type: "date",
//       options: ["a", "b", "c", "d"],
//       label: "This is a question label",
//       id: 4,
//     },
//   ];

  const setPreviewState = (qState, id) => {
    let newState = state.filter((question) => question.qid != id);
    let qStateObj = {
      response: qState,
      qid: id,
    };
    newState.push(qStateObj);
    setstate(newState);
  };

  async function handleOnClick(){
      let responseData = await axios.post(
        "http://localhost:3080/responses",
        state
      );
      setstate([])
  };
    
  return (
    <div>
        
      {questionList.map((q, i) => {
        return (
          <PreviewQuestion
            type={q.type}
            label={q.label}
            options={q.options}
            setPreviewState={setPreviewState}
            id={q.id}
          />
        );
      })}

      <button onClick={()=>{handleOnClick()}}>SUBMIT</button>
    </div>
  );
}
const mapStateToProps = (state) => {
    return {
      questionList: state.questionsList,
    };
  };


export default connect(mapStateToProps)(PreviewScreen);