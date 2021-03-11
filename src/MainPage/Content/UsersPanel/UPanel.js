import './UPanel.css';
import React from 'react';
// import { NavLink } from 'react-router-dom';
import User from "../../../UserComponent/User";


function App() {
  return (
    <div className="users">
      
        <User nick="DantesUA"
          src="https://walkersarewelcome.org.uk/wp-content/uploads/computer-icons-google-account-icon-design-login-png-favpng-jFjxPac6saRuDE3LiyqsYTEZM.jpg" />
     
        <User nick="Neo"
          src="https://walkersarewelcome.org.uk/wp-content/uploads/computer-icons-google-account-icon-design-login-png-favpng-jFjxPac6saRuDE3LiyqsYTEZM.jpg" />
   
        <User nick="Pony"
          src="https://walkersarewelcome.org.uk/wp-content/uploads/computer-icons-google-account-icon-design-login-png-favpng-jFjxPac6saRuDE3LiyqsYTEZM.jpg" />
  

    </div>
  );
}

export default App;
