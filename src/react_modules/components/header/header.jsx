import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.css';

const Header = () => (
  <header className="header">
    <nav>
      <ul className="nav">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/users">Users</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;
