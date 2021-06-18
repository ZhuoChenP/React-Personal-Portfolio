import React from "react";
import EduCertDetail from "./EduCertDetail";
import { Container } from "react-bootstrap";
export const EduAndCert = () => {
  const educationList = [
    {
      title:
        "University of Regina, Bachelor of Applied Science, Software Systems Engineering",
      date: "September 2014 - April 2023",
    },
    {
      title:
        "Rosemount Technology Centre, Diploma of Vocational Studies, Industrial Drafting",
      date: "September 2016 - March 2018",
    },
  ];

  return (
    <Container style={{ paddingTop: "30px" }}>
      <div className="row justify-content-center">
        <div className="col-sm-9">
          <div className="w-responsive  p-3">
            <h3 style={{ color: "#B8E0FE", paddingBottom: "45px" }}>
              Education and Certification
            </h3>
            {
              educationList.map((edu, index) => {
                return <EduCertDetail key={index}
                title={edu.title}
                date={edu.date}
                />;
              })
            }
          </div>
        </div>
      </div>
    </Container>
  );
};

export default EduAndCert;
