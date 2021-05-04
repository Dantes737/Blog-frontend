import React from 'react';
import './FirstBar.css';


function FirstBar(props) {
  return (
    <div className="firstbarrrr">
      <div style={{fontSize:"19px",textAlign:'center',fontFamily:"sans-serif"}}> Welcome to my site !</div>
      <div>
          <img style={{borderRadius:'50%',margin:"1%", width:"25%"}} src={props.userProfile.avatarIMG} alt="User Img" />
          <span style={{float:"right",marginRight:"40%",marginTop:"9%",fontSize:"25px", textAlign:'center'}}>{props.userProfile.nick}</span>
      </div>
    </div>
  );
};


export default FirstBar;
