import './UPanel.css';
import React from 'react';
// import { NavLink } from 'react-router-dom';
import User from "../../../UserComponent/User";


function App(props) {



  let usersComponents = props.users.map((user) =>
    <User nick={user.nick} src={user.src} />)
    
  return (
    <div className="users">
      {usersComponents}
    </div>
  );
}

export default App;
