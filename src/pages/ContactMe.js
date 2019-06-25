import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Col, Row, Container } from "../components/Grid";
// import { Link } from 'react-router-dom';

class ContactMe extends Component {
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
           
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default ContactMe;
