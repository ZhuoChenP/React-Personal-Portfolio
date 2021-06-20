import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
import { GoMarkGithub, GoFile } from "react-icons/go";
import { HiMail } from "react-icons/hi";

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      fixed="top"
      style={{ maxHeight: "3.5rem" }}
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="https://github.com/ZhuoChenP" target="_black">
            <GoMarkGithub size="28px" />
          </Nav.Link>
          <Nav.Link
            href="https://github.com/ZhuoChenP/React-Personal-Portfolio/blob/master/public/Resume.pdf"
            target="_black"
          >
            <GoFile size="28px" />
          </Nav.Link>
          <Nav.Link href="mailto:chen1994zhuo@gmail.com">
            <HiMail size="28px" />
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#AboutMe">About</Nav.Link>
          <Nav.Link href="#Experience">Experience</Nav.Link>
          <Nav.Link href="#ProjectCard">Projects</Nav.Link>
          <Nav.Link href="#Skills">Skills</Nav.Link>
          <Nav.Link href="#EduAndCert">Edu&Cert</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
