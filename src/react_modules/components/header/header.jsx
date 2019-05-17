import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.css';
import {connect} from 'react-redux';
import {logOut} from '../../actions/usersActions';

const Header = () => (
  <header className="header">
    <nav className="nav-menu">
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/users">Users</NavLink>
    </nav>

    <nav className="nav-user-panel">
      <NavLink to="/login">Sign In</NavLink>
      <NavLink to="/register">Sign Up</NavLink>
      <NavLink onClick={logOut}>Sign Out</NavLink>
    </nav>
  </header>
);
const mapStateToProps = state => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = {
  logOut,
};

export default connect (mapStateToProps, mapDispatchToProps) (Header);
