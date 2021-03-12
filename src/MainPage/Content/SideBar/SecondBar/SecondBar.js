import React from 'react';
import User from '../../../../UserComponent/User';
import './SecondBar.css';

function SecondBar(props) {

  let myFriends=props.friends.map(f=><User nick={f.nick} src={f.src}/>)

  return (
    <div className="secondbar">
 {myFriends}
     
    </div>
  );
}

export default SecondBar;
