import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import GitHubReportCard from "./GitHubReportCard";
import SearchBar from "./SearchBar";
import LanguageNotFound from "./LanguageNotFound";
import "../App.css";
import ShowButton from "./ShowButton";

function ProjectCard() {
  const [repos, setRepos] = useState([]);
  const [searchterm, setSearchterm] = useState("");
  const [result, setResult] = useState([]);
  var numCard = 4;
  var buttonName = "More";

  const [show, setShow] = useState(true);
  function toggleCard() {
    setShow(!show);
  }
  const apiGet = () => {
    const url = "https://api.github.com/users/zhuochenp/repos";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setResult(data);
      });
  };
  useEffect(() => {
    apiGet();
  }, []);

  function searchHandler(searchterm) {
    setSearchterm(searchterm);
    const newRepos = repos.filter((repo) => {
      if (searchterm == "") return repo;
      else if (
        repo.language != null &&
        repo.language.toLowerCase().includes(searchterm.toLowerCase())
      )
        return repo;
    });
    setResult(newRepos);
  }

  return (
    <Container style={{ paddingTop: "30px" }}>
      <div className="row justify-content-center">
        <div className="col-sm-9">
          <div className="w-responsive">
            <Row>
              <Col>
                <h3 style={{ color: "#B8E0FE" }}>Project</h3>
              </Col>
              <Col>
                <span className="searchBar">
                  <SearchBar term={searchterm} searchKeyword={searchHandler} />
                </span>
              </Col>
            </Row>
          </div>
        </div>
        <div className="row col-sm-9 w-responsive">
          {result.length == 0 ? <LanguageNotFound /> : console.log()}
          {result.map((repo, index) => {
            if (show) {
              numCard = 4;
              buttonName = "More";
            } else if (!show) {
              numCard = result.length;
              buttonName = "Hidde";
            }

            if (index < numCard) {
              return (
                <GitHubReportCard
                  key={index}
                  name={repo.name}
                  starNum={repo.stargazers_count}
                  forkNum={repo.forks_count}
                  description={repo.description}
                  url={repo.html_url}
                  language={repo.language}
                />
              );
            }
          })}
        </div>

        {result.length <= 4 ? (
          console.log()
        ) : (
          <ShowButton buttonName={buttonName} toggleCard={toggleCard} />
        )}
      </div>
    </Container>
  );
}
export default ProjectCard;
