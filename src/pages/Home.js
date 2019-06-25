import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Col, Row, Container } from "../components/Grid";
// import { Link } from 'react-router-dom';

class Home extends Component {
  state = {
    date: ""
  };

  componentDidMount() {

  }
  render() {
    return (
      <div className="container">
        <Jumbotron fluid>
          <Container fluid>
            <Row>
              <Col size="sm-12">
                <h2>About Me:</h2>
              </Col>
            </Row>
            <Row>
              <Col size="sm-6">
                <Row>
                  <Col size="sm-12">
                    <h5>My Skills</h5>
                  </Col>
                </Row>
                <Row>
                  <Col size="sm-2">
                    <ul>
                      <li>
                        <img alt="" src="./images/react.png" />
                        <h5>React.js</h5>
                      </li>
                      <li>
                        <img alt="" src="./images/js.png" />
                        <h5>Javascript</h5>
                      </li>
                    </ul>
                  </Col>
                  <Col size="sm-2">
                    <ul>
                      <li>
                        <img alt="" src="./images/python.png" />
                        <h5>Python</h5>
                      </li>
                      <li>
                        <img alt="" src="./images/nodejs.jpg" />
                        <h5>Node.js</h5>
                      </li>
                    </ul>
                  </Col>
                  <Col size="sm-2">
                    <ul>
                      <li>
                        <img alt="" src="./images/CSS3.png" />
                        <h5>CSS3</h5>
                      </li>
                      <li>
                        <img alt="" src="./images/MySQL.png" />
                        <h5>MySQL</h5>
                      </li>
                    </ul>
                  </Col>
                  <Col size="sm-2">
                    <ul>
                      <li>
                        <img alt="" src="./images/sequelize.png" />
                        <h5>Sequelize</h5>
                      </li>
                      <li>
                        <img alt="" src="./images/jquery.jpeg" />
                        <h5>Jquery</h5>
                      </li>
                    </ul>
                  </Col>
                  <Col size="sm-2">
                    <ul>
                      <li>
                        <img alt="" src="./images/mongoDB.jpg" />
                        <h5>MongoDB</h5>
                      </li>
                      <li>
                        <img alt="" src="./images/HTML5.png" />
                        <h5>HTML5</h5>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
              <Col size="sm-6">
                <h5>Who am I?</h5>
                <p>Web Developer with a background in Health Insurance and a Full-Stack Certification from the
                    University
                    of California - Davis Coding Bootcamp. Passionate about the endless possibilities programming gives
                    and the creativity and logic required for it. Skilled in Jquery, Node.js, and python. Deeply
                    motivated by the thrill of grasping and
                    understanding new concepts and applying them. Known for my dedication to
                    unique projects and continually demonstrating my ability to improve and learn from every line of
                    code.
                    Looking to bring a positive attitude and an unrelenting drive to every endeavor.</p>
              </Col>
            </Row>
            {/* <Row>
              <Col size="sm-6">
                <p>One of my largest achievements is finding my passion for software development. I have always loved
                      solving puzzles and using critical thinking skills. The day I decided to give coding a try I dabbled
                      with python and I realized at that moment that I knew what I wanted to do for the rest of my life. I
                    want to make my ideas come to life inside web applications.</p>
              </Col>
            </Row> */}
            <Row id="links">
              <Col size="sm-4">
                <img alt="" src="./images/resume.png" />
                <Button><a target="_blank" href="https://docs.google.com/document/d/1yn1RRyRrK9FV0LVe3mS1tK8jOs4URB-kb7LtA4KA1Xc/edit?usp=sharing">Resume</a></Button>
              </Col>
              <Col size="sm-4">
                <img alt="" src="./images/linkedin.png" />
                <Button><a target="_blank" href="https://www.linkedin.com/in/lindsay-campbell-06517417b/">LinkedIn</a></Button>
              </Col>
              <Col size="sm-4">
                <img alt="" src="./images/github.jpg" />
                <Button><a target="_blank" href="https://github.com/Lindca">Github</a></Button>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
