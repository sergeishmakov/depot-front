import React from 'react';
import {NavLink} from 'react-router-dom';

import './header.css';

const Header = ({onVisibleLoginForm, onLogOut, user}) => (
  <header className="header">
    <nav className="nav-menu">
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/users">Users</NavLink>
    </nav>

    <nav className="nav-user-panel">
      {user &&
        <p className="nav-user-panel_hello">
          Hello, {user.firstName || 'Friend'}
        </p>}
      {!user && <button onClick={onVisibleLoginForm}>Sign In</button>}
      {!user && <NavLink to="/register">Sign Up</NavLink>}
      {user && <button onClick={onLogOut}>Sign Out</button>}
    </nav>
  </header>
);

export default Header;
