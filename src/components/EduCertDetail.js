import React from "react";
import { Media, Image } from "react-bootstrap";
import "../Timeline.scss";
import "../App.css"

export const EduCertDetail = (props) => {
  return (
    <Media>
      <Image
        width={64}
        height={64}
        className="mr-3"
        src={process.env.PUBLIC_URL + props.img}
        alt={props.img}
        roundedCircle
      />
      <Media.Body>
        <h5 className="titleColor">{props.title}</h5>
        <p className="restParts">{props.date}</p>
      </Media.Body>
    </Media>
  );
};
export default EduCertDetail;