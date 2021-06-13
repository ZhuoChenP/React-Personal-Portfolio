import React from "react";
import { Container} from "react-bootstrap";
import GitHubReportCard from "./GitHubReportCard";
import "../App.css";
function ProjectCard() {
  return (
    <Container style={{ paddingTop: "30px" }}>
      <div className="row justify-content-center">
        <div className="col-sm-9">
          <div className="w-responsive  p-3">
            <h3 style={{ color: "#B8E0FE" }}>Project</h3>
          </div>
        </div>
        <div className="row justify-content-center col-sm-9 w-responsive">
          <div className="col-sm-6">
            <GitHubReportCard />
          </div>
          <div className="col-sm-6">
            <GitHubReportCard />
          </div>
          <div className="col-sm-6">
            <GitHubReportCard />
          </div>
          <div className="col-sm-6">
            <GitHubReportCard />
          </div>
        </div>
      </div>
    </Container>
  );
}
export default ProjectCard;
