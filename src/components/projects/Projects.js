import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import "./projects.css";
import Image from "react-bootstrap/Image";

// skills images
import express from "../../assets/skillsImg/express.png";
import firebase from "../../assets/skillsImg/firebase.png"
import html from "../../assets/skillsImg/html.png";
import mongo from "../../assets/skillsImg/mongo.png";
import node from "../../assets/skillsImg/node.png";
import react from "../../assets/skillsImg/react.png";
import bootstrap from "../../assets/skillsImg/bootstrap.png";
import css from "../../assets/skillsImg/css.png";
// projects
import website2 from "../../assets/project_pics/website2.JPG";
import website1 from "../../assets/project_pics/website1.JPG";
import website3 from "../../assets/project_pics/website3.JPG";
import website4 from "../../assets/project_pics/website4.JPG";
const Projects = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          {/* Project: DatePicker */}
          <ImageEvent date="22/05/2020" className="text-center" text="DatePicker" src={website2} alt="Date Picker">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This app was developed by a team of three members: me, Makiyo Rönkkö and Olabisi Odusanya. The aim is to allow friends, colleagues and acquaintances pick a suitable date to meet for a get-together, party or other meetings.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Create events</li>
                          <li>Delete events</li>
                          <li>Like events</li>
                          <li>Real-time API calls</li>
                          <li>Register</li>
                          <li>Login</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={html} alt="HTML 5" rounded className="image-style m-1"></Image> HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={css} alt="CSS 3" rounded className="image-style m-1"></Image> CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={react} alt="React" rounded className="image-style1 m-1"></Image> React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={node} alt="Node.js" rounded className="image-style1 m-1"></Image> Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={express} alt="Express" rounded className="image-style1 m-1"></Image> Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={mongo} alt="MongoDB" rounded className="image-style1 m-1"></Image> MongoDB
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://datepicker-frontend.herokuapp.com/" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton href="https://github.com/veronika333/datepicker-frontend" target="_blank">
                  SOURCE CODE FRONTEND
                </UrlButton>
                <UrlButton href="https://github.com/olabee87-stack/datepicker-backend" target="_blank">
                  SOURCE CODE BACKEND
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Share your links */}
          <ImageEvent date="3/09/2020" className="text-center" text="Share Your Favourite Links app" src={website1} alt="Share Your Favourite Links app">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An app where users can register, login, share their favourite links and add "likes" to other posts.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Register new user</li>
                          <li>Sign in exiting user</li>
                          <li>Keep track of each user's posts and "likes"</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={react} alt="React" rounded className="image-style1 m-1"></Image> React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={node} alt="Node.js" rounded className="image-style1 m-1"></Image> Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={express} alt="Express" rounded className="image-style1 m-1"></Image> Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={firebase} alt="Firebase" rounded className="image-style1 m-1"></Image> Firebase/Firestore
                            </span>
                          </li>
                        </ul>
                        <hr />
                        <em>
                          <strong>Sign Up/ Sign in:</strong>
                          <br />
                          <br />
                          You can <strong>register</strong> as new user or <strong>log in</strong>.
                          <br />
                          <br />
                          <strong>Demo Account Details:</strong>
                          <br />
                          email: top@cat.com
                          <br />
                          password: tomcat
                        </em>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://smart-face-detect-app.herokuapp.com/" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton href="https://github.com/akjha96/Smart_Brain" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Speed Test Game */}

          <ImageEvent date="10/04/2020" className="text-center" text="Speed Test Game" src={website4} alt="Speed Test Game">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An app that allows to play Speed Test Game.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Start game</li>
                          <li>Exit game</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={react} alt="React" rounded className="image-style1 m-1"></Image> React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={html} alt="HTML 5" rounded className="image-style m-1"></Image> HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={css} alt="CSS 3" rounded className="image-style m-1"></Image> CSS3
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://speedtestgame-12988.web.app/" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton href="https://github.com/veronika333/reactjs_sandbox/tree/master/speed-test-game" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Beauty Blog */}

          <ImageEvent date="13/05/2019" className="text-center" text="Beauty Blog" src={website2} alt="Beauty Blog">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is an app which allows users to make a post, open and read details and delete it.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Add a post</li>
                          <li>Delete a post</li>
                          <li>Read post in datail</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={html} alt="HTML 5" rounded className="image-style m-1"></Image> HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={css} alt="CSS 3" rounded className="image-style m-1"></Image> CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={bootstrap} alt="Bootstrap 4" rounded className="image-style m-1"></Image> Bootstrap 4
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton href="" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton href="" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default Projects;