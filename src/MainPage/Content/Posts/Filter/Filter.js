import React from 'react';
import './Filter.css';


function Filter(props) {

  return (
    <div className="filt">
      {/* <button className="addBtn">Newest</button>
      <button className="addBtn">Older</button>
      <button className="addBtn">All</button> */}
      <div>  <input className="searchInp" placeholder="Search..." ></input></div>
    </div>
  );
};


export default Filter;
