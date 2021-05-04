import React from 'react';
import FirstBar from './FirstBar.js';
import { connect } from 'react-redux';

class FirstBarConteiner extends React.Component {
 
  render() {
    return <FirstBar {...this.props} />
  }
}

const mapStateToProps=(state)=>({
userProfile:state.myProfile.profile,
})

export default connect(mapStateToProps)(FirstBarConteiner);
