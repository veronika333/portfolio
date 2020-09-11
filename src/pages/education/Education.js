import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import college from "../../assets/icons/college.jpg";
import "./education.css";
import Tilt from 'react-tilt';

const Education = () => {
  return (
    <div id="education">
      <h1 className="pt-3 text-center font-details-b pb-3">EDUCATION</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={college} alt="Business College Helsinki logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Full Stack Web Development Program</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    {/* <strong className="body-title-style ">Full Stack Developer</strong>
                    <br /> */}
                    <strong>Role:</strong> Full-time Student
                    <br />
                    <strong>Description:</strong> Intensive and focused training for Software Developers specializing in JavaScript, React and Node.js.
                    <br />
                    <strong>Technology:</strong> JavaScript, HTML, CSS, React, Node.js, Redux, MongoDB, Unit testing
                    <br />
                    <strong>Duration:</strong> January 2020 - Present
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Education;