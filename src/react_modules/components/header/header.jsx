import React from "react";
import { NavLink } from "react-router-dom";

import "./header.css";

const Header = ({ onVisibleLoginForm, onLogOut, user }) => (
  <header className="header">
    <div className="menu">
      <NavLink className="menu-link" exact to="/">
        Home
      </NavLink>
      <NavLink className="menu-link" to="/users">
        Users
      </NavLink>
    </div>

    <div className="userpanel">
      {user && (
        <p className="userpanel-hello">
          Hello, <a href={"/profile"}>{user.firstName || "Friend"}</a>{" "}
        </p>
      )}
      {!user && (
        <button className="userpanel-btn" onClick={onVisibleLoginForm}>
          Sign In
        </button>
      )}
      {!user && (
        <NavLink className="userpanel-btn" to="/register">
          Sign Up
        </NavLink>
      )}
      {user && (
        <button className="userpanel-btn" onClick={onLogOut}>
          Sign Out
        </button>
      )}
    </div>
  </header>
);

export default Header;
