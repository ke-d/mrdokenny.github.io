import * as React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = () => (
  <Navbar bg="dark" variant="dark">
    <LinkContainer to="/">
      <Navbar.Brand>Kenny Do | Software Engineer</Navbar.Brand>
    </LinkContainer>
    <Nav className="mr-auto">
      {/* <LinkContainer to="/">
        <Nav.Link>Home</Nav.Link>
      </LinkContainer> */}
      <LinkContainer to="/projects">
        <Nav.Link>Projects</Nav.Link>
      </LinkContainer>
    </Nav>
  </Navbar>
);

export default NavBar;
