import React from "react";
import { useState } from "react";
import Modal from "react-modal";
// import PreviewHeader from './PreviewHeader'
import { Link } from "react-router-dom";

function SuccessResponse(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // var name = "Mayur Musale"
  return (
    <div className='successScreen'>
      <h2>Your response has been successfully recorded !!!</h2>
      <button className="btn btn-primary" id='previewsubmit'>
        <Link to="/preview">Submit Another Response</Link>
      </button>
    </div>
  );
}

export default SuccessResponse;
