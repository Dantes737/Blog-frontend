import React, {  useState } from 'react';
import Login from './Login/Login.js';
import SignIn from './SignIn/SignIn';

const AuthComponent = () => {
  let [userIsNew, setUserIsNew] = useState(true);

 const setUserStatusOld=() => {
     setUserIsNew(false);  
  };
  const setUserStatusNew=() => {
    setUserIsNew(true);  
 };

  if (userIsNew) {
    return <div  >
    <SignIn changeStatus={()=>{setUserStatusOld()}}/>
  </div>
  }
  return <div >
    <Login changeStatus={()=>{setUserStatusNew()}}/>
  </div>
};


export default AuthComponent;
