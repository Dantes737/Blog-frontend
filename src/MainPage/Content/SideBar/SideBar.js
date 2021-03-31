import React from 'react';
import FirstBarConteiner from './FirstBar/FirstBarConteiner';
import SecondBContainer from './SecondBar/SecondBContainer';

import './SideBar.css';

function SideBar() {
  return (
    <div className="sidebar">
  <FirstBarConteiner/>
   <SecondBContainer />

     
    </div>
  );
}

export default SideBar;
