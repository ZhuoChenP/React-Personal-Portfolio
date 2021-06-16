import React from 'react'
import { Button } from "react-bootstrap";
export const ShowButton = (props) => {
    return (
    
          <div className="col-sm-6 row justify-content-center">
        <Button onClick={props.toggleCard} variant="dark">
          {props.buttonName}
        </Button>
        </div>
    
    );
}
export default ShowButton;