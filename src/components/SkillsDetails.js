import React from 'react'
import { Container, InputGroup } from "react-bootstrap";
import * as SimpleIcons from "react-icons/si";
import "../App.css";

export const SkillsDetails = (props) => {
  
    return (
      <div className="badge selected">
        <div className="badge" style={{ color: props.color }}>
          {props.icon}
        </div>
        <div className="badge skillbg badge-right noselect">{props.title}</div>
      </div>
    );
}
 export default SkillsDetails;