import React from 'react'
export const ShowButton = (props) => {
    return (
    
          <div className="col-sm-6 row justify-content-center">
        <a onClick={props.toggleCard} className="projectButton">
          {props.buttonName}
        </a>
        </div>
    
    );
}
export default ShowButton;