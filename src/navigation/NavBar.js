import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import Nav from 'react-bootstrap/lib/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';


const NavBar = () => {

  return (

    <Navbar inverse collapseOnSelect fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
        <LinkContainer to="/">
          <a>Kenny Do</a>
        </LinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>

          <LinkContainer to="/projects">
            <NavItem eventKey={1}>
              Projects
            </NavItem>
          </LinkContainer>
          <LinkContainer to="/about">
            <NavItem eventKey={2}>
              About Me
            </NavItem>
          </LinkContainer>
          <LinkContainer to="/contact">
            <NavItem eventKey={3}>
              Contact
            </NavItem>
          </LinkContainer>


        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
};



export default NavBar;