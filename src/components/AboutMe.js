import React from "react";
import { Media, Container,Nav } from "react-bootstrap";
import { GoMarkGithub, GoFile, GoMail } from "react-icons/go";
import {IconContext} from "react-icons";
import '../App.css';

function AboutMe() {

  return (
    <Container style={{ paddingTop: "150px" }}>
      <IconContext.Provider value={{ size: "35" }}>
        <div className="row justify-content-center">
          <div className="col-sm-9">
            <Media className="w-responsive  p-3">
              <Media.Body>
                <h3 style={{ color: "#B8E0FE", paddingBottom: "45px" }}>
                  About Me
                </h3>
                <p className="font AboutMeContentColor">
                  My name is Zhuo Chen, a fourth-year student of Bachelor of applied science
                  degree in Software Systems Engineering at the University of
                  Regina. I believe in collaboration, and I enjoy discussion on
                  both the technical aspect and usability aspect of software
                  development, validation and deployment.
                </p>
              </Media.Body>
              <img
                width={240}
                height={260}
                className="mr-3"
                src="holder.js/64x64"
                alt=""
                style={{ paddingLeft: "40px" }}
              />
            </Media>
          </div>
          <div className="col-sm-9">
            <Nav className="mr-auto">
              <Nav.Link href="#github" className="icon">
                <GoMarkGithub />
              </Nav.Link>
              <Nav.Link href="#resume" className="icon">
                <GoFile />
              </Nav.Link>
              <Nav.Link href="#mail" className="icon">
                <GoMail />
              </Nav.Link>
            </Nav>
          </div>
        </div>
      </IconContext.Provider>
    </Container>
  );
}
export default AboutMe;
