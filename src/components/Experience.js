import { Container } from "react-bootstrap";
import React from "react";
import "../Timeline.scss";
import { GoFile } from "react-icons/go";

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
                <div className="timeline-container warning">
                  <div className="timeline-icon">
                    <i
                      className="far fa-grimace"
                      style={{ textAlign: "center" }}
                    >
                      <GoFile />
                    </i>
                  </div>
                  <div className="timeline-body">
                    <h4 className="timeline-title">
                      <span className="badge">Warning</span>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aliquam necessitatibus numquam earum ipsa fugiat veniam
                      suscipit, officiis repudiandae, eum recusandae neque
                      dignissimos. Cum fugit laboriosam culpa, repellendus esse
                      commodi deserunt.
                    </p>
                    <p className="timeline-subtitle">1 Day Ago</p>
                  </div>
                </div>
                <div className="timeline-container">
                  <div className="timeline-icon">
                    <i className="far fa-grin-beam-sweat">
                      <GoFile />
                    </i>
                  </div>
                  <div className="timeline-body">
                    <h4 className="timeline-title">
                      <span className="badge">Secondary</span>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aliquam necessitatibus numquam earum ipsa fugiat veniam
                      suscipit, officiis repudiandae, eum recusandae neque
                      dignissimos. Cum fugit laboriosam culpa, repellendus esse
                      commodi deserunt.
                    </p>
                    <p className="timeline-subtitle">3 Days Ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Experience;
