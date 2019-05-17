import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.css';
import {connect} from 'react-redux';
import {logOut} from '../../actions/usersActions';

const Header = () => (
  <header className="header">
    <nav>
      <ul className="nav">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/users">Users</NavLink></li>

      </ul>
    </nav>
    <div>
      <ul>
        <li><NavLink to="/login">Sign In</NavLink></li>
        <li><NavLink to="/register">Sign Up</NavLink></li>
        <li><NavLink onClick={this.props.logOut}>Sign Out</NavLink></li>
      </ul>
    </div>
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
