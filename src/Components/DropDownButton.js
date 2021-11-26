import React from "react";

function DropDownButton(props) {
  return (
    <div>
      <button type="button" className="btn btn-outline-secondary" id="mybtn">
        {props.name}
        <select className="form-select" aria-label="Default select example" onChange={props.handleChange}>
          {props.list}
        </select>
      </button>
    </div>
  );
}

export default DropDownButton;