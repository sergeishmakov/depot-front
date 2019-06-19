import React, { Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Modal
} from "reactstrap";
import Login from "../../containers/login/login";
import { Button, HelloUser, Link, Options, MiniPhoto } from "./style-header.js";

class Header extends React.Component {
  render() {
    const {
      user,
      handleClose,
      show,
      onLogOut,
      handleShow,
      toggle,
      isOpen
    } = this.props;
    return (
      <Fragment>
        <Modal isOpen={show} toggle={toggle}>
          <Login handleClose={handleClose} />
        </Modal>

        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">DEPOT</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Catalog</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <Options>
                    <HelloUser
                      href={
                        user ? `/depot/profile/${user.id}` : "/depot/register"
                      }
                    >
                      {user.firstName || "Friend"} ({user.status || "guest"})
                    </HelloUser>
                    {user.photo && (
                      <MiniPhoto
                        href={`/depot/profile/${user.id}`}
                        src={user.photo}
                      />
                    )}
                    {!user && <Button onClick={handleShow}>Sign In</Button>}
                    {!user && <Link href="/depot/register">Sign Up</Link>}
                    {user && <Button onClick={onLogOut}>Sign Out</Button>}
                  </Options>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </Fragment>
    );
  }
}
export default Header;
