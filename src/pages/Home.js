import React, { Component } from 'react';
import {
  Jumbotron, Button, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import { Col, Row, Container } from "../components/Grid";
// import { Link } from 'react-router-dom';

class Home extends React.Component {
  state = {
    date: ""
  };

  componentDidMount() {

  }
  render() {
    return (
      <>
        <img className="fleximage" alt="" src="./images/geomet.jpg"></img>
        <div className="container">
          <Jumbotron fluid>
            <Container fluid>
              <Row>
                <Col size="sm-12">
                  <h2>About Me</h2>
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
                          <h5>jQuery</h5>
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
                  <p>Full Stack Developer with a background in Health Insurance and a Full-Stack Certification from the
                      University
                      of California - Davis Coding Bootcamp. Passionate about the endless possibilities programming gives
                    and the creativity and logic required for it. Skilled in Jquery, Node.js, and python. </p>

                  <p>Deeply motivated by the thrill of grasping and
                  understanding new concepts and applying them. Known for my dedication to
                  unique projects and continually demonstrating my ability to improve and learn from every line of
                  code.
                    Looking to bring a positive attitude and an unrelenting drive to every endeavor.</p>
                </Col>
              </Row>
            </Container>
          </Jumbotron>
          {/* <Row>
              <Col size="sm-6">
                <p>One of my largest achievements is finding my passion for software development. I have always loved
                      solving puzzles and using critical thinking skills. The day I decided to give coding a try I dabbled
                      with python and I realized at that moment that I knew what I wanted to do for the rest of my life. I
                    want to make my ideas come to life inside web applications.</p>
              </Col>
            </Row> */}
          <Jumbotron fluid>
            <Container fluid>
              <Row>
                <Col size="sm-12">
                  <h2>Projects</h2>
                </Col>
              </Row>
              <Row>
                <Col size="sm-4">
                  <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                      <Button>Button</Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col size="sm-4">
                  <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                      <Button>Button</Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col size="sm-4">
                  <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                      <Button>Button</Button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col size="sm-4">
                  <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                      <Button>Button</Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col size="sm-4">
                  <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                      <Button>Button</Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col size="sm-4">
                  <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                      <Button>Button</Button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Jumbotron>
          <Jumbotron fluid>
            <Container fluid>
              <div className="links">
                <Row>
                  <Col size="sm-12">
                    <h2>Check Me Out!</h2>
                  </Col>
                </Row>
                <Row>
                  <Col size="sm-4">
                    <img className="displayed" alt="" src="./images/resume.png" />
                    <Button className="displayed"><a target="_blank" href="https://docs.google.com/document/d/1yn1RRyRrK9FV0LVe3mS1tK8jOs4URB-kb7LtA4KA1Xc/edit?usp=sharing">Resume</a></Button>
                  </Col>
                  <Col size="sm-4">
                    <img className="displayed" alt="" src="./images/github.jpg" />
                    <Button className="displayed"><a target="_blank" href="https://github.com/Lindca">Github</a></Button>
                  </Col>
                </Row>
              </div>
            </Container>
          </Jumbotron>
          <Jumbotron fluid>
            <Container fluid>
            <Row>
                  <Col size="sm-12">
                    <h2>Contact Me</h2>
                  </Col>
                </Row>
                <Row>
                  <Col size="sm-4">
                    <img className="displayed" alt="" src="./images/linkedin.png" />
                    <Button className="displayed"><a target="_blank" href="https://www.linkedin.com/in/lindsay-campbell-06517417b/">LinkedIn</a></Button>
                  </Col>
                  <Col size="sm-4">
                      <h4>Email Me: </h4>                   
                   </Col>
                </Row>
            </Container>
          </Jumbotron>
        </div >
      </>
    );
  }
}
export default Home;
