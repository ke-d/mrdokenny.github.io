import * as React from 'react';
import {
  Nav,
  Navbar,
  NavItem,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = () => (

  <Navbar inverse collapseOnSelect fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <LinkContainer to="/">
          <a>Kenny Do | Developer</a>
        </LinkContainer>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to="/projects">
          <NavItem eventKey={1}>Projects</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
