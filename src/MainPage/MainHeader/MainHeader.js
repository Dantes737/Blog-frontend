import React from 'react'
import AppHeader from './AppHeader/AppHeader';
import UPanel from './UsersPanel/UPanel';
import './MainHeader.css';

function AppHead() {
  return (
    <div className="headerDiv">
<AppHeader/>
<UPanel/>
    </div>
  );
}

export default AppHead;
