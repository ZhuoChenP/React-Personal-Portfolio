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
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis. Fusce
                  condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
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
