import React from "react";
import { Container } from "react-bootstrap";
import { Canvas } from "@react-three/fiber";

export const Skills = () => {
  function Box() {
    return (
      <mesh>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="hotpink" />
      </mesh>
    );
  }
  return (
    <Container style={{ paddingTop: "30px" }} id="Skills">
      <div className="row justify-content-center">
        <div className="col-sm-9">
          <div className="w-responsive  p-3">
            <h3
              className="titleColor titlePosition"
              style={{ paddingBottom: "45px" }}
            >
              Skills
            </h3>
          </div>
 
        </div>
      </div>
    </Container>
  );
};

export default Skills;
