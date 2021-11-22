// import React, { Component } from 'react'

// export default class PreviewQuestion extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//           responses:[],
//         };

//       }
//     render() {
//         return (
//             <div>
//                 {this.state.questions.map((question) =>{
//                     if(question.inputType==='text'){
//                         {`<p>${question.label}</p>
//                          <input type='text' onchange={ (e)=> setState({responses:responses.push(e.target.value)})>`}
//                     }
//                 })}
//             </div>
//         )
//     }
// }

import React from "react";
import { useState, useEffect } from "react";

function PreviewQuestion({ type, options, label,setPreviewState }) {
  const [responses, setresponses] = useState([]);
    useEffect(()=>{
        
        // setPreviewState(responses)
        console.log(responses)
    }, [responses])

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
                      setresponses(op)
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
                      // console.log(e.target.checked)
                      // console.log(op)
                      let indexOfOp = responses.indexOf(op)
                      if(op in responses){
                      // let filteredResponse = responses.filter((r)=>r!=op)
                      // setresponses([...responses, filteredResponse])
                      responses.splice(indexOfOp,1)
                      console.log(responses)

                    }
                    else{
                      setresponses([...responses, op])
                    }
                  }
                  }
                    
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
