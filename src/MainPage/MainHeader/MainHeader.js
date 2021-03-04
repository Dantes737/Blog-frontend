import './MainHeader.css';
import React from 'react'
import AppHeader from './Header/AppHeader';
import Uindex from './UsersPanel/Uindex';



function App() {
  return (
    <div className="headerDiv">
<AppHeader/>
<Uindex/>
    </div>
  );
}

export default App;
