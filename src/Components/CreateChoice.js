import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import Card from "./Card";
import "../App.css";
import sslogo from "../img/sslogo.png";
import { postFormHeader, postFormQuestions } from "../Redux/actions";
import axios from "axios";

function CreateChoice({ postQuestionsList, postHeaderContent }) {
  const navigate = useNavigate();
  const [savedForm, setSavedForm] = useState("");

  const goToBlankForm = () => {
    postQuestionsList([]);
    postHeaderContent({});
    navigate("/createBlank");
  };

  useEffect(async () => {
    try {
      const response = await axios.get("http://localhost:3080/savedForms");
      console.log(response.data);
      if (response.data && response.data.length > 0) {
        const savedDetails = response.data[response.data.length - 1];
        console.log(savedDetails, "saveddetails");
        setSavedForm(savedDetails);
      }
    } catch (e) {
      console.log("error", e);
    }
  }, []);

  const goToSavedForm = () => {
    postQuestionsList(savedForm.questionList);
    postHeaderContent(savedForm.headerContent);
    navigate("/createBlank");
  };

  return (
    <div className="createchoicebg">
      <table>
        <tr>
          <td>
            <div>
              <Card
                title={"Blank Form"}
                text={
                  "Create blank form from scratch and customize it according to the requirement."
                }
                onClick={goToBlankForm}
              />
            </div>
          </td>
          <td>
            <div>
              <Card
                title={"Templates"}
                text={"Select this tile to get pre-created feedback form."}
                to={"/feedbackTemplate"}
              />
            </div>
          </td>
          {savedForm && (
            <td>
              <div>
                <Card
                  title={
                    (savedForm.headerContent.title &&
                      savedForm.headerContent.title.trim()) ||
                    "Untitled Form"
                  }
                  text={"Click to edit the previously saved form"}
                  onClick={goToSavedForm}
                />
              </div>
            </td>
          )}
        </tr>
      </table>

      <footer className="footer">
        <img src={sslogo} alt="Logo not Found" width="80px" align="left" />
        <p>
          Copyright ©️ 2021 <b>Super Survey</b> | All Rights Reserved | Terms of
          Service | Privacy Policy
        </p>
      </footer>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    existingQuestionsList: state.questionsList,
    questionId: state.questionId,
    headerContent: state.headerContent,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    postQuestionsList: (list) => dispatch(postFormQuestions(list)),
    postHeaderContent: (headerContent) =>
      dispatch(postFormHeader(headerContent)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateChoice);
