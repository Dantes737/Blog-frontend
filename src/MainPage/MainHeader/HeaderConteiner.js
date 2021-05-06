import React from 'react'
import AppHeader from './AppHeader.js';
import { connect } from 'react-redux';
import {LOGout} from '../../redux/auth-reducer.js'

class HeaderConteiner extends React.Component {
 
  render() {
    return <AppHeader {...this.props} />
  }
}

const mapStateToProps=(state)=>({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps,{LOGout})(HeaderConteiner);
