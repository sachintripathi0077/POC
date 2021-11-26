import React from "react";
import Header from "./Header";
import "../App.css";
import { Carousel, Card, CardGroup } from "react-bootstrap";
import sslogo from "../img/sslogo.png";
import mainslide from "../img/mainslide.png";
import personalcard from "../img/personalcard.jpg";
import educationcard from "../img/educationcard.jpg";
import workcard from "../img/workcard.jpg";
import { VscAdd } from "react-icons/vsc";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div>
      <br />
      <div>
        <div className="column">
          <img src={mainslide} alt="mainslide" width="100%"></img>
        </div>
        <div className="column2">
          <h1>
            Get Started with <b>Super Survey</b>
          </h1>
          <br />
          <Link to="/createChoice">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              id="buttonlocation"
              style={{ float: "inherit" }}
            >
              <b>
                <VscAdd /> Create Form
              </b>
            </button>
          </Link>

        </div>
      </div>
      <marquee className="marque">
        <p>
          <b>Get feedback effortlessly with surveys, polls, and quizzes.</b>
        </p>
      </marquee>

      <h1 style={{ textAlign: "center" }}>Get a head start with templates</h1>
      <div style={{ textAlign: "center" }}>
        Choose from a variety of surveys, questionnaires, and other
        professionally-designed templates to kick things off quickly.
      </div>
      {/* Card Layout Starting */}
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            src={personalcard}
            style={{ height: "300px" }}
          />
          <Card.Body>
            <Card.Title>Feedback</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Personal</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={educationcard}
            style={{ height: "300px" }}
          />
          <Card.Body>
            <Card.Title>Assessment</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Education</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={workcard} style={{ height: "300px" }} />
          <Card.Body>
            <Card.Title>Registration</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Work</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      {/* Card Ending */}
      &nbsp;
      {/* Footer Starting */}
      <footer className="footer">
        <img src={sslogo} alt="Logo not Found" width="80px" align="left" />
        <p>
          Copyright © 2021 <b>Super Survey</b> | All Rights Reserved | Terms of
          Service | Privacy Policy
        </p>
      </footer>
      {/* Footer Ending */}
    </div>
  )
}

export default Home
