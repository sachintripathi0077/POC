import React from "react";
import { useState, useEffect } from "react";
import PreviewQuestion from "./PreviewQuestion";
import store from "../Redux/store";
import { connect } from "react-redux";
import axios from "axios";
import PreviewHeader from "./PreviewHeader";
import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'

function PreviewScreen({ questionList }) {
  const [state, setstate] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const setPreviewState = (qState, id, label) => {
    let newState = state.filter((question) => question.qid != id);
    let qStateObj = {
      response: qState,
      qid: id,
      label: label
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
    navigate(`/successResponse`);

  }

  function handleBack() {
    navigate(`/createBlank`)
  }

  return (
    <>
      <div className='resizePreviewCard'>
        <div class="card px-0 mb-0 mx-50">
          <div class="card-body">
            <PreviewHeader />
          </div></div></div>

      <div>
        <form onSubmit={handleOnClick}>
          <div className="resizePreviewCard">
            <div className="card mt-2 mb-0 px-0">
              <div className="card-body">
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
              </div></div></div>
          <div id='previewBackPosition'>

            <button type='button' className="btn btn-secondary" id='previewback' onClick={handleBack} >
              Back
            </button>
          </div>
          <button type="submit" className="btn btn-primary" id='previewsubmit' >
            SUBMIT
          </button>



        </form>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    questionList: state.questionsList,
  };
};

export default connect(mapStateToProps)(PreviewScreen);
