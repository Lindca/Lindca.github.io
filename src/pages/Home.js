import React, { Component } from 'react';
import {
  Jumbotron, Button, Card, CardImg, CardText, CardTitle, CardBody,
} from 'reactstrap';
import { Col, Row } from "../components/Grid";
// import { Link } from 'react-router-dom';

class Home extends React.Component {
  state = {
    date: ""
  };


  render() {
    return (
      <>
        <div className="containerImage parallax">
          <div className="container containerText">
            <div className="image-content">
              <div className="image-text">
                <h1>LINDSAY CAMPBELL</h1>
                <h3>FULL STACK DEVELOPER</h3>
              </div>
            </div>
          </div>
        </div>
        <Jumbotron fluid id="AboutMe">
          <div className="container">
            <Row>
              <Col size="sm-12">
                <h2>About Me</h2>
              </Col>
            </Row>
            <Row>
              <Col size="sm-12">
                <h5>My Skills</h5>
              </Col>
            </Row>
            <Row>
              <Col size="lg-6 md-12 sm-12">
                <Row>
                  <Col size="lg-2 md-4 sm-3">
                    <div className="skillIcon">
                      <img alt="" src="./images/react.png" />
                      <h5>React.js</h5>
                    </div>
                    <div className="skillIcon">
                      <img alt="" src="./images/HTML5.png" />
                      <h5>HTML5</h5>
                    </div>
                  </Col>
                  <Col size="lg-2 md-4 sm-3">
                    <div className="skillIcon">
                      <img alt="" src="./images/python.png" />
                      <h5>Python</h5>
                    </div>
                    <div className="skillIcon">
                      <img alt="" src="./images/nodejs.jpg" />
                      <h5>Node.js</h5>
                    </div>
                  </Col>
                  <Col size="lg-2 md-4 sm-3">
                    <div className="skillIcon">
                      <img alt="" src="./images/CSS3.png" />
                      <h5>CSS3</h5>
                    </div>
                    <div className="skillIcon">
                      <img alt="" src="./images/MySQL.png" />
                      <h5>MySQL</h5>
                    </div>
                  </Col>
                  <Col size="lg-2 md-4 sm-3">
                    <div className="skillIcon">
                      <img alt="" src="./images/sequelize.png" />
                      <h5>Sequelize</h5>
                    </div>
                    <div className="skillIcon">
                      <img alt="" src="./images/jquery.jpeg" />
                      <h5>jQuery</h5>
                    </div>
                  </Col>
                  <Col size="lg-2 md-4 sm-3">
                    <div className="skillIcon">
                      <img alt="" src="./images/mongoDB.jpg" />
                      <h5>MongoDB</h5>
                    </div>
                    <div className="skillIcon">
                      <img alt="" src="./images/js.png" />
                      <h5>Javascript</h5>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col size="lg-6 md-12 sm-12">
                <Row>
                  <Col size="sm-12 md-12 lg-12">
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
              </Col>
            </Row>
          </div>
        </Jumbotron>
        {/* <Row>
              <Col size="sm-6">
                <p>One of my largest achievements is finding my passion for software development. I have always loved
                      solving puzzles and using critical thinking skills. The day I decided to give coding a try I dabbled
                      with python and I realized at that moment that I knew what I wanted to do for the rest of my life. I
                    want to make my ideas come to life inside web applications.</p>
              </Col>
            </Row> */}
        <div className="bg-black" id="Projects">
          <Jumbotron fluid>
            <div className="container">
              <Row>
                <Col size="sm-12">
                  <h2>Projects</h2>
                </Col>
              </Row>
              <Row>
                <Col size="md-4 sm-12">
                  <Card>
                    <div className="imgHover">
                      <img top width="100%" className="img-fluid" src="#" alt="Card image cap" />
                      <div className="overlay ctr">
                        <Row>
                          <Col size="sm-12">
                            <div className="">
                              <h6>Clicky Dino Game</h6>
                              <p>A game built with react.js where you can't click the same image twice.</p>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col size="sm-6">
                            <div className="link-inline"><a target="_blank" href="https://github.com/Lindca/ClickyGame"><ion-icon name="logo-github"></ion-icon></a></div>
                          </Col>
                          <Col size="sm-6">
                            <div className="link-inline"><a target="_blank" href="https://salty-lake-48080.herokuapp.com/"><ion-icon name="desktop"></ion-icon></a></div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col size="md-4 sm-12">
                  <Card>
                    <div className="imgHover">
                      <img top width="100%" className="img-fluid" src="./images/screenshots/bamazon.png" alt="Card image cap" />
                      <div className="overlay ctr">
                        <Row>
                          <Col size="sm-12">
                            <div className="">
                              <h6>Bamazon</h6>
                              <p>A command line app built with Node.js for inventory storage and customer purchases.</p>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col size="sm-6">
                            <div className="link-inline"><a target="_blank" href="https://github.com/Lindca/bamazon"><ion-icon name="logo-github"></ion-icon></a></div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col size="md-4 sm-12">
                  <Card>
                    <div className="imgHover">
                      <img top width="100%" className="img-fluid" src="./images/screenshots/eatdaburger.jpg" alt="Card image cap" />
                      <div className="overlay ctr">
                        <Row>
                          <Col size="sm-12">
                            <div className="">
                              <h6>Eat the Burger</h6>
                              <p>A burger eating simulation built with handlbars and Javascript.</p>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col size="sm-6">
                            <div className="link-inline"><a target="_blank" href="https://github.com/Lindca/eatBurger"><ion-icon name="logo-github"></ion-icon></a></div>
                          </Col>
                          <Col size="sm-6">
                            <div className="link-inline"><a target="_blank" href="#"><ion-icon name="desktop"></ion-icon></a></div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col size="md-4 sm-12">
                  <Card>
                    <div className="imgHover">
                      <img top width="100%" className="img-fluid" src="#" alt="Card image cap" />
                      <div className="overlay ctr">
                        <Row>
                          <Col size="sm-12">
                            <div className="">
                              <h6>My Grade Book</h6>
                              <p>An online Grade Book to store and update data for students such as grades and assignments.</p>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col size="sm-6">
                            <div className="link-inline"><a target="_blank" href="https://github.com/Lindca/project-ld3"><ion-icon name="logo-github"></ion-icon></a></div>
                          </Col>
                          <Col size="sm-6">
                            <div className="link-inline"><a target="_blank" href="https://pacific-taiga-52007.herokuapp.com/"><ion-icon name="desktop"></ion-icon></a></div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col size="md-4 sm-12">
                  <Card>
                    <div className="imgHover">
                      <img top width="100%" className="img-fluid" src="#" alt="Card image cap" />
                      <div className="overlay ctr">
                        <Row>
                          <Col size="sm-12">
                            <div className="">
                              <h6>Application</h6>
                              <p>An application for blah blah blah</p>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col size="sm-6">
                            <div className="link-inline"><a target="_blank" href="#"><ion-icon name="logo-github"></ion-icon></a></div>
                          </Col>
                          <Col size="sm-6">
                            <div className="link-inline"><a target="_blank" href="#"><ion-icon name="desktop"></ion-icon></a></div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col size="md-4 sm-12">
                  <Card>
                    <div className="imgHover">
                      <img top width="100%" className="img-fluid" src="#" alt="Card image cap" />
                      <div className="overlay ctr">
                        <Row>
                          <Col size="sm-12">
                            <div className="">
                              <h6>Application</h6>
                              <p>An application for blah blah blah</p>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col size="sm-6">
                            <div className="link-inline"><a target="_blank" href="#"><ion-icon name="logo-github"></ion-icon></a></div>
                          </Col>
                          <Col size="sm-6">
                            <div className="link-inline"><a target="_blank" href="#"><ion-icon name="desktop"></ion-icon></a></div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
          </Jumbotron>
        </div>
        <Jumbotron fluid>
          <div className="container" id="Resume">
            {/* <Row>
              <Col size="sm-12">
                <div className="resumeImage">
                  <iframe src="https://docs.google.com/document/d/e/2PACX-1vRa8NfNpHWot_wwPT-SPxcIBeig87342lzDzAChHAviPSPdLbOnRi1cy_RUOpq16ZiodluGuArz6BNv/pub?embedded=true"></iframe>
                </div>
              </Col>
            </Row> */}
            <div className="links">
              <Row>
                <Col size="sm-12">
                  <img className="displayed" alt="" src="./images/resume.png" />
                  <Button className="displayed"><a target="_blank" href="https://docs.google.com/document/d/1yn1RRyRrK9FV0LVe3mS1tK8jOs4URB-kb7LtA4KA1Xc/edit?usp=sharing">View Resume</a></Button>
                </Col>
              </Row>
            </div>
          </div>
        </Jumbotron>
        <div className="bg-black" id="ContactMe">
          <div className="container">
            <Jumbotron fluid>
              <div className="displayed">
                <Row>
                  <Col size="sm-3">
                    <div className="inline"><ion-icon name="mail"></ion-icon></div>
                    <div className="inline"><h5>EMAIL</h5></div>
                    <div className="inline"><p><a className="email" href="mailto:lindscamp5@gmail.com">lindscamp5@gmail.com</a></p></div>
                  </Col>
                  <Col size="sm-3">
                    <div className="link-inline"><a target="_blank" href="https://www.linkedin.com/in/lindsay-campbell-06517417b/"><ion-icon name="logo-linkedin"></ion-icon></a></div>
                  </Col>
                  <Col size="sm-3">
                    <div className="link-inline"><a target="_blank" to="https://github.com/Lindca"><ion-icon name="logo-github"></ion-icon></a></div>
                  </Col>
                  <Col size="sm-3">
                    <div className="inline"><ion-icon name="call"></ion-icon></div>
                    <div className="inline"><h5>PHONE</h5></div>
                    <div className="inline"><p>(916)261-9092</p></div>
                  </Col>
                </Row>
              </div>
            </Jumbotron>
          </div>
        </div>
      </>
    );
  }
}
export default Home;
