import React, { Fragment } from "react";
import { Modal, Navbar, Nav } from "react-bootstrap";
import Login from "../../containers/login/login";
import { Button, HelloUser, Link } from "./style-header.js";

const Header = ({ handleShow, onLogOut, user, handleClose, show }) => (
  <Fragment>
    <Modal show={show} onHide={handleClose}>
      <Login handleClose={handleClose} />
    </Modal>

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">DEPOT</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Catalog</Nav.Link>
          <Nav.Link href="/index/users">Users</Nav.Link>
        </Nav>
        <Nav>
          <HelloUser href={user ? "/index/profile" : "/index/register"}>
            {user.firstName || "Friend"} ({user.status || "guest"})
          </HelloUser>
          {!user && <Button onClick={handleShow}>Sign In</Button>}
          {!user && <Link href="/index/register">Sign Up</Link>}
          {user && <Button onClick={onLogOut}>Sign Out</Button>}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Fragment>
);

export default Header;
