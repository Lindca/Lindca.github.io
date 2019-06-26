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

export default class NavBarComp extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar expand="md">
          <NavbarBrand href="/Home">Lindsay Campbell</NavbarBrand>
          <NavbarToggler onClick={this.toggle}><ion-icon name="menu"></ion-icon></NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/Projects">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/ContactMe">Contact Me</NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><a target="_blank" to="https://github.com/Lindca"><ion-icon name="logo-github"></ion-icon></a></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><a target="_blank" href="https://www.linkedin.com/in/lindsay-campbell-06517417b/"><ion-icon name="logo-linkedin"></ion-icon></a></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}