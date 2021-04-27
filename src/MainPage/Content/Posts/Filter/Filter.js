import React from 'react';
import { NavLink } from 'react-router-dom';
import './Filter.css';


function Filter(props) {

  return (
    <div className="filt">
      <button className="addBtn">Newest</button>
      <button className="addBtn">Older</button>
      <button className="addBtn">All</button>
      <NavLink to="/add-post">
      <button className="addBtn">Add post</button>
      </NavLink>
    </div>
  );
};


export default Filter;
