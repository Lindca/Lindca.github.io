import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { Col, Row, Container } from "../Grid";
import './footerindex.css';

export default class FooterComp extends React.Component {
    render() {
        return (
            <div className="footer">
                <Navbar>
                    <div className="displayed">
                        
                            <Row>
                                <Col size="sm-4">
                                    <div className="inline"><ion-icon name="mail"></ion-icon></div>
                                    <div className="inline"><h5>EMAIL</h5></div>
                                    <div className="inline"><p><a className="email" href="mailto:lindscamp5@gmail.com">lindscamp5@gmail.com</a></p></div>
                                </Col>
                                <Col size="sm-4">
                                    <p>© Copyright Lindsay Campbell 2019</p>
                                </Col>
                                <Col size="sm-4">
                                    <div className="inline"><ion-icon name="call"></ion-icon></div>
                                    <div className="inline"><h5>PHONE</h5></div>
                                    <div className="inline"><p>(916)261-9092</p></div>
                                </Col>
                            </Row>
                        
                    </div>
                </Navbar>
            </div>
        );
    }
}