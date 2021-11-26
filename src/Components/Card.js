import React from "react";
import { Link } from "react-router-dom";
import img from "../img/createform.jpg";

function Card(props) {
  return (
    <div className="homecards" style={{ width: "50%" }} onClick={props.onClick}>
        <Link to='/createChoice'>
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