import bootstrap from "../../assets/skillsImg/bootstrap.png";
import css from "../../assets/skillsImg/css.png";
import express from "../../assets/skillsImg/express.png";
import firebase from "../../assets/skillsImg/firebase.png"
import git from "../../assets/skillsImg/git.png";
import heroku from "../../assets/skillsImg/heroku.png";
import html from "../../assets/skillsImg/html.png";
import javascript from "../../assets/skillsImg/javascript.png";
import mongo from "../../assets/skillsImg/mongo.png";
import node from "../../assets/skillsImg/node.png";
import react from "../../assets/skillsImg/react.png";
import redux from "../../assets/skillsImg/redux.png";
import material from "../../assets/skillsImg/material.png";

export const skills = {
    frontend: [
      {
        link: "https://en.wikipedia.org/wiki/HTML5",
        imgAltText: "HTML 5",
        imgSrc: html,
        skillName: "HTML5",
      },
      {
          link: "https://en.wikipedia.org/wiki/CSS",
        imgAltText: "CSS 3",
        imgSrc: css,
        skillName: "CSS3",
      },
      {
        link: "https://www.javascript.com/",
        imgAltText: "JavaScript",
        imgSrc: javascript,
        skillName: "JavaScript",
      },
      {
        link: "https://getbootstrap.com/",
        imgAltText: "Bootstrap",
        imgSrc: bootstrap,
        skillName: "Bootstrap",
      },
      {
        link: "https://reactjs.org/",
        imgAltText: "React JS",
        imgSrc: react,
        skillName: "React JS",
      },
      {
        link: "https://redux.js.org/",
        imgAltText: "Redux",
        imgSrc: redux,
        skillName: "Redux",
      },
      {
        link: "https://material-ui.com/",
        imgAltText: "Material-UI",
        imgSrc: material,
        skillName: "Material-UI",
      },
    ],
  
    backend: [
      {
        link: "https://nodejs.org/en/",
        imgAltText: "Node.js",
        imgSrc: node,
        skillName: "Node.js",
      },
      {
        link: "https://expressjs.com/",
        imgAltText: "Express",
        imgSrc: express,
        skillName: "Express",
      }
    ],
    hostingPlatforms: [
      {
        link: "https://www.heroku.com/",
        imgAltText: "Heroku",
        imgSrc: heroku,
        skillName: "Heroku",
      },
      {
        link: "https://firebase.google.com/",
        imgAltText: "Firebase",
        imgSrc: firebase,
        skillName: "Firebase",
      },
    ],
    programmingLanguages: [
      {
        link: "https://www.javascript.com/",
        imgAltText: "JavaScript",
        imgSrc: javascript,
        skillName: "JavaScript",
      }
    ],
    databases: [
      {
        link: "https://www.mongodb.com/",
        imgAltText: "MongoDB",
        imgSrc: mongo,
        skillName: "MongoDB",
      },
      {
        link: "https://firebase.google.com/docs/firestore",
        imgAltText: "Firestore",
        imgSrc: firebase,
        skillName: "Firebase/Firestore",
      },
    ],
    versionControl: [
      {
        link: "https://git-scm.com/",
        imgAltText: "GIT",
        imgSrc: git,
        skillName: "GIT",
      },
    ],
  };