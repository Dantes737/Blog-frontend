import React from 'react';
import FirstBar from './FirstBar.js';
import { connect } from 'react-redux';
import { LOGout } from '../../../../redux/auth-reducer.js';

class FirstBarConteiner extends React.Component {
 
  render() {
    return <FirstBar {...this.props} />
  }
}

const mapStateToProps=(state)=>({
  isAuth:state.auth.isAuth,
  nick:state.auth.nick,
  id:state.auth.userId
})

export default connect(mapStateToProps,{LOGout})(FirstBarConteiner);
