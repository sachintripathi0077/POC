import React from "react";
import Header from "./Header";
import "../App.css";
import { Carousel, Card, CardGroup } from "react-bootstrap";
import sslogo from "../img/sslogo.png";
import slide1 from "../img/slide1.jpg";
import slide2 from "../img/slide2.png";
import slide3 from "../img/slide3.png";
import personalcard from "../img/personalcard.jpg";
import educationcard from "../img/educationcard.jpg";
import workcard from "../img/workcard.jpg";


function Home() {
    return (
        <div>
      {/* Caraousal Starting */}
      <Carousel class="carous">
        <Carousel.Item interval={500} style={{ height: "500px" }}>
          <img
            className="d-block w-100"
            src={slide1}
            alt="First slide"
            style={{ height: "600px" }}
          />
          <Carousel.Caption>
            <h2 class="carousalcaptions">
              <b>Let built-in intelligence work for you</b>
            </h2>
            <p class="carousalcaptions">
              <b>
                Collect the right feedback for your goals, no matter your skill
                level. Built-in AI and smart recommendations do the heavy
                lifting for you.
              </b>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500} style={{ height: "500px" }}>
          <img
            className="d-block w-100"
            src={slide2}
            alt="Second slide"
            style={{ height: "500px" }}
          />
          <Carousel.Caption>
            <h3>
              <b>Quickly turn insights into actions</b>
            </h3>
            <p>
              <b>
                Visualize data in seconds with powerful, real-time charts and
                automatically generated reports. Easily export to Excel for
                customized, in-depth analysis.
              </b>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500} style={{ height: "500px" }}>
          <img
            className="d-block w-100"
            src={slide3}
            alt="Third slide"
            style={{ height: "500px" }}
          />
          <Carousel.Caption>
            <h3 class="carousalcaptions">
              <b>Increase your reach</b>
            </h3>
            <p class="carousalcaptions">
              <b>
                Seamlessly integrate with favorite apps to connect with
                audiences where they are. Easily share surveys to collaborate
                across groups. Ensure everyone’s voice is heard with
                multilingual support in Forms.
              </b>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* Caraousal Ending*/}
      <marquee class="marque">
        <h2>
          <b>Get feedback effortlessly with surveys, polls, and quizzes.</b>
        </h2>
      </marquee>
      <Header />
      &nbsp;
      <h1>Get a head start with templates</h1>
      <div>
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
