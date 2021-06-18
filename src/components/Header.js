import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
import { GoMarkGithub, GoFile } from "react-icons/go";
import { HiMail } from "react-icons/hi";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#github">
            <GoMarkGithub size="28px" />
          </Nav.Link>
          <Nav.Link href="#resume">
            <GoFile size="28px" />
          </Nav.Link>
          <Nav.Link href="#mail">
            <HiMail size="28px" />
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#experience">Experience</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#edu&cert">Edu&Cert</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
