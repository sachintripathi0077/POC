import React from "react";
import { Link } from 'react-router-dom'

function nav() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button className="navButton">
            <Link to='/home'>
              Super Survey
            </Link>
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button className="navButton">
                  <Link to='/home'>
                    Home
                  </Link>
                </button>
              </li>
              <li className="nav-item">
                <button className="navButton">
                  <Link to='/createChoice'>
                    Dashboard
                  </Link>
                </button>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default nav;
