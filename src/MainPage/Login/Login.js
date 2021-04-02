import React from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css';

function Login(props) {
  return (
    <div className="loginPage">
      <NavLink to="/">Go home</NavLink>
Login page
    </div>
  );
}

export default Login;
