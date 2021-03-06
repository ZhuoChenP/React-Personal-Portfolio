import React from "react";
import "../Timeline.scss";
import "../App.css";

export const ExperienceDetail = (props) => {
  return (
    <div className={"timeline-container " + props.exp.className}>
      <div className="timeline-icon">
        <i className="far fa-grimace">{props.exp.icon}</i>
      </div>
      <div className="timeline-body">
        <h4 className="timeline-title">
          <span className="badge">{props.exp.job_type}</span>
          <span
            style={{ fontSize: "1rem", paddingLeft: "1rem" }}
            className="titleColor"
          >
            {props.exp.job_title}
          </span>
        </h4>
        <ul style={{ paddingLeft: "1rem" }} className="contentColor">
          {props.exp.job_duties.map((job_duty, index) => {
            return <li key={index}>{job_duty}</li>;
          })}
        </ul>
        <p className="restParts">{props.exp.date}</p>
      </div>
    </div>
  );
};
export default ExperienceDetail;
