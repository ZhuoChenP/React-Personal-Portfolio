import React from "react";
import Card from "react-bootstrap/Card";
import { RiGitRepositoryFill, RiCheckboxBlankCircleFill } from "react-icons/ri";
import { BiGitRepoForked, BiStar } from "react-icons/bi";
import "../App.css";

export const GitHubReportCard = (props) => {
  const LanguageColors = require("language-colors");
  var debug = null;
  if (props.language == null) debug = "CSS";
  else debug = props.language;
  return (
    <div className="col-sm-6">
      <Card style={{ width: "23rem" }} className="cardCustomize">
        <Card.Body>
          <Card.Title>
            <RiGitRepositoryFill />
            <a href={props.url} className="linkColor" target="_black">
              {props.name}
            </a>
          </Card.Title>
          <Card.Text className="fontProject contentColor">
            {props.description}
          </Card.Text>
          <div className="restParts">
            <RiCheckboxBlankCircleFill
              style={{ color: LanguageColors[debug.toLowerCase()] }}
            />
            <span>{debug} </span>
            <BiStar />
            <span>{props.starNum} </span>
            <BiGitRepoForked />
            {props.forkNum}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
export default GitHubReportCard;
