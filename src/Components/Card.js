import { height } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import img from "../img/createform.jpg";
import sslogo from "../img/sslogo.png";
import img1 from "../img/templateform.PNG";

function Card(props) {
  let path = `${props.to}`;
  console.log(path);

  return (
    <div className="homecards" style={{ width: "50%" }}>
        <Link to={path}>
          <img src={img} className="card-img-top" alt="image" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
          </div>
        </Link>
    </div>
  );
}

export default Card;