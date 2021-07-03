import React from "react";
import { Container } from "react-bootstrap";
import SkillsDetails from "./SkillsDetails";
import * as SimpleIcons from "react-icons/si";
import { FaNode } from "react-icons/fa";
export const Skills = () => {
  var skillList = [
    {
      title: "Adobe XD",
      color: "#FFDAF2",
      icon: <SimpleIcons.SiAdobexd size="1.8rem" />,
    },
    {
      title: "WordPress",
      color: "#21759B",
      icon: <SimpleIcons.SiWordpress size="1.8rem" />,
    },
    {
      title: "Jenkins",
      color: "#D33833",
      icon: <SimpleIcons.SiJenkins size="1.8rem" />,
    },
    {
      title: "Git",
      color: "#f34f29",
      icon: <SimpleIcons.SiGit size="1.8rem" />,
    },
    {
      title: "GitHub",
      color: "#89929b",
      icon: <SimpleIcons.SiGithub size="1.8rem" />,
    },
    {
      title: "VS Code",
      color: "#23AAF2",
      icon: <SimpleIcons.SiVisualstudiocode size="1.8rem" />,
    },
    {
      title: "Eclipse",
      color: "#41327C",
      icon: <SimpleIcons.SiEclipseide size="1.8rem" />,
    },
    {
      title: "Visual Studio",
      color: "#AB75E9",
      icon: <SimpleIcons.SiVisualstudio size="1.8rem" />,
    },
    {
      title: "Maven",
      color: "#C46E5C",
      icon: <SimpleIcons.SiApachemaven size="1.8rem" />,
    },
    {
      title: "Gradle",
      color: "#29B4C7",
      icon: <SimpleIcons.SiGradle size="1.8rem" />,
    },
    {
      title: "Docker",
      color: "#2391E6",
      icon: <SimpleIcons.SiDocker size="1.8rem" />,
    },
    {
      title: "C++",
      color: "#f34b7d",
      icon: <SimpleIcons.SiCplusplus size="1.8rem" />,
    },
    {
      title: "Java",
      color: "#b07219",
      icon: <SimpleIcons.SiJava size="1.8rem" />,
    },
    {
      title: "JavaScript",
      color: "#f1e05a",
      icon: <SimpleIcons.SiJavascript size="1.8rem" />,
    },
    {
      title: "Python",
      color: "#3572A5",
      icon: <SimpleIcons.SiPython size="1.8rem" />,
    },
    {
      title: "MySQL",
      color: "#dad8d8",
      icon: <SimpleIcons.SiMysql size="1.8rem" />,
    },
    {
      title: "PHP",
      color: "#4F5D95",
      icon: <SimpleIcons.SiPhp size="1.8rem" />,
    },
    {
      title: "CSS",
      color: "#563d7c",
      icon: <SimpleIcons.SiCss3 size="1.8rem" />,
    },
    {
      title: "HTML",
      color: "#e34c26",
      icon: <SimpleIcons.SiHtml5 size="1.8rem" />,
    },
    {
      title: "MongoDb",
      color: "#4AA348",
      icon: <SimpleIcons.SiMongodb size="1.8rem" />,
    },
    {
      title: "Node.js",
      color: "#6AA05C",
      icon: <FaNode size="1.8rem" />,
    },
    {
      title: "React.js",
      color: "#5ED3F3",
      icon: <SimpleIcons.SiReact size="1.8rem" />,
    },
    {
      title: "AutoCAD",
      color: "#C6272A",
      icon: <SimpleIcons.SiAutodesk size="1.8rem" />,
    },
  ];
  return (
    <Container style={{ paddingTop: "30px" }} id="Skills">
      <div className="row justify-content-center">
        <div className="col-sm-9">
          <div className="w-responsive  p-3">
            <h3
              className="titleColor titlePosition"
              style={{ paddingBottom: "30px" }}
            >
              Skills
            </h3>
          </div>
          <Container>
            {skillList.map((skill, index) => {
              return (
                <SkillsDetails
                  title={skill.title}
                  color={skill.color}
                  icon={skill.icon}
                />
              );
            })}
          </Container>
        </div>
      </div>
    </Container>
  );
};

export default Skills;
