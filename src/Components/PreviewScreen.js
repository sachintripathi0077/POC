import React from "react";
import { useState, useEffect } from "react";
import PreviewQuestion from "./PreviewQuestion";

function PreviewScreen() {
  const [state, setstate] = useState([{qid: 1, response: ''}]);

  const mockData = [
    {
      type: "text",
      options: ["a", "b", "c", "d"],
      label: "This is a question label",
      id: 1,
    },
    {
      type: "radio",
      options: ["a", "b", "c", "d"],
      label: "This is a question label",
      id: 2,
    },
    {
      type: "checkbox",
      options: ["a", "b", "c", "d"],
      label: "This is a question label",
      id: 3,
    },
    {
      type: "date",
      options: ["a", "b", "c", "d"],
      label: "This is a question label",
      id: 4,
    },
  ];

  const setPreviewState = (qState,id) => {
    let newState = state.filter((question)=>question.qid != id);
    let qStateObj = {
                response: qState,
                qid:id
            }
    newState.push(qStateObj)
    setstate(newState)
    

  };
 

  return (
    <div>
      {mockData.map((q, i) => {
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
    </div>
  );
}

export default PreviewScreen;
