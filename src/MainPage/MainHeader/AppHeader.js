import './AppHeader.css';
import React from 'react';
import { NavLink } from 'react-router-dom';



function App() {
  return (
    <div className="AppHeader">
      <span className="logo">Just Blog</span>
      <input className="searchInp" placeholder="Search..." ></input>

      <NavLink to="/users-page">Go to Users </NavLink>
      <NavLink to="/login"> Login</NavLink>
      <button className="Lbtn" >LogOut</button>
    </div>
  );
}

export default App;
