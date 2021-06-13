import React from "react";
import Card from "react-bootstrap/Card";
import { RiGitRepositoryFill } from "react-icons/ri";
import { BiGitRepoForked, BiStar, BiCircle } from "react-icons/bi";
import "../App.css";
export const GitHubReportCard = () => {
  return (
    <div>
      <div className="col-sm-9">
        <Card style={{ width: "23rem"}} className="cardCustomize">
          <Card.Body>
            <Card.Title>
              <RiGitRepositoryFill />
              Card Title
            </Card.Title>
            <Card.Text className="font">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div>
              <BiCircle /> <span>python </span>
              <BiStar />
              <span>1 </span>
              <BiGitRepoForked />
              <span>1</span>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default GitHubReportCard;
