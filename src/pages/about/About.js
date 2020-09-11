import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import veronika from '../../assets/veronika.png';
import './about.css';
import Button from 'react-bootstrap/Button';

export default function About() {
    return (
        <div>
             <h1 className="text-center font-details-b pb-4">ABOUT ME</h1>
             <div className="about">
            <Container>
                <Row className="pt-3 pb-5 align-items-center">
                    <Col xs={6} md={4}>
                    <Row className="justify-content-center mb-2 mr-2 ">
                    <Image src={veronika} roundedCircle fluid />
                    </Row>
                    </Col>
                    <Col xs={12} md={8}>
                        <Row className="padding">
                    Hi, I'm Veronika! <br/><br />
                    I am a Software Development Student at Business College Helsinki. The technologies I work with include JavaScript, ReactJS, HTML5, CSS3, Bootstrap, Redux, Node.js, MongoDB and Git version control. 
The link to my Github is the following:  https://github.com/veronika333. It includes some projects made with the technologies listed above.
<br /> <br />
I have a great interest in IT-field, very good teamwork skills, excellent communication skills and a strong desire to learn new skills. 

</Row>
                    </Col>

  <Col className="d-flex justify-content-center flex-wrap">
<div>
    <a href="#contact">
        <Button variant="light">Contact me</Button>
    </a>
</div>
<div>
    <a href="#contact">
        <Button variant="light">My CV</Button>
    </a>
</div>
<div>
    <a href="https://github.com/veronika333">
        <Button variant="light">My GitHub</Button>
    </a>
</div>
<div>
    <a href="https://www.linkedin.com/in/veronika-maisuradze-42423088/">
        <Button variant="light">My LinkedIn</Button>
    </a>
</div>
                </Col>
                </Row>

              
            </Container>
        </div>
        </div>
    )
}
