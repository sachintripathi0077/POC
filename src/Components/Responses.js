import React from 'react'
import axios from 'axios'
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom'



function Responses() {

    const [responses, setResponse] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3080/responses')
            .then(function (response) {
                // console.log(response);
                setResponse(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])
    const navigate = useNavigate();

    // async function getResponses(){
    //     const response = await axios.get('http://localhost:3080/responses')
    //     setResponse(response.data)
    // }

    // console.log("state: ", responses)
    const questionArray = responses[0] && responses[0].map((q) => {
        return q.label
    })
    console.log(questionArray)
    console.log(responses)

    // ['Name', 'Age', 'Vaccination status']
    // var k= '<tr>'
    // responses && responses.map((eachFormResponse) => {
    //     eachFormResponse.map((eachRecord) => {
    //         for (let i = 0; i < questionArray.length; i++) {

    //             if (eachRecord.label === questionArray[i]) {
    //                 console.log(questionArray[i], '=> ', eachRecord.response)
    //                 k+='<td>' + eachRecord.response + '</td>'
    //             }
    //         }

    //     })
    //     k+='</tr>'
    // })
    // console.log(k)
    // const getTable=()=>{return k}
    // const myTable=getTable();

    // function displayTable(){
    //     const displayData = responses && responses.map((eachFormResponse) => {
    //         //     eachFormResponse.map((eachRecord) => {
    //         //         for (let i = 0; i < questionArray.length; i++) {

    //         //             if (eachRecord.label === questionArray[i]) {
    //         //                 console.log(questionArray[i], '=> ', eachRecord.response)
    //         //                 k+='<td>' + eachRecord.response + '</td>'
    //         //             }
    //         //         }

    //         //     })
    //         //     k+='</tr>'
    //         // })
    // }
    console.log("Responses", responses)
    const responseArray = []
    const eachRow = []
    const displayData = responses && responses.map((eachFormResponse) => {
        eachFormResponse.map((eachRecord) => {
            for (let i = 0; i < questionArray.length; i++) {
                if (eachRecord.label === questionArray[i]) {
                    console.log(questionArray[i], '=>eachResponse ', eachRecord.response)
                    eachRow.push(eachRecord.response)
                }
            }
            
        })
        responseArray.push(eachRow)

    })


    console.log('Response Array: ', responseArray)

    const handleBack = () => {
        navigate(`/createBlank`)
    }

    return (
        <div className="container">
            <h1>
                Responses
            </h1>
            <div>
                <table id='dataTable'>
                    <tr id='dataTr'>
                        {questionArray && questionArray.map((q) => {
                            return (
                                <th id='dataTh'>
                                    <h2>
                                        {q}
                                    </h2>
                                </th>
                            )
                        })}
                    </tr>

                    {
                        responseArray.map((res) => {
                            return (
                            <tr id='dataTr'>
                                {res.map((r) => {
                                    return (
                                        <td id='dataTd'>
                                            {r}
                                        </td>
                                    )
                                })}
                            </tr>
                            )
                        })
                    }


                </table>

            </div>
            <button type='button' className="btn btn-secondary btn-lg" onClick={handleBack} >
                {/* <Link to="/successResponse">SUBMIT</Link> */}
                Back
            </button>

        </div>
    )
}



export default Responses;
