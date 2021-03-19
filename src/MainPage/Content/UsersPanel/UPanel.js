import './UPanel.css';
import React from 'react';
import User from "../../../UserComponent/User";


function App(props) {

  let usersComponents = props.users.map((user) =>
    <User key={user.id} nick={user.nick} src={user.avatarIMG} />)
    
  return (
    <div className="users">
      {usersComponents}
    </div>
  );
}

export default App;
