import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.css';

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
        <li><NavLink to="/logout">Sign Out</NavLink></li>
      </ul>
    </div>
  </header>
);
export default Header;
