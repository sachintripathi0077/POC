import React from "react";
import { useState, useEffect } from "react";
import PreviewQuestion from "./PreviewQuestion";
import store from "../Redux/store";
import { connect } from "react-redux";
import axios from "axios";

function PreviewScreen({ questionList }) {
  const [state, setstate] = useState([{ qid: 1, response: "" }]);

  const setPreviewState = (qState, id) => {
    let newState = state.filter((question) => question.qid != id);
    let qStateObj = {
      response: qState,
      qid: id,
    };
    newState.push(qStateObj);
    setstate(newState);
  };

  async function handleOnClick(e) {
    e.preventDefault();
    let responseData = await axios.post(
      "http://localhost:3080/responses",
      state
    );
    setstate([]);
  }

  return (
    <div>
      <form onSubmit={handleOnClick}>
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

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    questionList: state.questionsList,
  };
};

export default connect(mapStateToProps)(PreviewScreen);
