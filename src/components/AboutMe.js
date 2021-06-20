import React from "react";
import { Media, Container, Nav, Image } from "react-bootstrap";
import { GoMarkGithub, GoFile, GoMail } from "react-icons/go";
import {IconContext} from "react-icons";
import '../App.css';

function AboutMe() {

  return (
    <Container style={{ paddingTop: "150px" }} id="AboutMe">
      <IconContext.Provider value={{ size: "35" }}>
        <div className="row justify-content-center">
          <div className="col-sm-9">
            <Media className="w-responsive  p-3">
              <Media.Body>
                <h3 className="titleColor titlePosition">About Me</h3>
                <p className="font contentColor">
                  My name is Zhuo Chen, a fourth-year student of Bachelor of
                  applied science degree in Software Systems Engineering at the
                  University of Regina. I believe in collaboration, and I enjoy
                  discussion on both the technical aspect and usability aspect
                  of software development, validation and deployment.
                </p>
              </Media.Body>
              <Image
                width={233}
                height={260}
                className="mr-3"
                src={process.env.PUBLIC_URL + "/photo.jpg"}
                alt="photo"
                rounded
                style={{ paddingLeft: "40px" }}
              />
            </Media>
          </div>
          <div className="col-sm-9">
            <Nav className="mr-auto">
              <Nav.Link
                href="https://github.com/ZhuoChenP"
                className="icon"
                target="_black"
              >
                <GoMarkGithub />
              </Nav.Link>
              <Nav.Link
                href="https://github.com/ZhuoChenP/React-Personal-Portfolio/blob/master/public/Resume.pdf"
                className="icon"
                target="_black"
              >
                <GoFile />
              </Nav.Link>
              <Nav.Link href="mailto:chen1994zhuo@gmail.com" className="icon">
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
