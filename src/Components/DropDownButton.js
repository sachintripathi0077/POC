import React from "react";

function DropDownButton(props) {
  // console.log(props.list)
  return (
    <div>
      
      <button type="button" class="btn btn-outline-secondary" id="mybtn">{props.name}
        <select class="form-select" aria-label="Default select example">
          {props.list}
        </select>
        
      </button>

    </div>
  );
}

export default DropDownButton;
