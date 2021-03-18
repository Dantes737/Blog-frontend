import { connect } from 'react-redux';
import UPanel from './UPanel.js';
    

const mapStateToProps = (state) => {
  return {
    users: state.myUsers.users
  }
};

const UPanelContainer = connect(mapStateToProps,null)(UPanel);


export default UPanelContainer;
