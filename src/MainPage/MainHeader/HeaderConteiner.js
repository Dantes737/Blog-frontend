import React from 'react'
import AppHeader from './AppHeader.js';
import { connect } from 'react-redux';

class HeaderConteiner extends React.Component {
 
  render() {
    return <AppHeader {...this.props} />
  }
}

const mapStateToProps=(state)=>({
})

export default connect(mapStateToProps,null)(HeaderConteiner);
