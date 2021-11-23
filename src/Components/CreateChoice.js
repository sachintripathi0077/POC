import React from "react";
import Card from "./Card";
import "../App.css";
import sslogo from "../img/sslogo.png";

function CreateChoice() {
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
                to={"/createBlank"}
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

export default CreateChoice;
