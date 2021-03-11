import './UPanel.css';
import React from 'react';
// import { NavLink } from 'react-router-dom';
import User from "../../../UserComponent/User";


function App() {

  let myUsers = [
    {
      nick: "dantesUA",
      src: "https://walkersarewelcome.org.uk/wp-content/uploads/computer-icons-google-account-icon-design-login-png-favpng-jFjxPac6saRuDE3LiyqsYTEZM.jpg"
    },
    {
      nick: "neo",
      src: "https://walkersarewelcome.org.uk/wp-content/uploads/computer-icons-google-account-icon-design-login-png-favpng-jFjxPac6saRuDE3LiyqsYTEZM.jpg"
    },
    {
      nick: "pony",
      src: "https://walkersarewelcome.org.uk/wp-content/uploads/computer-icons-google-account-icon-design-login-png-favpng-jFjxPac6saRuDE3LiyqsYTEZM.jpg"
    },
    {
      nick: "Kapibara",
      src: "https://walkersarewelcome.org.uk/wp-content/uploads/computer-icons-google-account-icon-design-login-png-favpng-jFjxPac6saRuDE3LiyqsYTEZM.jpg"
    },
    {
      nick: "Duck",
      src: "https://walkersarewelcome.org.uk/wp-content/uploads/computer-icons-google-account-icon-design-login-png-favpng-jFjxPac6saRuDE3LiyqsYTEZM.jpg"
    }
  ]

  let usersComponents = myUsers.map((user) =>
    <User nick={user.nick} src={user.src} />)
    
  return (
    <div className="users">
      {usersComponents}
    </div>
  );
}

export default App;
