import './AppHeader.css';
import React from 'react';
import { NavLink } from 'react-router-dom';



function App(props) {
  return (
    <div className="AppHeader">
      <span className="logo">Just Blog</span>
      <button className="Lbtn" ><NavLink to="/">BLOG</NavLink></button>
      <button className="Lbtn" ><NavLink to="/users-page">Go to Users </NavLink></button>
      <button className="Lbtn" ><NavLink to="/profile">Go to Profile </NavLink></button>
      <button className="Lbtn" onClick={props.LOGout} >LogOut</button>
    </div>
  );
}

export default App;
