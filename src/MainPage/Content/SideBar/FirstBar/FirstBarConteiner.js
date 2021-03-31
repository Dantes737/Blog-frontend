import React from 'react'
import FirstBar from './FirstBar.js';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData} from '../../../../redux/auth-reducer';

class FirstBarConteiner extends React.Component {
  componentDidMount() {
    axios.post('http://localhost:5050/users/login',
        {
          email: 'test1.8@gmail.com',
          password: 'test1'
        })
      .then((res) => res.data)
      .then((data) => {
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
