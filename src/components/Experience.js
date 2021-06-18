import { Container } from "react-bootstrap";
import React from "react";
import "../Timeline.scss";
import ExperienceDetail from "./ExperienceDetail";

function Experience() {
  return (
    <Container style={{ paddingTop: "30px" }}>
      <div className="row justify-content-center">
        <div className="col-sm-9">
          <div className="w-responsive  p-3">
            <h3 style={{ color: "#B8E0FE", paddingBottom: "45px" }}>
              Experience
            </h3>
            <div className="container">
              <div className="timeline">
                <ExperienceDetail />
                <ExperienceDetail />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Experience;
