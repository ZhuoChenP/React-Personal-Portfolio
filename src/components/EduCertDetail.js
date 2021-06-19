import React from "react";
import {  Media } from "react-bootstrap";
import "../Timeline.scss";

export const EduCertDetail = (props) => {
  return (
    <Media>
      <img
        width={64}
        height={64}
        className="mr-3"
        src="holder.js/64x64"
        alt=""
        roundedCircle
      />
      <Media.Body>
        <h5 style={{ color: "white" }}>{props.title}</h5>
        <p style={{ color: "white" }}>{props.date}</p>
      </Media.Body>
    </Media>
  );
};
export default EduCertDetail;