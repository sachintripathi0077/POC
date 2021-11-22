import React from "react";
import { Link } from "react-router-dom";
import img from "../img/img1.jpg";

function Card(props) {
  let path = `${props.to}`;
  console.log(path);

  return (
    <div className="card" style={{ width: "30%" }}>
      <img src={img} className="card-img-top" alt="image" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href="#" className="btn btn-primary">
          <Link to={path}>Create</Link>
        </a>
      </div>
    </div>
  );
}

export default Card;
