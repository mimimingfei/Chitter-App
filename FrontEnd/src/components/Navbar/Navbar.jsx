//navbar.jsx  
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import jwt from 'jsonwebtoken';
import "./Navbar.css";

const Navbar = ({loggedIn, onLogout}) => {
  const token = localStorage.getItem('token');
  const user = jwt.decode(token);
  const navigate = useNavigate();


  const handleLogout = () => {
    onLogout();
    navigate("/");
  };


  return (
    <nav>
      <h1>Chitter</h1>
      <ul>
        {loggedIn && (
          <>
            <p>Welcome, {user.firstName}!</p>
            <li>
              <button onClick={handleLogout}>Log Out</button>
            </li>
          </>
        )}
        {!loggedIn && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </>
        )}
        <li>
          <Link to="/peep">Peeps</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
