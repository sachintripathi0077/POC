import React from "react";
import Card from "./Card";

function CreateChoice() {
  return (
    <div>
      <table>
        <tbody>
        <tr>
          <td>
            <div>
              <Card
                title={"Blank Form"}
                text={
                  "Create blank form from scratch and customize it according to the requirement."
                }
                to={'/createBlank'}
              />
            </div>
          </td>
          <td>
            <div>
              <Card
                title={"Templates"}
                text={"Select this tile to get pre-created feedback form."}
                to={'/feedbackTemplate'}
              />
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CreateChoice;
