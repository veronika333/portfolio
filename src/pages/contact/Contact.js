import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact.css";

const ContactForm = () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a href="mailto:veronika.maisura@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="light" title="veronika.maisura@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.linkedin.com/in/veronika-maisuradze-42423088/" target="_blank" rel="noopener noreferrer">
                <Button variant="light" title="Visit my LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.facebook.com/veronika.maisuradze.5/" target="_blank" rel="noopener noreferrer">
                <Button variant="light" title="Say hello on FB">
                  <i className="fab fa-facebook-square"></i> Facebook
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://github.com/veronika333" target="_blank" rel="noopener noreferrer">
                <Button variant="light" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.instagram.com/veronikamaisuradze/?hl=fi" target="_blank" rel="noopener noreferrer">
                <Button variant="light" title="Messages in instagram are welcome!">
                  <i className="fab fa-instagram"></i> Instagram
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default ContactForm;