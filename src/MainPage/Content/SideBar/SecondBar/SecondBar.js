import React from 'react';
import User from '../../../../UserComponent/User';
import './SecondBar.css';

function SecondBar(props) {

  let myFriends = props.usersProfiles.map(f => <User key={f._id} nick={f.nick} src={f.avatarIMG} />)

  return (
    <div className="secondbar">
      {myFriends}

    </div>
  );
}

export default SecondBar;
