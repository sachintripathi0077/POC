import React from "react";
import { Link } from "react-router-dom";

function SuccessResponse(props) {
  return (
    <>
      <div className='successScreen'>
        <div className="card" id="successCard">
          <div className="card-body">
            <h2>SUCCESS !!!</h2>
          </div>
          <div class="card-footer">
            <h4>Your response has been recorded successfully</h4>
            <button className="btn btn-primary" id='previewsubmit2'>
              <Link to="/preview">Submit Another Response</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SuccessResponse;