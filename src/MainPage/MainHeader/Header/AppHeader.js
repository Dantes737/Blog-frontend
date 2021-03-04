import './AppHeader.css';
import React from 'react'


function App() {
  return (
    <div className="AppHeader">
     <span className="logo">Just Blog</span>
 <input className="searchInp" placeholder="Search..." ></input>
       
     <button className="Lbtn" >LogOut</button>
    </div>
  );
}

export default App;
