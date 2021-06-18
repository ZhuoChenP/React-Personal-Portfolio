import React from 'react'
import { GoFile } from "react-icons/go";
import "../Timeline.scss";

export const ExperienceDetail = () => {
    return (
      <div className="timeline-container warning">
        <div className="timeline-icon">
          <i className="far fa-grimace" style={{ textAlign: "center" }}>
            <GoFile />
          </i>
        </div>
        <div className="timeline-body">
          <h4 className="timeline-title">
            <span className="badge">Warning</span>
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis
            repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam
            culpa, repellendus esse commodi deserunt.
          </p>
          <p className="timeline-subtitle">1 Day Ago</p>
        </div>
      </div>
    );
}
export default ExperienceDetail;