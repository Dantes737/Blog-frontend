import React from 'react';
// import User from '../../../../UserComponent/User';
import './SecondBar.css';

function SecondBar(props) {

  // let myFriends = props.usersProfiles.map(f => <User key={f._id} nick={f.nick} src={f.avatarIMG} />)
  let myFriends = props.friends.map(f => <li key={f}>{f}</li>)

  return (
    <div className="secondbar">
      <ul style={{fontSize:"20px",fontFamily:"sans-serif"}}><strong>Friends:</strong>{myFriends}</ul>
    </div>
  );
}

export default SecondBar;
