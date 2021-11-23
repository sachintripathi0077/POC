import React from "react";
import { useState, useEffect } from "react";

function PreviewQuestion({ type, options, label, setPreviewState, id }) {
  const [responses, setresponses] = useState([]);

  useEffect(() => {
    setPreviewState(responses, id);
  }, [responses]);

  if (type === "text") {
    return (
      <>
        <h1>{label}</h1>
        <div>
          <input
            type="text"
            onChange={(e) => {
              setresponses(e.target.value);
            }}
          ></input>
        </div>
      </>
    );
  }
  if (type === "radio") {
    return (
      <>
        <h1>{label}</h1>
        <div>
          {options.map((op) => {
            return (
              <>
                {" "}
                <label>
                  <input
                    type="radio"
                    name={label}
                    value={op}
                    onClick={() => {
                      setresponses(op);
                    }}
                  />
                  {op}
                </label>
              </>
            );
          })}
        </div>
      </>
    );
  }
  if (type === "checkbox") {
    return (
      <>
        <h1>{label}</h1>
        <div>
          {options.map((op) => {
            return (
              <>
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      let indexOfOp = responses.indexOf(op);
                      if (e.target.checked === true) {
                        setresponses([...responses, op]);
                      } else {
                        let updatedResponse = responses.splice(indexOfOp, 1);
                        setresponses([...responses], updatedResponse);
                      }
                    }}
                  />
                  {op}
                </label>
              </>
            );
          })}
        </div>
      </>
    );
  }
  if (type === "dropdown") {
    return (
      <>
        <h1>{label}</h1>
        <div>
          {options.map((op) => {
            return (
              <>
                <select onChange={(e) => setresponses(e.target.value)}>
                  <option value={op}>{op}</option>
                </select>
              </>
            );
          })}
        </div>
      </>
    );
  }
  if (type === "date") {
    return (
      <>
        <h1>{label}</h1>
        <div>
          <input
            type="date"
            onChange={(e) => {
              setresponses(e.target.value);
            }}
          ></input>
        </div>
      </>
    );
  }
}

export default PreviewQuestion;
