import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import ToCSV from "./ToCSV";

function Responses() {
  const [responses, setResponse] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3080/responses")
      .then(function (response) {
        // console.log(response);
        setResponse(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const navigate = useNavigate();

  
  const questionArray =
    responses[0] &&
    responses[0].map((q) => {
      return q.label;
    });
  console.log(questionArray);
  console.log(responses);


  console.log("Responses", responses);
  const responseArray = [];
  var eachRow = [];
  const displayData =
    responses &&
    responses.map((eachFormResponse) => {

        const tempArr=[];
        for (let i = 0; i < questionArray.length; i++){
            let obj=eachFormResponse.find((response)=> response.label===questionArray[i])
            console.log(obj,'obj')
           tempArr.push(obj && obj.response)
        }
        console.log(eachFormResponse,'eachFormResponse', tempArr)

    responseArray.push(tempArr);
    });

  console.log("Response Array: ", responseArray);

  const handleBack = () => {
    navigate(`/createBlank`);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
            

          <h1>Responses</h1>
          <div className="export">
            <ToCSV/>
            </div>
          <div>
            <table id="dataTable">
              <tr id="dataTr">
                {questionArray &&
                  questionArray.map((q) => {
                    return (
                      <th id="dataTh">
                        <h2>{q}</h2>
                      </th>
                    );
                  })}
              </tr>

              {responseArray.map((res) => {
                return (
                  <tr id="dataTr">
                    {res.map((r) => {
                      return <td id="dataTd">{r}</td>;
                    })}
                  </tr>
                );
              })}
            </table>
          </div>
          <button
            type="button"
            className="btn btn-secondary btn-lg"
            onClick={handleBack}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Responses;
