import { connect } from 'react-redux';
import UsersPage from './UsersPage.js';
    

const mapStateToProps = (state) => {
  return {
    users: state.myUsers
  }
};

const UPanelContainer = connect(mapStateToProps,null)(UsersPage);


export default UPanelContainer;
