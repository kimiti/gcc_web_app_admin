import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { logOut } from "../../actions/auth";

import { connect } from "react-redux";

const Header = ({ logOut, auth }) => {
  const authLinks = (
    <>

      <LinkContainer to="/view">
        <Nav.Link>View Content</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/upload">
        <Nav.Link>Upload Content</Nav.Link>
      </LinkContainer>
      <div onClick={logOut}>
        <Nav.Link>Logout</Nav.Link>
      </div>
    </>
  );
  const guestLinks = (
    <>

      <LinkContainer to="/register">
        <Nav.Link>Register</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/login">
        <Nav.Link>Login</Nav.Link>
      </LinkContainer>
    </>
  );


  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href="#home">GRACE-COMMUNITY-CENTER</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">

              {auth.uid ? authLinks : guestLinks}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, { logOut })(Header);
