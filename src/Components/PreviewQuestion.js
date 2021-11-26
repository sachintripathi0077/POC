import React from "react";
import { useState, useEffect } from "react";

function PreviewQuestion({ type, options, label, setPreviewState, id }) {
  const [responses, setresponses] = useState([]);

  useEffect(() => {
    setPreviewState(responses, id, label);
  }, [responses]);

  if (type === "text") {
    return (
      <>
        <div className="resizePreviewCard2">
          <div className="card  p-0 mt-0 mb-1 mx-0">
            <div className="card-body">
              <div>
                <div className="card mt-0 mb-0">
                  <div className="card-body opdiv">
                    {label}
                  </div>
                </div>
              </div>
              <div>
                <div className="card  mt-1 mb-0">
                  <div className="card-body pr-0 opdiv">
                    <input
                      type="text"
                      onChange={(e) => {
                        setresponses(e.target.value);
                      }}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  if (type === "radio") {
    return (
      <>
        <div className="resizePreviewCard2">
          <div className="card  p-0 mt-0 mb-1 mx-0">
            <div className="card-body">
              <div className="card mt-0 mb-0">
                <div className="card-body opdiv ">
                  {label}
                </div>
              </div>
              <div>
                <div className="card mt-1 mb-0">
                  <div className="card-body pr-0">
                    {options.map((op) => {
                      return (
                        <>
                          {" "}
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" onClick={() => {
                              setresponses(op);
                            }} />
                            <div className="opdiv">
                              <label className="form-check-label" for="exampleRadios1">
                                {op}
                              </label>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  if (type === "checkbox") {
    return (
      <>
        <div className="resizePreviewCard2">
          <div className="card  p-0 mt-0 mb-1 mx-0">
            <div className="card-body">
              <div>
                <div className="card mt-0 mb-0">
                  <div className="card-body opdiv">
                    {label}
                  </div>
                </div>
              </div>
              <div>
                <div className="card  mt-1 mb-0">
                  <div className="card-body pr-0">
                    {options.map((op) => {
                      return (
                        <>
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value={op} id="flexCheckDefault" onChange={(e) => {
                              let indexOfOp = responses.indexOf(op);
                              if (e.target.checked === true) {
                                setresponses([...responses, op]);
                              } else {
                                let updatedResponse = responses.splice(indexOfOp, 1);
                                setresponses([...responses], updatedResponse);
                              }
                            }} />
                            <div className="opdiv">
                              <label className="form-check-label" for="flexCheckDefault">
                                {op}
                              </label>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  if (type === "dropdown") {
    return (
      <>
        {label}
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
        <div className="resizePreviewCard2">
          <div className="card  p-0 mt-0 mb-1 mx-0">
            <div className="card-body">
              <div>
                <div className="card mt-0 mb-0">
                  <div className="card-body opdiv">
                    {label}
                  </div>
                </div>
              </div>
              <div>
                <div className="card  mt-1 mb-0">
                  <div className="card-body pr-0">
                    <input
                      type="date"
                      onChange={(e) => {
                        setresponses(e.target.value);
                      }}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PreviewQuestion;
