import { Container } from "react-bootstrap";
import React from "react";
import "../Timeline.scss";
import ExperienceDetail from "./ExperienceDetail";
import { FaDraftingCompass } from "react-icons/fa";
import { RiShoppingCartFill } from "react-icons/ri";

function Experience() {
  var experienceList = [
    {
      job_type: "Internship",
      job_title: "Drafter Intern",
      Company_Name: "Reno Design Hongyi Inc",
      date: "September 2016 - March 2018",
      job_duties: [
        "Create 3D Model Designs based on Project Requirements",
        "Create blue print 2D drawings of designs after fabrication",
        "Develop technical drawings for design development and estimating",
        "Verify the manufactured furniture",
      ],
      icon: <FaDraftingCompass size="20px" />,
      className: "internship",
    },
    {
      job_type: "Part Time",
      job_title: "General Labour",
      Company_Name: "Great Asian Market",
      date: "April 2020 - August 2020",
      job_duties: [
        "Package a variety of vegetables and fruits",
        "Load and unload the products",
        "Perform cleanup tasks at job site",
        "Performe various tasks",
      ],
      icon: <RiShoppingCartFill size="20px" />,
      className: "partTime",
    },
  ];

  return (
    <Container style={{ paddingTop: "30px" }} id="Experience">
      <div className="row justify-content-center">
        <div className="col-sm-9">
          <div className="w-responsive  p-3">
            <h3 className="titleColor     titlePosition">Experience</h3>
            <div className="container">
              <div className="timeline">
                {experienceList.map((exp, index) => {
                  return <ExperienceDetail exp={exp} index={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Experience;
