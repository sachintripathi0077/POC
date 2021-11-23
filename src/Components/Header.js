import React from "react";
import "../App.css";
import { IoIosAddCircleOutline } from "react-icons";
import { VscAdd } from "react-icons/vsc";
import { CgAddR } from "react-icons";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="header">
        <div>
          &nbsp; &nbsp;
          <h1>Quickly Create an Online Forms Easily...</h1>
          &nbsp;
          <h1>
            Get Started with <b>Super Survey</b>...
          </h1>
          &nbsp;
          <a className="nav-link active" aria-current="page">
            <Link to="/createChoice">
              <button
                type="button"
                class="btn btn-primary btn-lg"
                id="buttonlocation"
                style={{ float: 'inherit' }}
              >
                <VscAdd />
                Create Form
              </button>
            </Link>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
