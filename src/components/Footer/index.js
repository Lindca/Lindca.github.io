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
import { Link } from 'react-router-dom';

export default class FooterComp extends React.Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink>
                                <div className="mx-auto">
                                    <p>© Copyright Lindsay Campbell 2019</p>
                                </div>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}