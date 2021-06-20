import React from "react";
import { Col, Row, Container, Nav } from "react-bootstrap";
import { GoMarkGithub, GoMail } from "react-icons/go";
import { IconContext } from "react-icons";
import { ImLinkedin } from "react-icons/im";
import { SiLeetcode } from "react-icons/si";
import { HiMail } from "react-icons/hi";
import "../App.css";
export const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#343A40" }}>
      <Container>
        <br />
        <Row>
          <Col>
            <h8 className="footerStyle">
              © 2021 Zhuo Chen All rights reserved.
            </h8>
          </Col>
          <Col></Col>
          <Col className="footerStyle">
            <IconContext.Provider
              value={{
                size: "28",
              }}
            >
              <ul>
                <li className="footerIcon">
                  <a
                    href="https://github.com/ZhuoChenP"
                    target="_black"
                    className="footIcon"
                  >
                    <GoMarkGithub />
                  </a>
                </li>
                <li className="footerIcon">
                  <a
                    href="mailto:chen1994zhuo@gmail.com"
                    className="footIcon"
                  >
                    <HiMail />
                  </a>
                </li>
                <li className="footerIcon">
                  <a
                    href="https://www.linkedin.com/in/zhuo-chen-0aa190a1/"
                    target="_black"
                    className="footIcon"
                  >
                    <ImLinkedin />
                  </a>
                </li>
                <li className="footerIcon">
                  <a
                    href="https://leetcode.com/chen1994zhuo/"
                    target="_black"
                    className="footIcon"
                  >
                    <SiLeetcode />
                  </a>
                </li>
              </ul>
            </IconContext.Provider>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
