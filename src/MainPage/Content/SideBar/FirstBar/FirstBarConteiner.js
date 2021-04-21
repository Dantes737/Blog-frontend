import React from 'react'
import FirstBar from './FirstBar.js';
import { connect } from 'react-redux';
import { login} from '../../../../redux/auth-reducer';

class FirstBarConteiner extends React.Component {
  componentDidMount() {

///===>!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// this.props.login();


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

export default connect(mapStateToProps,{login})(FirstBarConteiner);
