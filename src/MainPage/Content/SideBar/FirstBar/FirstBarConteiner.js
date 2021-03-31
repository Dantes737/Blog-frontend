import React from 'react'
import FirstBar from './FirstBar.js';
import {usersAPI} from '../../../../api/api.js'
import { connect } from 'react-redux';
import { setAuthUserData} from '../../../../redux/auth-reducer';

class FirstBarConteiner extends React.Component {
  componentDidMount() {
    usersAPI.getLogin().then((data) => {
     if (data.result==="Authorized") {
       console.log(data);
      let {userId,email,nick}=data.user.authData
      this.props.setAuthUserData(data.user.authData.nick)
      this.props.setAuthUserData(userId,email,nick)
     }
      })


  };
  render() {
    return <FirstBar {...this.props} />
  }
}

const mapStateToProps=(state)=>({
  isAuth:state.auth.isAuth,
  nick:state.auth.nick,
  id:state.auth.userId,
})

export default connect(mapStateToProps,{setAuthUserData})(FirstBarConteiner);
