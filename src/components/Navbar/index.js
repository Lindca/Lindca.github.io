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
import './navbarindex.css';

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
          <NavbarBrand href="/">LC</NavbarBrand>
          <NavbarToggler onClick={this.toggle}><ion-icon name="menu"></ion-icon></NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
            <NavItem>
                <NavLink href="#">About Me</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Resume</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Contact Me</NavLink>
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